export function CarouselPlaceholder({ label }: { label?: string }) {
  return (
    <div className="card-surface flex h-56 w-full items-center justify-center bg-[var(--color-soft)]/60 text-slate-600 dark:text-slate-300">
      {label ?? 'Carousel Placeholder'}
    </div>
  )
}
