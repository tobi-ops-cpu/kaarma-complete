'use client'

import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'phosphor-react'

export default function SupportFAQ() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqs = [
    {
      question: "How do I set up my Minecraft server world?",
      answer: "Simply upload your world folder through the panel, restart your server, and you're ready to play. If stuck, open a ticket and we'll guide you through the process step by step."
    },
    {
      question: "My VPS is down, what should I do?",
      answer: "First, check our status page to see if it's a network issue. If everything looks fine, reboot from the panel. If it still fails, submit a ticket and our team will investigate immediately."
    },
    {
      question: "Can I get a refund if I'm not satisfied?",
      answer: "Yes, we offer a refund within the first 24-48hrs of your service (conditions apply). Just open a billing ticket and our team will assist you with the refund process."
    },
    {
      question: "How do I manage my hosting (web/email)?",
      answer: "Log into your hosting panel from the client area. From there, you can manage domains, emails, and databases easily through our intuitive cPanel interface."
    },
    {
      question: "What's the fastest way to get support?",
      answer: "Discord is best for quick questions and community help. For technical issues or billing matters, tickets are the most reliable and provide detailed responses from our technical team."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-purple/20 to-jet-black" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-orbitron font-bold text-4xl lg:text-6xl mb-6 text-glow">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Quick answers to the most common questions. 
            Can't find what you need? Contact our support team.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="mb-4"
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${
                  openFAQ === index ? 'glow-purple' : ''
                }`}
              >
                {/* Question */}
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 lg:p-8 text-left flex items-center justify-between hover:bg-purple-500/10 transition-all duration-300"
                  whileHover={{ backgroundColor: "rgba(124, 58, 237, 0.1)" }}
                >
                  <h3 className="font-orbitron font-semibold text-lg lg:text-xl text-glow pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-glow-purple to-accent-purple rounded-full flex items-center justify-center"
                  >
                    {openFAQ === index ? (
                      <Minus size={20} className="text-white" />
                    ) : (
                      <Plus size={20} className="text-white" />
                    )}
                  </motion.div>
                </motion.button>

                {/* Answer */}
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        exit={{ y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 lg:px-8 pb-6 lg:pb-8"
                      >
                        <div className="border-t border-purple-500/20 pt-6">
                          <p className="text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="font-orbitron font-bold text-2xl mb-4 text-glow">
              Still have questions?
            </h3>
            <p className="text-gray-300 mb-6">
              Our support team is standing by to help you with any questions or issues you might have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(88, 101, 242, 0.8)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Join Discord
              </motion.button>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(124, 58, 237, 0.8)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-glow-purple to-accent-purple px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Submit Ticket
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}