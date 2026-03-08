import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Softbooth 🎀 — Cute Photo Booth',
  description: 'A dreamy, blush pink photo booth experience. Capture, filter, and download your moments.',
  openGraph: {
    title: 'Softbooth 🎀',
    description: 'Your cute digital photo booth',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
