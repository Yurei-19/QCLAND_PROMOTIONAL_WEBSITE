export function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="card-surface bg-white p-6 dark:bg-black">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  )
}
