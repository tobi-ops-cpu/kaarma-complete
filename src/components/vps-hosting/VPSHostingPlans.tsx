'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Cpu, HardDrives, WifiHigh, Shield, MapPin, Check, CaretDown, DiscordLogo } from 'phosphor-react'

export default function VPSHostingPlans() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD')
  const [selectedCountry, setSelectedCountry] = useState<'India' | 'Germany'>('India')
  const [selectedProcessor, setSelectedProcessor] = useState('')
  const [showCountryDropdown, setShowCountryDropdown] = useState(false)
  const [showProcessorDropdown, setShowProcessorDropdown] = useState(false)
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isActive: true
  })
  const exchangeRate = 83.50 // USD to INR

  // Country configurations
  const countries = {
    India: {
      flag: '🇮🇳',
      processors: [
        { name: 'Intel Xeon Standard', id: 'intel-xeon-standard' },
        { name: 'AMD Ryzen 7 7700', id: 'amd-ryzen-7-7700' }
      ]
    },
    Germany: {
      flag: '🇩🇪', 
      processors: [
        { name: 'Intel Gold', id: 'intel-gold' },
        { name: 'AMD Ryzen 9', id: 'amd-ryzen-9' }
      ]
    }
  }

  // Set default processor when country changes
  React.useEffect(() => {
    if (!selectedProcessor || !countries[selectedCountry].processors.find(p => p.id === selectedProcessor)) {
      setSelectedProcessor(countries[selectedCountry].processors[0].id)
    }
  }, [selectedCountry])

  // Countdown timer effect
  useEffect(() => {
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 10) // 10 days from now

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance < 0) {
        clearInterval(timer)
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isActive: false
        })
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24))
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((distance % (1000 * 60)) / 1000)

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
          isActive: true
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatPrice = (usdPrice: number) => {
    if (currency === 'USD') {
      return `$${usdPrice}`
    } else {
      return `₹${Math.round(usdPrice * exchangeRate)}`
    }
  }

  // VPS Plans data based on country and processor selection
  const getPlansForProcessor = () => {
    if (selectedCountry === 'India') {
      if (selectedProcessor === 'intel-xeon-standard') {
        return [
          {
            name: 'Xeon Standard S',
            price: 6,
            vCores: '2 vCores',
            ram: '8 GB DDR4 ECC',
            storage: '80 GB NVMe SSD',
            bandwidth: 'Unmetered (1 Gbps)',
            location: 'Noida',
            clockSpeed: '2.30 GHz Base (3.30 GHz Turbo)',
            popular: false,
            features: [
              'Intel Xeon 2 vCores',
              '2.30 GHz Base (3.30 GHz Turbo)',
              '8 GB DDR4 ECC Memory',
              '80 GB NVMe SSD Storage',
              'Unmetered Bandwidth (1 Gbps)',
              'Advance DDoS Migration',
              'Noida Data Center',
              'Full Root Access',
              'KVM Virtualization',
              '99.9% Uptime SLA',
              'Free SSL Certificate',
              '24/7 Technical Support'
            ]
          },
          {
            name: 'Xeon Standard M',
            price: 8,
            vCores: '4 vCores',
            ram: '12 GB DDR4 ECC',
            storage: '100 GB NVMe SSD',
            bandwidth: 'Unmetered (1 Gbps)',
            location: 'Noida',
            clockSpeed: '2.30 GHz Base (3.30 GHz Turbo)',
            popular: true,
            features: [
              'Intel Xeon 4 vCores',
              '2.30 GHz Base (3.30 GHz Turbo)',
              '12 GB DDR4 ECC Memory',
              '100 GB NVMe SSD Storage',
              'Unmetered Bandwidth (1 Gbps)',
              'Advance DDoS Migration',
              'Noida Data Center',
              'Full Root Access',
              'KVM Virtualization',
              '99.9% Uptime SLA',
              'Free SSL Certificate',
              '24/7 Priority Support'
            ]
          },
          {
            name: 'Xeon Standard L',
            price: 12,
            vCores: '6 vCores',
            ram: '16 GB DDR4 ECC',
            storage: '150 GB NVMe SSD',
            bandwidth: 'Unmetered (1 Gbps)',
            location: 'Noida',
            clockSpeed: '2.30 GHz Base (3.30 GHz Turbo)',
            popular: false,
            features: [
              'Intel Xeon 6 vCores',
              '2.30 GHz Base (3.30 GHz Turbo)',
              '16 GB DDR4 ECC Memory',
              '150 GB NVMe SSD Storage',
              'Unmetered Bandwidth (1 Gbps)',
              'Advance DDoS Migration',
              'Noida Data Center',
              'Full Root Access',
              'KVM Virtualization',
              '99.9% Uptime SLA',
              'Free SSL Certificate',
              '24/7 VIP Support'
            ]
          },
          {
            name: 'Xeon Standard XL',
            price: 14,
            vCores: '6 vCores',
            ram: '24 GB DDR4 ECC',
            storage: '200 GB NVMe SSD',
            bandwidth: 'Unmetered (1 Gbps)',
            location: 'Noida',
            clockSpeed: '2.30 GHz Base (3.30 GHz Turbo)',
            popular: false,
            features: [
              'Intel Xeon 6 vCores',
              '2.30 GHz Base (3.30 GHz Turbo)',
              '24 GB DDR4 ECC Memory',
              '200 GB NVMe SSD Storage',
              'Unmetered Bandwidth (1 Gbps)',
              'Advance DDoS Migration',
              'Noida Data Center',
              'Full Root Access',
              'KVM Virtualization',
              '99.9% Uptime SLA',
              'Free SSL Certificate',
              '24/7 VIP Support'
            ]
          }
        ]
      } else if (selectedProcessor === 'amd-ryzen-7-7700') {
        return [
          {
            name: 'AMD Ryzen S',
            price: 12,
            vCores: '2 vCores',
            ram: '8 GB DDR5 ECC',
            storage: '80 GB NVMe SSD',
            bandwidth: 'Unmetered (1 Gbps)',
            location: 'Mumbai',
            clockSpeed: '3.70 GHz Base (4.80 GHz Turbo)',
            popular: false,
            features: [
              'AMD Ryzen 7 7700 2 vCores',
              '3.70 GHz Base (4.80 GHz Turbo)',
              '8 GB DDR5 ECC Memory',
              '80 GB NVMe SSD Storage',
              'Unmetered Bandwidth (1 Gbps)',
              'Advance DDoS Migration',
              'Mumbai Data Center',
              'Full Root Access',
              'KVM Virtualization',
              '99.9% Uptime SLA',
              'Free SSL Certificate',
              '24/7 Technical Support'
            ]
          },
          {
            name: 'AMD Ryzen M',
            price: 21,
            vCores: '4 vCores',
            ram: '16 GB DDR5 ECC',
            storage: '120 GB NVMe SSD',
            bandwidth: 'Unmetered (1 Gbps)',
            location: 'Mumbai',
            clockSpeed: '3.70 GHz Base (4.80 GHz Turbo)',
            popular: true,
            features: [
              'AMD Ryzen 7 7700 4 vCores',
              '3.70 GHz Base (4.80 GHz Turbo)',
              '16 GB DDR5 ECC Memory',
              '120 GB NVMe SSD Storage',
              'Unmetered Bandwidth (1 Gbps)',
              'Advance DDoS Migration',
              'Mumbai Data Center',
              'Full Root Access',
              'KVM Virtualization',
              '99.9% Uptime SLA',
              'Free SSL Certificate',
              '24/7 Priority Support'
            ]
          },
          {
            name: 'AMD Ryzen L',
            price: 35,
            vCores: '6 vCores',
            ram: '32 GB DDR5 ECC',
            storage: '200 GB NVMe SSD',
            bandwidth: 'Unmetered (1 Gbps)',
            location: 'Mumbai',
            clockSpeed: '3.70 GHz Base (4.80 GHz Turbo)',
            popular: false,
            features: [
              'AMD Ryzen 7 7700 6 vCores',
              '3.70 GHz Base (4.80 GHz Turbo)',
              '32 GB DDR5 ECC Memory',
              '200 GB NVMe SSD Storage',
              'Unmetered Bandwidth (1 Gbps)',
              'Advance DDoS Migration',
              'Mumbai Data Center',
              'Full Root Access',
              'KVM Virtualization',
              '99.9% Uptime SLA',
              'Free SSL Certificate',
              '24/7 VIP Support'
            ]
          },
          {
            name: 'AMD Ryzen XL',
            price: 58,
            vCores: '8 vCores',
            ram: '64 GB DDR5 ECC',
            storage: '300 GB NVMe SSD',
            bandwidth: 'Unmetered (1 Gbps)',
            location: 'Mumbai',
            clockSpeed: '3.70 GHz Base (4.80 GHz Turbo)',
            popular: false,
            features: [
              'AMD Ryzen 7 7700 8 vCores',
              '3.70 GHz Base (4.80 GHz Turbo)',
              '64 GB DDR5 ECC Memory',
              '300 GB NVMe SSD Storage',
              'Unmetered Bandwidth (1 Gbps)',
              'Advance DDoS Migration',
              'Mumbai Data Center',
              'Full Root Access',
              'KVM Virtualization',
              '99.9% Uptime SLA',
              'Free SSL Certificate',
              '24/7 Enterprise Support'
            ]
          }
        ]
      }
    } else if (selectedCountry === 'Germany') {
      if (selectedProcessor === 'intel-gold') {
        return [
          {
            name: 'Intel Gold S',
            price: 6,
            vCores: '2 vCores',
            ram: '8 GB DDR4 ECC',
            storage: '50 GB NVMe SSD',
            bandwidth: 'Unmetered (1 Gbps)',
            location: 'Frankfurt',
            clockSpeed: '2.70 GHz Base (3.70 GHz Turbo)',
            popular: false,
            features: [
              'Intel® Xeon® Gold 6150 2 vCores',
              '2.70 GHz Base (3.70 GHz Turbo)',
              '8 GB DDR4 ECC Memory',
              '50 GB NVMe SSD Storage',
              'Unmetered Bandwidth (1 Gbps)',
              'Combatton DDoS Protection',
              'Frankfurt Data Center',
              'Full Root Access',
              'KVM Virtualization',
              '99.9% Uptime SLA',
              'Free SSL Certificate',
              '24/7 Technical Support'
            ]
          },
          {
            name: 'Intel Gold M',
            price: 10,
            vCores: '4 vCores',
            ram: '16 GB DDR4 ECC',
            storage: '150 GB NVMe SSD',
            bandwidth: 'Unmetered (1 Gbps)',
            location: 'Frankfurt',
            clockSpeed: '2.70 GHz Base (3.70 GHz Turbo)',
            popular: true,
            features: [
              'Intel® Xeon® Gold 6150 4 vCores',
              '2.70 GHz Base (3.70 GHz Turbo)',
              '16 GB DDR4 ECC Memory',
              '150 GB NVMe SSD Storage',
              'Unmetered Bandwidth (1 Gbps)',
              'Combatton DDoS Protection',
              'Frankfurt Data Center',
              'Full Root Access',
              'KVM Virtualization',
              '99.9% Uptime SLA',
              'Free SSL Certificate',
              '24/7 Priority Support'
            ]
          },
          {
            name: 'Intel Gold L',
            price: 20,
            vCores: '6 vCores',
            ram: '36 GB DDR4 ECC',
            storage: '250 GB NVMe SSD',
            bandwidth: 'Unmetered (1 Gbps)',
            location: 'Frankfurt',
            clockSpeed: '2.70 GHz Base (3.70 GHz Turbo)',
            popular: false,
            features: [
              'Intel® Xeon® Gold 6150 6 vCores',
              '2.70 GHz Base (3.70 GHz Turbo)',
              '36 GB DDR4 ECC Memory',
              '250 GB NVMe SSD Storage',
              'Unmetered Bandwidth (1 Gbps)',
              'Combatton DDoS Protection',
              'Frankfurt Data Center',
              'Full Root Access',
              'KVM Virtualization',
              '99.9% Uptime SLA',
              'Free SSL Certificate',
              '24/7 VIP Support'
            ]
          },
          {
            name: 'Intel Gold XL',
            price: 26,
            vCores: '8 vCores',
            ram: '48 GB DDR4 ECC',
            storage: '300 GB NVMe SSD',
            bandwidth: 'Unmetered (1 Gbps)',
            location: 'Frankfurt',
            clockSpeed: '2.70 GHz Base (3.70 GHz Turbo)',
            popular: false,
            features: [
              'Intel® Xeon® Gold 6150 8 vCores',
              '2.70 GHz Base (3.70 GHz Turbo)',
              '48 GB DDR4 ECC Memory',
              '300 GB NVMe SSD Storage',
              'Unmetered Bandwidth (1 Gbps)',
              'Combatton DDoS Protection',
              'Frankfurt Data Center',
              'Full Root Access',
              'KVM Virtualization',
              '99.9% Uptime SLA',
              'Free SSL Certificate',
              '24/7 Enterprise Support'
            ]
          }
        ]
      } else if (selectedProcessor === 'amd-ryzen-9') {
        return [
          {
            name: 'AMD Ryzen S',
            price: 8,
            vCores: '2 vCores',
            ram: '6 GB DDR5 ECC',
            storage: '50 GB NVMe SSD',
            bandwidth: 'Unmetered (1 Gbps)',
            location: 'Frankfurt',
            clockSpeed: '3.70 GHz Base (4.80 GHz Turbo)',
            popular: false,
            features: [
              'AMD Ryzen™ 9 5900X 2 vCores',
              '3.70 GHz Base (4.80 GHz Turbo)',
              '6 GB DDR5 ECC Memory',
              '50 GB NVMe SSD Storage',
              'Unmetered Bandwidth (1 Gbps)',
              'Combatton DDoS Protection',
              'Frankfurt Data Center',
              'Full Root Access',
              'KVM Virtualization',
              '99.9% Uptime SLA',
              'Free SSL Certificate',
              '24/7 Technical Support'
            ]
          },
          {
            name: 'AMD Ryzen M',
            price: 18,
            vCores: '2 vCores',
            ram: '8 GB DDR5 ECC',
            storage: '50 GB NVMe SSD',
            bandwidth: 'Unmetered (1 Gbps)',
            location: 'Frankfurt',
            clockSpeed: '3.70 GHz Base (4.80 GHz Turbo)',
            popular: true,
            features: [
              'AMD Ryzen™ 9 5900X 2 vCores',
              '3.70 GHz Base (4.80 GHz Turbo)',
              '8 GB DDR5 ECC Memory',
              '50 GB NVMe SSD Storage',
              'Unmetered Bandwidth (1 Gbps)',
              'Combatton DDoS Protection',
              'Frankfurt Data Center',
              'Full Root Access',
              'KVM Virtualization',
              '99.9% Uptime SLA',
              'Free SSL Certificate',
              '24/7 Priority Support'
            ]
          },
          {
            name: 'AMD Ryzen L',
            price: 18,
            vCores: '4 vCores',
            ram: '16 GB DDR5 ECC',
            storage: '120 GB NVMe SSD',
            bandwidth: 'Unmetered (1 Gbps)',
            location: 'Frankfurt',
            clockSpeed: '3.70 GHz Base (4.80 GHz Turbo)',
            popular: false,
            features: [
              'AMD Ryzen™ 9 5900X 4 vCores',
              '3.70 GHz Base (4.80 GHz Turbo)',
              '16 GB DDR5 ECC Memory',
              '120 GB NVMe SSD Storage',
              'Unmetered Bandwidth (1 Gbps)',
              'Combatton DDoS Protection',
              'Frankfurt Data Center',
              'Full Root Access',
              'KVM Virtualization',
              '99.9% Uptime SLA',
              'Free SSL Certificate',
              '24/7 VIP Support'
            ]
          },
          {
            name: 'AMD Ryzen XL',
            price: 28,
            vCores: '6 vCores',
            ram: '32 GB DDR5 ECC',
            storage: '200 GB NVMe SSD',
            bandwidth: 'Unmetered (1 Gbps)',
            location: 'Frankfurt',
            clockSpeed: '3.70 GHz Base (4.80 GHz Turbo)',
            popular: false,
            features: [
              'AMD Ryzen™ 9 5900X 6 vCores',
              '3.70 GHz Base (4.80 GHz Turbo)',
              '32 GB DDR5 ECC Memory',
              '200 GB NVMe SSD Storage',
              'Unmetered Bandwidth (1 Gbps)',
              'Combatton DDoS Protection',
              'Frankfurt Data Center',
              'Full Root Access',
              'KVM Virtualization',
              '99.9% Uptime SLA',
              'Free SSL Certificate',
              '24/7 Enterprise Support'
            ]
          }
        ]
      }
    }
    // Default fallback plans
    return [
      {
        name: 'VPS S',
        price: 6,
        vCores: '2 vCores',
        ram: '8 GB RAM',
        storage: '80 GB NVMe SSD',
        bandwidth: 'Unmetered (1 Gbps)',
        location: 'Data Center',
        clockSpeed: 'High Performance',
        popular: false,
        features: ['2 vCores', '8 GB RAM', '80 GB Storage', 'DDoS Protection']
      }
    ]
  }

  const plans = getPlansForProcessor()

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
    <section id="vps-plans" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Futuristic Server Rack & 3D Box Mesh Background */}
      <div className="absolute inset-0 server-pattern opacity-20" />
      <div className="absolute inset-0 mesh-3d opacity-10" />
      
      {/* Dark Gradient (Black → Indigo Purple) */}
      <div className="absolute inset-0 gradient-overlay-indigo" />
      
      {/* Cyber Grid Pattern */}
      <div className="absolute inset-0 cyber-grid opacity-15" />
      
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
              VPS Hosting Plans
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            High-performance Virtual Private Servers with dedicated resources 
            and enterprise-grade protection across multiple data centers.
          </p>

          {/* Country and Processor Selectors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8"
          >
            {/* Country Dropdown */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setShowCountryDropdown(!showCountryDropdown)
                  setShowProcessorDropdown(false)
                }}
                className="glass-card px-6 py-3 rounded-xl flex items-center gap-3 min-w-[180px] justify-between hover:glow-purple transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{countries[selectedCountry].flag}</span>
                  <span className="font-semibold">{selectedCountry}</span>
                </div>
                <motion.div
                  animate={{ rotate: showCountryDropdown ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <CaretDown size={16} />
                </motion.div>
              </motion.button>
              
              {showCountryDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full mt-2 left-0 right-0 glass-card rounded-xl overflow-hidden z-50"
                >
                  {Object.entries(countries).map(([country, config]) => (
                    <motion.button
                      key={country}
                      whileHover={{ backgroundColor: "rgba(124, 58, 237, 0.1)" }}
                      onClick={() => {
                        setSelectedCountry(country as 'India' | 'Germany')
                        setShowCountryDropdown(false)
                      }}
                      className="w-full px-6 py-3 flex items-center gap-3 hover:bg-purple-500/10 transition-colors duration-200"
                    >
                      <span className="text-2xl">{config.flag}</span>
                      <span className="font-semibold">{country}</span>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Processor Dropdown */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setShowProcessorDropdown(!showProcessorDropdown)
                  setShowCountryDropdown(false)
                }}
                className="glass-card px-6 py-3 rounded-xl flex items-center gap-3 min-w-[220px] justify-between hover:glow-purple transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <Cpu size={20} className="text-purple-400" />
                  <span className="font-semibold">
                    {countries[selectedCountry].processors.find(p => p.id === selectedProcessor)?.name || 'Select Processor'}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: showProcessorDropdown ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <CaretDown size={16} />
                </motion.div>
              </motion.button>
              
              {showProcessorDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full mt-2 left-0 right-0 glass-card rounded-xl overflow-hidden z-50"
                >
                  {countries[selectedCountry].processors.map((processor) => (
                    <motion.button
                      key={processor.id}
                      whileHover={{ backgroundColor: "rgba(124, 58, 237, 0.1)" }}
                      onClick={() => {
                        setSelectedProcessor(processor.id)
                        setShowProcessorDropdown(false)
                      }}
                      className="w-full px-6 py-3 flex items-center gap-3 hover:bg-purple-500/10 transition-colors duration-200"
                    >
                      <Cpu size={20} className="text-purple-400" />
                      <span className="font-semibold">{processor.name}</span>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </div>
        </motion.div>
        </motion.div>

        {/* Maintenance Notice - Updated to Discord link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gray-900/50 border-l-4 border-yellow-500 p-6 rounded-lg mb-12 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-2">VPS Services Temporarily Unavailable</h3>
              <p className="text-gray-300 mb-4 md:mb-0">
                Our VPS services may not be available at this moment. Deployment may take 24-72 hours. 
                Join our Discord for real-time updates and support.
              </p>
            </div>
            
            <a
              href="https://discord.com/invite/C2pfxwxeUf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-200 whitespace-nowrap"
            >
              <DiscordLogo className="w-5 h-5 mr-2" />
              Join Discord for Updates
            </a>
          </div>
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
                y: -15,
                rotateY: 5,
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
                      rotate: [0, -10, 10, 0],
                      scale: 1.2
                    }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-br from-glow-purple to-accent-purple rounded-2xl flex items-center justify-center mx-auto mb-4 glow-purple"
                  >
                    <Cpu size={32} className="text-white" />
                  </motion.div>

                  <h3 className="font-orbitron font-bold text-2xl mb-2 text-glow group-hover:text-accent-purple transition-colors duration-300">
                    {plan.name}
                  </h3>
                  
                  <motion.div 
                    key={`${plan.name}-${currency}`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-4xl font-bold mb-4"
                  >
                    <span className="text-accent-purple">{formatPrice(plan.price)}</span>
                    <span className="text-gray-400 text-lg">/month</span>
                  </motion.div>

                  <div className="text-sm text-gray-400 mb-6">
                    {plan.location}, IN • {plan.clockSpeed}
                  </div>
                </div>

                {/* Key Specs */}
                <div className="space-y-4 mb-6">
                  <motion.div 
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(124, 58, 237, 0.1)" }}
                    className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300"
                  >
                    <Cpu size={20} className="text-accent-purple" />
                    <div>
                      <div className="font-semibold">{plan.vCores}</div>
                      <div className="text-xs text-gray-400">Processor</div>
                    </div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(124, 58, 237, 0.1)" }}
                    className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300"
                  >
                    <HardDrives size={20} className="text-blue-400" />
                    <div>
                      <div className="font-semibold">{plan.ram}</div>
                      <div className="text-xs text-gray-400">DDR4 Memory</div>
                    </div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(124, 58, 237, 0.1)" }}
                    className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300"
                  >
                    <WifiHigh size={20} className="text-green-400" />
                    <div>
                      <div className="font-semibold">{plan.bandwidth}</div>
                      <div className="text-xs text-gray-400">Network Speed</div>
                    </div>
                  </motion.div>
                </div>

                {/* Deploy Button - Updated to use Discord link */}
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(124, 58, 237, 0.8)"
                  }}
                  whileTap={{ 
                    scale: 0.95,
                    boxShadow: "0 0 40px rgba(124, 58, 237, 1)"
                  }}
                  onClick={() => {
                    window.open('https://discord.com/invite/C2pfxwxeUf', '_blank');
                  }}
                  className="w-full bg-gradient-to-r from-glow-purple to-accent-purple py-3 rounded-xl font-semibold glow-purple hover:glow-purple-intense transition-all duration-300 btn-hover relative overflow-hidden mb-6"
                >
                  <span className="relative z-10">Deploy VPS</span>
                  {/* Sweep effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                </motion.button>

                {/* Features List (Collapsible) */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  whileHover={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2 overflow-hidden"
                >
                  {plan.features.slice(0, 6).map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center text-xs text-gray-400"
                    >
                      <Check size={12} className="text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </motion.div>
                  ))}
                </motion.div>

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
            All VPS plans include instant deployment, full root access, and 24/7 monitoring.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-orange-400" />
              <span>🇮🇳 Multiple Datacenters</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={16} className="text-red-400" />
              <span>DDoS Protected</span>
            </div>
            <div className="flex items-center gap-2">
              <HardDrives size={16} className="text-blue-400" />
              <span>NVMe SSD</span>
            </div>
            <div className="flex items-center gap-2">
              <WifiHigh size={16} className="text-green-400" />
              <span>1Gbps Network</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}