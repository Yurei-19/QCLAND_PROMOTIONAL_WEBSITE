"use client"
import { Link } from 'react-router-dom'

export default function Maintenance() {
  // simple offline notice layout
  return (
    <main className="container-responsive py-16">
      <section className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-black/10 bg-white shadow-card dark:border-white/10 dark:bg-black/60">
        <div className="bg-[var(--color-primary)]/10 p-8 sm:p-10">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white sm:text-3xl">QCULAND System Upgrade in Progress</h1>
            <p className="mt-4 text-sm text-slate-700 dark:text-slate-200">
              Cadet, mission deployment is temporarily suspended while the system undergoes enhancement.
              <br />
              Please stand by, training access will resume soon.
              <br />
              Thank you for your patience and continued vigilance.
            </p>
            <div className="mt-6">
              {/* fallback button to home page */}
              <Link to="/">
                <button className="btn-primary bg-[var(--color-primary)] text-white hover:bg-brand-secondary">← Return to Home Base</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
