'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Plus, Minus } from 'phosphor-react'

export default function VPSFAQSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is VPS hosting and how does it differ from shared hosting?",
      answer: "VPS (Virtual Private Server) hosting provides you with dedicated resources within a virtualized environment. Unlike shared hosting where resources are shared among multiple users, VPS gives you guaranteed CPU, RAM, and storage allocation, providing better performance, security, and control."
    },
    {
      question: "Do I get root access with your VPS plans?",
      answer: "Yes, all our VPS plans come with full root access (or Administrator access for Windows). This allows you to install any software, configure server settings, and have complete control over your virtual server environment."
    },
    {
      question: "What operating systems are available for VPS hosting?",
      answer: "We offer a wide range of operating systems including Ubuntu, CentOS, Debian, AlmaLinux, Rocky Linux, and Windows Server. You can choose your preferred OS during the setup process or reinstall a different OS anytime from your control panel."
    },
    {
      question: "How quickly can I deploy a new VPS?",
      answer: "VPS deployment is instant! Once your payment is processed, your VPS will be automatically provisioned and ready to use within 1-2 minutes. You'll receive login credentials and connection details via email immediately."
    },
    {
      question: "Is DDoS protection included with VPS hosting?",
      answer: "Yes, all our VPS plans include enterprise-grade DDoS protection at no additional cost. Our network can mitigate attacks up to several Gbps, ensuring your server remains online and accessible even during attacks."
    },
    {
      question: "Can I upgrade or downgrade my VPS plan?",
      answer: "Absolutely! You can upgrade your VPS resources (CPU, RAM, storage) anytime from your control panel. Upgrades are applied instantly. Downgrades require a support ticket and may involve a brief maintenance window."
    },
    {
      question: "What kind of support do you provide for VPS hosting?",
      answer: "We provide 24/7 technical support via live chat, email, and support tickets. Our team can help with server management, troubleshooting, software installation, and performance optimization. We also offer managed VPS services for additional support."
    },
    {
      question: "Do you provide backups for VPS hosting?",
      answer: "Yes, we offer automated daily backups that are stored for 7 days. You can also create manual snapshots anytime. Backup restoration is available through your control panel, and we can assist with emergency recovery if needed."
    },
    {
      question: "What is the network speed and bandwidth allocation?",
      answer: "All VPS plans include 1 Gbps network connectivity with unmetered bandwidth. This means you get high-speed connections without worrying about bandwidth limits or overage charges."
    },
    {
      question: "Can I host multiple websites on a single VPS?",
      answer: "Yes, with full root access, you can host unlimited websites on your VPS. You can configure web servers like Apache or Nginx, set up multiple domains, and manage all your websites from a single VPS instance."
    }
  ]

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

  const itemVariants = {
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
      {/* Dark theme background with purple and electric pink accents - Matching homepage */}
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
          <h2 className="font-orbitron font-bold text-4xl lg:text-6xl mb-6 text-glow">
            VPS Hosting FAQ
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get answers to the most common questions about our VPS hosting services, 
            features, and technical specifications.
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-4"
            >
              <div className="glass-card rounded-2xl overflow-hidden">
                <motion.button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-purple-500/5 transition-colors duration-300"
                  whileHover={{ backgroundColor: "rgba(124, 58, 237, 0.05)" }}
                >
                  <h3 className="font-orbitron font-semibold text-lg text-glow pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    {openFAQ === index ? (
                      <Minus size={24} className="text-purple-400" />
                    ) : (
                      <Plus size={24} className="text-purple-400" />
                    )}
                  </motion.div>
                </motion.button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openFAQ === index ? "auto" : 0,
                    opacity: openFAQ === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Still have questions about our VPS hosting?
          </p>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(124, 58, 237, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
            className="neuro px-8 py-3 rounded-xl font-semibold hover:glow-purple transition-all duration-300 btn-hover"
          >
            Contact Support
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
