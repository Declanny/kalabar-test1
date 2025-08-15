import Script from 'next/script'

interface BlogStructuredDataProps {
  post: {
    title: string
    slug: string
    excerpt: string
    content: string
    image: string
    author: string
    date: string
    category: string
    tags: string[]
    readTime: string
  }
}

export default function BlogStructuredData({ post }: BlogStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Kalabah",
      "logo": {
        "@type": "ImageObject",
        "url": "https://kalabah.com/logo.png"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://kalabah.com/blog/${post.slug}`
    },
    "articleSection": post.category,
    "keywords": post.tags.join(', '),
    "wordCount": post.content.split(' ').length,
    "timeRequired": post.readTime,
    "url": `https://kalabah.com/blog/${post.slug}`
  }

  return (
    <Script
      id="blog-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  )
} 