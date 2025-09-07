'use client'

import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, Globe, Envelope, Shield, Lightning, HardDrives } from 'phosphor-react'

export default function WebHostingPlans() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD')
  const exchangeRate = 83.50 // USD to INR

  const formatPrice = (usdPrice: number) => {
    if (currency === 'USD') {
      return `$${usdPrice}`
    } else {
      return `₹${Math.round(usdPrice * exchangeRate)}`
    }
  }

  // Define billing links for each plan
  const billingLinks: Record<string, string> = {
    'WebSpace S': 'https://kaarma.cloud/client/store/web-hosting/webspace-s',
    'WebSpace M': 'https://kaarma.cloud/client/store/web-hosting/webspace-m',
    'WebSpace L': 'https://kaarma.cloud/client/store/web-hosting/webspace-l'
  }

  const plans = [
    {
      name: 'WebSpace S',
      price: 1,
      websites: '1 Website',
      popular: false,
      features: [
        'One Domain',
        '25gb NVMe SSD',
        'Unlimited Subdomains',
        '10 Email Accounts',
        'Unlimited Bandwidth',
        'WordPress 1-click install',
        'Cpanel',
        'Full FTP Access',
        'Anti-DDoS Protection',
        'Free SSL Certificate',
        'Free SEO Tools',
        'Ticket Support'
      ]
    },
    {
      name: 'WebSpace M',
      price: 2,
      websites: '2 Websites',
      popular: true,
      features: [
        'Two Domains',
        '50gb NVMe SSD',
        'Unlimited Subdomains',
        '20 Email Accounts',
        'Unlimited Bandwidth',
        'WordPress 1-click install',
        'Cpanel',
        'Full FTP Access',
        'Anti-DDoS Protection',
        'Free SSL Certificate',
        'Free SEO Tools',
        'Ticket Support'
      ]
    },
    {
      name: 'WebSpace L',
      price: 4,
      websites: 'Unlimited Websites',
      popular: false,
      features: [
        'Unlimited Domains',
        '100gb NVMe SSD',
        'Unlimited Subdomains',
        '50 Email Accounts',
        'Unlimited Bandwidth',
        'WordPress 1-click install',
        'Cpanel',
        'Full FTP Access',
        'Anti-DDoS Protection',
        'Free SSL Certificate',
        'Free SEO Tools',
        'Ticket Support'
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="plans" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Network Nodes & Connecting Lines Background */}
      <div className="absolute inset-0 network-pattern opacity-30" />
      
      {/* Faint Purple Glow Behind Pricing Cards */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-indigo-900/10" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          {/* Currency Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute top-0 right-4 lg:right-8"
          >
            <div className="glass-card p-2 rounded-xl">
              <div className="flex items-center gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrency('USD')}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    currency === 'USD'
                      ? 'bg-gradient-to-r from-glow-purple to-accent-purple glow-purple'
                      : 'hover:bg-purple-500/20'
                  }`}
                >
                  USD
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCurrency('INR')}
                  className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    currency === 'INR'
                      ? 'bg-gradient-to-r from-glow-purple to-accent-purple glow-purple'
                      : 'hover:bg-purple-500/20'
                  }`}
                >
                  INR
                </motion.button>
              </div>
            </div>
          </motion.div>

          <h2 className="font-orbitron font-bold text-4xl lg:text-6xl mb-6 text-glow">
            Web Hosting Plans
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Lightning-fast web hosting with unlimited features. 
            Perfect for businesses, developers, and personal websites.
          </p>
        </motion.div>

        {/* Plans Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                rotateY: 3,
                transition: { duration: 0.3 }
              }}
              className="group relative"
              style={{ perspective: '1000px' }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.2 + 0.8, type: "spring" }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                >
                  <div className="bg-gradient-to-r from-glow-purple to-accent-purple px-4 py-2 rounded-full text-sm font-bold glow-purple animate-pulse-glow">
                    Most Popular
                  </div>
                </motion.div>
              )}

              {/* Enhanced Animated Border */}
              <motion.div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(45deg, transparent, rgba(124, 58, 237, 0.5), transparent)',
                  backgroundSize: '300% 300%'
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Card Content */}
              <div className={`relative glass-card p-8 rounded-2xl h-full transition-all duration-300 ${
                plan.popular ? 'border-2 border-purple-500 glow-purple' : ''
              } group-hover:glow-purple overflow-hidden`}>
                
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <motion.div
                    whileHover={{ 
                      rotate: [0, -5, 5, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-gradient-to-br from-glow-purple to-accent-purple rounded-2xl flex items-center justify-center mx-auto mb-4 glow-purple"
                  >
                    <Globe size={32} className="text-white" />
                  </motion.div>

                  <h3 className="font-orbitron font-bold text-2xl mb-2 text-glow group-hover:text-accent-purple transition-colors duration-300">
                    {plan.name}
                  </h3>
                  
                  <div className="text-gray-400 mb-4">{plan.websites}</div>
                  
                  <motion.div 
                    key={`${plan.name}-${currency}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-4xl font-bold"
                  >
                    <span className="text-accent-purple">{formatPrice(plan.price)}</span>
                    <span className="text-gray-400 text-lg">/month</span>
                  </motion.div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.2 + featureIndex * 0.05 }}
                      whileHover={{ x: 5, scale: 1.02 }}
                      className="flex items-center text-sm text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="mr-3 flex-shrink-0"
                      >
                        <div className="w-2 h-2 bg-purple-800 rounded-full" />
                      </motion.div>
                      {feature}
                    </motion.div>
                  ))}
                </div>

                {/* Select Plan Button */}
                <motion.a
                  href={billingLinks[plan.name] || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(124, 58, 237, 0.8)"
                  }}
                  whileTap={{ 
                    scale: 0.95,
                    boxShadow: "0 0 40px rgba(124, 58, 237, 1)"
                  }}
                  className="w-full bg-gradient-to-r from-glow-purple to-accent-purple py-3 rounded-xl font-semibold glow-purple hover:glow-purple-intense transition-all duration-300 btn-hover relative overflow-hidden text-center block"
                >
                  <span className="relative z-10">Select Plan</span>
                  {/* Sweep effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                </motion.a>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-glow-purple/10 to-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            All plans include 30-day money-back guarantee and free migration assistance.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-green-400" />
              <span>Free SSL</span>
            </div>
            <div className="flex items-center gap-2">
              <HardDrives size={16} className="text-blue-400" />
              <span>NVMe SSD</span>
            </div>
            <div className="flex items-center gap-2">
              <Lightning size={16} className="text-yellow-400" />
              <span>Instant Setup</span>
            </div>
            <div className="flex items-center gap-2">
              <Envelope size={16} className="text-purple-400" />
              <span>24/7 Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}