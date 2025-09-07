'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Preset data
const presets = [
  {
    name: "Vanilla Survival",
    players: 20,
    mods: 0,
    optimizedMods: false,
    plugins: 5,
    worldSize: "medium"
  },
  {
    name: "Modded SMP",
    players: 30,
    mods: 75,
    optimizedMods: false,
    plugins: 8,
    worldSize: "large"
  },
  {
    name: "Mini-Games / Network",
    players: 200,
    mods: 0,
    optimizedMods: false,
    plugins: 40,
    worldSize: "large"
  },
  {
    name: "Heavy Modpack / Public Server",
    players: 200,
    mods: 150,
    optimizedMods: false,
    plugins: 15,
    worldSize: "huge"
  }
]

// World size options
const worldSizeOptions = [
  { value: "small", label: "Small", gb: 1 },
  { value: "medium", label: "Medium", gb: 2 },
  { value: "large", label: "Large", gb: 4 },
  { value: "huge", label: "Huge", gb: 6 }
]

export default function PremiumRAMCalculator() {
  // State for all inputs
  const [players, setPlayers] = useState<number>(20)
  const [mods, setMods] = useState<number>(0)
  const [optimizedMods, setOptimizedMods] = useState<boolean>(false)
  const [plugins, setPlugins] = useState<number>(5)
  const [worldSize, setWorldSize] = useState<string>("medium")
  const [selectedPreset, setSelectedPreset] = useState<string>("Vanilla Survival")
  const [ramResult, setRamResult] = useState<number>(0)
  const [showCustomPlan, setShowCustomPlan] = useState<boolean>(false)
  const [copied, setCopied] = useState<boolean>(false)

  // Calculate RAM based on inputs
  const calculateRAM = useCallback(() => {
    // Base RAM calculation based on players
    let baseRAM = 0
    if (players <= 50) {
      baseRAM = Math.ceil(players / 10) * 0.5
    } else if (players <= 200) {
      baseRAM = Math.ceil(players / 10) * 0.75
    } else if (players <= 1000) {
      baseRAM = Math.ceil(players / 10) * 1
    } else {
      baseRAM = Math.ceil(players / 10) * 1.25
    }

    // Plugins calculation
    const pluginsRAM = plugins * 0.1

    // Mods calculation
    const modsRAM = mods * (optimizedMods ? 0.2 : 0.35)

    // World size calculation
    const worldSizeGB = worldSizeOptions.find(option => option.value === worldSize)?.gb || 0

    // Total before safety buffer
    const total = baseRAM + pluginsRAM + modsRAM + worldSizeGB

    // Add 20% safety buffer and round up
    const finalRAM = Math.ceil(total * 1.2)

    // Check if over 64GB
    if (finalRAM > 64) {
      setShowCustomPlan(true)
      return 64
    }

    setShowCustomPlan(false)
    return finalRAM
  }, [players, mods, optimizedMods, plugins, worldSize])

  // Apply preset
  const applyPreset = (presetName: string) => {
    const preset = presets.find(p => p.name === presetName)
    if (preset) {
      setPlayers(preset.players)
      setMods(preset.mods)
      setOptimizedMods(preset.optimizedMods)
      setPlugins(preset.plugins)
      setWorldSize(preset.worldSize)
      setSelectedPreset(presetName)
    }
  }

  // Update URL with current config
  const updateURL = useCallback(() => {
    const params = new URLSearchParams({
      players: players.toString(),
      mods: mods.toString(),
      optimized: optimizedMods.toString(),
      plugins: plugins.toString(),
      world: worldSize
    })
    
    const newUrl = `${window.location.origin}${window.location.pathname}?${params.toString()}`
    window.history.replaceState({}, '', newUrl)
  }, [players, mods, optimizedMods, plugins, worldSize])

  // Read config from URL on load
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    
    const playersParam = params.get('players')
    const modsParam = params.get('mods')
    const optimizedParam = params.get('optimized')
    const pluginsParam = params.get('plugins')
    const worldParam = params.get('world')
    
    if (playersParam) setPlayers(parseInt(playersParam))
    if (modsParam) setMods(parseInt(modsParam))
    if (optimizedParam) setOptimizedMods(optimizedParam === 'true')
    if (pluginsParam) setPlugins(parseInt(pluginsParam))
    if (worldParam && worldSizeOptions.some(option => option.value === worldParam)) {
      setWorldSize(worldParam)
    }
  }, [])

  // Update calculation and URL when inputs change
  useEffect(() => {
    const result = calculateRAM()
    setRamResult(result)
    updateURL()
  }, [calculateRAM, updateURL])

  // Copy config link
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <section id="ram-calculator" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-purple/20 via-jet-black to-super-purple/20" />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(124, 58, 237, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124, 58, 237, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-glow-purple/20 to-accent-purple/20 backdrop-blur-lg border border-purple-500/30 rounded-full px-6 py-3 mb-6">
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-glow-purple to-accent-purple flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
            <span className="font-orbitron font-semibold text-lg text-glow">RAM Calculator</span>
          </div>
          <h2 className="font-orbitron font-bold text-4xl lg:text-6xl mb-6 bg-gradient-to-r from-white via-accent-purple to-glow-purple bg-clip-text text-transparent">
            Minecraft RAM Recommendation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Calculate the perfect RAM allocation for your Minecraft server based on players, mods, and plugins.
          </p>
        </motion.div>

        {/* Calculator Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-6xl mx-auto glass-card p-8 lg:p-12 rounded-3xl border border-purple-500/30 glow-purple"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Input Section */}
            <div className="space-y-8">
              <h3 className="font-orbitron font-semibold text-2xl text-glow mb-6">
                Server Configuration
              </h3>

              {/* Presets Dropdown */}
              <div className="space-y-3">
                <label className="flex items-center gap-3 text-lg font-medium">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-glow-purple to-accent-purple"></div>
                  Presets
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {presets.map((preset) => (
                    <button
                      key={preset.name}
                      onClick={() => applyPreset(preset.name)}
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        selectedPreset === preset.name
                          ? 'bg-gradient-to-r from-glow-purple to-accent-purple text-white shadow-lg'
                          : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700'
                      }`}
                    >
                      {preset.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Players Slider */}
              <div className="space-y-3">
                <label className="flex items-center gap-3 text-lg font-medium">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-glow-purple to-accent-purple"></div>
                  Players: <span className="text-accent-purple font-bold">{players.toLocaleString()}</span>
                </label>
                
                <input
                  type="range"
                  min="1"
                  max="10000"
                  value={players}
                  onChange={(e) => setPlayers(parseInt(e.target.value))}
                  className="w-full h-2 bg-gradient-to-r from-dark-purple to-glow-purple rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-400">
                  <span>1</span>
                  <span>10,000</span>
                </div>
              </div>

              {/* Mods Input */}
              <div className="space-y-3">
                <label className="flex items-center gap-3 text-lg font-medium">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-glow-purple to-accent-purple"></div>
                  Mods: <span className="text-accent-purple font-bold">{mods}</span>
                </label>
                <input
                  type="number"
                  min="0"
                  max="200"
                  value={mods}
                  onChange={(e) => setMods(Math.min(200, Math.max(0, parseInt(e.target.value) || 0)))}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Optimized Mods Toggle */}
              <div className="space-y-3">
                <label className="flex items-center gap-3 text-lg font-medium">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-glow-purple to-accent-purple"></div>
                  Optimized Mods
                </label>
                <div className="flex items-center">
                  <button
                    onClick={() => setOptimizedMods(!optimizedMods)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      optimizedMods ? 'bg-gradient-to-r from-glow-purple to-accent-purple' : 'bg-gray-600'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        optimizedMods ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                  <span className="ml-3 text-gray-300">
                    {optimizedMods ? 'Yes' : 'No'}
                  </span>
                </div>
              </div>

              {/* Plugins Input */}
              <div className="space-y-3">
                <label className="flex items-center gap-3 text-lg font-medium">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-glow-purple to-accent-purple"></div>
                  Plugins: <span className="text-accent-purple font-bold">{plugins}</span>
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={plugins}
                  onChange={(e) => setPlugins(Math.min(100, Math.max(0, parseInt(e.target.value) || 0)))}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* World Size Dropdown */}
              <div className="space-y-3">
                <label className="flex items-center gap-3 text-lg font-medium">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-glow-purple to-accent-purple"></div>
                  World Size
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {worldSizeOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setWorldSize(option.value)}
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        worldSize === option.value
                          ? 'bg-gradient-to-r from-glow-purple to-accent-purple text-white shadow-lg'
                          : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="space-y-8">
              <h3 className="font-orbitron font-semibold text-2xl text-glow mb-6">
                Recommendation
              </h3>

              {/* RAM Result Card */}
              <motion.div
                key={ramResult}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="glass-card p-8 rounded-2xl border border-purple-500/30 glow-purple relative overflow-hidden"
              >
                {/* Animated background */}
                <div className="absolute inset-0 opacity-20">
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'radial-gradient(circle at 30% 40%, rgba(168, 85, 247, 0.3) 0%, transparent 40%), radial-gradient(circle at 70% 60%, rgba(124, 58, 237, 0.3) 0%, transparent 40%)'
                    }}
                  />
                </div>
                
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-glow-purple/20 to-accent-purple/20 px-4 py-2 rounded-full mb-4">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-glow-purple to-accent-purple animate-pulse"></div>
                      <span className="font-orbitron text-sm">Recommended RAM</span>
                    </div>
                    
                    <div className="text-6xl font-orbitron font-bold bg-gradient-to-r from-white via-accent-purple to-glow-purple bg-clip-text text-transparent mb-2">
                      {ramResult}
                      <span className="text-2xl text-gray-400">GB</span>
                    </div>
                    
                    <p className="text-gray-400">
                      {showCustomPlan 
                        ? "Custom plan required for servers over 64GB" 
                        : "Recommended for your configuration"}
                    </p>
                  </div>

                  {/* Custom Plan Message */}
                  <AnimatePresence>
                    {showCustomPlan && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-gradient-to-r from-red-900/30 to-purple-900/30 border border-red-500/30 rounded-xl p-4 mb-6"
                      >
                        <div className="flex items-center gap-2 text-red-300">
                          <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full bg-white"></div>
                          </div>
                          <span className="font-medium">Custom Plan Required</span>
                        </div>
                        <p className="text-sm text-gray-300 mt-2">
                          For servers requiring more than 64GB RAM, please contact our sales team for a custom solution.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 px-6 py-4 bg-gradient-to-r from-glow-purple to-accent-purple rounded-xl font-bold text-white shadow-lg hover:shadow-purple-500/30 transition-all"
                    >
                      Get This Plan
                    </motion.button>
                    
                    {/* Copy Config Button */}
                    <div className="relative flex-1">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleCopy}
                        className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-xl font-bold text-white hover:bg-gray-700 transition-all flex items-center justify-center gap-2"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                          <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                        </svg>
                        Copy Config
                      </motion.button>
                      
                      {/* Copy Success Popup */}
                      <AnimatePresence>
                        {copied && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: -40, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-[-60px] left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-xl shadow-xl backdrop-blur-md border border-purple-500 whitespace-nowrap"
                          >
                            ✅ Link copied successfully!
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Calculation Breakdown */}
              <div className="glass-card p-6 rounded-2xl border border-gray-700">
                <h4 className="font-orbitron font-semibold text-lg mb-4 text-gray-300">Calculation Breakdown</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Base RAM:</span>
                    <span className="text-white">{Math.max(0.5, Math.floor(players / 10) * (players <= 50 ? 0.5 : players <= 200 ? 0.75 : players <= 1000 ? 1 : 1.25)).toFixed(2)} GB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Plugins:</span>
                    <span className="text-white">{(plugins * 0.1).toFixed(2)} GB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Mods:</span>
                    <span className="text-white">{(mods * (optimizedMods ? 0.2 : 0.35)).toFixed(2)} GB</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">World Size:</span>
                    <span className="text-white">{worldSizeOptions.find(w => w.value === worldSize)?.gb || 0} GB</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-700">
                    <span className="text-gray-400">Subtotal:</span>
                    <span className="text-white">
                      {(
                        Math.max(0.5, Math.floor(players / 10) * (players <= 50 ? 0.5 : players <= 200 ? 0.75 : players <= 1000 ? 1 : 1.25)) +
                        (plugins * 0.1) +
                        (mods * (optimizedMods ? 0.2 : 0.35)) +
                        (worldSizeOptions.find(w => w.value === worldSize)?.gb || 0)
                      ).toFixed(2)} GB
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-700">
                    <span className="text-gray-400">+20% Safety Buffer:</span>
                    <span className="text-white">{(ramResult * 0.2).toFixed(2)} GB</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-600">
                    <span className="font-bold text-gray-300">Total:</span>
                    <span className="font-bold text-white">{ramResult} GB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}