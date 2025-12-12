"use client"
import { useMemo, useState } from 'react'
import JuanPic from '../assets/JuanPic.png'
import BeePic from '../assets/BeePic.png'
import CipherPic from '../assets/CipherPic.png'
import PhisherPic from '../assets/PhisherPic.png'
import RansomwarePic from '../assets/RansomwarePic.png'

type Slide = { name: string; desc: string; src: string; fallback: string }

function SmartImg({ src, fallback, alt, className }: { src: string; fallback: string; alt: string; className?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        const el = e.currentTarget as HTMLImageElement
        if (el.src !== fallback) {
          el.src = fallback
        }
      }}
      loading="lazy"
    />
  )
}

export function CharacterCarousel() {
  // Static slide data as required
  const slides: Slide[] = useMemo(
    () => [
      { name: 'Juan', desc: 'The main protagonist who must restore cybersecurity in QCU.', src: '/JuanPic.png', fallback: JuanPic },
      { name: 'QCU Bee', desc: 'The QCU mascot who guides the player around campus.', src: '/beePic.png', fallback: BeePic },
      { name: 'Cipher', desc: 'A powerful adaptive AI lurking beneath the Shadow Network, orchestrating every malware attack across QCU.', src: '/CipherPic.png', fallback: CipherPic },
      { name: 'Phisher', desc: 'A deceptive entity that tricks users with fake emails, fake websites, and digital traps.', src: '/PhisherPic.png', fallback: PhisherPic },
      { name: 'Ransomware', desc: 'A cold, mechanical virus that locks files and tries to take full control.', src: '/RansomwarePic.png', fallback: RansomwarePic },
    ],
    [],
  )

  const [index, setIndex] = useState(0)
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)
  const next = () => setIndex((i) => (i + 1) % slides.length)

  return (
    <div className="relative mx-auto max-w-4xl">
      {/* Slider viewport */}
      <div className="overflow-hidden rounded-2xl border border-black/5 bg-white shadow-card dark:border-white/10 dark:bg-black">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s) => (
            <div key={s.name} className="min-w-full">
              <div className="grid items-center gap-6 p-5 sm:grid-cols-2 sm:p-8">
                <SmartImg src={s.src} fallback={s.fallback} alt={s.name} className="h-56 w-full rounded-xl object-cover sm:h-72" />
                <div>
                  <h3 className="text-2xl font-extrabold sm:text-3xl">{s.name}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 sm:text-base">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        aria-label="Previous"
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white dark:bg-black/60"
      >
        <ArrowLeft />
      </button>
      <button
        aria-label="Next"
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white dark:bg-black/60"
      >
        <ArrowRight />
      </button>

      {/* Dots */}
      <div className="mt-4 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${i === index ? 'bg-[var(--color-primary)]' : 'bg-slate-300 dark:bg-slate-600'}`}
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
