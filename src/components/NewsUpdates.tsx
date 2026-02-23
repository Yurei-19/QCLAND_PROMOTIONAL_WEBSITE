"use client"
import { news } from '../data/news'

export function NewsUpdates() {
  const base = (import.meta as any).env?.BASE_URL || '/'
  const withBase = (p?: string) => (p ? `${(base.endsWith('/') ? base : base + '/')}${p.replace(/^\//,'')}` : undefined)
  // feature the latest news item, and list a few more below
  const sorted = [...news].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  const featured = sorted[0]
  const others = sorted.slice(1, 4)
  return (
    <section className="container-responsive py-12">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-extrabold tracking-wide text-slate-900 dark:text-white sm:text-4xl">NEWS & UPDATES</h2>
        {/* removed play button per request */}
      </div>
      {featured && (
        <article className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-card dark:border-white/10 dark:bg-black/60">
          <div className="bg-brand-surface/90 p-6 sm:p-8" style={{
            backgroundImage: featured.image ? `url(${withBase(featured.image)})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
            <div className="max-w-3xl rounded-xl border border-black/10 bg-white/85 p-5 text-slate-900 backdrop-blur-sm shadow-sm dark:border-white/10 dark:bg-black/40 dark:text-white">
              <span className="text-xs font-bold tracking-widest">WHAT'S NEW?</span>
              <h3 className="mt-1 text-2xl font-extrabold sm:text-3xl">{featured.title}</h3>
              <p className="mt-2 text-sm opacity-90">{featured.summary}</p>
              <div className="mt-3 flex items-center gap-3 text-sm">
                <span className="rounded-full bg-black/5 px-3 py-1 ring-1 ring-black/10 dark:bg-white/10 dark:ring-white/20">{featured.category}</span>
                <time className="opacity-80">{new Date(featured.date).toLocaleDateString()}</time>
              </div>
              <div className="mt-4">
                <a href={`/news/${featured.slug}`} className="inline-block">
                  <button className="btn-primary">Read more</button>
                </a>
              </div>
            </div>
          </div>
        </article>
      )}
      {others.length > 0 && (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((n) => (
            <a key={n.slug} href={`/news/${n.slug}`} className="group rounded-xl border border-black/10 bg-white p-4 shadow-sm transition-colors hover:bg-white/90 dark:border-white/10 dark:bg-black/60 dark:hover:bg-black/50">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center rounded-full bg-black/5 px-2 py-1 text-xs ring-1 ring-black/10 dark:bg-white/10 dark:ring-white/20">{n.category}</span>
                <time className="text-xs opacity-70">{new Date(n.date).toLocaleDateString()}</time>
              </div>
              <h4 className="mt-2 text-base font-bold group-hover:text-[var(--color-primary)]">{n.title}</h4>
              <p className="mt-1 text-sm opacity-80 line-clamp-3">{n.summary}</p>
            </a>
          ))}
        </div>
      )}
    </section>
  )
}
