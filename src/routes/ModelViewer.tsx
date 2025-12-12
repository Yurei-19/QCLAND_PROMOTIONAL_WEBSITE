"use client"

export default function ModelViewer() {
  return (
    <main className="container-responsive py-12">
      <h1 className="text-3xl font-extrabold tracking-wide text-slate-900 dark:text-white sm:text-4xl">Resources</h1>
      <p className="mt-4 text-sm text-slate-700 dark:text-slate-200">QCULAND Asset Viewer — browse and preview 3D game assets.</p>
      {/* embed external viewer inside the site; keeps our navbar/layout intact */}
      <div className="mt-6 overflow-hidden rounded-xl border border-black/10 bg-white/90 shadow-sm dark:border-white/15 dark:bg-black/60">
        <iframe
          title="Model Viewer"
          src="https://yortski.github.io/modelviewer/"
          className="block w-full h-[80vh]"
          scrolling="no"
          style={{ border: 0 }}
        />
      </div>
    </main>
  )
}
