'use client'

import React, { useEffect } from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import PremiumFeaturesSection from '@/components/PremiumFeaturesSection'
import GlobalLocationsSection from '@/components/GlobalLocationsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'
import JoinUsSection from '@/components/JoinUsSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
    }

    // Add click listeners to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]')
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick)
    })

    // Cleanup
    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleAnchorClick)
      })
    }
  }, [])

  return (
    <main className="min-h-screen bg-jet-black text-white overflow-x-hidden">
      {/* Navigation */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Services Section */}
      <div id="minecraft">
        <ServicesSection />
      </div>
      
      {/* Premium Features */}
      <PremiumFeaturesSection />
      
      {/* Global Locations */}
      <GlobalLocationsSection />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* FAQ Section */}
      <div id="faq">
        <FAQSection />
      </div>
      
      {/* Join Us Section */}
      <JoinUsSection />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}