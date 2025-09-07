'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { CreditCard } from 'phosphor-react'
import anime from 'animejs'

export default function RefundHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true })
  const headlineRef = useRef<HTMLHeadingElement>(null)

  React.useEffect(() => {
    if (isInView && headlineRef.current) {
      // Anime.js text animation
      anime({
        targets: headlineRef.current?.querySelectorAll('.char'),
        scale: [0, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 600,
        delay: (el: any, i: number) => 70 * i
      })
    }
  }, [isInView])

  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className="char inline-block">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
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
    <section ref={sectionRef} className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-emerald-900/20" />
        <div className="absolute inset-0 grid-bg opacity-10" />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -3, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-32 right-16 w-32 h-32 bg-gradient-to-br from-emerald-500/15 to-teal-500/15 rounded-full blur-2xl"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Icon */}
          <motion.div
            variants={itemVariants}
            whileHover={{ 
              scale: 1.2,
              rotateY: 360
            }}
            transition={{ duration: 0.6 }}
            className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-8 glow-green"
          >
            <CreditCard size={40} className="text-white" weight="bold" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            ref={headlineRef}
            variants={itemVariants}
            className="font-orbitron font-bold text-5xl lg:text-7xl mb-6 text-glow leading-tight whitespace-nowrap overflow-hidden text-ellipsis sm:whitespace-normal"
            style={{ wordBreak: 'keep-all', hyphens: 'none' }}
          >
            {splitText("Refund Policy")}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            We stand behind our services with a fair and transparent refund policy. Your satisfaction is our priority.
          </motion.p>

          {/* Money Back Guarantee */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
            className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full"
          >
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse-glow" />
            <span className="font-semibold text-green-400">24-48hrs Money Back Guarantee</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}