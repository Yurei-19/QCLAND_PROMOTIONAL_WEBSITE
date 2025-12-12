"use client"
import { Link } from 'react-router-dom'
import type { NewsItem } from '../../data/news'

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="card-surface group flex flex-col gap-3 bg-white p-5 dark:bg-black">
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center rounded-full bg-brand-secondary/20 px-3 py-1 text-xs font-semibold text-[var(--color-primary)] ring-1 ring-brand-secondary/30">
          {item.category}
        </span>
        <time className="text-xs text-slate-500 dark:text-slate-400">{new Date(item.date).toLocaleDateString()}</time>
      </div>
      <h3 className="text-lg font-bold group-hover:text-[var(--color-primary)]">
        <Link to={`/news/${item.slug}`}>{item.title}</Link>
      </h3>
      <p className="text-sm text-slate-600 dark:text-slate-300">{item.summary}</p>
      <div>
        <Link
          to={`/news/${item.slug}`}
          className="text-sm font-semibold text-[var(--color-primary)] hover:underline"
        >
          Read more →
        </Link>
      </div>
    </article>
  )
}
