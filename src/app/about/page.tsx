'use client'

import React, { useEffect } from 'react'
import Header from '@/components/Header'
import AboutHero from '@/components/about/AboutHero'
import OurMission from '@/components/about/OurMission'
import OurTeam from '@/components/about/OurTeam'
import WhyChooseUs from '@/components/about/WhyChooseUs'
import Footer from '@/components/Footer'

export default function AboutPage() {
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
      <AboutHero />
      <OurMission />
      <OurTeam />
      <WhyChooseUs />
      <Footer />
    </main>
  )
}