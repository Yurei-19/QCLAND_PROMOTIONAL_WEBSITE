"use client"
import { useState } from 'react'

// Slides for the synopsis carousel. Replace image paths with real assets placed in /public
const slides = [
  {
    img: '/Rectangle 23.png',
    title: 'Game Synopsis',
    genre: 'Point-and-click gameplay',
    release: 'December 6, 2025 (Beta)',
    playercount: '1 Player per Session',
    platforms: 'Windows 11',
    body:
      'When strange glitches and data leaks begin spreading across Quezon City University, one curious student—Arius—discovers that something sinister is manipulating the campus network. Guided by quick thinking and cyber awareness, Arius must defeat the malware creatures infecting each area of campus. But behind every glitch lies Cipher, an intelligent force controlling the Shadow Network. Only through smart choices, sharp eyes, and cyber hygiene can Arius restore safety to QCU.',
  },
  {
    img: '/Rectangle 24.png',
    title: 'Shadow Network',
    genre: 'Cyber puzzle narrative',
    release: 'December 6, 2025 (Beta)',
    playercount: '1 Player per Session',
    platforms: 'Windows 11',
    body:
      'Agents of deception lurk behind compromised servers and forged access points. You will trace intrusion paths, neutralize logic traps, and harden vulnerable nodes before the Phisher escalates attacks. Master pattern recognition, clue correlation, and secure-response timing to progress.',
  },
    {
    img: '/Rectangle 25.png',
    title: 'Shadow Network',
    genre: 'Cyber puzzle narrative',
    release: 'December 6, 2025 (Beta)',
    playercount: '1 Player per Session',
    platforms: 'Windows 11',
    body:
      'Agents of deception lurk behind compromised servers and forged access points. You will trace intrusion paths, neutralize logic traps, and harden vulnerable nodes before the Phisher escalates attacks. Master pattern recognition, clue correlation, and secure-response timing to progress.',
  },
]

export function GameSynopsisCarousel() {
  const [index, setIndex] = useState(0)
  const current = slides[index]

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)
  const next = () => setIndex((i) => (i + 1) % slides.length)

  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="overflow-hidden rounded-2xl border border-black/5 bg-black/80 text-white shadow-card backdrop-blur dark:border-white/10">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${index * 100}%)` }}>
          {slides.map((s) => (
            <div key={s.title} className="min-w-full pt-56 pb-6 px-6 sm:pt-70 sm:pb-10 sm:px-10">
              <div className="grid gap-8 md:grid-cols-[1.1fr_1fr]">
                <div>
                  <p className="text-sm font-semibold tracking-wide">QCUland's</p>
                  <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">{s.title.toUpperCase()}</h2>
                  <div className="mt-4 h-0.5 w-24 bg-[var(--color-primary)]" />
                  <div className="mt-6 grid gap-4 text-sm md:grid-cols-2">
                    <div className="rounded-lg border border-white/10 p-3">
                      <p className="text-[var(--color-secondary)] font-semibold">GENRE</p>
                      <p className="mt-1">{s.genre}</p>
                    </div>
                    <div className="rounded-lg border border-white/10 p-3">
                      <p className="text-[var(--color-secondary)] font-semibold">PLAYERCOUNT</p>
                      <p className="mt-1">{s.playercount}</p>
                    </div>
                    <div className="rounded-lg border border-white/10 p-3">
                      <p className="text-[var(--color-secondary)] font-semibold">RELEASE DATE</p>
                      <p className="mt-1">{s.release}</p>
                    </div>
                    <div className="rounded-lg border border-white/10 p-3">
                      <p className="text-[var(--color-secondary)] font-semibold">PLATFORMS</p>
                      <p className="mt-1">{s.platforms}</p>
                    </div>
                  </div>
                  <p className="mt-6 text-sm leading-relaxed sm:text-base">{s.body}</p>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-full max-w-sm">
                    <div className="aspect-square w-full overflow-hidden rounded-xl border border-white/15 bg-slate-800">
                      <img
                        src={s.img}
                        alt={s.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        aria-label="Previous synopsis"
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-slate-800 shadow hover:bg-white dark:bg-black/60 dark:text-white"
      >
        <ArrowLeft />
      </button>
      <button
        aria-label="Next synopsis"
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-slate-800 shadow hover:bg-white dark:bg-black/60 dark:text-white"
      >
        <ArrowRight />
      </button>

      {/* Dots */}
      <div className="mt-5 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === index ? 'bg-[var(--color-primary)]' : 'bg-slate-400/60'
            }`}
          />
        ))}
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
