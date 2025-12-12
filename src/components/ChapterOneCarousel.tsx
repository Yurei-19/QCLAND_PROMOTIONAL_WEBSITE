"use client"
import { useEffect, useState } from 'react'

// Developer comment: Each slide associates an image with text metadata used below the carousel.
interface ChapterSlide {
  img: string
  title: string
  subtitle?: string
  description: string
}

// Developer comment: Using public paths so assets can be swapped without rebuild.
// Use existing chapter images; if missing use Rectangle 23.png as fallback placeholder.
const slides: ChapterSlide[] = [
  {
    img: '/qcu/1 (7).jpeg', // qcu image set
    title: 'Detection Phase',
    subtitle: 'Anomalies Emerge',
    description: 'Strange packet spikes ripple through the campus network. Early signs of infiltration surface. You begin tracing indicators before they vanish.'
  },
  {
    img: '/qcu/1 (8).jpeg',
    title: 'Investigation Phase',
    subtitle: 'Tracing the Breach',
    description: 'You correlate logs, isolate suspicious hosts, and map the intrusion path. Hidden routines attempt to obfuscate their origin.'
  },
  {
    img: '/qcu/1 (9).jpeg',
    title: 'Containment Phase',
    subtitle: 'Shadow in the System',
    description: 'Malware nodes respond unpredictably. Your countermeasures must be staged precisely to prevent lateral escalation across segments.'
  }
]

export function ChapterOneCarousel() {
  // Developer comment: Active slide index.
  const [index, setIndex] = useState(0)
  // Developer comment: Auto-cycle timer (6s).
  useEffect(() => {
    const id = setInterval(() => setIndex(p => (p + 1) % slides.length), 6000)
    return () => clearInterval(id)
  }, [])

  const prev = () => setIndex(i => (i - 1 + slides.length) % slides.length)
  const next = () => setIndex(i => (i + 1) % slides.length)
  const active = slides[index]

  return (
    <div className="mx-auto max-w-5xl">
      {/* Developer comment: Section heading with mode-based colors */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-extrabold tracking-wide text-slate-900 dark:text-white drop-shadow-sm sm:text-4xl">GAME CHAPTER</h2>
        <div className="mx-auto mt-3 h-0.5 w-24 bg-[var(--color-primary)]" />
      </div>

      {/* Developer comment: 3D coverflow wrapper with perspective */}
      <div className="relative mb-12">
        <div className="relative mx-auto flex h-[400px] items-center justify-center perspective-1000 sm:h-[440px]">
          {slides.map((s, i) => {
            const offset = i - index // Developer comment: negative left of center, positive right.
            const abs = Math.abs(offset)
            // Developer comment: Depth and scale calculations.
            const translateX = offset * 180 // px horizontal spread wider for larger slides
            const rotateY = offset * -25 // degrees yaw
            const scale = 1 - abs * 0.18 // shrink side items proportionally
            const zIndex = 50 - abs // keep center on top
            const opacity = abs === 0 ? 1 : 0
            return (
              <div
                key={s.img}
                className="absolute top-1/5 h-72 w-72 -translate-y-1/2 overflow-hidden rounded-xl border transition-all duration-500 will-change-transform sm:h-80 sm:w-80 md:h-96 md:w-[26rem]"
                style={{
                  transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                  zIndex,
                  opacity,
                  boxShadow: offset === 0 ? '0 12px 30px -6px rgba(0,0,0,0.35)' : '0 4px 18px -4px rgba(0,0,0,0.25)',
                  borderColor: offset === 0 ? 'var(--color-primary)' : 'rgba(255,255,255,0.18)'
                }}
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-full w-full object-cover"
                  loading={i === 0 ? 'eager' : 'lazy'}
                  onError={(e) => {
                    // fallback to a generic qcu placeholder
                    (e.currentTarget as HTMLImageElement).src = '/qcu/placeholder.png'
                  }}
                />
                {/* Developer comment: Click sides to focus center */}
                {offset !== 0 && (
                  <button
                    onClick={() => setIndex(i)}
                    aria-label={`Activate slide ${i + 1}`}
                    className="absolute inset-0 bg-black/0 hover:bg-black/10"
                  />
                )}
              </div>
            )
          })}
        </div>
        {/* Developer comment: Navigation arrows outside 3D stage */}
        <button
          aria-label="Previous slide"
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-slate-800 shadow hover:bg-white dark:bg-black/60 dark:text-white"
        >
          <ArrowLeft />
        </button>
        <button
          aria-label="Next slide"
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-slate-800 shadow hover:bg-white dark:bg-black/60 dark:text-white"
        >
          <ArrowRight />
        </button>
        {/* Developer comment: Pagination dots */}
        <div className="mt-8 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i === index ? 'bg-[var(--color-primary)]' : 'bg-slate-400 dark:bg-slate-600'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Developer comment: Stationary synced text box */}
      <div className="mx-auto max-w-3xl rounded-xl border border-black/10 bg-white/90 p-6 text-center shadow-md dark:border-white/15 dark:bg-black/70">
        <h3 className="text-sm font-semibold tracking-wide text-slate-900 dark:text-white">Chapter 1 – "Shadows in the System"</h3>
        <h4 className="mt-5 text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">{active.title}</h4>
        {active.subtitle && (
          <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-300">{active.subtitle}</p>
        )}
        <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">{active.description}</p>
      </div>
    </div>
  )
}

function ArrowLeft() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
      <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
