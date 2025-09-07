'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quotes } from 'phosphor-react'

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [isPaused, setIsPaused] = useState(false)

  const reviews = [
    { text: "$6 for 8GB RAM is absolutely unbeatable! No other host comes close to this value.", name: "Arjun Sharma" },
    { text: "Migrated from HostGator and wow, the speed difference is night and day!", name: "Priya Patel" }, 
    { text: "Kaarma saved me $200/month compared to AWS. Same performance, fraction of the cost.", name: "Vikram Singh" },
    { text: "Their Minecraft hosting is faster than Apex Hosting and costs half the price.", name: "Anita Gupta" },
    { text: "99.9% uptime isn't just marketing - they actually deliver on it.", name: "Rohit Kumar" },
    { text: "Support team responds in under 5 minutes. That's faster than most big hosts.", name: "Meera Joshi" },
    { text: "NVMe SSD storage makes my WordPress site load in under 2 seconds.", name: "Karan Mehta" },
    { text: "Switched from GoDaddy and never looked back. Kaarma is simply better.", name: "Deepika Rao" },
    { text: "Free SSL, daily backups, and DDoS protection included? This is incredible value.", name: "Suresh Nair" },
    { text: "Their VPS gives me more resources than DigitalOcean for less money.", name: "Kavya Reddy" },
    { text: "No setup fees, no hidden costs. Just honest pricing and great service.", name: "Amit Verma" },
    { text: "My gaming community loves the lag-free Minecraft servers. Zero complaints!", name: "Pooja Agarwal" },
    { text: "Ryzen 9 CPUs give my applications the performance boost they needed.", name: "Rajesh Iyer" },
    { text: "Moved my e-commerce site here and sales increased due to faster loading.", name: "Sneha Kapoor" },
    { text: "Customer support actually knows what they're talking about. Refreshing!", name: "Manish Jain" },
    { text: "Been with them for 2 years, not a single major outage. Reliable as clockwork.", name: "Nisha Pandey" },
    { text: "Their control panel is so much easier than cPanel. Modern and intuitive.", name: "Varun Saxena" },
    { text: "$15/month for dedicated CPU cores? Other hosts charge $50+ for the same.", name: "Ritu Malhotra" },
    { text: "Automatic backups saved my website when I accidentally deleted files.", name: "Sanjay Dubey" },
    { text: "No more 'resource limit exceeded' errors since switching from shared hosting.", name: "Divya Chauhan" },
    { text: "Their global CDN makes my site fast worldwide, not just in one region.", name: "Akash Tiwari" },
    { text: "One-click WordPress install and automatic updates. Makes life so easy.", name: "Shreya Bansal" },
    { text: "Free migration service moved all my sites without any downtime.", name: "Manoj Yadav" },
    { text: "24/7 monitoring means issues get fixed before I even notice them.", name: "Priyanka Sinha" },
    { text: "Best hosting decision I ever made. Quality service at unbeatable prices.", name: "Vishal Goyal" },
    { text: "Lightning fast setup and deployment. Got my server running in 30 seconds!", name: "Aditya Mittal" },
    { text: "The pricing is insane! Where else can you get this level of performance for so cheap?", name: "Gayatri Rao" },
    { text: "Their Minecraft plugin support is exceptional. Everything works flawlessly.", name: "Nikhil Desai" },
    { text: "Switched 15 websites from Bluehost. Performance improvement is incredible!", name: "Kritika Shah" },
    { text: "DDoS attacks don't even phase their servers. Rock solid protection.", name: "Harish Chandra" },
    { text: "Free domain, free SSL, free migration - they literally give everything!", name: "Tanvi Bhatt" },
    { text: "Support team fixed my complex DNS issue in minutes. Truly amazing!", name: "Siddharth Joshi" },
    { text: "My e-commerce store has never been this fast. Sales are through the roof!", name: "Megha Prasad" },
    { text: "Ryzen processors handle my heavy workloads like butter. No lag whatsoever.", name: "Abhishek Pandey" },
    { text: "Been testing 10+ hosts for months. Kaarma beats them all in every metric.", name: "Ishita Agarwal" }
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
    <section ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden testimonials-bg">
      {/* Calm Aurora Background for Testimonials */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0" style={{
          background: `
            radial-gradient(ellipse at center, #1a0b2e 0%, #0f0a1a 50%, #000000 100%),
            linear-gradient(135deg, #2d0a45 0%, #000000 100%)
          `
        }} />
        
        {/* Slow moving aurora for calm feel */}
        <div className="absolute inset-0 opacity-20" style={{
          background: `
            radial-gradient(circle at 30% 40%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 70% 60%, rgba(236, 72, 153, 0.08) 0%, transparent 50%)
          `,
          animation: 'neon-wave 40s ease-in-out infinite'
        }} />
        
        {/* Very slow wave layer */}
        <div className="absolute inset-0 opacity-15" style={{
          background: `
            linear-gradient(45deg, 
              transparent 48%, 
              rgba(147, 51, 234, 0.03) 50%, 
              transparent 52%
            )
          `,
          backgroundSize: '500% 500%',
          animation: 'gradient-wave 60s ease-in-out infinite'
        }} />
        
        {/* Subtle spotlight effects */}
        <div className="absolute top-20 left-1/4 w-96 h-96 purple-spotlight opacity-20" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 purple-spotlight opacity-15" />
        
        {/* Very rare, tiny particles for whisper effect */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 rounded-full bg-white"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.2 + 0.05,
              }}
              animate={{
                y: [0, -Math.random() * 30 - 10],
                opacity: [0.1, 0],
              }}
              transition={{
                duration: Math.random() * 20 + 30,
                repeat: Infinity,
                delay: Math.random() * 20,
                ease: "linear"
              }}
            />
          ))}
        </div>
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
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real reviews from real customers who chose Kaarma over expensive alternatives.
          </p>
        </motion.div>

        {/* Sliding Reviews without text cutoff */}
        <div className="relative overflow-hidden">
          
          <motion.div
            className="flex gap-6"
            animate={{
              x: isPaused ? undefined : ["-100%", "0%"]
            }}
            transition={{
              duration: 180, // Even slower speed for better readability
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{
              width: `${reviews.length * 400}px`,
              paddingTop: '20px', // Add top padding to prevent cutoff
              paddingBottom: '20px' // Add bottom padding to prevent cutoff
            }}
          >
            {/* Duplicate reviews for seamless loop */}
            {[...reviews, ...reviews].map((review, index) => (
              <motion.div
                key={index}
                className="testimonial-card p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 group cursor-default"
                style={{
                  minWidth: '380px',
                  maxWidth: '380px',
                  background: 'rgba(16, 16, 16, 0.7)',
                  backdropFilter: 'blur(15px) saturate(1.8)',
                  boxShadow: '0 8px 32px rgba(147, 51, 234, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                }}
                whileHover={{
                  scale: 1.03, // Reduced scale to prevent cutoff
                  zIndex: 10,
                  boxShadow: "0 25px 60px rgba(147, 51, 234, 0.6), 0 0 40px rgba(147, 51, 234, 0.4), 0 0 60px rgba(147, 51, 234, 0.2)",
                  y: -8, // Reduced vertical movement
                  transition: {
                    duration: 0.3,
                    ease: "easeOut"
                  }
                }}
                onHoverStart={() => {
                  // Pause the animation when hovering
                  setIsPaused(true)
                }}
                onHoverEnd={() => {
                  // Resume animation when hover ends
                  setIsPaused(false)
                }}
              >
                {/* Quote Icon */}
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4 glow-purple">
                  <Quotes size={16} className="text-white" weight="bold" />
                </div>

                {/* Review Text */}
                <p className="text-gray-300 leading-relaxed text-sm italic group-hover:text-white transition-colors duration-300 mb-3">
                  "{review.text}"
                </p>
                
                {/* Customer Name */}
                <p className="text-purple-400 font-semibold text-sm group-hover:text-purple-300 transition-colors duration-300">
                  - {review.name}
                </p>

                {/* Stars */}
                <div className="flex gap-1 mt-4 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400" weight="fill" />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Pause indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isPaused ? 1 : 0 }}
          className="text-center mt-8"
        >
          <p className="text-gray-400 text-sm">
            ⏸️ Hover over reviews to pause scrolling
          </p>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(147, 51, 234, 0.8)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const servicesSection = document.querySelector('[data-section="services"]')
              if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            }}
            className="bg-gradient-to-r from-purple-500 to-indigo-500 px-8 py-4 rounded-2xl font-orbitron font-semibold text-lg glow-purple hover:glow-purple-intense transition-all duration-300 btn-hover"
          >
            Join Our Happy Customers
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}