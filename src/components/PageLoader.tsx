"use client"

export function PageLoader({ visible }: { visible: boolean }) {
  const base = (import.meta as any).env?.BASE_URL || '/'
  const normalizedBase = base.endsWith('/') ? base : base + '/'
  const src = `${normalizedBase}HandLoading.gif`
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-opacity duration-200 ${
        visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <img src={src} alt="Loading" className="h-40 w-40 md:h-52 md:w-52" />
    </div>
  )
}
