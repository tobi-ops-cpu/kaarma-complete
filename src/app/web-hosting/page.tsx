'use client'

import React, { useEffect } from 'react'
import Header from '@/components/Header'
import WebHostingHero from '@/components/web-hosting/WebHostingHero'
import WebHostingPlans from '@/components/web-hosting/WebHostingPlans'
import HostingFeatures from '@/components/web-hosting/HostingFeatures'
import GlobalLocationsSection from '@/components/GlobalLocationsSection'
import WebHostingFAQ from '@/components/web-hosting/WebHostingFAQ'
import Footer from '@/components/Footer'

export default function WebHostingPage() {
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
      <WebHostingHero />
      <WebHostingPlans />
      <HostingFeatures />
      <WebHostingFAQ />
      <Footer />
    </main>
  )
}