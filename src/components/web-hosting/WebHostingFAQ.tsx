'use client'

import React, { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { CaretDown } from 'phosphor-react'

export default function WebHostingFAQ() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What type of web hosting do you offer?",
      answer: "We offer high-performance shared hosting with NVMe SSD storage, unlimited bandwidth, and enterprise-grade features. Our servers use the latest AMD Ryzen processors and come with cPanel for easy management."
    },
    {
      question: "Can I host multiple websites on one plan?",
      answer: "Yes! Our WebSpace M plan allows you to host up to 2 websites, while our WebSpace L plan supports unlimited websites. The WebSpace S plan is perfect for a single website."
    },
    {
      question: "Do you provide free SSL certificates?",
      answer: "Absolutely! All our hosting plans include free SSL certificates to ensure your website is secure and trusted by visitors. SSL certificates are automatically installed and renewed."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 ticket support with response times under 15 minutes. Our experienced team can help with technical issues, website migrations, and optimization."
    },
    {
      question: "Do you offer website migration services?",
      answer: "Yes, we provide free website migration services for all our hosting plans. Our experts will transfer your website from your current host with zero downtime."
    },
    {
      question: "Can I upgrade my hosting plan later?",
      answer: "Definitely! You can upgrade your plan at any time without any downtime. Our scalable infrastructure allows seamless transitions as your needs grow."
    },
    {
      question: "Do you provide email hosting?",
      answer: "Yes, all our plans include professional email hosting with unlimited email accounts, webmail access, spam protection, and IMAP/POP3 support."
    },
    {
      question: "What is your uptime guarantee?",
      answer: "We guarantee 99.9% uptime for all our hosting services. Our redundant infrastructure and 24/7 monitoring ensure maximum availability for your websites."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
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

  const faqVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Dark theme background with purple and electric pink accents */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse at 25% 25%, rgba(147, 51, 234, 0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 75% 25%, rgba(236, 72, 153, 0.06) 0%, transparent 50%),
          radial-gradient(ellipse at 25% 75%, rgba(147, 51, 234, 0.07) 0%, transparent 50%),
          radial-gradient(ellipse at 75% 75%, rgba(236, 72, 153, 0.05) 0%, transparent 50%),
          linear-gradient(135deg, #0a0a0a 0%, #1a0b2e 25%, #2d0c4d 50%, #1a0b2e 75%, #0a0a0a 100%)
        `
      }} />
      
      {/* Animated geometric patterns with dark purple theme */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(30deg, transparent 24%, rgba(147, 51, 234, 0.05) 25%, rgba(147, 51, 234, 0.05) 26%, transparent 27%, transparent 74%, rgba(147, 51, 234, 0.05) 75%, rgba(147, 51, 234, 0.05) 76%, transparent 77%),
          linear-gradient(150deg, transparent 24%, rgba(236, 72, 153, 0.04) 25%, rgba(236, 72, 153, 0.04) 26%, transparent 27%, transparent 74%, rgba(236, 72, 153, 0.04) 75%, rgba(236, 72, 153, 0.04) 76%, transparent 77%),
          linear-gradient(60deg, transparent 24%, rgba(147, 51, 234, 0.03) 25%, rgba(147, 51, 234, 0.03) 26%, transparent 27%),
          linear-gradient(120deg, transparent 24%, rgba(236, 72, 153, 0.03) 25%, rgba(236, 72, 153, 0.03) 26%, transparent 27%)
        `,
        backgroundSize: '75px 130px, 75px 130px, 50px 87px, 50px 87px',
        animation: 'geometric-flow 30s linear infinite'
      }} />
      
      {/* Circuit-like connection lines */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(90deg, transparent 98%, rgba(147, 51, 234, 0.15) 100%),
          linear-gradient(180deg, transparent 98%, rgba(236, 72, 153, 0.12) 100%)
        `,
        backgroundSize: '60px 60px',
        animation: 'circuit-pulse 8s ease-in-out infinite alternate'
      }} />
      
      {/* Enhanced floating question mark particles with purple theme */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[10%] text-6xl font-thin text-purple-500/12 animate-bounce" style={{ animationDelay: '0s', animationDuration: '6s' }}>?</div>
        <div className="absolute top-32 right-[20%] text-8xl font-thin text-pink-500/10 animate-bounce" style={{ animationDelay: '1s', animationDuration: '8s' }}>?</div>
        <div className="absolute top-40 left-[25%] text-5xl font-thin text-purple-600/15 animate-bounce" style={{ animationDelay: '2s', animationDuration: '7s' }}>?</div>
        <div className="absolute bottom-40 right-[15%] text-7xl font-thin text-pink-600/12 animate-bounce" style={{ animationDelay: '3s', animationDuration: '9s' }}>?</div>
        <div className="absolute top-1/2 left-[15%] text-4xl font-thin text-purple-500/18 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '5s' }}>?</div>
        <div className="absolute bottom-32 left-[30%] text-9xl font-thin text-pink-500/8 animate-bounce" style={{ animationDelay: '4s', animationDuration: '10s' }}>?</div>
        <div className="absolute top-1/3 right-[25%] text-6xl font-thin text-purple-600/14 animate-bounce" style={{ animationDelay: '2.5s', animationDuration: '6s' }}>?</div>
        <div className="absolute bottom-20 right-[35%] text-5xl font-thin text-pink-600/16 animate-bounce" style={{ animationDelay: '3.5s', animationDuration: '8s' }}>?</div>
      </div>
      
      {/* Floating geometric shapes with electric pink accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 right-[10%] w-16 h-16 border-2 border-purple-500/30 rounded-lg rotate-45" style={{ animation: 'float 8s ease-in-out infinite' }} />
        <div className="absolute bottom-24 left-[12%] w-12 h-12 bg-pink-500/15 rounded-full" style={{ animation: 'float 6s ease-in-out infinite reverse' }} />
        <div className="absolute top-1/2 right-[8%] w-8 h-8 bg-purple-600/20 transform rotate-45" style={{ animation: 'float 7s ease-in-out infinite' }} />
        <div className="absolute bottom-16 right-[40%] w-20 h-20 border border-pink-500/20 rounded-full" style={{ animation: 'float 9s ease-in-out infinite reverse' }} />
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
            Web Hosting FAQ
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-300">
            Find answers to common questions about our web hosting services and features.
            Can't find what you're looking for? Contact our support team.
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={faqVariants}
              className="mb-4"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 12px 40px rgba(147, 51, 234, 0.25), 0 0 30px rgba(147, 51, 234, 0.15)",
                  y: -3
                }}
                className="rounded-2xl overflow-hidden shadow-lg border transition-all duration-500"
                style={{
                  background: 'rgba(16, 16, 16, 0.7)',
                  backdropFilter: 'blur(20px) saturate(1.5)',
                  borderColor: 'rgba(147, 51, 234, 0.3)',
                  boxShadow: '0 8px 32px rgba(147, 51, 234, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
              >
                {/* Question */}
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between transition-all duration-300 group"
                  whileHover={{ 
                    backgroundColor: "rgba(147, 51, 234, 0.05)"
                  }}
                >
                  <h3 className="font-orbitron font-semibold text-lg lg:text-xl group-hover:text-purple-400 transition-colors duration-300 pr-4 text-white">
                    {faq.question}
                  </h3>
                  
                  <motion.div
                    animate={{ 
                      rotate: openIndex === index ? 180 : 0,
                      scale: openIndex === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white transition-all duration-300"
                    style={{
                      boxShadow: '0 4px 12px rgba(147, 51, 234, 0.4)'
                    }}
                  >
                    <CaretDown size={16} weight="bold" />
                  </motion.div>
                </motion.button>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ delay: 0.1, duration: 0.2 }}
                        className="px-6 pb-6 pt-0"
                      >
                        <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-4" />
                        <p className="leading-relaxed text-gray-300">
                          {faq.answer}
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA - Updated to match homepage design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="p-8 rounded-2xl max-w-2xl mx-auto shadow-lg border transition-all duration-300"
               style={{
                 background: 'rgba(16, 16, 16, 0.8)',
                 backdropFilter: 'blur(20px)',
                 borderColor: 'rgba(147, 51, 234, 0.3)',
                 boxShadow: '0 12px 40px rgba(147, 51, 234, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
               }}>
            <h3 className="font-orbitron font-semibold text-2xl mb-4 text-white">
              Still have questions about web hosting?
            </h3>
            <p className="mb-6 leading-relaxed text-gray-300">
              Our support team is available 24/7 to help you with any questions or issues you might have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 12px 30px rgba(147, 51, 234, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://kaarma.cloud/client/submitticket.php?step=2&deptid=1', '_blank')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 btn-hover"
                style={{
                  boxShadow: '0 6px 20px rgba(147, 51, 234, 0.4)'
                }}
              >
                Contact Support
              </motion.button>
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 6px 25px rgba(147, 51, 234, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://discord.com/invite/C2pfxwxeUf', '_blank')}
                className="border-2 border-purple-500/40 px-6 py-3 rounded-xl font-semibold transition-all duration-300 btn-hover hover:border-purple-500 text-purple-400 hover:text-purple-300"
                style={{ 
                  background: 'rgba(147, 51, 234, 0.1)'
                }}
              >
                Join Discord
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}