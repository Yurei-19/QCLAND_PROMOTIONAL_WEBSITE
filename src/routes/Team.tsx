"use client"
import { SectionHeading } from '../components/SectionHeading'
import { team } from '../data/team'
import { TeamCard } from '../components/Cards/TeamCard'

export default function Team() {
  const order: Record<string, number> = {
    'Project Manager': 0,
    'Lead Developer': 1,
    'Developer': 2,
    'Lead Documenter': 3,
    'UI/UX Designer': 4,
    'Technical Writer': 5,
  }
  const sorted = [...team].sort((a, b) => (order[a.role] ?? 999) - (order[b.role] ?? 999))
  return (
    <main className="container-responsive py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
      <SectionHeading title="Meet the Team" subtitle="Creators behind QCUland." />
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sorted.map((m) => (
          <TeamCard key={m.name} member={m} />
        ))}
      </div> 
    </main>
  )
}
