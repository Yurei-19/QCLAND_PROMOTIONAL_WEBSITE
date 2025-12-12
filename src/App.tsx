"use client"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { PageLoader } from './components/PageLoader'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Home from './routes/Home'
import Gameplay from './routes/Gameplay'
import NewsIndex from './routes/NewsIndex'
import NewsShow from './routes/NewsShow'
import Team from './routes/Team'
import ModelViewer from './routes/ModelViewer'
import Maintenance from './routes/Maintenance'

export function AppShell() {
  const isBrowser = typeof document !== 'undefined'
  if (!isBrowser) return null // avoid SSR using BrowserRouter
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
        <RouteLoader />
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gameplay" element={<Gameplay />} />
          <Route path="/news" element={<NewsIndex />} />
          <Route path="/news/:slug" element={<NewsShow />} />
          <Route path="/team" element={<Team />} />
          <Route path="/modelviewer" element={<ModelViewer />} />
          {/* redirect play triggers to maintenance page */}
          <Route path="/maintenance" element={<Maintenance />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

function RouteLoader() {
  const location = useLocation()
  const [prevPath, setPrevPath] = useState<string>(location.pathname)
  const [visible, setVisible] = useState(true) // show on initial mount briefly
  useEffect(() => {
    const nextPath = location.pathname || '/'
    const inNewsPrev = prevPath.startsWith('/news')
    const inNewsNext = nextPath.startsWith('/news')
    setPrevPath(nextPath)
    // Skip loader when navigating within News section (list ↔ detail)
    if (inNewsPrev && inNewsNext) {
      setVisible(false)
      return
    }
    // Otherwise show briefly
    setVisible(true)
    const t = setTimeout(() => setVisible(false), 400)
    return () => clearTimeout(t)
  }, [location.pathname])
  return <PageLoader visible={visible} />
}

export default AppShell
