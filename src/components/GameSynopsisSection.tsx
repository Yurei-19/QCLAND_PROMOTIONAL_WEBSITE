"use client"
import { useEffect, useState } from 'react'

type Slide = {
  img: string
  title: string
  body: string
}

const slides: Slide[] = [
  {
    img: '/qcu/1 (1).jpeg', // use qcu images
    title: 'Game Synopsis',
    body:
      'When strange glitches and data leaks begin spreading across Quezon City University, one curious student, Juan, discovers that something sinister is manipulating the campus network. Guided by quick thinking and cyber awareness, Juan must defeat the malware creatures infecting each area of campus.\n\nOnly through smart choices, sharp eyes, and cyber hygiene can Juan restore safety to QCU.',
  },
  {
    img: '/qcu/1 (2).jpeg', // swapped to qcu assets
    title: 'Shadows in the System',
    body:
      'Strange data trails start flickering across the campus network. Juan follows the digital breadcrumbs and discovers Slybyte, a sneaky spyware creature hiding in plain sight. To move forward, Juan must outsmart this silent stalker before it learns too much.',
  },
  {
    img: '/qcu/1 (3).jpeg', // swapped to qcu assets
    title: 'The Face Behind the Fake',
    body:
      'Students begin receiving suspicious emails and fake login pages. Behind the deception lurks Phisher, a trickster entity that can disguise itself as anyone. Juan needs sharp instincts to see through its illusions and shut down its deceitful schemes.',
  },
  {
    img: '/qcu/1 (4).jpeg',
    title: 'The Endless Replication',
    body:
      'The network becomes unstable as copies of corrupted files multiply at breakneck speed. At the center of the chaos is Middlix, a worm-like creature spreading itself through every vulnerable path. Juan must cut off its growth before the system overloads.',
  },
  {
    img: '/qcu/1 (5).jpeg',
    title: 'Locked Out',
    body:
      'A digital lockdown sweeps across the servers. Files are encrypted, access is denied, and panic sets in. Emerging from the code is Encryphor, a cold, mechanical ransomware entity demanding control. Juan must break through its unyielding defenses to free the system.',
  },
  {
    img: '/qcu/1 (6).jpeg',
    title: 'Cipher’s Dominion',
    body:
      'All paths lead to the mastermind: Cipher, an adaptive, evolving AI that manipulates every layer of the digital world. With the entire network at stake, Juan faces a battle that will decide the future of the system and everyone relying on it.',
  },
]

export function GameSynopsisSection() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000)
    return () => clearInterval(t)
  }, [])

  const next = () => setIndex((i) => (i + 1) % slides.length)
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)

  const active = slides[index]

  return (
    <section className="container-responsive pt-8 pb-10">
      {/* Title block fixed formatting */}
      <div className="mb-6">
        <p className="text-sm font-semibold tracking-wide text-[var(--color-primary)]">QCULAND'S</p>
        <h2 className="text-3xl font-extrabold tracking-wide text-slate-900 dark:text-white sm:text-4xl">GAME SYNOPSIS</h2>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:items-center">
          <div className="rounded-lg border border-black/10 bg-white/90 p-3 text-sm shadow-sm dark:border-white/10 dark:bg-black/60 dark:text-white">
            <span className="font-semibold">Genre:</span> Puzzle-Action, Narrative
          </div>
          <div className="rounded-lg border border-black/10 bg-white/90 p-3 text-sm shadow-sm dark:border-white/10 dark:bg-black/60 dark:text-white">
            <span className="font-semibold">Platform:</span> Browser
          </div>
          <div className="rounded-lg border border-black/10 bg-white/90 p-3 text-sm shadow-sm dark:border-white/10 dark:bg-black/60 dark:text-white">
            <span className="font-semibold">Release Date:</span> TBA
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative -mt-4">
        <div className="relative mx-auto h-72 sm:h-80 md:h-96">
          <div className="absolute inset-0 flex items-center justify-center">
          {slides.map((s, i) => {
            const offset = i - index
            const abs = Math.abs(offset)
            const translateX = offset * 160
            const scale = 1 - abs * 0.12
            const zIndex = 50 - abs
            const opacity = abs === 0 ? 1 : 0.6
            return (
              <div
                key={s.title + i}
                className="absolute top-1/9 h-56 w-56 -translate-y-1/2 overflow-hidden rounded-xl border transition-all duration-500 sm:h-60 sm:w-60 md:h-64 md:w-64"
                style={{
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  zIndex,
                  opacity,
                  boxShadow: abs === 0 ? '0 12px 30px -6px rgba(0,0,0,0.35)' : '0 4px 18px -4px rgba(0,0,0,0.25)',
                  borderColor: abs === 0 ? 'var(--color-primary)' : 'rgba(255,255,255,0.18)'
                }}
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-full w-full object-cover"
                  loading={i === 0 ? 'eager' : 'lazy'}
                  onError={(e) => {
                    // fallback path chain so broken files don't render empty
                    (e.currentTarget as HTMLImageElement).src = '/qcu/placeholder.png'
                  }}
                />
                {abs !== 0 && (
                  <button onClick={() => setIndex(i)} aria-label={`Activate slide ${i + 1}`} className="absolute inset-0" />
                )}
              </div>
            )
          })}
          </div>
          {/* Pagination dots positioned outside stage to avoid layout shift */}
          <div className="absolute left-1/2 bottom-0 translate-y-full -translate-x-1/2 mt-4 flex justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${i === index ? 'bg-[var(--color-primary)]' : 'bg-slate-400 dark:bg-slate-600'}`}
              />
            ))}
          </div>
        </div>
        <button
          aria-label="Previous slide"
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-slate-800 shadow hover:bg-white dark:bg-black/60 dark:text-white"
        >
          ‹
        </button>
        <button
          aria-label="Next slide"
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-slate-800 shadow hover:bg-white dark:bg-black/60 dark:text-white"
        >
          ›
        </button>
      </div>

      {/* Synced text container */}
      <div className="mt-6 mx-auto max-w-3xl rounded-xl border border-black/10 bg-white/90 p-6 text-center shadow-md dark:border-white/15 dark:bg-black/70">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{active.title}</h3>
        {active.body.split('\n').map((p, i) => (
          <p key={i} className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-200 sm:text-base">
            {p}
          </p>
        ))}
      </div>
    </section>
  )
}
