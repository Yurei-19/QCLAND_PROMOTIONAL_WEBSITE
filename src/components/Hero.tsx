"use client"
import { Link } from 'react-router-dom'
// Hero component: trailer video now used as full background.

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden" style={{paddingTop:'96px', paddingBottom:'96px'}}>
      {/* Developer comment: Use video as animated background; positioned absolutely behind content. */}
      <video
        className="absolute inset-0 h-full w-full object-cover brightness-[0.95] contrast-[1.05] saturate-[1.9]"
          src={(() => {
            const base = (import.meta as any).env?.BASE_URL || '/'
            const withBase = (p: string) => `${(base.endsWith('/') ? base : base + '/')}${p.replace(/^\//,'')}`
            return withBase('/bg.mp4');
          })()}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="QCUland Trailer Background"
      />
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
      <div className="relative">
      <div className="container-responsive flex flex-col gap-12 max-w-4xl" style={{marginTop:'110px'}}>
        <div className="relative" style={{minHeight:'320px'}}>
          {/* Brand logos (light/dark) */}
          <div className="relative h-40 w-[340px]">
            <img
              src={(() => {
                const base = (import.meta as any).env?.BASE_URL || '/'
                const withBase = (p: string) => `${(base.endsWith('/') ? base : base + '/')}${p.replace(/^\//,'')}`
                return withBase('/logoQCLand.png');
              })()}
              alt="QCUland"
              className="absolute inset-0 m-auto h-40 w-auto object-contain transition-opacity duration-300 opacity-100 dark:opacity-0"
            />
            <img
              src={(() => {
                const base = (import.meta as any).env?.BASE_URL || '/'
                const withBase = (p: string) => {
                  const cleaned = p.replace(/^\//,'').split('/').map(encodeURIComponent).join('/')
                  return `${(base.endsWith('/') ? base : base + '/')}${cleaned}`
                }
                return withBase('/QCULand BEE (Blue).png');
              })()}
              alt="QCUland dark"
              className="absolute inset-0 m-auto h-40 w-auto object-contain transition-opacity duration-300 opacity-0 dark:opacity-100"
            />
          </div>
          {/* Hero tagline */}
          <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-white" style={{minHeight:'84px'}}>
            Defend the campus network against the Phisher Bot. See through deception, solve logic puzzles,
            and restore the system.
          </p>
          {/* Primary actions */}
          <div className="mt-8 flex items-center gap-6" style={{minHeight:'56px'}}>
            <Link to="/gameplay" className="btn-primary px-6 py-3 text-base whitespace-nowrap">Explore Gameplay</Link>
            <Link to="/news" className="inline-flex items-center text-base font-semibold text-[var(--color-primary)] hover:underline whitespace-nowrap">Read Updates →</Link>
          </div>
        </div>
        {/* Developer comment: Inline trailer removed; background video now represents the trailer. */}
      </div>
      </div>
    </section>
  )
}
