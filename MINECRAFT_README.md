# 🟪 Kaarma.cloud Minecraft Hosting Page

A premium, fully interactive Minecraft hosting page with advanced animations, real-time RAM calculator, and mob-themed plans.

## 🎮 Features Implemented

### 🎨 Design & Theme
- **Jet Black + Super Dark Purple** - Premium dark theme throughout
- **Neumorphism 3D Buttons** - Tactile, interactive button designs
- **Glassmorphic Cards** - Translucent cards with blur effects
- **Glowing Elements** - Purple glow effects on interactive elements
- **Orbitron + Inter Fonts** - Futuristic headings with clean body text

### 🚀 Hero Section
- **Animated Ryzen Badge** - Floating badge with CPU branding
- **Anime.js Title Animation** - Letter-by-letter reveal with effects
- **Spline 3D Background** - Interactive 3D Minecraft-themed scene
- **Floating Particles** - Dynamic particle system overlay
- **Smooth Entrance Animations** - Staggered element animations

### 🧮 RAM Calculator
- **Real-time Calculations** - Instant recommendations based on inputs
- **Interactive Sliders** - Custom-styled range inputs with glow effects
- **Dynamic Plan Suggestions** - Automatically suggests best plan
- **Smooth Animations** - Results fade in with glow effects
- **Performance Metrics** - Real-time latency and performance display

### 👹 Mob-Themed Plans
- **8 Unique Plans** - From Creeper (2GB) to Titan (32GB)
- **Animated Cards** - Hover effects with tilt, glow, and enlarge
- **Gradient Borders** - Continuously moving animated borders
- **Interactive Icons** - Mob emojis with rotation on hover
- **Detailed Specifications** - Complete feature lists per plan

### 📋 Plan Detail Section
- **Interactive Plan Selector** - Switch between plans seamlessly
- **Animated Transitions** - Smooth fade between plan details
- **Technical Specifications** - Detailed hardware and feature lists
- **Visual Stats** - Quick-reference cards for key metrics
- **Hover Animations** - Glow and scale effects on interaction

### 🎛️ Kaarma Panel Showcase
- **Auto-rotating Carousel** - 5 panel screenshots with auto-advance
- **Manual Navigation** - Previous/next controls with smooth transitions
- **Premium Features List** - Animated feature cards with icons
- **3D Panel Display** - Screenshots with depth and glow effects
- **Progress Indicators** - Visual progress bar and dot indicators

### 🧩 Modpacks & Plugins
- **Horizontal Scrolling** - Smooth scrollable rows with fade edges
- **Popular Content** - Real download numbers and ratings
- **Hover Effects** - Cards enlarge and glow on interaction
- **One-click Installation** - Buttons appear on hover
- **Category Sections** - Separate sections for modpacks, plugins, and mods

### ✨ Animations & Interactions
- **Scroll-triggered Animations** - Elements animate into view
- **Micro-interactions** - Subtle hover and click feedback
- **Smooth Transitions** - Fluid motion between states
- **Loading States** - Progress indicators and animated elements
- **Responsive Design** - Optimized for all device sizes

## 🛠 Technical Implementation

### Dependencies
- **Next.js 14** - React framework with app router
- **Framer Motion** - Advanced animations and interactions
- **Anime.js** - Text and element animations
- **Phosphor Icons** - Modern icon library
- **Tailwind CSS** - Utility-first styling

### Key Components
```
src/
├── app/minecraft/page.tsx - Main Minecraft page
├── components/minecraft/
│   ├── MinecraftHeroSection.tsx - Hero with 3D background
│   ├── RAMCalculatorSection.tsx - Interactive calculator
│   ├── MinecraftPlansSection.tsx - Mob-themed plans grid
│   ├── PlanDetailSection.tsx - Detailed plan information
│   ├── KaarmaPanelSection.tsx - Panel carousel showcase
│   └── ModpacksSection.tsx - Scrollable content sections
```

### Animations
- **On Load**: Fade-in with upward motion
- **On Scroll**: Opacity and blur reveal animations
- **On Hover**: Glow, enlarge, tilt, and pulse effects
- **Interactive**: Real-time visual feedback

### Performance Features
- **Optimized Animations** - Hardware-accelerated transforms
- **Lazy Loading** - Components load as needed
- **Smooth Scrolling** - Native smooth scroll behavior
- **Responsive Design** - Mobile-first approach

## 🎯 User Experience

### Interactive Elements
- **RAM Calculator** - Real-time plan recommendations
- **Plan Comparison** - Easy switching between options
- **Carousel Navigation** - Manual and automatic progression
- **Smooth Scrolling** - Anchor-based navigation

### Visual Feedback
- **Hover States** - All interactive elements respond
- **Loading Animations** - Visual progress indicators
- **Glow Effects** - Purple highlighting system
- **Scale Transforms** - Size changes on interaction

### Accessibility
- **Keyboard Navigation** - Tab-friendly interface
- **Focus States** - Clear visual focus indicators
- **Responsive Text** - Scales appropriately
- **Color Contrast** - Accessible purple/white contrast

## 🌐 Routes

- **/** - Main homepage
- **/minecraft** - Dedicated Minecraft hosting page

## 🚀 Getting Started

1. **Start the development server:**
   ```bash
   npx next dev
   ```

2. **Open your browser:**
   - Homepage: `http://localhost:3000`
   - Minecraft Page: `http://localhost:3000/minecraft`

3. **Experience the animations:**
   - Scroll through sections to see animations
   - Hover over cards and buttons for effects
   - Use the RAM calculator for real-time recommendations
   - Navigate through the panel carousel

## 🎮 Minecraft-Specific Features

### Plan Names & Themes
- **Creeper** (2GB) - Entry-level explosive power
- **Skeleton** (4GB) - Precision targeting popular plan
- **Zombie** (6GB) - Relentless performance
- **Enderman** (8GB) - Teleportation-speed hosting
- **Blaze** (12GB) - Fire-powered performance
- **Wither** (16GB) - Boss-level capabilities
- **Dragon** (24GB) - Legendary server power
- **Titan** (32GB) - Ultimate unlimited hosting

### Premium Features
- **One-click Mod Installation** - 10,000+ available mods
- **Automated Backups** - Real-time world protection
- **Easy Configuration** - Web-based server management
- **Database Management** - MySQL integration
- **Instant Server Control** - Start/stop with zero lag

---

**Built with ❤️ for the Minecraft community**

*Experience premium hosting with style.*