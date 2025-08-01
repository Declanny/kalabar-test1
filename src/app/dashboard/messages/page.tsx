"use client"

import React, { useState, useRef } from "react"
import { 
  Send, Search, Phone, Video, MoreVertical, Paperclip, 
  Flag, Download, Package, FileText,
  ShoppingCart, Calendar, Clock, CheckCircle,
  File, X, Plus, Filter, Building, MapPin,
  TrendingUp
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(1)
  const [messageText, setMessageText] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const conversations = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Procurement Manager",
      company: "Global Foods Ltd",
      country: "🇬🇧",
      lastMessage: "Could you provide more details about your cashew processing facility certifications?",
      timestamp: "2 mins ago",
      unread: 3,
      online: true,
      avatar: "/avatars/sarah.jpg",
      verified: true,
      type: "inquiry",
      product: "Premium Cashew Nuts",
      orderValue: "$11,250",
      priority: "high"
    },
    {
      id: 2,
      name: "Mohammed Ali",
      title: "Import Director",
      company: "Middle East Traders",
      country: "🇦🇪",
      lastMessage: "We're interested in a bulk order of your hibiscus flowers. Can we schedule a call?",
      timestamp: "1 hour ago",
      unread: 1,
      online: true,
      avatar: "/avatars/mohammed.jpg",
      verified: true,
      type: "negotiation",
      product: "Dried Hibiscus Flowers",
      orderValue: "$6,800",
      priority: "medium"
    },
    {
      id: 3,
      name: "Emma Thompson",
      title: "Trade Specialist",
      company: "Euro Trade Partners",
      country: "🇩🇪",
      lastMessage: "Thank you for the quick shipment! The quality was excellent as always.",
      timestamp: "3 hours ago",
      unread: 0,
      online: false,
      avatar: "/avatars/emma.jpg",
      verified: true,
      type: "order_complete",
      product: "Organic Sesame Seeds",
      orderValue: "$4,400",
      priority: "low"
    },
    {
      id: 4,
      name: "David Kim",
      title: "Sourcing Manager",
      company: "Asian Markets Inc",
      country: "🇰🇷",
      lastMessage: "Can you confirm the shipment date for order #KLB-2024-005?",
      timestamp: "1 day ago",
      unread: 0,
      online: false,
      avatar: "/avatars/david.jpg",
      verified: true,
      type: "order_tracking",
      product: "White Sesame Seeds",
      orderValue: "$6,600",
      priority: "medium"
    },
    {
      id: 5,
      name: "Maria Santos",
      title: "Import Coordinator",
      company: "Latin America Imports",
      country: "🇧🇷",
      lastMessage: "We need a replacement batch due to moisture content issues.",
      timestamp: "2 days ago",
      unread: 2,
      online: true,
      avatar: "/avatars/maria.jpg",
      verified: true,
      type: "dispute",
      product: "Shea Butter",
      orderValue: "$4,250",
      priority: "high"
    }
  ]

  const currentConversation = conversations.find(c => c.id === selectedConversation)

  const messages = {
    1: [
      {
        id: 1,
        sender: "buyer",
        senderName: "Sarah Chen",
        content: "Hello! I'm interested in your Premium Cashew Nuts - W240 Grade. Could you provide more information about your processing facilities?",
        timestamp: "2024-01-15 09:00",
        type: "text"
      },
      {
        id: 2,
        sender: "supplier",
        senderName: "You",
        content: "Hello Sarah! Thank you for your interest. Our processing facility is HACCP certified and ISO 22000 compliant. We process over 2,000 MT annually with state-of-the-art equipment.",
        timestamp: "2024-01-15 09:15",
        type: "text"
      },
      {
        id: 3,
        sender: "supplier",
        senderName: "You",
        content: "I'm attaching our facility certificates and product specifications for your review.",
        timestamp: "2024-01-15 09:16",
        type: "text",
        attachments: [
          { name: "HACCP_Certificate.pdf", type: "pdf", size: "2.3 MB" },
          { name: "ISO_22000_Certificate.pdf", type: "pdf", size: "1.8 MB" },
          { name: "Cashew_Specifications.pdf", type: "pdf", size: "945 KB" }
        ]
      },
      {
        id: 4,
        sender: "buyer",
        senderName: "Sarah Chen",
        content: "Excellent! The certifications look good. What's your current pricing for 1,000 kg minimum order?",
        timestamp: "2024-01-15 10:30",
        type: "text"
      },
      {
        id: 5,
        sender: "supplier",
        senderName: "You",
        content: "",
        timestamp: "2024-01-15 10:45",
        type: "quote",
        quoteData: {
          product: "Premium Cashew Nuts - W240 Grade",
          quantity: "1,000 kg",
          unitPrice: "$11.80",
          totalPrice: "$11,800",
          validUntil: "2024-01-30",
          paymentTerms: "30% advance, 70% on delivery",
          leadTime: "7-14 days"
        }
      },
      {
        id: 6,
        sender: "buyer",
        senderName: "Sarah Chen",
        content: "Could you provide more details about your cashew processing facility certifications?",
        timestamp: "2024-01-15 14:25",
        type: "text"
      }
    ]
  }

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ? Array.from(event.target.files) : []
    setSelectedFiles(prev => [...prev, ...files])
  }

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index))
  }

  const sendMessage = () => {
    if (messageText.trim() || selectedFiles.length > 0) {
      // Handle message sending logic
      console.log("Sending:", { text: messageText, files: selectedFiles })
      setMessageText("")
      setSelectedFiles([])
    }
  }

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.product.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const getMessageTypeIcon = (type: string) => {
    switch (type) {
      case "inquiry": return <Package className="h-4 w-4 text-blue-600" />
      case "negotiation": return <TrendingUp className="h-4 w-4 text-orange-600" />
      case "order_complete": return <CheckCircle className="h-4 w-4 text-green-600" />
      case "order_tracking": return <Clock className="h-4 w-4 text-blue-600" />
      case "dispute": return <Flag className="h-4 w-4 text-red-600" />
      default: return <Building className="h-4 w-4 text-gray-600" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800"
      case "medium": return "bg-yellow-100 text-yellow-800"
      case "low": return "bg-green-100 text-green-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="h-[calc(100vh-8rem)] flex bg-background">
      {/* Conversations Sidebar */}
      <div className="w-1/3 border-r bg-card">
        {/* Header */}
        <div className="p-4 border-b">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Messages</h2>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              New
            </Button>
          </div>
          
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filters */}
          <div className="flex space-x-2 mt-3">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-1" />
              All
            </Button>
            <Button variant="outline" size="sm">Unread</Button>
            <Button variant="outline" size="sm">Orders</Button>
          </div>
        </div>

        {/* Conversations List */}
        <div className="overflow-y-auto h-full">
          {filteredConversations.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => setSelectedConversation(conversation.id)}
              className={cn(
                "p-4 border-b cursor-pointer hover:bg-muted/50 transition-colors",
                selectedConversation === conversation.id && "bg-muted border-primary"
              )}
            >
              <div className="flex items-start space-x-3">
                <div className="relative">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={conversation.avatar} />
                    <AvatarFallback>{conversation.name[0]}</AvatarFallback>
                  </Avatar>
                  {conversation.online && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium text-sm truncate">{conversation.name}</span>
                      <span className="text-xs">{conversation.country}</span>
                      {conversation.verified && (
                        <CheckCircle className="h-3 w-3 text-green-600" />
                      )}
                    </div>
                    <div className="flex items-center space-x-1">
                      {getMessageTypeIcon(conversation.type)}
                      <span className="text-xs text-muted-foreground">{conversation.timestamp}</span>
                    </div>
                  </div>
                  
                  <div className="text-xs text-muted-foreground mb-2">
                    {conversation.title} • {conversation.company}
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-muted-foreground truncate max-w-[180px]">
                      {conversation.product}
                    </span>
                    <span className="text-xs font-medium">{conversation.orderValue}</span>
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                    {conversation.lastMessage}
                  </p>

                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className={getPriorityColor(conversation.priority)}>
                      {conversation.priority}
                    </Badge>
                    {conversation.unread > 0 && (
                      <Badge className="bg-primary text-primary-foreground">
                        {conversation.unread}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {currentConversation ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b bg-card">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={currentConversation.avatar} />
                      <AvatarFallback>{currentConversation.name[0]}</AvatarFallback>
                    </Avatar>
                    {currentConversation.online && (
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{currentConversation.name}</span>
                      <span className="text-sm">{currentConversation.country}</span>
                      {currentConversation.verified && (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {currentConversation.title} • {currentConversation.company}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Video className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Order Context */}
              <div className="mt-3 p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Package className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{currentConversation.product}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>Value: {currentConversation.orderValue}</span>
                    <Badge variant="outline" className={getPriorityColor(currentConversation.priority)}>
                      {currentConversation.priority}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {(messages[selectedConversation as keyof typeof messages] || []).map((message: any) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex",
                    message.sender === "supplier" ? "justify-end" : "justify-start"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[70%] rounded-lg p-3",
                      message.sender === "supplier"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    )}
                  >
                    {message.type === "text" && (
                      <p className="text-sm">{message.content}</p>
                    )}

                    {message.type === "quote" && (
                      <div className="space-y-3">
                        <div className="text-sm font-medium">Quote for {message.quoteData.product}</div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Quantity:</span>
                            <span>{message.quoteData.quantity}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Unit Price:</span>
                            <span>{message.quoteData.unitPrice}</span>
                          </div>
                          <div className="flex justify-between font-medium">
                            <span>Total:</span>
                            <span>{message.quoteData.totalPrice}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Payment Terms:</span>
                            <span>{message.quoteData.paymentTerms}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Lead Time:</span>
                            <span>{message.quoteData.leadTime}</span>
                          </div>
                        </div>
                        <div className="pt-2 border-t border-primary/20">
                          <span className="text-xs">Valid until: {message.quoteData.validUntil}</span>
                        </div>
                      </div>
                    )}

                    {message.attachments && (
                      <div className="mt-2 space-y-2">
                        {message.attachments.map((file: any, index: number) => (
                          <div key={index} className="flex items-center space-x-2 p-2 bg-white/10 rounded border">
                            <FileText className="h-4 w-4" />
                            <div className="flex-1 min-w-0">
                              <div className="text-xs font-medium truncate">{file.name}</div>
                              <div className="text-xs opacity-70">{file.size}</div>
                            </div>
                            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                              <Download className="h-3 w-3" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="text-xs opacity-70 mt-2">
                      {message.timestamp}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t bg-card">
              {/* File Preview */}
              {selectedFiles.length > 0 && (
                <div className="mb-3 p-3 bg-muted/30 rounded-lg">
                  <div className="text-sm font-medium mb-2">Attachments:</div>
                  <div className="space-y-2">
                    {selectedFiles.map((file, index) => (
                      <div key={index} className="flex items-center space-x-2 p-2 bg-background rounded border">
                        <File className="h-4 w-4" />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm truncate">{file.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFile(index)}
                          className="h-6 w-6 p-0"
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-end space-x-2">
                <div className="flex-1">
                  <Input
                    placeholder="Type your message..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                    className="min-h-[40px]"
                  />
                </div>
                
                <div className="flex space-x-1">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileSelect}
                    multiple
                    className="hidden"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Button onClick={sendMessage} disabled={!messageText.trim() && selectedFiles.length === 0}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex space-x-2 mt-3">
                <Button variant="outline" size="sm">
                  <ShoppingCart className="h-4 w-4 mr-1" />
                  Send Quote
                </Button>
                <Button variant="outline" size="sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  Schedule Call
                </Button>
                <Button variant="outline" size="sm">
                  <Package className="h-4 w-4 mr-1" />
                  Share Product
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="text-muted-foreground mb-2">Select a conversation to start messaging</div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Start New Conversation
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 