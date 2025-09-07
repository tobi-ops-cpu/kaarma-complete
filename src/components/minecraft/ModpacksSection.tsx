'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { PuzzlePiece, Download, Star } from 'phosphor-react'

export default function ModpacksSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const modpacks = [
    { name: 'RLCraft', downloads: '12.1M', rating: 4.6, image: 'https://www.curseforge.com/minecraft/modpacks/rlcraft/project_avatar' },
    { name: 'The Pixelmon Modpack', downloads: '8.9M', rating: 4.8, image: 'https://www.curseforge.com/minecraft/modpacks/the-pixelmon-modpack/project_avatar' },
    { name: 'Better MC [FORGE] - BMC4', downloads: '6.4M', rating: 4.7, image: 'https://www.curseforge.com/minecraft/modpacks/better-mc-forge-bmc4/project_avatar' },
    { name: 'All the Mods 10 - ATM10', downloads: '2.1M', rating: 4.9, image: 'https://www.curseforge.com/minecraft/modpacks/all-the-mods-10/project_avatar' },
    { name: 'DawnCraft - Echoes of Legends', downloads: '5.2M', rating: 4.8, image: 'https://www.curseforge.com/minecraft/modpacks/dawn-craft/project_avatar' },
    { name: 'Prominence II: Hasturian Era', downloads: '1.8M', rating: 4.7, image: 'https://www.curseforge.com/minecraft/modpacks/prominence-2-rpg/project_avatar' },
    { name: 'Fabulously Optimized', downloads: '7.3M', rating: 4.9, image: 'https://www.curseforge.com/minecraft/modpacks/fabulously-optimized/project_avatar' },
    { name: 'SkyFactory 4', downloads: '8.7M', rating: 4.9, image: 'https://www.curseforge.com/minecraft/modpacks/skyfactory-4/project_avatar' },
    { name: 'FTB Infinity Evolved', downloads: '5.3M', rating: 4.8, image: 'https://www.curseforge.com/minecraft/modpacks/ftb-infinity-evolved/project_avatar' },
    { name: 'Valhelsia 5', downloads: '1.8M', rating: 4.8, image: 'https://www.curseforge.com/minecraft/modpacks/valhelsia-5/project_avatar' },
    { name: 'SevTech: Ages', downloads: '4.1M', rating: 4.6, image: 'https://www.curseforge.com/minecraft/modpacks/sevtech-ages/project_avatar' },
    { name: 'Roguelike Adventures and Dungeons', downloads: '3.8M', rating: 4.7, image: 'https://www.curseforge.com/minecraft/modpacks/roguelike-adventures-and-dungeons/project_avatar' },
    { name: 'Direwolf20 1.20', downloads: '2.7M', rating: 4.5, image: 'https://www.curseforge.com/minecraft/modpacks/direwolf20-120/project_avatar' },
    { name: 'Cobblemon Official Modpack [Fabric]', downloads: '1.3M', rating: 4.7, image: 'https://www.curseforge.com/minecraft/modpacks/cobblemon-fabric/project_avatar' },
    { name: 'Cursed Walking - Modern Zombie Apocalypse', downloads: '2.4M', rating: 4.5, image: 'https://www.curseforge.com/minecraft/modpacks/cursed-walking-a-modern-zombie-apocalypse/project_avatar' },
    { name: 'DeceasedCraft - Modern Zombie Apocalypse', downloads: '3.2M', rating: 4.6, image: 'https://www.curseforge.com/minecraft/modpacks/deceasedcraft/project_avatar' },
    { name: 'Immersed With Shaders', downloads: '1.7M', rating: 4.8, image: 'https://www.curseforge.com/minecraft/modpacks/immersed-with-shaders/project_avatar' },
    { name: 'Cave Horror Project 1', downloads: '1.1M', rating: 4.3, image: 'https://www.curseforge.com/minecraft/modpacks/cave-horror-project/project_avatar' },
    { name: 'Beyond Depth', downloads: '856K', rating: 4.4, image: 'https://www.curseforge.com/minecraft/modpacks/beyond-depth/project_avatar' },
    { name: 'Cisco\'s Fantasy Medieval RPG [Ultimate]', downloads: '982K', rating: 4.5, image: 'https://www.curseforge.com/minecraft/modpacks/ciscos-adventure-rpg-ultimate/project_avatar' }
  ]

  const plugins = [
    { name: 'EssentialsX', downloads: '45M', rating: 4.9, logo: '🛠️' },
    { name: 'WorldEdit', downloads: '32M', rating: 4.8, logo: '🌍' },
    { name: 'Vault', downloads: '28M', rating: 4.7, logo: '🏦' },
    { name: 'LuckPerms', downloads: '25M', rating: 4.9, logo: '🔐' },
    { name: 'WorldGuard', downloads: '22M', rating: 4.8, logo: '🛡️' },
    { name: 'PlaceholderAPI', downloads: '18M', rating: 4.6, logo: '📝' },
    { name: 'Citizens', downloads: '15M', rating: 4.7, logo: '👥' },
    { name: 'McMMO', downloads: '12M', rating: 4.5, logo: '⚔️' },
    // New plugins from user's list
    { name: 'Just Enough Items (JEI)', downloads: '89M', rating: 4.9, image: 'https://www.curseforge.com/minecraft/mc-mods/jei/project_avatar' },
    { name: 'Mouse Tweaks', downloads: '50M', rating: 4.8, image: 'https://www.curseforge.com/minecraft/mc-mods/mouse-tweaks/project_avatar' },
    { name: 'AppleSkin', downloads: '45M', rating: 4.7, image: 'https://www.curseforge.com/minecraft/mc-mods/appleskin/project_avatar' },
    { name: 'Bookshelf', downloads: '40M', rating: 4.6, image: 'https://www.curseforge.com/minecraft/mc-mods/bookshelf/project_avatar' },
    { name: 'Controlling', downloads: '38M', rating: 4.7, image: 'https://www.curseforge.com/minecraft/mc-mods/controlling/project_avatar' },
    { name: 'Clumps', downloads: '35M', rating: 4.6, image: 'https://www.curseforge.com/minecraft/mc-mods/clumps/project_avatar' },
    { name: 'Cloth Config API (Fabric/Forge/NeoForge)', downloads: '32M', rating: 4.8, image: 'https://www.curseforge.com/minecraft/mc-mods/cloth-config/project_avatar' },
    { name: 'Waystones', downloads: '29M', rating: 4.7, image: 'https://www.curseforge.com/minecraft/mc-mods/waystones/project_avatar' },
    { name: 'GeckoLib', downloads: '26M', rating: 4.6, image: 'https://www.curseforge.com/minecraft/mc-mods/geckolib/project_avatar' },
    { name: 'Architectury API', downloads: '24M', rating: 4.7, image: 'https://www.curseforge.com/minecraft/mc-mods/architectury-api/project_avatar' },
    { name: 'Curios API (Forge/NeoForge)', downloads: '22M', rating: 4.6, image: 'https://www.curseforge.com/minecraft/mc-mods/curios/project_avatar' },
    { name: 'Collective', downloads: '20M', rating: 4.5, image: 'https://www.curseforge.com/minecraft/mc-mods/collective/project_avatar' }
  ]

  const mods = [
    { name: 'JEI', downloads: '89M', rating: 4.9, logo: '📋' },
    { name: 'Biomes O\' Plenty', downloads: '67M', rating: 4.8, logo: '🌲' },
    { name: 'Tinkers\' Construct', downloads: '54M', rating: 4.7, logo: '🔨' },
    { name: 'Applied Energistics 2', downloads: '43M', rating: 4.8, logo: '⚡' },
    { name: 'Thermal Expansion', downloads: '38M', rating: 4.6, logo: '🔥' },
    { name: 'Iron Chests', downloads: '35M', rating: 4.5, logo: '📦' },
    { name: 'Waystones', downloads: '29M', rating: 4.7, logo: '🗿' },
    { name: 'Create', downloads: '26M', rating: 4.9, logo: '⚙️' },
    // New mods from user's list
    { name: 'Jade 🔍', downloads: '25M', rating: 4.8, image: 'https://www.curseforge.com/minecraft/mc-mods/jade/project_avatar' },
    { name: 'Moonlight Lib', downloads: '23M', rating: 4.7, image: 'https://www.curseforge.com/minecraft/mc-mods/selene/project_avatar' },
    { name: 'Farmer\'s Delight', downloads: '21M', rating: 4.6, image: 'https://www.curseforge.com/minecraft/mc-mods/farmers-delight/project_avatar' },
    { name: 'Sophisticated Backpacks', downloads: '19M', rating: 4.7, image: 'https://www.curseforge.com/minecraft/mc-mods/sophisticated-backpacks/project_avatar' },
    { name: 'Balm', downloads: '17M', rating: 4.5, image: 'https://www.curseforge.com/minecraft/mc-mods/balm/project_avatar' },
    { name: 'Sophisticated Core', downloads: '16M', rating: 4.6, image: 'https://www.curseforge.com/minecraft/mc-mods/sophisticated-core/project_avatar' },
    { name: 'ModernFix', downloads: '15M', rating: 4.8, image: 'https://www.curseforge.com/minecraft/mc-mods/modernfix/project_avatar' },
    { name: 'Cupboard', downloads: '14M', rating: 4.4, image: 'https://www.curseforge.com/minecraft/mc-mods/cupboard/project_avatar' }
  ]

  const ItemCard = ({ item, type }: { item: any, type: string }) => {
    return (
      <div className="glass-card p-6 rounded-2xl hover:glow-purple transition-all duration-300 group cursor-pointer relative overflow-hidden">
        <div className="text-center relative z-10">
          {/* Image or Logo */}
          {item.image ? (
            <div className="w-16 h-16 mx-auto mb-4 rounded-xl overflow-hidden bg-gray-800 flex items-center justify-center">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ) : (
            <div className="text-4xl mb-4 relative">
              {item.logo}
            </div>
          )}
          <h4 className="font-orbitron font-semibold text-lg mb-2 text-glow group-hover:text-accent-purple transition-colors">
            {item.name}
          </h4>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-400 mb-3">
            <div className="flex items-center gap-1">
              <Download size={16} />
              {item.downloads}
            </div>
            <div className="flex items-center gap-1">
              <Star size={16} className="text-yellow-400" />
              {item.rating}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-purple/10 to-jet-black" />
      <div className="absolute inset-0 grid-bg opacity-10" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-glow-purple/20 to-accent-purple/20 backdrop-blur-lg border border-purple-500/30 rounded-full px-6 py-3 mb-6">
            <PuzzlePiece size={24} className="text-accent-purple" />
            <span className="font-orbitron font-semibold text-lg text-glow">Mods & Plugins</span>
          </div>
          <h2 className="font-orbitron font-bold text-4xl lg:text-6xl mb-6 text-glow">
            All Your Favorite Modpacks, Plugins & Mods
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Access thousands of mods, plugins, and modpacks with one-click installation. 
            From lightweight vanilla enhancements to massive overhaul packs.
          </p>
        </div>

        {/* Regular Modpacks Section */}
        <div className="mb-16">
          <h3 className="font-orbitron font-semibold text-2xl lg:text-3xl mb-8 text-glow text-center">
            Popular Modpacks
          </h3>
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-jet-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-jet-black to-transparent z-10 pointer-events-none" />
            
            {/* Auto-scrolling container */}
            <div className="overflow-hidden">
              <div 
                className="flex gap-6 pb-4" 
                style={{ width: 'max-content' }}
              >
                {/* Duplicate modpacks for seamless scrolling */}
                {[...modpacks, ...modpacks].map((modpack, index) => (
                  <div
                    key={modpack.name}
                    className="w-64 flex-shrink-0"
                  >
                    <ItemCard item={modpack} type="Modpack" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Plugins Section */}
        <div className="mb-16">
          <h3 className="font-orbitron font-semibold text-2xl lg:text-3xl mb-8 text-glow text-center">
            Essential Plugins
          </h3>
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-jet-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-jet-black to-transparent z-10 pointer-events-none" />
            
            {/* Scrollable container */}
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
                {plugins.map((plugin, index) => (
                  <div
                    key={plugin.name}
                    className="w-64 flex-shrink-0"
                  >
                    <ItemCard item={plugin} type="Plugin" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mods Section */}
        <div className="mb-16">
          <h3 className="font-orbitron font-semibold text-2xl lg:text-3xl mb-8 text-glow text-center">
            Top Mods
          </h3>
          <div className="relative">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-jet-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-jet-black to-transparent z-10 pointer-events-none" />
            
            {/* Scrollable container */}
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-6 pb-4" style={{ width: 'max-content' }}>
                {mods.map((mod, index) => (
                  <div
                    key={mod.name}
                    className="w-64 flex-shrink-0"
                  >
                    <ItemCard item={mod} type="Mod" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="glass-card p-6 rounded-xl">
            <div className="text-3xl font-orbitron font-bold text-glow mb-2">10,000+</div>
            <div className="text-gray-400">Available Mods</div>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <div className="text-3xl font-orbitron font-bold text-glow mb-2">5,000+</div>
            <div className="text-gray-400">Popular Plugins</div>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <div className="text-3xl font-orbitron font-bold text-glow mb-2">500+</div>
            <div className="text-gray-400">Modpacks</div>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <div className="text-3xl font-orbitron font-bold text-glow mb-2">1-Click</div>
            <div className="text-gray-400">Installation</div>
          </div>
        </div>
      </div>
    </section>
  )
}