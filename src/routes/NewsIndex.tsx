"use client"
import { news } from '../data/news'
import { NewsCard } from '../components/Cards/NewsCard'
import { SectionHeading } from '../components/SectionHeading'

export default function NewsIndex() {
  return (
    <main className="container-responsive py-12">
      <SectionHeading title="News & Updates" subtitle="Patch notes, announcements, and events." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((n) => (
          <NewsCard key={n.slug} item={n} />
        ))}
      </div>
    </main>
  )
}
