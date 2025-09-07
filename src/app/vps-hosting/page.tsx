'use client'

import React, { useEffect } from 'react'
import Header from '@/components/Header'
import VPSHostingHero from '@/components/vps-hosting/VPSHostingHero'
import VPSHostingPlans from '@/components/vps-hosting/VPSHostingPlans'
import VPSFeatures from '@/components/vps-hosting/VPSFeatures'
import VPSFAQSection from '@/components/vps-hosting/VPSFAQSection'
import Footer from '@/components/Footer'

export default function VPSHostingPage() {
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

    const anchorLinks = document.querySelectorAll('a[href^="#"]')
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick)
    })

    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleAnchorClick)
      })
    }
  }, [])

  return (
    <main className="min-h-screen bg-jet-black text-white overflow-x-hidden">
      <Header />
      <VPSHostingHero />
      <VPSHostingPlans />
      <VPSFeatures />
      <VPSFAQSection />
      <Footer />
    </main>
  )
}