"use client"
import { useEffect, useState } from 'react'
import { SectionHeading } from './SectionHeading'
import Feature1 from '../assets/feature1.png'
import Phisher from '../assets/PhisherPic.png'
import Cipher from '../assets/CipherPic.png'

// Use existing assets to ensure visuals show up
const images = [
  // Public files are named with spaces: "Rectangle 23.png" etc.
  { src: '/Rectangle 23.png', alt: 'QCUland Feature Artwork', fallback: Feature1 },
  { src: '/Rectangle 24.png', alt: 'Shadow Network Threat', fallback: Phisher },
  { src: '/Rectangle 25.png', alt: 'Cipher Network', fallback: Cipher },
] as const

export function GameSynopsisImageRotator() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 6000) // 6 seconds auto advance
    return () => clearInterval(id)
  }, [])

  return (
    <div>
      <SectionHeading title="About - Game Synopsis" />
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-xl font-bold">QCUland</h3>
          <ul className="mt-3 space-y-1 text-sm text-slate-600 dark:text-slate-300">
            <li><strong>Genre:</strong> Puzzle-Action, Narrative</li>
            <li><strong>Release:</strong> TBA</li>
            <li><strong>Platform:</strong> Browser</li>
          </ul>
          <p className="mt-4 text-slate-700 dark:text-slate-200">
            In a campus under digital siege, you play as a defender unraveling deception. Solve logic puzzles,
            counter visual tricks, and face the Phisher Bot in strategic encounters.
          </p>
        </div>
        <div className="relative h-64 overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-black">
          {images.map((img, i) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                i === index ? 'opacity-100' : 'opacity-0'
              }`}
              onError={(e) => {
                const el = e.currentTarget as HTMLImageElement
                if (el.src !== (img.fallback as string)) {
                  el.src = img.fallback as string
                }
              }}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          ))}
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full transition-colors ${
                  i === index ? 'bg-[var(--color-primary)]' : 'bg-slate-300 dark:bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
