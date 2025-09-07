'use client'

import React, { useEffect } from 'react'
import '../../styles/minecraft.css'
import Header from '../../components/Header'
import MinecraftHeroSection from '../../components/minecraft/MinecraftHeroSection'
import MinecraftPlansSection from '../../components/minecraft/MinecraftPlansSection'
// Replace the old RAMCalculatorSection with the new PremiumRAMCalculator
import PremiumRAMCalculator from '../../components/minecraft/PremiumRAMCalculator'
import PlanDetailSection from '../../components/minecraft/PlanDetailSection'
import KaarmaPanelSection from '../../components/minecraft/KaarmaPanelSection'
import ModpacksSection from '../../components/minecraft/ModpacksSection'
// Add the new Minecraft FAQ section
import MinecraftFAQSection from '../../components/minecraft/MinecraftFAQSection'
import PageAnimations from '../../components/minecraft/PageAnimations'
import Footer from '../../components/Footer'

export default function MinecraftPage() {
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
    <main className="minecraft-page min-h-screen bg-jet-black text-white overflow-x-hidden relative">
      {/* Global Page Animations */}
      <PageAnimations />
      
      {/* Navigation */}
      <Header />
      
      {/* Hero Section */}
      <MinecraftHeroSection />
      
      {/* Plans Section */}
      <MinecraftPlansSection />
      
      {/* Premium RAM Calculator */}
      <PremiumRAMCalculator />
      
      {/* Plan Detail Section */}
      <PlanDetailSection />
      
      {/* Kaarma Panel Section */}
      <KaarmaPanelSection />
      
      {/* Minecraft FAQ Section - Add this before ModpacksSection */}
      <MinecraftFAQSection />
      
      {/* Modpacks Section */}
      <ModpacksSection />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}