'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { HardDrives, Cpu, Shield, Users, Database, CloudArrowUp, Check, CaretLeft, CaretRight } from 'phosphor-react'

export default function PlanDetailSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [selectedPlan, setSelectedPlan] = useState('zombie')
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Listen for plan selection events from MinecraftPlansSection
  useEffect(() => {
    const handleSelectPlan = (event: CustomEvent) => {
      setSelectedPlan(event.detail);
    };

    window.addEventListener('selectPlan', handleSelectPlan as EventListener);
    return () => {
      window.removeEventListener('selectPlan', handleSelectPlan as EventListener);
    };
  }, []);

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

  // Update the planDetails object to use DDR5 instead of DDR4
  const planDetails = {
    zombie: {
      name: 'Zombie',
      emoji: '🧟',
      mob: 'mob-zombie',
      ram: '2GB',
      storage: '12GB',
      players: '5-10',
      price: 1.00,
      specifications: [
        { icon: Cpu, label: 'CPU', value: 'AMD Ryzen 7/Ryzen 9 (100% CPU)' },
        { icon: HardDrives, label: 'RAM', value: '2GB DDR4/DDR5 ECC Memory' },
        { icon: HardDrives, label: 'Storage', value: '12GB NVMe SSD Storage' },
        { icon: Users, label: 'Players', value: 'Up to 10 players' },
        { icon: Database, label: 'Ports', value: '1 allocated port' },
        { icon: CloudArrowUp, label: 'Backups', value: '1 automated backup slot' }
      ],
      features: [
        'One-click Minecraft installation',
        'Basic mod support (up to 10 mods)',
        'Plugin support (up to 5 plugins)',
        'File manager access',
        'SFTP access',
        '24/7 support',
        'DDoS protection',
        'Free subdomain'
      ]
    },
    skeleton: {
      name: 'Skeleton',
      emoji: '🏹',
      mob: 'mob-skeleton',
      ram: '4GB',
      storage: '25GB',
      players: '10-20',
      price: 2.00,
      specifications: [
        { icon: Cpu, label: 'CPU', value: 'AMD Ryzen 7/Ryzen 9 (180% CPU)' },
        { icon: HardDrives, label: 'RAM', value: '4GB DDR4/DDR5 ECC Memory' },
        { icon: HardDrives, label: 'Storage', value: '25GB NVMe SSD Storage' },
        { icon: Users, label: 'Players', value: 'Up to 20 players' },
        { icon: Database, label: 'Ports', value: '1 allocated port' },
        { icon: CloudArrowUp, label: 'Backups', value: '1 automated backup slot' }
      ],
      features: [
        'Advanced plugin support (up to 15 plugins)',
        'Mod support (up to 20 mods)',
        'Mod & Plugin manager',
        'SFTP access',
        'Console access',
        '24/7 priority support',
        'DDoS protection',
        'Custom subdomain'
      ]
    },
    creeper: {
      name: 'Creeper',
      emoji: '💥',
      mob: 'mob-creeper',
      ram: '6GB',
      storage: '36GB',
      players: '15-25',
      price: 4.00,
      specifications: [
        { icon: Cpu, label: 'CPU', value: 'AMD Ryzen 7/Ryzen 9 (250% CPU)' },
        { icon: HardDrives, label: 'RAM', value: '6GB DDR4/DDR5 ECC Memory' },
        { icon: HardDrives, label: 'Storage', value: '36GB NVMe SSD Storage' },
        { icon: Users, label: 'Players', value: 'Up to 25 players' },
        { icon: Database, label: 'Ports', value: '1 allocated port' },
        { icon: CloudArrowUp, label: 'Backups', value: '1 automated backup slot' }
      ],
      features: [
        'Full modpack support (up to 30 mods)',
        'Advanced plugin support (up to 20 plugins)',
        'Advanced console access',
        'Automatic backups',
        'World management tools',
        'VIP support',
        'DDoS protection',
        'Custom domain support'
      ]
    },
    spider: {
      name: 'Spider',
      emoji: '🕷️',
      mob: 'mob-spider',
      ram: '8GB',
      storage: '48GB',
      players: '20-30',
      price: 6.00,
      specifications: [
        { icon: Cpu, label: 'CPU', value: 'AMD Ryzen 7/Ryzen 9 (300% CPU)' },
        { icon: HardDrives, label: 'RAM', value: '8GB DDR4/DDR5 ECC Memory' },
        { icon: HardDrives, label: 'Storage', value: '48GB NVMe SSD Storage' },
        { icon: Users, label: 'Players', value: 'Up to 30 players' },
        { icon: Database, label: 'Ports', value: '2 allocated ports' },
        { icon: CloudArrowUp, label: 'Backups', value: '1 automated backup slot' }
      ],
      features: [
        'Medium modpack support (up to 40 mods)',
        'Extensive plugin support (up to 25 plugins)',
        'Multi-world support',
        'Database access',
        'Advanced scheduling',
        'Priority support',
        'Enhanced DDoS protection',
        'SSL certificates'
      ]
    },
    breeze: {
      name: 'Breeze',
      emoji: '💨',
      mob: 'mob-breeze',
      ram: '10GB',
      storage: '60GB',
      players: '25-40',
      price: 8.00,
      specifications: [
        { icon: Cpu, label: 'CPU', value: 'AMD Ryzen 7/Ryzen 9 (350% CPU)' },
        { icon: HardDrives, label: 'RAM', value: '10GB DDR4/DDR5 ECC Memory' },
        { icon: HardDrives, label: 'Storage', value: '60GB NVMe SSD Storage' },
        { icon: Users, label: 'Players', value: 'Up to 40 players' },
        { icon: Database, label: 'Ports', value: '2 allocated ports' },
        { icon: CloudArrowUp, label: 'Backups', value: '1 automated backup slot' }
      ],
      features: [
        'Large modpack support (up to 50 mods)',
        'Unlimited plugin support',
        'Advanced world management',
        'MySQL database included',
        'Custom Java versions',
        'White-glove support',
        'Enterprise DDoS protection',
        'CDN integration'
      ]
    },
    blaze: {
      name: 'Blaze',
      emoji: '🔥',
      mob: 'mob-blaze',
      ram: '12GB',
      storage: '72GB',
      players: '30-50',
      price: 10.00,
      specifications: [
        { icon: Cpu, label: 'CPU', value: 'AMD Ryzen 7/Ryzen 9 (400% CPU)' },
        { icon: HardDrives, label: 'RAM', value: '12GB DDR4/DDR5 ECC Memory' },
        { icon: HardDrives, label: 'Storage', value: '72GB NVMe SSD Storage' },
        { icon: Users, label: 'Players', value: 'Up to 50 players' },
        { icon: Database, label: 'Ports', value: '3 allocated ports' },
        { icon: CloudArrowUp, label: 'Backups', value: '1 automated backup slot' }
      ],
      features: [
        'Heavy modpack support (up to 60 mods)',
        'Unlimited plugin support',
        'Network server support',
        'Multiple world instances',
        'Advanced monitoring',
        'Dedicated support agent',
        'Enhanced DDoS protection',
        'Global CDN'
      ]
    },
    'iron-golem': {
      name: 'Iron Golem',
      emoji: '⚔️',
      mob: 'mob-iron-golem',
      ram: '16GB',
      storage: '96GB',
      players: '40-60',
      price: 14.00,
      specifications: [
        { icon: Cpu, label: 'CPU', value: 'AMD Ryzen 7/Ryzen 9 (450% CPU - Multi-Core)' },
        { icon: HardDrives, label: 'RAM', value: '16GB DDR4/DDR5 ECC Memory' },
        { icon: HardDrives, label: 'Storage', value: '96GB NVMe SSD Storage' },
        { icon: Users, label: 'Players', value: 'Up to 60 players' },
        { icon: Database, label: 'Ports', value: '4 allocated ports' },
        { icon: CloudArrowUp, label: 'Backups', value: '2 automated backup slots' }
      ],
      features: [
        'Extreme modpack support (up to 80 mods)',
        'Unlimited plugin support',
        'BungeeCord network support',
        'Custom server software',
        'Real-time analytics',
        'Dedicated support team',
        'Enterprise security',
        'Priority hardware allocation'
      ]
    },
    ghast: {
      name: 'Ghast',
      emoji: '👻',
      mob: 'mob-ghast',
      ram: '20GB',
      storage: '120GB',
      players: '50-80',
      price: 16.00,
      specifications: [
        { icon: Cpu, label: 'CPU', value: 'AMD Ryzen 7/Ryzen 9 (550% CPU - Multi-Core)' },
        { icon: HardDrives, label: 'RAM', value: '20GB DDR4/DDR5 ECC Memory' },
        { icon: HardDrives, label: 'Storage', value: '120GB NVMe SSD Storage' },
        { icon: Users, label: 'Players', value: 'Up to 80 players' },
        { icon: Database, label: 'Ports', value: '5 allocated ports' },
        { icon: CloudArrowUp, label: 'Backups', value: '2 automated backup slots' }
      ],
      features: [
        'Ultimate modpack support (100+ mods)',
        'Unlimited plugin support',
        'Multi-server networks',
        'Custom development support',
        'Advanced APIs',
        '24/7 dedicated support',
        'Custom security solutions',
        'Guaranteed resources'
      ]
    },
    shulker: {
      name: 'Shulker',
      emoji: '📦',
      mob: 'mob-shulker',
      ram: '24GB',
      storage: '135GB',
      players: '60-100',
      price: 18.00,
      specifications: [
        { icon: Cpu, label: 'CPU', value: 'AMD Ryzen 7/Ryzen 9 (600% CPU - Multi-Core)' },
        { icon: HardDrives, label: 'RAM', value: '24GB DDR4/DDR5 ECC Memory' },
        { icon: HardDrives, label: 'Storage', value: '135GB NVMe SSD Storage' },
        { icon: Users, label: 'Players', value: 'Up to 100 players' },
        { icon: Database, label: 'Ports', value: '6 allocated ports' },
        { icon: CloudArrowUp, label: 'Backups', value: '3 automated backup slots' }
      ],
      features: [
        'Massive modpack support (150+ mods)',
        'Unlimited everything',
        'Enterprise network solutions',
        'Custom infrastructure',
        'Advanced monitoring suite',
        'Personal account manager',
        'Bank-level security',
        'SLA guarantees'
      ]
    },
    eman: {
      name: 'Eman',
      emoji: '🌌',
      mob: 'mob-eman',
      ram: '28GB',
      storage: '145GB',
      players: '80-120',
      price: 20.00,
      specifications: [
        { icon: Cpu, label: 'CPU', value: 'AMD Ryzen 7/Ryzen 9 (650% CPU - Multi-Core)' },
        { icon: HardDrives, label: 'RAM', value: '28GB DDR4/DDR5 ECC Memory' },
        { icon: HardDrives, label: 'Storage', value: '145GB NVMe SSD Storage' },
        { icon: Users, label: 'Players', value: 'Up to 120 players' },
        { icon: Database, label: 'Ports', value: '7 allocated ports' },
        { icon: CloudArrowUp, label: 'Backups', value: '3 automated backup slots' }
      ],
      features: [
        'Unlimited modpack support',
        'Enterprise plugin ecosystem',
        'Multi-region deployments',
        'Custom OS configurations',
        'Real-time performance tuning',
        'Executive support level',
        'Compliance-ready security',
        'Performance guarantees'
      ]
    },
    wither: {
      name: 'Wither',
      emoji: '☠️',
      mob: 'mob-wither',
      ram: '32GB',
      storage: '160GB',
      players: '100-150',
      price: 24.00,
      specifications: [
        { icon: Cpu, label: 'CPU', value: 'AMD Ryzen 7/Ryzen 9 (No CPU Limit - Multi-Core)' },
        { icon: HardDrives, label: 'RAM', value: '32GB DDR4/DDR5 ECC Memory' },
        { icon: HardDrives, label: 'Storage', value: '160GB NVMe SSD Storage' },
        { icon: Users, label: 'Players', value: 'Up to 150 players' },
        { icon: Database, label: 'Ports', value: '8 allocated ports' },
        { icon: CloudArrowUp, label: 'Backups', value: '4 automated backup slots' }
      ],
      features: [
        'No limits on mods/plugins',
        'Dedicated server resources',
        'Global load balancing',
        'Custom kernel optimizations',
        'Machine learning insights',
        'C-level support access',
        'Military-grade infrastructure',
        '99.99% uptime SLA'
      ]
    },
    warden: {
      name: 'Warden',
      emoji: '🛡️',
      mob: 'mob-warden',
      ram: '48GB',
      storage: 'Unlimited',
      players: '150-200',
      price: 28.00,
      specifications: [
        { icon: Cpu, label: 'CPU', value: 'AMD Ryzen 7/Ryzen 9 (No CPU Limit - Multi-Core)' },
        { icon: HardDrives, label: 'RAM', value: '48GB DDR4/DDR5 ECC Memory' },
        { icon: HardDrives, label: 'Storage', value: 'Unlimited NVMe SSD Storage' },
        { icon: Users, label: 'Players', value: 'Up to 200 players' },
        { icon: Database, label: 'Ports', value: 'Unlimited ports' },
        { icon: CloudArrowUp, label: 'Backups', value: '6 automated backup slots' }
      ],
      features: [
        'Unlimited everything',
        'Bare metal performance',
        'Multi-cloud redundancy',
        'Custom hardware configurations',
        'AI-powered optimization',
        'White-glove concierge service',
        'Zero-trust security model',
        'Custom SLA terms'
      ]
    },
    'ender-dragon': {
      name: 'Ender Dragon',
      emoji: '🐉',
      mob: 'mob-ender-dragon',
      ram: '64GB',
      storage: 'Unlimited',
      players: '200+',
      price: 32.00,
      specifications: [
        { icon: Cpu, label: 'CPU', value: 'AMD Ryzen 7/Ryzen 9 (No CPU Limit - Multi-Core)' },
        { icon: HardDrives, label: 'RAM', value: '64GB DDR4/DDR5 ECC Memory' },
        { icon: HardDrives, label: 'Storage', value: 'Unlimited NVMe SSD Storage' },
        { icon: Users, label: 'Players', value: '200+ concurrent players' },
        { icon: Database, label: 'Ports', value: 'Unlimited ports' },
        { icon: CloudArrowUp, label: 'Backups', value: '8 automated backup slots' }
      ],
      features: [
        'Absolutely unlimited resources',
        'Dedicated infrastructure',
        'Global edge computing',
        'Custom silicon optimization',
        'Quantum-ready architecture',
        'Executive-level support',
        'Nation-state level security',
        'Custom everything'
      ]
    }
  }

  const currentPlan = planDetails[selectedPlan as keyof typeof planDetails]

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' }
)
    }
  }

  return (
    <section id="plan-details" ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
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
            Plan Details
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Dive deep into what makes each plan perfect for your Minecraft server needs.
          </p>
        </motion.div>

        {/* Plan Selector with Horizontal Scrolling - Enhanced Size */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex justify-center mb-12"
        >
          <div className="glass-card p-6 rounded-2xl max-w-7xl mx-auto relative">
            {/* Left Arrow */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollLeft}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-r from-glow-purple to-accent-purple p-3 rounded-full glow-purple hover:glow-purple-intense transition-all duration-300"
            >
              <CaretLeft size={24} className="text-white" />
            </motion.button>

            {/* Right Arrow */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollRight}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-r from-glow-purple to-accent-purple p-3 rounded-full glow-purple hover:glow-purple-intense transition-all duration-300"
            >
              <CaretRight size={24} className="text-white" />
            </motion.button>

            {/* Scrollable Tab Container - Enhanced */}
            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto scrollbar-hide px-16"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              <div className="flex gap-3 min-w-max py-2">
                {Object.entries(planDetails).map(([key, plan]) => (
                  <motion.button
                    key={key}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedPlan(key)}
                    className={`px-6 py-4 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap flex items-center gap-3 text-lg ${
                      selectedPlan === key
                        ? 'bg-gradient-to-r from-glow-purple to-accent-purple glow-purple text-white'
                        : 'hover:bg-purple-500/20 text-gray-300 hover:text-white'
                    }`}
                  >
                    {/* Mob Avatar */}
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`w-8 h-8 rounded-full ${plan.mob} bg-cover bg-center bg-no-repeat`}
                    />
                    <span className="text-xl">{plan.emoji}</span>
                    <span className="font-orbitron">{plan.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Plan Detail Card */}
        <motion.div
          key={selectedPlan}
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
          id={`plan-${selectedPlan}`}
        >
          <div className="glass-card p-8 lg:p-12 rounded-3xl glow-purple">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Plan Overview */}
              <div>
                <div className="flex items-center gap-4 mb-8">
                  {/* Mob Avatar with Animation */}
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`w-16 h-16 rounded-full ${currentPlan.mob} bg-cover bg-center bg-no-repeat`}
                  />
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-6xl"
                  >
                    {currentPlan.emoji}
                  </motion.div>
                  <div>
                    <h3 className="font-orbitron font-bold text-4xl text-glow mb-2">
                      {currentPlan.name} Plan
                    </h3>
                    <div className="text-3xl font-bold">
                      <span className="text-accent-purple">${currentPlan.price}</span>
                      <span className="text-gray-400 text-lg">/month</span>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="glass-card p-4 rounded-xl text-center"
                  >
                    <div className="text-2xl font-bold text-accent-purple">{currentPlan.ram}</div>
                    <div className="text-sm text-gray-400">RAM</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="glass-card p-4 rounded-xl text-center"
                  >
                    <div className="text-2xl font-bold text-accent-purple">{currentPlan.storage}</div>
                    <div className="text-sm text-gray-400">Storage</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="glass-card p-4 rounded-xl text-center"
                  >
                    <div className="text-2xl font-bold text-accent-purple">{currentPlan.players}</div>
                    <div className="text-sm text-gray-400">Players</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="glass-card p-4 rounded-xl text-center"
                  >
                    <div className="text-2xl font-bold text-accent-purple">99.9%</div>
                    <div className="text-sm text-gray-400">Uptime</div>
                  </motion.div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 25px rgba(124, 58, 237, 0.8)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open('https://discord.com/invite/C2pfxwxeUf', '_blank')}
                    className="flex-1 bg-gradient-to-r from-glow-purple to-accent-purple py-4 rounded-xl font-semibold glow-purple hover:glow-purple-intense transition-all duration-300"
                  >
                    Start Free Trial
                  </motion.button>
                  <motion.a
                    href={billingLinks[currentPlan.name] || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 neuro py-4 rounded-xl font-semibold hover:glow-purple transition-all duration-300 text-center inline-block"
                  >
                    Order Now
                  </motion.a>
                </div>
              </div>

              {/* Specifications */}
              <div>
                <h4 className="font-orbitron font-semibold text-2xl text-glow mb-6">
                  Technical Specifications
                </h4>
                <div className="space-y-4 mb-8">
                  {currentPlan.specifications.map((spec, index) => {
                    const IconComponent = spec.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        className="flex items-center gap-4 p-4 glass-card rounded-xl hover:glow-purple transition-all duration-300"
                      >
                        <IconComponent size={24} className="text-accent-purple flex-shrink-0" />
                        <div>
                          <div className="font-semibold">{spec.label}</div>
                          <div className="text-gray-400 text-sm">{spec.value}</div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>

                <h4 className="font-orbitron font-semibold text-2xl text-glow mb-6">
                  Included Features
                </h4>
                <div className="space-y-3">
                  {currentPlan.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <Check size={16} className="text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}