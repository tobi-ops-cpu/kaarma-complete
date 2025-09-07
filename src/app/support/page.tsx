'use client'

import React, { useEffect } from 'react'
import Header from '@/components/Header'
import SupportHero from '@/components/support/SupportHero'
import HowCanWeHelp from '@/components/support/HowCanWeHelp'
import ResponseTimes from '@/components/support/ResponseTimes'
import QuickGuides from '@/components/support/QuickGuides'
import SupportFAQ from '@/components/support/SupportFAQ'
import CommunitySection from '@/components/support/CommunitySection'
import TrustBadges from '@/components/support/TrustBadges'
import Footer from '@/components/Footer'

export default function SupportPage() {
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
      <SupportHero />
      <HowCanWeHelp />
      <ResponseTimes />
      <QuickGuides />
      <SupportFAQ />
      <CommunitySection />
      <TrustBadges />
      <Footer />
    </main>
  )
}