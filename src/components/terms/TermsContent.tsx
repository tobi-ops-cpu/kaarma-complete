'use client'

import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { CaretDown, UserCircle, ShieldCheck, Warning, Prohibit } from 'phosphor-react'

export default function TermsContent() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [openSection, setOpenSection] = useState<number | null>(0)

  const termsData = [
    {
      icon: UserCircle,
      title: "User Responsibilities",
      color: "from-orange-500 to-amber-500",
      content: `
        <h4 class="font-semibold text-orange-400 mb-3">Account Management</h4>
        <p class="mb-4">Users are responsible for maintaining the security of their accounts, including keeping passwords confidential and immediately notifying us of any unauthorized access.</p>
        
        <h4 class="font-semibold text-orange-400 mb-3">Acceptable Use</h4>
        <p class="mb-4">You agree to use our services only for lawful purposes and in accordance with our Acceptable Use Policy. This includes but is not limited to:</p>
        <ul class="list-disc list-inside mb-4 text-gray-300">
          <li>No spam, malware, or malicious activities</li>
          <li>No illegal content distribution</li>
          <li>No resource abuse or excessive consumption</li>
          <li>Compliance with all applicable laws and regulations</li>
        </ul>
        
        <h4 class="font-semibold text-orange-400 mb-3">Content Responsibility</h4>
        <p>You are solely responsible for all content uploaded, stored, or transmitted through our services.</p>
      `
    },
    {
      icon: ShieldCheck,
      title: "Security & Privacy",
      color: "from-red-500 to-orange-500",
      content: `
        <h4 class="font-semibold text-orange-400 mb-3">Data Protection</h4>
        <p class="mb-4">We implement industry-standard security measures to protect your data, including encryption, firewalls, and regular security audits.</p>
        
        <h4 class="font-semibold text-orange-400 mb-3">Security Incidents</h4>
        <p class="mb-4">In the event of a security breach, we will notify affected users within 72 hours and provide detailed information about the incident and our response.</p>
        
        <h4 class="font-semibold text-orange-400 mb-3">User Security Obligations</h4>
        <ul class="list-disc list-inside mb-4 text-gray-300">
          <li>Use strong, unique passwords</li>
          <li>Enable two-factor authentication when available</li>
          <li>Keep software and applications updated</li>
          <li>Report suspicious activities immediately</li>
        </ul>
      `
    },
    {
      icon: Warning,
      title: "Fair Usage Policy",
      color: "from-amber-500 to-yellow-500",
      content: `
        <h4 class="font-semibold text-orange-400 mb-3">Resource Limits</h4>
        <p class="mb-4">Our "unlimited" plans are subject to fair usage guidelines to ensure optimal performance for all users. Excessive resource consumption may result in account review.</p>
        
        <h4 class="font-semibold text-orange-400 mb-3">Bandwidth & Storage</h4>
        <p class="mb-4">While we offer generous allowances, accounts that consistently exceed normal usage patterns may be subject to limitations or upgrade requirements.</p>
        
        <h4 class="font-semibold text-orange-400 mb-3">CPU & Memory Usage</h4>
        <ul class="list-disc list-inside mb-4 text-gray-300">
          <li>Shared hosting accounts should not monopolize server resources</li>
          <li>Long-running processes may be terminated</li>
          <li>Resource-intensive applications may require VPS or dedicated hosting</li>
        </ul>
      `
    },
    {
      icon: Prohibit,
      title: "Account Termination",
      color: "from-red-500 to-pink-500",
      content: `
        <h4 class="font-semibold text-orange-400 mb-3">Termination by User</h4>
        <p class="mb-4">You may terminate your account at any time by contacting our support team. Cancellation requests are processed within 24 hours.</p>
        
        <h4 class="font-semibold text-orange-400 mb-3">Termination by Kaarma</h4>
        <p class="mb-4">We reserve the right to suspend or terminate accounts that violate our terms of service, with appropriate notice when possible.</p>
        
        <h4 class="font-semibold text-orange-400 mb-3">Data Retention</h4>
        <ul class="list-disc list-inside mb-4 text-gray-300">
          <li>Account data is retained for 30 days after termination</li>
          <li>Backups may be available for an additional fee</li>
          <li>Users are responsible for data export before termination</li>
          <li>No liability for data loss after the retention period</li>
        </ul>
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
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/10 via-transparent to-red-900/10" />
        <div className="absolute inset-0 grid-bg opacity-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Terms Accordions */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto space-y-6"
        >
          {termsData.map((section, index) => {
            const IconComponent = section.icon
            const isOpen = openSection === index

            return (
              <motion.div
                key={section.title}
                variants={accordionVariants}
                className="glass-card rounded-2xl border border-orange-500/20 overflow-hidden"
              >
                {/* Accordion Header */}
                <motion.button
                  onClick={() => setOpenSection(isOpen ? null : index)}
                  whileHover={{ 
                    backgroundColor: "rgba(249, 115, 22, 0.1)",
                    boxShadow: "0 0 30px rgba(249, 115, 22, 0.3)"
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
                      className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center glow-orange`}
                    >
                      <IconComponent size={24} className="text-white" weight="bold" />
                    </motion.div>
                    <h3 className="font-orbitron font-bold text-xl text-orange-400">
                      {section.title}
                    </h3>
                  </div>
                  
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CaretDown size={24} className="text-orange-400" />
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
                      <div className="p-6 pt-0 border-t border-orange-500/20">
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

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="font-orbitron font-bold text-2xl mb-4 text-orange-400">
              Questions About Our Terms?
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              If you have any questions about these terms of service, please don't hesitate to contact our legal team.
            </p>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(249, 115, 22, 0.8)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-red-500 px-8 py-3 rounded-xl font-semibold glow-orange hover:glow-orange-intense transition-all duration-300 btn-hover relative overflow-hidden"
            >
              <span className="relative z-10">Contact Legal Team</span>
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