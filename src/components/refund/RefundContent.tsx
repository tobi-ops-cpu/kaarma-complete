'use client'

import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { CaretDown, CheckCircle, Clock, Warning, CreditCard, Question } from 'phosphor-react'

export default function RefundContent() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const refundCards = [
    {
      icon: CheckCircle,
      title: "Eligibility",
      color: "from-green-500 to-emerald-500",
      description: "Clear criteria for refund eligibility to ensure fair and transparent processes for all customers.",
      content: [
        "Request within 24-48hrs of service activation",
        "New customers only (first-time purchase)",
        "Account in good standing with no violations",
        "Service not exceeding 50% usage of allocated resources"
      ]
    },
    {
      icon: Clock,
      title: "Process",
      color: "from-blue-500 to-cyan-500", 
      description: "Simple and straightforward refund process designed to be completed quickly and efficiently.",
      content: [
        "Submit refund request through support ticket",
        "Provide reason for refund request",
        "Account review within 24 hours",
        "Refund processed within 3-5 business days"
      ]
    },
    {
      icon: Warning,
      title: "Exceptions",
      color: "from-red-500 to-orange-500",
      description: "Important exceptions and limitations to our refund policy that all customers should understand.",
      content: [
        "Domain registrations (non-refundable)",
        "SSL certificates after activation",
        "Dedicated servers after initial setup",
        "Services canceled after 24-48hrs window"
      ]
    }
  ]

  const faqData = [
    {
      question: "How long does the refund process take?",
      answer: "Once your refund request is approved, it typically takes 3-5 business days for the funds to appear in your original payment method. The exact timing may vary depending on your bank or payment provider."
    },
    {
      question: "Can I get a partial refund?",
      answer: "Partial refunds are considered on a case-by-case basis, particularly for annual plans where only a portion of the service has been used. Contact our billing team to discuss your specific situation."
    },
    {
      question: "What services are non-refundable?",
      answer: "Domain registrations, SSL certificates (once activated), setup fees for dedicated servers, and any third-party services are non-refundable. These exceptions are clearly outlined in our terms of service."
    },
    {
      question: "Do you offer refunds after the 24-48hrs period?",
      answer: "While our standard policy is 24-48hrs, we may consider exceptions for technical issues that couldn't be resolved or in cases where service was significantly different from what was advertised."
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
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 via-transparent to-emerald-900/10" />
        <div className="absolute inset-0 grid-bg opacity-10" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Refund Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20"
        >
          {refundCards.map((card, index) => {
            const IconComponent = card.icon
            
            return (
              <motion.div
                key={card.title}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 0 40px rgba(34, 197, 94, 0.6)"
                }}
                className="group glass-card p-8 rounded-3xl border border-green-500/20 hover:border-green-500/40 transition-all duration-300 relative overflow-hidden"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360
                    }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 bg-gradient-to-br ${card.color} rounded-2xl flex items-center justify-center mb-6 glow-green`}
                  >
                    <IconComponent size={32} className="text-white" weight="bold" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="font-orbitron font-bold text-2xl mb-4 text-green-400 group-hover:text-green-300 transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {card.description}
                  </p>

                  {/* List Items */}
                  <ul className="space-y-3">
                    {card.content.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        className="flex items-start gap-3 text-sm text-gray-300"
                        whileHover={{ x: 5, scale: 1.02 }}
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="font-orbitron font-bold text-4xl mb-6 text-glow">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300">
              Common questions about our refund policy and process
            </p>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, index) => {
              const isOpen = openFAQ === index

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-2xl border border-green-500/20 overflow-hidden"
                >
                  {/* FAQ Header */}
                  <motion.button
                    onClick={() => setOpenFAQ(isOpen ? null : index)}
                    whileHover={{ 
                      backgroundColor: "rgba(34, 197, 94, 0.1)",
                      boxShadow: "0 0 30px rgba(34, 197, 94, 0.3)"
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
                        className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center glow-green"
                      >
                        <Question size={20} className="text-white" weight="bold" />
                      </motion.div>
                      <h3 className="font-semibold text-lg text-green-400">
                        {faq.question}
                      </h3>
                    </div>
                    
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CaretDown size={24} className="text-green-400" />
                    </motion.div>
                  </motion.button>

                  {/* FAQ Content */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 pt-0 border-t border-green-500/20">
                          <p className="text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <CreditCard size={48} className="text-green-400 mx-auto mb-4" />
            <h3 className="font-orbitron font-bold text-2xl mb-4 text-green-400">
              Need to Request a Refund?
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Contact our billing team to start your refund request. We'll review your case promptly and fairly.
            </p>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(34, 197, 94, 0.8)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-3 rounded-xl font-semibold glow-green hover:glow-green-intense transition-all duration-300 btn-hover relative overflow-hidden"
            >
              <span className="relative z-10">Submit Refund Request</span>
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