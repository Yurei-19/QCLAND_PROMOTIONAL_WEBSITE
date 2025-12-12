"use client"
type Props = {
  img: string
  name: string
  description: string
}

export function CharacterCard({ img, name, description }: Props) {
  return (
    <div className="card-surface bg-white p-6 dark:bg-black">
      <div className="mb-4 overflow-hidden rounded-xl border border-black/5 dark:border-white/10">
        <img src={img} alt={name} className="h-40 w-full object-cover" />
      </div>
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  )
}
