'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { List, X } from 'phosphor-react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Minecraft', href: '/minecraft' },
    { name: 'Web Hosting', href: '/web-hosting' },
    { name: 'VPS Hosting', href: '/vps-hosting' },
    { name: 'Support', href: '/support' },
  ]

  // Function to handle Discord link
  const handleDiscordClick = () => {
    window.open('https://discord.com/invite/C2pfxwxeUf', '_blank')
  }

  // Function to handle login
  const handleLoginClick = () => {
    window.open('https://kaarma.cloud/client/index.php?rp=/login', '_blank')
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-md py-4' : 'py-6'
        }`}
        style={{
          background: isScrolled 
            ? 'rgba(10, 10, 10, 0.8)' 
            : 'transparent',
          border: 'none'
        }}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 cursor-pointer">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-glow-purple to-accent-purple rounded-lg flex items-center justify-center font-orbitron font-bold text-xl glow-purple">
                  K
                </div>
                <span className="font-orbitron font-semibold text-xl text-glow">
                  kaarma.cloud
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => {
                const isExternal = item.href.startsWith('http') || item.href.startsWith('#')
                const Component = isExternal ? 'a' : Link
                
                return (
                  <motion.div key={item.name}>
                    <Component
                      href={item.href}
                      {...(isExternal ? {} : {})}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 0 15px rgba(124, 58, 237, 0.6)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="neuro px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:glow-purple btn-hover"
                      >
                        {item.name}
                      </motion.div>
                    </Component>
                  </motion.div>
                )
              })}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(124, 58, 237, 0.8)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDiscordClick}
                className="neuro px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:glow-purple btn-hover"
              >
                Trial
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(124, 58, 237, 1)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLoginClick}
                className="bg-gradient-to-r from-glow-purple to-accent-purple px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 glow-purple hover:glow-purple-intense btn-hover"
              >
                Login
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden neuro p-3 rounded-xl hover:glow-purple transition-all duration-300"
            >
              <List size={24} />
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 glass-card z-50 lg:hidden"
            >
              <div className="p-6">
                {/* Close Button */}
                <div className="flex justify-end mb-8">
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="neuro p-3 rounded-xl hover:glow-purple transition-all duration-300"
                  >
                    <X size={24} />
                  </motion.button>
                </div>

                {/* Navigation Items */}
                <nav className="space-y-4 mb-8">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setIsMenuOpen(false)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="block neuro p-4 rounded-xl text-center font-medium hover:glow-purple transition-all duration-300 btn-hover"
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </nav>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      handleDiscordClick()
                      setIsMenuOpen(false)
                    }}
                    className="w-full neuro p-4 rounded-xl font-medium hover:glow-purple transition-all duration-300 btn-hover"
                  >
                    Trial
                  </motion.button>
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      handleLoginClick()
                      setIsMenuOpen(false)
                    }}
                    className="w-full bg-gradient-to-r from-glow-purple to-accent-purple p-4 rounded-xl font-medium glow-purple hover:glow-purple-intense transition-all duration-300 btn-hover"
                  >
                    Login
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}