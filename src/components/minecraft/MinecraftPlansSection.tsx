'use client'

import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Info } from 'phosphor-react'
import Link from 'next/link'

export default function MinecraftPlansSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [currency, setCurrency] = useState('USD')

  const exchangeRate = 87 // USD to INR
  
  const formatPrice = (usdPrice: number) => {
    if (currency === 'USD') {
      return `$${usdPrice}`
    } else {
      return `₹${Math.round(usdPrice * exchangeRate)}`
    }
  }

  // Editable constants for plan calculations
  const PORTS_PER_4GB = 1         // +1 port per 4GB RAM
  const DB_PER_8GB = 1            // +1 DB per 8GB RAM
  const BACKUP_PER_8GB = 1        // +1 automated backup slot per 8GB RAM

  // Helper function to parse GB from strings
  const parseGB = (s: string): number => {
    if (!s) return 0
    const lower = s.toLowerCase()
    if (lower.includes("unlimited")) return Number.POSITIVE_INFINITY
    const match = lower.match(/(\d+(?:\.\d+)?)/)
    return match ? parseFloat(match[1]) : 0
  }

  // Calculate derived specs for each plan
  const calculateSpecs = (plan: any) => {
    const ramGB = parseGB(plan.ram)
    
    // Special handling for Zombie plan
    if (plan.name === "Zombie") {
      return {
        ports: 1,
        database: 1,
        backups: 1,
        cpuDesc: "AMD Ryzen 7/Ryzen 9 (100% CPU)",
        ramDesc: "2 GB DDR4/DDr5 ECC Memory",
        storageDesc: "12 GB NVMe SSD Storage"
      }
    }
    
    // Calculate for other plans
    const ports = Math.max(1, Math.floor(ramGB / 4) * PORTS_PER_4GB)
    const database = Math.max(1, Math.floor(ramGB / 8) * DB_PER_8GB)
    const backups = Math.max(1, Math.floor(ramGB / 8) * BACKUP_PER_8GB)
    
    // Update CPU and RAM descriptions to show Ryzen 7/Ryzen 9 and DDR4/DDR5
    const cpuDesc = plan.cpu.includes("Ryzen") 
      ? plan.cpu.replace("AMD Ryzen 7", "AMD Ryzen 7/Ryzen 9")
      : plan.cpu + " [1 vCore High Frequency]";
      
    const ramDesc = plan.ram.replace("GB", " GB DDR4/DDR5 ECC Memory");
    
    return {
      ports,
      database,
      backups,
      cpuDesc: cpuDesc + (ramGB >= 16 ? " [Multi-Core High Frequency]" : ""),
      ramDesc,
      storageDesc: plan.storage.replace("NVMe", "NVMe SSD Storage")
    }
  }

  // Billing plan links - All plans
  const billingLinks: Record<string, string> = {
    "Zombie": "https://kaarma.cloud/client/store/minecraft/zombie",
    "Skeleton": "https://kaarma.cloud/client/store/minecraft/skeleton",
    "Creeper": "https://kaarma.cloud/client/store/minecraft/creeper",
    "Spider": "https://kaarma.cloud/client/store/minecraft/spider",
    "Breeze": "https://kaarma.cloud/client/store/minecraft/breeze",
    "Blaze": "https://kaarma.cloud/client/store/minecraft/blaze",
    "Iron Golem": "https://kaarma.cloud/client/store/minecraft/iron-golem",
    "Ghast": "https://kaarma.cloud/client/store/minecraft/ghast",
    "Shulker": "https://kaarma.cloud/client/store/minecraft/shulker",
    "Eman": "https://kaarma.cloud/client/store/minecraft/enderman",
    "Wither": "https://kaarma.cloud/client/store/minecraft/wither",
    "Warden": "https://kaarma.cloud/client/store/minecraft/warden",
    "Ender Dragon": "https://kaarma.cloud/client/store/minecraft/ender-dragon"
  }

  // Complete plans data - All 14 plans as requested (including Custom in main array)
  const plans = [
    { "name": "Zombie", "ram": "2GB", "price": 1.00, "storage": "12GB NVMe", "cpu": "AMD Ryzen 7", "mob": "mob-zombie", "desc": "Perfect for starting your journey.", "popular": false },
    { "name": "Skeleton", "ram": "4GB", "price": 2.00, "storage": "25GB NVMe", "cpu": "AMD Ryzen 7", "mob": "mob-skeleton", "desc": "Great for small modded servers.", "popular": false },
    { "name": "Creeper", "ram": "6GB", "price": 4.00, "storage": "36GB NVMe", "cpu": "AMD Ryzen 9", "mob": "mob-creeper", "desc": "Best for modded gameplay.", "popular": true },
    { "name": "Spider", "ram": "8GB", "price": 6.00, "storage": "48GB NVMe", "cpu": "AMD Ryzen 9", "mob": "mob-spider", "desc": "Ideal for medium modpacks.", "popular": false },
    { "name": "Breeze", "ram": "10GB", "price": 8.00, "storage": "60GB NVMe", "cpu": "AMD Ryzen 9", "mob": "mob-breeze", "desc": "Run any modpack with ease.", "popular": true },
    { "name": "Blaze", "ram": "12GB", "price": 10.00, "storage": "72GB NVMe", "cpu": "AMD Ryzen 9", "mob": "mob-blaze", "desc": "For large modded worlds.", "popular": false },
    { "name": "Iron Golem", "ram": "16GB", "price": 14.00, "storage": "96GB NVMe", "cpu": "AMD Ryzen 9", "mob": "mob-iron-golem", "desc": "Heavy modpacks? No problem.", "popular": false },
    { "name": "Ghast", "ram": "20GB", "price": 16.00, "storage": "120GB NVMe", "cpu": "AMD Ryzen 9", "mob": "mob-ghast", "desc": "Community server ready.", "popular": false },
    { "name": "Shulker", "ram": "24GB", "price": 18.00, "storage": "135GB NVMe", "cpu": "AMD Ryzen 9", "mob": "mob-shulker", "desc": "Ultimate power for any need.", "popular": false },
    { "name": "Eman", "ram": "28GB", "price": 20.00, "storage": "145GB NVMe", "cpu": "AMD Ryzen 9", "mob": "mob-eman", "desc": "Balanced for performance.", "popular": false },
    { "name": "Wither", "ram": "32GB", "price": 24.00, "storage": "160GB NVMe", "cpu": "No Cpu Limit", "mob": "mob-wither", "desc": "For serious modded servers.", "popular": false },
    { "name": "Warden", "ram": "48GB", "price": 28.00, "storage": "Unlimited NVMe", "cpu": "No Cpu Limit", "mob": "mob-warden", "desc": "Extreme performance.", "popular": false },
    { "name": "Ender Dragon", "ram": "64GB", "price": 32.00, "storage": "Unlimited NVMe", "cpu": "No Cpu Limit", "mob": "mob-ender-dragon", "desc": "Extreme performance.", "popular": false },
    { "name": "Custom", "ram": "Any", "price": 0, "storage": "Custom NVMe", "cpu": "Custom vCPU", "desc": "Need something extra? Talk to us!", "custom": true }
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  // Info button click handler to scroll to Plan Details section
  const handleInfoClick = (planName: string) => {
    // Convert plan name to the format used in PlanDetailSection
    const formattedName = planName.toLowerCase().replace(/\s+/g, '-');
    
    // Scroll to the Plan Detail section
    const planDetailSection = document.getElementById('plan-details');
    if (planDetailSection) {
      planDetailSection.scrollIntoView({ behavior: 'smooth' });
      
      // Dispatch a custom event to notify PlanDetailSection to select this plan
      window.dispatchEvent(new CustomEvent('selectPlan', { detail: formattedName }));
    }
  };

  return (
    <section id="plans" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
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
            Choose Your Mob
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every great Minecraft server starts with the right hosting plan. 
            Powered by <span className="text-accent-purple font-bold">Ryzen 7 CPU</span>. 
            Pick your mob and dominate the server world with premium performance.
          </p>
        </motion.div>

        {/* Plans Grid - 4x4 Layout with Custom Plan included */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {plans.map((plan, index) => {
            const planUrl = plan.custom ? 'https://discord.com/invite/C2pfxwxeUf' : (billingLinks[plan.name] || '#')
            const specs = plan.custom ? null : calculateSpecs(plan)
            
            return (
              <motion.div
                key={plan.name}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.08,
                  y: -12,
                  zIndex: 10,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
                style={{ zIndex: 1 }}
              >
                <a 
                  href={planUrl}
                  target={plan.custom ? "_blank" : "_blank"}
                  rel={plan.custom ? "noopener noreferrer" : "noopener noreferrer"}
                  className="block w-full h-full"
                  aria-label={plan.custom ? "Contact us for custom plan" : `Buy ${plan.name} plan`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                    >
                      <div className="bg-gradient-to-r from-glow-purple to-accent-purple px-4 py-2 rounded-full text-sm font-bold glow-purple animate-pulse-glow">
                        Popular
                      </div>
                    </motion.div>
                  )}

                  {/* No CPU Limit Badge */}
                  {plan.cpu?.includes('No Cpu Limit') && (
                    <motion.div
                      initial={{ scale: 0, rotate: 180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.1 + 0.7, type: "spring" }}
                      className="absolute -top-4 right-4 z-20"
                    >
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-3 py-1 rounded-full text-xs font-bold text-white">
                        No CPU Limit
                      </div>
                    </motion.div>
                  )}

                  {/* Card Content */}
                  <div className={`relative glass-card p-6 rounded-2xl h-full transition-all duration-300 min-h-[600px] ${
                    plan.popular ? 'border-2 border-purple-500 glow-purple' : ''
                  } group-hover:glow-purple-intense overflow-hidden`}>
                    
                    {/* Custom Plan Special Layout */}
                    {plan.custom ? (
                      <div className="flex flex-col justify-center items-center h-full text-center">
                        <motion.div
                          whileHover={{ 
                            rotate: 360,
                            scale: 1.2,
                            transition: { duration: 0.5 }
                          }}
                          className="text-6xl mb-6"
                        >
                          ⚙️
                        </motion.div>
                        <h3 className="font-orbitron font-bold text-3xl mb-4 text-glow group-hover:text-accent-purple transition-colors duration-300">
                          {plan.name}
                        </h3>
                        <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                          {plan.desc}
                        </p>
                        <motion.div
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 0 25px rgba(124, 58, 237, 0.8)"
                          }}
                          className="bg-gradient-to-r from-glow-purple to-accent-purple px-8 py-3 rounded-xl font-semibold transition-all duration-300 btn-hover"
                        >
                          Contact Us
                        </motion.div>
                      </div>
                    ) : (
                      <>
                        {/* Mob Image - Outside/Above Content */}
                        <div className="text-center mb-4 relative">
                          {/* Background Glow */}
                          <div className="absolute inset-0 bg-gradient-to-r from-glow-purple/20 to-accent-purple/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          
                          <motion.div
                            className={`w-20 h-20 mx-auto rounded-full ${plan.mob} bg-cover bg-center bg-no-repeat relative z-10`}
                            whileHover={{ 
                              scale: 1.2,
                              transition: { duration: 0.4 }
                            }}
                            title={`${plan.name} mob`}
                          />
                        </div>

                        {/* Plan Info */}
                        <div className="text-center mb-6">
                          <h3 className="font-orbitron font-bold text-xl mb-2 text-glow group-hover:text-accent-purple transition-colors duration-300">
                            {plan.name}
                          </h3>
                          <p className="text-gray-400 text-sm mb-4">{plan.desc}</p>
                          <motion.div 
                            key={`${plan.name}-${currency}`}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="text-2xl font-bold"
                          >
                            <span className="text-accent-purple">{formatPrice(plan.price)}</span>
                            <span className="text-gray-400 text-base">/month</span>
                          </motion.div>
                        </div>

                        {/* Plan Specs - Enlarged Text */}
                        <div className="space-y-3 mb-6">
                          {specs && (
                            <>
                              <div className="text-gray-300 text-base">
                                <span className="font-semibold text-accent-purple">CPU:</span> 
                                <div className="text-sm mt-1">{specs.cpuDesc}</div>
                              </div>
                              <div className="text-gray-300 text-base">
                                <span className="font-semibold text-accent-purple">RAM:</span> 
                                <div className="text-sm mt-1">{specs.ramDesc}</div>
                              </div>
                              <div className="text-gray-300 text-base">
                                <span className="font-semibold text-accent-purple">Storage:</span> 
                                <div className="text-sm mt-1">{specs.storageDesc}</div>
                              </div>
                              <div className="text-gray-300 text-base">
                                <span className="font-semibold text-accent-purple">Ports:</span> {specs.ports}
                              </div>
                              <div className="text-gray-300 text-base">
                                <span className="font-semibold text-accent-purple">DB:</span> {specs.database}
                              </div>
                              <div className="text-gray-300 text-base">
                                <span className="font-semibold text-accent-purple">Backups:</span> {specs.backups} (Automated)
                              </div>
                            </>
                          )}
                        </div>

                        {/* Info Button */}
                        <div className="flex items-center justify-between mb-4">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="w-8 h-8 bg-gradient-to-r from-glow-purple to-accent-purple rounded-full flex items-center justify-center text-white hover:glow-purple transition-all duration-300"
                            onClick={(e) => {
                              e.preventDefault();
                              handleInfoClick(plan.name);
                            }}
                            aria-label={`View ${plan.name} details`}
                          >
                            <Info size={16} />
                          </motion.button>
                        </div>

                        {/* CTA Button */}
                        <motion.div
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 0 25px rgba(124, 58, 237, 0.8)"
                          }}
                          className="w-full bg-gradient-to-r from-glow-purple to-accent-purple py-3 rounded-xl font-semibold glow-purple hover:glow-purple-intense transition-all duration-300 btn-hover text-center"
                        >
                          Get Started
                        </motion.div>
                      </>
                    )}

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-glow-purple/10 to-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </a>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Need a custom solution or have questions about our plans?
          </p>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(124, 58, 237, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://discord.com/invite/C2pfxwxeUf', '_blank')}
            className="neuro px-8 py-3 rounded-xl font-semibold hover:glow-purple transition-all duration-300 btn-hover"
          >
            Contact Sales
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}