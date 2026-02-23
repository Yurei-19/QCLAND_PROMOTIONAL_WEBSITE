import { Link } from 'react-router-dom'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-20 bg-[#0B3A4B] text-slate-200">
      <div className="container-responsive px-4 py-10">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand + Tagline */}
          <div className="md:col-span-2">
            {/* Light/Dark logos */}
            {(() => {
              const base = (import.meta as any).env?.BASE_URL || '/'
              const withBase = (p: string) => `${(base.endsWith('/') ? base : base + '/')}${p.replace(/^\//,'')}`
              return (
                <>
                  <img src={withBase('/logoQCLand.png')} alt="QCUland" className="block h-12 w-auto dark:hidden" />
                  <img src={withBase('/2logoQCLand.png')} alt="QCUland dark" className="hidden h-12 w-auto dark:block" />
                </>
              )
            })()}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200/90">
              Decrypt the Corruption. Master the Network.
              <br />
              The ultimate cybersecurity educational adventure for QCU students and beyond.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8 md:pl-8 md:justify-items-end">
            <div>
              <p className="text-sm font-semibold text-[var(--color-primary)] md:text-right">Quick Links</p>
              <ul className="mt-4 space-y-3 text-sm md:text-right">
                <li><Link to="/" className="hover:text-white" onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}>About</Link></li>
                <li><Link to="/gameplay" className="hover:text-white" onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}>Gameplay</Link></li>
                <li><Link to="/news" className="hover:text-white" onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}>News</Link></li>
                <li><Link to="/team" className="hover:text-white" onClick={() => window.scrollTo({ top: 0, behavior: 'auto' })}>Team</Link></li>
              </ul>
            </div>
            <div className="ml-auto md:ml-0 md:justify-self-end">
              <p className="text-sm font-semibold text-[var(--color-primary)] md:text-right">Socials</p>
              <div className="mt-3 flex flex-col items-start md:items-end gap-3">
                <a href="https://www.facebook.com/profile.php?id=61587247695396" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white hover:bg-black/50">
                  {fbIcon}
                </a>
                <a href="https://youtube.com/@qculand?si=JQiyl5_Yf4BO1JVN" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white hover:bg-black/50">
                  {ytIcon}
                </a>
                <a href="https://www.instagram.com/qculand.cyber/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white hover:bg-black/50">
                  {igIcon}
                </a>
                {/* Keep only FB, IG, YouTube; removed X/Twitter and TikTok */}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-slate-300/80 sm:flex-row">
          <p>© {year} QCULAND TEAM. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

const fbIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
    <path d="M22 12a10 10 0 1 0-11.563 9.874v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.776-3.89 1.094 0 2.24.195 2.24.195v2.464h-1.262c-1.244 0-1.632.772-1.632 1.562V12h2.776l-.444 2.887h-2.332v6.987A10.002 10.002 0 0 0 22 12Z" />
  </svg>
)

const ytIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
    <path d="M23.499 6.203a3.002 3.002 0 0 0-2.115-2.123C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.384.58A3.002 3.002 0 0 0 .501 6.203C0 8.1 0 12 0 12s0 3.9.501 5.797a3.002 3.002 0 0 0 2.115 2.123C4.5 20.5 12 20.5 12 20.5s7.5 0 9.384-.58a3.002 3.002 0 0 0 2.115-2.123C24 15.9 24 12 24 12s0-3.9-.501-5.797ZM9.75 15.568V8.432L15.818 12 9.75 15.568Z" />
  </svg>
)

const igIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.75-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z" />
  </svg>
)

// Removed unused icons (X/Twitter, TikTok)
