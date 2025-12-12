"use client"
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-black/60">
      <div className="container-responsive flex items-center justify-between" style={{height:'72px'}}>
        <Link to="/" className="relative flex items-center" style={{height:'48px', width:'160px'}}>
          {/* Stacked logos to prevent reflow; toggle via opacity only */}
          <img
            src={(() => {
              const base = (import.meta as any).env?.BASE_URL || '/'
              const withBase = (p: string) => {
                const cleaned = p.replace(/^\//,'').split('/').map(encodeURIComponent).join('/')
                return `${(base.endsWith('/') ? base : base + '/')}${cleaned}`
              }
              return withBase('/Q BEE (Yellow).png')
            })()}
            alt="QCUland"
            className="absolute inset-0 m-auto h-12 w-auto object-contain transition-opacity duration-300 opacity-100 dark:opacity-0"
            style={{maxHeight:'48px'}}
          />
          <img
            src={(() => {
              const base = (import.meta as any).env?.BASE_URL || '/'
              const withBase = (p: string) => {
                const cleaned = p.replace(/^\//,'').split('/').map(encodeURIComponent).join('/')
                return `${(base.endsWith('/') ? base : base + '/')}${cleaned}`
              }
              return withBase('/Q BEE (Blue).png')
            })()}
            alt="QCUland dark"
            className="absolute inset-0 m-auto h-12 w-auto object-contain transition-opacity duration-300 opacity-0 dark:opacity-100"
            style={{maxHeight:'48px'}}
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden gap-6 md:flex">
          <Nav to="/" label="Home" />
          <Nav to="/gameplay" label="Gameplay" />
          {/* add Resources next to Gameplay */}
          <Nav to="/modelviewer" label="Resources" />
          <Nav to="/news" label="News & Updates" />
          <Nav to="/team" label="The Team" />
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          {/* Mobile hamburger */}
          <button
            aria-label="Open menu"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 bg-white/90 text-slate-700 shadow-sm transition-colors dark:border-white/15 dark:bg-black/40 dark:text-white"
            onClick={() => setOpen((v) => !v)}
          >
            <BurgerIcon open={open} />
          </button>
        </div>
      </div>

      {/* Mobile menu: slide-down */}
      <div
        className={`md:hidden overflow-hidden border-t border-black/5 bg-white/90 backdrop-blur transition-[max-height,opacity] duration-300 dark:border-white/10 dark:bg-black/70 ${open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
        style={{willChange:'max-height'}}
      >
        <div className="container-responsive flex flex-col py-3" style={{minHeight: open? 'auto':'0'}}>
          <MobileNav to="/" label="Home" onClick={() => setOpen(false)} />
          <MobileNav to="/gameplay" label="Gameplay" onClick={() => setOpen(false)} />
          <MobileNav to="/modelviewer" label="Resources" onClick={() => setOpen(false)} />
          <MobileNav to="/news" label="News & Updates" onClick={() => setOpen(false)} />
          <MobileNav to="/team" label="The Team" onClick={() => setOpen(false)} />
        </div>
      </div>
    </header>
  )
}

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      {/* Simple animated burger to X */}
      <path d={open ? 'M6 6L18 18' : 'M3 6h18'} strokeLinecap="round" />
      <path d={open ? 'M6 18L18 6' : 'M3 12h18'} strokeLinecap="round" />
      <path d={open ? '' : 'M3 18h18'} strokeLinecap="round" />
    </svg>
  )
}

function MobileNav({ to, label, onClick }: { to: string; label: string; onClick: () => void }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `px-1 py-2 text-base font-semibold transition-colors ${
          isActive
            ? 'text-[var(--color-primary)]'
            : 'text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
        }`
      }
    >
      {label}
    </NavLink>
  )
}

function Nav({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-sm font-semibold transition-colors ${
          isActive
            ? 'text-[var(--color-primary)]'
            : 'text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
        }`
      }
    >
      {label}
    </NavLink>
  )
}
