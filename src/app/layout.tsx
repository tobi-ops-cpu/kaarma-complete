import type { Metadata } from 'next'
import { ReactNode } from 'react'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'kaarma.cloud - Powerful Hosting Solutions',
  description: 'We provide powerful hosting solutions including Minecraft hosting, Website hosting, and VPS hosting with premium features.',
  keywords: 'hosting, minecraft hosting, vps hosting, website hosting, cloud hosting',
  authors: [{ name: 'kaarma.cloud' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-jet-black text-white font-inter antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}