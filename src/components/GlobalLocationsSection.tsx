'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, WifiHigh, WifiSlash, WifiX } from 'phosphor-react'

interface ServerLocation {
  id: string
  name: string
  flag: string
  city: string
  endpoint: string
  position: { x: number; y: number }
  ping: number | null
  status: 'online' | 'offline' | 'loading'
}

export default function GlobalLocationsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [hoveredPin, setHoveredPin] = useState<string | null>(null)
  const [userLocation, setUserLocation] = useState<{country: string, city: string} | null>(null)
  
  const [servers, setServers] = useState<ServerLocation[]>([
    {
      id: 'mumbai',
      name: 'Mumbai, India',
      flag: '🇮🇳',
      city: 'Mumbai',
      endpoint: 'https://in-mumbai.speed.cloudflare.com/__down',
      position: { x: 72, y: 45 },
      ping: null,
      status: 'loading'
    },
    {
      id: 'miami',
      name: 'Miami, USA',
      flag: '🇺🇸',
      city: 'Miami',
      endpoint: 'https://us-mia.speed.cloudflare.com/__down',
      position: { x: 20, y: 52 },
      ping: null,
      status: 'loading'
    },
    {
      id: 'frankfurt',
      name: 'Frankfurt, Germany',
      flag: '🇩🇪',
      city: 'Frankfurt',
      endpoint: 'https://de-fra.speed.cloudflare.com/__down',
      position: { x: 52, y: 35 },
      ping: null,
      status: 'loading'
    },
    {
      id: 'singapore',
      name: 'Singapore',
      flag: '🇸🇬',
      city: 'Singapore',
      endpoint: 'https://sgp.speed.cloudflare.com/__down',
      position: { x: 78, y: 58 },
      ping: null,
      status: 'loading'
    }
  ])

  // Detect user's location using IP
  const detectUserLocation = async () => {
    try {
      const response = await fetch('https://ipapi.co/json/')
      const data = await response.json()
      setUserLocation({
        country: data.country_name || 'Unknown',
        city: data.city || 'Unknown'
      })
    } catch (error) {
      console.error('Failed to detect location:', error)
      setUserLocation({ country: 'Unknown', city: 'Unknown' })
    }
  }

  // Ping measurement function
  const measurePing = async (server: ServerLocation): Promise<number> => {
    return new Promise((resolve) => {
      const startTime = Date.now()
      const img = new Image()
      
      const timeout = setTimeout(() => {
        resolve(-1) // Timeout
      }, 5000)
      
      img.onload = () => {
        clearTimeout(timeout)
        const endTime = Date.now()
        resolve(endTime - startTime)
      }
      
      img.onerror = () => {
        clearTimeout(timeout)
        resolve(-1) // Error
      }
      
      // Add cache buster to get accurate timing
      img.src = `${server.endpoint}?t=${Date.now()}`
    })
  }

  // Update ping for all servers
  const updatePings = async () => {
    for (const server of servers) {
      try {
        const ping = await measurePing(server)
        setServers(prev => prev.map(s => 
          s.id === server.id 
            ? { 
                ...s, 
                ping: ping === -1 ? null : ping, 
                status: ping === -1 ? 'offline' : 'online' 
              }
            : s
        ))
      } catch (error) {
        setServers(prev => prev.map(s => 
          s.id === server.id 
            ? { ...s, ping: null, status: 'offline' }
            : s
        ))
      }
    }
  }

  // Initial ping and interval setup
  useEffect(() => {
    detectUserLocation() // Detect user location first
    updatePings() // Start ping measurements
    const interval = setInterval(updatePings, 10000) // Every 10 seconds
    
    return () => clearInterval(interval)
  }, [])

  // Get ping color based on latency
  const getPingColor = (ping: number | null) => {
    if (ping === null) return 'text-red-400'
    if (ping < 80) return 'text-green-400'
    if (ping < 200) return 'text-yellow-400'
    return 'text-red-400'
  }

  // Get ping status icon
  const getPingIcon = (status: string, ping: number | null) => {
    if (status === 'offline') return <WifiSlash size={20} className="text-red-400" />
    if (status === 'loading') return <WifiX size={20} className="text-gray-400 animate-pulse" />
    if (ping && ping < 80) return <WifiHigh size={20} className="text-green-400" />
    return <WifiX size={20} className="text-yellow-400" />
  }

  // Scroll to ping card
  const scrollToPingCard = (serverId: string) => {
    const element = document.getElementById(`ping-${serverId}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden bg-[#0a0a0a]">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2d0a45]/20 via-transparent to-[#2d0a45]/20" />
        
        {/* Animated circuit pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 98%, rgba(147, 51, 234, 0.2) 100%),
            linear-gradient(180deg, transparent 98%, rgba(147, 51, 234, 0.15) 100%)
          `,
          backgroundSize: '50px 50px',
          animation: 'circuit-pulse 4s ease-in-out infinite alternate'
        }} />
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-16 w-40 h-40 bg-indigo-500/8 rounded-full blur-3xl" style={{ animation: 'float 15s ease-in-out infinite' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-600/12 rounded-full blur-xl" style={{ animation: 'float 12s ease-in-out infinite reverse' }} />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron font-bold text-4xl lg:text-6xl mb-6 text-white">
            Global Ping Check
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
            Real-time ping status from your location to our global server network.
            Updated every 10 seconds for accurate latency monitoring.
          </p>
          {userLocation && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 px-6 py-3 rounded-2xl border border-purple-500/30"
            >
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white font-medium">
                Testing from: {userLocation.city}, {userLocation.country}
              </span>
            </motion.div>
          )}
        </motion.div>

        {/* Ping Status Cards - Top Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {servers.map((server) => (
            <motion.div
              key={server.id}
              id={`ping-${server.id}`}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              {/* Glassmorphism card with neon border glow */}
              <div className="p-8 rounded-2xl transition-all duration-300"
                   style={{
                     background: 'rgba(16, 16, 16, 0.6)',
                     backdropFilter: 'blur(20px) saturate(1.8)',
                     border: '1px solid rgba(147, 51, 234, 0.4)',
                     boxShadow: `
                       0 0 20px rgba(147, 51, 234, 0.3),
                       0 8px 32px rgba(147, 51, 234, 0.2),
                       inset 0 1px 0 rgba(255, 255, 255, 0.1)
                     `
                   }}
                   onMouseEnter={(e) => {
                     e.currentTarget.style.boxShadow = `
                       0 0 30px rgba(147, 51, 234, 0.6),
                       0 12px 48px rgba(147, 51, 234, 0.4),
                       inset 0 1px 0 rgba(255, 255, 255, 0.15)
                     `
                     e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.7)'
                   }}
                   onMouseLeave={(e) => {
                     e.currentTarget.style.boxShadow = `
                       0 0 20px rgba(147, 51, 234, 0.3),
                       0 8px 32px rgba(147, 51, 234, 0.2),
                       inset 0 1px 0 rgba(255, 255, 255, 0.1)
                     `
                     e.currentTarget.style.borderColor = 'rgba(147, 51, 234, 0.4)'
                   }}>
                
                {/* Flag and Location */}
                <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="text-4xl">{server.flag}</span>
                  <div className="text-center">
                    <h3 className="font-orbitron font-bold text-xl text-white mb-1">
                      {server.city}
                    </h3>
                    <p className="text-gray-400 text-sm">{server.name}</p>
                  </div>
                </div>

                {/* Live Ping Display */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    {getPingIcon(server.status, server.ping)}
                    <span className="text-gray-300 font-medium">Live Ping</span>
                  </div>
                  <motion.div 
                    key={server.ping}
                    initial={{ scale: 1.2, opacity: 0.8 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`text-3xl font-bold ${getPingColor(server.ping)}`}
                  >
                    {server.status === 'offline' ? '⚠️ Offline' : 
                     server.status === 'loading' ? (
                       <span className="flex items-center justify-center gap-2">
                         <div className="animate-spin w-6 h-6 border-2 border-purple-500 border-t-transparent rounded-full" />
                         Testing...
                       </span>
                     ) :
                     `${server.ping}ms`}
                  </motion.div>
                </div>

                {/* Status Indicator with Animation */}
                <div className="flex items-center justify-center gap-3">
                  <motion.div 
                    animate={{ 
                      scale: server.status === 'online' ? [1, 1.3, 1] : [1, 1.1, 1],
                      boxShadow: server.status === 'online' 
                        ? ['0 0 10px rgba(34, 197, 94, 0.6)', '0 0 20px rgba(34, 197, 94, 0.8)', '0 0 10px rgba(34, 197, 94, 0.6)']
                        : server.status === 'offline'
                        ? '0 0 10px rgba(239, 68, 68, 0.6)'
                        : '0 0 8px rgba(156, 163, 175, 0.5)'
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: server.status === 'online' ? Infinity : 0,
                      ease: "easeInOut"
                    }}
                    className={`w-4 h-4 rounded-full ${server.status === 'online' ? 'bg-green-400' : server.status === 'offline' ? 'bg-red-400' : 'bg-gray-400'}`} 
                  />
                  <span className="text-sm font-medium text-gray-300 capitalize">
                    {server.status === 'online' ? 'Online & Fast' : server.status === 'offline' ? 'Checking...' : 'Testing'}
                  </span>
                </div>

                {/* Performance indicator */}
                {server.status === 'online' && server.ping && (
                  <div className="mt-4 text-center">
                    <div className={`text-xs font-medium px-3 py-1 rounded-full inline-block ${
                      server.ping < 80 ? 'bg-green-500/20 text-green-400' :
                      server.ping < 200 ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {server.ping < 80 ? '🚀 Excellent' : server.ping < 200 ? '⚡ Good' : '🔄 Fair'}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">
            Need a server in a specific location? Contact our team!
          </p>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 25px rgba(124, 58, 237, 0.8)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://discord.com/invite/C2pfxwxeUf', '_blank')}
            className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
          >
            Request New Location
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}