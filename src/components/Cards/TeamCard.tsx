import type { TeamMember } from '../../data/team'

export function TeamCard({ member }: { member: TeamMember }) {
  const base = (import.meta as any).env?.BASE_URL || '/'
  const withBaseSmart = (p: string) => {
    const cleaned = p.replace(/^\//, '')
    const isEncoded = /%[0-9A-Fa-f]{2}/.test(cleaned)
    const finalPath = isEncoded
      ? cleaned
      : cleaned.split('/').map(encodeURIComponent).join('/')
    return `${String(base).replace(/\/$/, '')}/${finalPath}`
  }
  const imgSrc = member.image ? withBaseSmart(member.image) : undefined
  return (
    <div
      className="card-surface bg-white p-6 text-center dark:bg-black opacity-0 translate-y-2 animate-[fadeIn_.4s_ease-out_forwards] transition-transform duration-200 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-md hover:shadow-black/30 dark:hover:shadow-white/20 dark:hover:ring-1 dark:hover:ring-white/15 cursor-pointer"
      style={{ animationDelay: `${Math.min(member.name.length % 6, 4) * 60}ms` }}
    >
      {imgSrc ? (
        <img
          src={imgSrc}
          alt={`${member.name} photo`}
          className="mx-auto mb-4 h-20 w-20 rounded-full object-cover shadow-sm"
          loading="lazy"
        />
      ) : (
        <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-gradient-to-br from-brand-secondary/60 to-brand-primary/60 dark:from-brand-accent/40" />
      )}
      <h3 className="text-lg font-bold">{member.name}</h3>
      <p className="text-sm text-[var(--color-primary)]">{member.role}</p>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{member.description}</p>
    </div>
  )
}
