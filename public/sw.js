// Kalabah Service Worker for PWA functionality
const CACHE_NAME = 'kalabah-v1.0.0'
const STATIC_CACHE = 'kalabah-static-v1.0.0'
const DYNAMIC_CACHE = 'kalabah-dynamic-v1.0.0'
const API_CACHE = 'kalabah-api-v1.0.0'

// Define what to cache
const STATIC_ASSETS = [
  '/',
  '/dashboard',
  '/marketplace',
  '/auth/login',
  '/auth/register',
  '/offline',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
]

// API endpoints to cache
const API_ENDPOINTS = [
  '/api/products',
  '/api/suppliers',
  '/api/orders',
  '/api/messages'
]

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker installing...')
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Caching static assets')
        return cache.addAll(STATIC_ASSETS)
      })
      .then(() => {
        console.log('Static assets cached successfully')
        return self.skipWaiting()
      })
      .catch((error) => {
        console.error('Failed to cache static assets:', error)
      })
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating...')
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && 
                cacheName !== DYNAMIC_CACHE && 
                cacheName !== API_CACHE) {
              console.log('Deleting old cache:', cacheName)
              return caches.delete(cacheName)
            }
          })
        )
      })
      .then(() => {
        console.log('Service Worker activated')
        return self.clients.claim()
      })
  )
})

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Skip non-GET requests
  if (request.method !== 'GET') return

  // Handle API requests
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(networkFirstStrategy(request, API_CACHE))
    return
  }

  // Handle navigation requests
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Clone and cache successful responses
          if (response.status === 200) {
            const responseClone = response.clone()
            caches.open(DYNAMIC_CACHE)
              .then((cache) => cache.put(request, responseClone))
          }
          return response
        })
        .catch(() => {
          // Return cached page or offline page
          return caches.match(request)
            .then((cachedResponse) => {
              return cachedResponse || caches.match('/offline')
            })
        })
    )
    return
  }

  // Handle static assets
  if (STATIC_ASSETS.includes(url.pathname)) {
    event.respondWith(cacheFirstStrategy(request, STATIC_CACHE))
    return
  }

  // Handle images and other assets
  if (request.destination === 'image' || 
      request.destination === 'style' || 
      request.destination === 'script') {
    event.respondWith(cacheFirstStrategy(request, DYNAMIC_CACHE))
    return
  }

  // Default: network first with cache fallback
  event.respondWith(networkFirstStrategy(request, DYNAMIC_CACHE))
})

// Cache-first strategy (for static assets)
async function cacheFirstStrategy(request, cacheName) {
  try {
    const cachedResponse = await caches.match(request)
    if (cachedResponse) {
      return cachedResponse
    }

    const networkResponse = await fetch(request)
    if (networkResponse.status === 200) {
      const cache = await caches.open(cacheName)
      cache.put(request, networkResponse.clone())
    }
    return networkResponse
  } catch (error) {
    console.error('Cache-first strategy failed:', error)
    return new Response('Offline content not available', { status: 503 })
  }
}

// Network-first strategy (for dynamic content)
async function networkFirstStrategy(request, cacheName) {
  try {
    const networkResponse = await fetch(request)
    
    if (networkResponse.status === 200) {
      const cache = await caches.open(cacheName)
      cache.put(request, networkResponse.clone())
    }
    return networkResponse
  } catch (error) {
    console.log('Network failed, trying cache:', error)
    const cachedResponse = await caches.match(request)
    
    if (cachedResponse) {
      return cachedResponse
    }
    
    // Return offline fallback for API requests
    if (request.url.includes('/api/')) {
      return new Response(
        JSON.stringify({ 
          error: 'Offline', 
          message: 'This feature requires an internet connection' 
        }),
        { 
          status: 503,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }
    
    return new Response('Content not available offline', { status: 503 })
  }
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('Background sync triggered:', event.tag)
  
  switch (event.tag) {
    case 'background-sync-orders':
      event.waitUntil(syncOrders())
      break
    case 'background-sync-messages':
      event.waitUntil(syncMessages())
      break
    case 'background-sync-products':
      event.waitUntil(syncProducts())
      break
    default:
      console.log('Unknown sync tag:', event.tag)
  }
})

// Sync functions
async function syncOrders() {
  try {
    console.log('Syncing orders...')
    const response = await fetch('/api/orders/sync', { method: 'POST' })
    if (response.ok) {
      console.log('Orders synced successfully')
      notifyClients('Orders synced')
    }
  } catch (error) {
    console.error('Failed to sync orders:', error)
  }
}

async function syncMessages() {
  try {
    console.log('Syncing messages...')
    const response = await fetch('/api/messages/sync', { method: 'POST' })
    if (response.ok) {
      console.log('Messages synced successfully')
      notifyClients('Messages synced')
    }
  } catch (error) {
    console.error('Failed to sync messages:', error)
  }
}

async function syncProducts() {
  try {
    console.log('Syncing products...')
    const response = await fetch('/api/products/sync', { method: 'POST' })
    if (response.ok) {
      console.log('Products synced successfully')
      notifyClients('Products synced')
    }
  } catch (error) {
    console.error('Failed to sync products:', error)
  }
}

// Push notifications
self.addEventListener('push', (event) => {
  console.log('Push notification received:', event)
  
  const options = {
    body: event.data ? event.data.text() : 'New notification from Kalabah',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge-72x72.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
    actions: [
      {
        action: 'explore',
        title: 'View Details',
        icon: '/icons/action-view.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: '/icons/action-close.png'
      }
    ]
  }

  event.waitUntil(
    self.registration.showNotification('Kalabah', options)
  )
})

// Notification click handler
self.addEventListener('notificationclick', (event) => {
  console.log('Notification click received:', event)
  
  event.notification.close()

  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/dashboard')
    )
  } else if (event.action === 'close') {
    // Just close the notification
    return
  } else {
    // Default action - open app
    event.waitUntil(
      clients.matchAll().then((clientList) => {
        for (const client of clientList) {
          if (client.url === '/' && 'focus' in client) {
            return client.focus()
          }
        }
        if (clients.openWindow) {
          return clients.openWindow('/')
        }
      })
    )
  }
})

// Message handler for communication with main thread
self.addEventListener('message', (event) => {
  console.log('Service Worker received message:', event.data)
  
  switch (event.data.type) {
    case 'SKIP_WAITING':
      self.skipWaiting()
      break
    case 'CACHE_UPDATE':
      updateCache(event.data.url)
      break
    case 'CLEAR_CACHE':
      clearCache(event.data.cacheName)
      break
    default:
      console.log('Unknown message type:', event.data.type)
  }
})

// Helper functions
function notifyClients(message) {
  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      client.postMessage({
        type: 'SYNC_COMPLETE',
        message: message
      })
    })
  })
}

async function updateCache(url) {
  try {
    const cache = await caches.open(DYNAMIC_CACHE)
    const response = await fetch(url)
    if (response.ok) {
      await cache.put(url, response)
      console.log('Cache updated for:', url)
    }
  } catch (error) {
    console.error('Failed to update cache:', error)
  }
}

async function clearCache(cacheName) {
  try {
    const deleted = await caches.delete(cacheName)
    console.log('Cache cleared:', cacheName, deleted)
  } catch (error) {
    console.error('Failed to clear cache:', error)
  }
}

// Periodic background sync (if supported)
self.addEventListener('periodicsync', (event) => {
  console.log('Periodic sync triggered:', event.tag)
  
  if (event.tag === 'background-fetch-data') {
    event.waitUntil(fetchLatestData())
  }
})

async function fetchLatestData() {
  try {
    console.log('Fetching latest data in background...')
    
    // Fetch critical data updates
    const updates = await Promise.allSettled([
      fetch('/api/orders/latest'),
      fetch('/api/messages/unread'),
      fetch('/api/notifications/latest')
    ])
    
    console.log('Background data fetch completed:', updates)
  } catch (error) {
    console.error('Background data fetch failed:', error)
  }
}

console.log('Kalabah Service Worker loaded successfully') 