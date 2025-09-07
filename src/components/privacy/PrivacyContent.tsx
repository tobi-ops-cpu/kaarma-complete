'use client'

import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { CaretDown, Database, Cookie, ShareNetwork, User } from 'phosphor-react'

export default function PrivacyContent() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [openSection, setOpenSection] = useState<number | null>(0)

  const privacyData = [
    {
      icon: Database,
      title: "Data Collection",
      color: "from-blue-500 to-cyan-500",
      content: `
        <h4 class="font-semibold text-blue-400 mb-3">Information We Collect</h4>
        <p class="mb-4">We collect information you provide directly to us, information we obtain automatically when you use our services, and information from third-party sources.</p>
        
        <h4 class="font-semibold text-blue-400 mb-3">Personal Information</h4>
        <ul class="list-disc list-inside mb-4 text-gray-300">
          <li>Account information (name, email, billing details)</li>
          <li>Contact information for support requests</li>
          <li>Payment information (processed securely by third parties)</li>
          <li>Communications with our support team</li>
        </ul>
        
        <h4 class="font-semibold text-blue-400 mb-3">Technical Information</h4>
        <ul class="list-disc list-inside mb-4 text-gray-300">
          <li>Server logs and usage statistics</li>
          <li>IP addresses and connection information</li>
          <li>Browser type and device information</li>
          <li>Performance and error data</li>
        </ul>
      `
    },
    {
      icon: Cookie,
      title: "Cookies & Tracking",
      color: "from-purple-500 to-blue-500",
      content: `
        <h4 class="font-semibold text-blue-400 mb-3">How We Use Cookies</h4>
        <p class="mb-4">We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content.</p>
        
        <h4 class="font-semibold text-blue-400 mb-3">Types of Cookies</h4>
        <ul class="list-disc list-inside mb-4 text-gray-300">
          <li><strong>Essential:</strong> Required for basic site functionality</li>
          <li><strong>Performance:</strong> Help us understand how visitors use our site</li>
          <li><strong>Functional:</strong> Remember your preferences and settings</li>
          <li><strong>Marketing:</strong> Used to deliver relevant advertisements</li>
        </ul>
        
        <h4 class="font-semibold text-blue-400 mb-3">Cookie Management</h4>
        <p class="mb-4">You can control cookie settings through your browser preferences. Note that disabling certain cookies may affect site functionality.</p>
      `
    },
    {
      icon: ShareNetwork,
      title: "Third-Party Sharing",
      color: "from-cyan-500 to-teal-500",
      content: `
        <h4 class="font-semibold text-blue-400 mb-3">When We Share Data</h4>
        <p class="mb-4">We do not sell your personal information. We may share your data only in specific circumstances outlined below.</p>
        
        <h4 class="font-semibold text-blue-400 mb-3">Service Providers</h4>
        <ul class="list-disc list-inside mb-4 text-gray-300">
          <li>Payment processors for billing and transactions</li>
          <li>Cloud infrastructure providers for hosting</li>
          <li>Analytics services for usage insights</li>
          <li>Support tools for customer service</li>
        </ul>
        
        <h4 class="font-semibold text-blue-400 mb-3">Legal Requirements</h4>
        <p class="mb-4">We may disclose information when required by law, to protect our rights, or to ensure user safety and security.</p>
        
        <h4 class="font-semibold text-blue-400 mb-3">Business Transfers</h4>
        <p>In the event of a merger or acquisition, user information may be transferred as part of the business assets.</p>
      `
    },
    {
      icon: User,
      title: "Your Data Rights",
      color: "from-teal-500 to-green-500",
      content: `
        <h4 class="font-semibold text-blue-400 mb-3">Access & Control</h4>
        <p class="mb-4">You have comprehensive rights regarding your personal data under GDPR, CCPA, and other privacy regulations.</p>
        
        <h4 class="font-semibold text-blue-400 mb-3">Your Rights Include</h4>
        <ul class="list-disc list-inside mb-4 text-gray-300">
          <li><strong>Access:</strong> Request a copy of your personal data</li>
          <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
          <li><strong>Erasure:</strong> Request deletion of your personal data</li>
          <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
          <li><strong>Restriction:</strong> Limit how we process your data</li>
          <li><strong>Objection:</strong> Object to certain types of processing</li>
        </ul>
        
        <h4 class="font-semibold text-blue-400 mb-3">How to Exercise Your Rights</h4>
        <p>Contact our Data Protection Officer at privacy@kaarma.cloud to make any requests regarding your personal data.</p>
      `
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const accordionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10" />
        <div className="absolute inset-0 grid-bg opacity-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Privacy Accordions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto space-y-6"
        >
          {privacyData.map((section, index) => {
            const IconComponent = section.icon
            const isOpen = openSection === index

            return (
              <motion.div
                key={section.title}
                variants={accordionVariants}
                className="glass-card rounded-2xl border border-blue-500/20 overflow-hidden"
              >
                {/* Accordion Header */}
                <motion.button
                  onClick={() => setOpenSection(isOpen ? null : index)}
                  whileHover={{ 
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
                  }}
                  className="w-full p-6 flex items-center justify-between text-left transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 360
                      }}
                      transition={{ duration: 0.6 }}
                      className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center glow-blue`}
                    >
                      <IconComponent size={24} className="text-white" weight="bold" />
                    </motion.div>
                    <h3 className="font-orbitron font-bold text-xl text-blue-400">
                      {section.title}
                    </h3>
                  </div>
                  
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CaretDown size={24} className="text-blue-400" />
                  </motion.div>
                </motion.button>

                {/* Accordion Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 border-t border-blue-500/20">
                        <div 
                          className="text-gray-300 leading-relaxed prose prose-invert max-w-none"
                          dangerouslySetInnerHTML={{ __html: section.content }}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Data Protection Officer Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="font-orbitron font-bold text-2xl mb-4 text-blue-400">
              Data Protection Officer
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Have questions about your privacy rights or how we handle your data? Our dedicated Data Protection Officer is here to help.
            </p>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.8)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 rounded-xl font-semibold glow-blue hover:glow-blue-intense transition-all duration-300 btn-hover relative overflow-hidden"
            >
              <span className="relative z-10">Contact DPO</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}