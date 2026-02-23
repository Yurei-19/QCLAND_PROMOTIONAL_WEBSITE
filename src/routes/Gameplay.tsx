"use client"
import { FeatureCard } from '../components/Cards/FeatureCard'
import { SectionHeading } from '../components/SectionHeading'

export default function Gameplay() {
  return (
    <main className="container-responsive py-12">
      <SectionHeading title="Gameplay" subtitle="Master deception, solve logic, and battle bots." />

      <div className="card-surface mx-auto max-w-4xl bg-white p-0 text-center dark:bg-black overflow-hidden rounded-2xl">
        {(() => {
          const base = (import.meta as any).env?.BASE_URL || '/'
          const withBase = (p: string) => {
            const cleaned = p.replace(/^\//,'').split('/').map(encodeURIComponent).join('/')
            return `${(base.endsWith('/') ? base : base + '/')}${cleaned}`
          }
          const src = withBase('/gameplay.mp4')
          return (
            <video
              className="block w-full h-100 object-cover"
              src={src}
              controls
              playsInline
              preload="metadata"
              muted
              loop
              autoPlay
            />
          )
        })()}
        {/* Caption intentionally omitted to avoid cropping and reduce vertical space */}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <FeatureCard title="Visual Deception" description="Identify forged paths and unmask illusions in hostile networks." />
        <FeatureCard title="Logic Puzzles" description="Route signals, decode keys, and unlock secured channels." />
        <FeatureCard title="Bot Battles" description="Outthink the Phisher Bot with timing, tools, and tactics." />
      </div>

      <div className="mt-12 rounded-xl bg-[var(--color-primary)] p-8 text-center text-white shadow-card">
        <h3 className="text-2xl font-extrabold">Ready to Defend the Network?</h3>
        {/* Play button uses a full-page redirect to the hosted build */}
        <button
          className="btn-primary mt-4 bg-white !text-slate-900 hover:bg-brand-secondary"
          onClick={() => {
            // Optional: SPA navigation to /maintenance (kept for reference)
            // window.history.pushState({}, '', '/maintenance')
            // window.dispatchEvent(new PopStateEvent('popstate'))
            window.location.href = 'https://qculand.web.app/'
          }}
        >
          Play in Browser
        </button>
      </div>
    </main>
  )
}
