"use client"
import { Hero } from '../components/Hero'
import { SectionHeading } from '../components/SectionHeading'
import { CarouselPlaceholder } from '../components/CarouselPlaceholder'
import { ChapterOneCarousel } from '../components/ChapterOneCarousel'
import { CharacterCarousel } from '../components/CharacterCarousel'
import { GameSynopsisSection } from '../components/GameSynopsisSection'
import { useState } from 'react'

export default function Home() {
  const [mapOpen, setMapOpen] = useState(false)
  return (
    <main className="relative">
      <Hero />

      <GameSynopsisSection />

      <section className="container-responsive py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
        {/* Chapter 1 carousel + synced text */}
        <ChapterOneCarousel />
      </section>

      <section className="container-responsive py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
        <SectionHeading title="Characters" />
        <CharacterCarousel />
      </section>

      {/* News has its own page; removed inline section */}

      <section className="container-responsive py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
        <button
          onClick={() => setMapOpen(true)}
          className="group relative w-full overflow-hidden rounded-2xl border border-black/5 shadow-card focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] dark:border-white/10"
          style={{
            backgroundImage: (() => {
              const base = (import.meta as any).env?.BASE_URL || '/'
              const withBase = (p: string) => {
                const cleaned = p.replace(/^\//,'').replace(/\s/g, '%20')
                return `${(base.endsWith('/') ? base : base + '/')}${cleaned}`
              }
              return `url(${withBase('/V4 Map.png')})`
            })(),
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '22rem'
          }}
          aria-label="Open full map view"
        >
          <div className="absolute inset-0 bg-black/55 transition-opacity group-hover:bg-black/50" />
          <div className="relative h-full w-full p-6 sm:p-10 flex items-start">
            <div>
              <h2 className="text-3xl font-extrabold tracking-wide text-white sm:text-4xl">QCU LAND MAP</h2>
              <p className="mt-3 max-w-xl text-sm text-white/90">
                Click to view the full campus layout and explore zones.
              </p>
            </div>
          </div>
        </button>
      </section>

      {mapOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-5xl">
            <button
              onClick={() => setMapOpen(false)}
              aria-label="Close map"
              className="absolute right-3 top-3 rounded-md bg-white/90 px-3 py-1 text-sm font-semibold text-slate-800 shadow hover:bg-white dark:bg-black/70 dark:text-white"
            >
              ✕
            </button>
            <img
              src={(() => {
                const base = (import.meta as any).env?.BASE_URL || '/'
                const withBase = (p: string) => {
                  const cleaned = p.replace(/^\//,'').replace(/\s/g, '%20')
                  return `${(base.endsWith('/') ? base : base + '/')}${cleaned}`
                }
                return withBase('/V4 Map.png')
              })()}
              alt="QCU Land full map"
              className="w-full rounded-xl object-contain"
              loading="eager"
            />
          </div>
          <button
            onClick={() => setMapOpen(false)}
            className="absolute inset-0"
            aria-hidden="true"
            tabIndex={-1}
          />
        </div>
      )}
    </main>
  )
}
