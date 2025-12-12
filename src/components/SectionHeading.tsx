export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-slate-600 dark:text-slate-300">{subtitle}</p>
      )}
    </div>
  )
}
