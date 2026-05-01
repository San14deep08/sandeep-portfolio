import { useState, useEffect } from 'react'
import { profile } from '../data/profile'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [active, setActive] = useState('')

  /* Shrink navbar on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Scroll-spy: highlight active section */
  useEffect(() => {
    const onScroll = () => {
      const ids = ['about', 'experience', 'projects', 'skills', 'contact']
      const offset = 120
      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top - offset <= 0) current = id
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close drawer on resize to desktop */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setDrawerOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const closeDrawer = () => setDrawerOpen(false)

  return (
    <>
      {/* ─── Sticky header ─── */}
      <header
        className="fixed left-0 right-0 top-0 z-50 transition-all duration-300"
        style={{
          padding: scrolled ? '10px 0' : '18px 0',
          background: scrolled ? 'rgba(3,7,18,0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(18px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(18px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(167,139,250,0.12)' : 'none',
        }}
      >
        <div className="container-x flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="group flex items-center gap-2.5">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-black"
              style={{ background: 'linear-gradient(135deg,#a78bfa,#22d3ee)', color: '#030712' }}
            >
              S
            </span>
            <span className="font-mono text-sm font-bold text-fg transition-colors group-hover:text-mint">
              Sandeep
            </span>
          </a>

          {/* Desktop nav links */}
          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="rounded-lg px-4 py-2 font-mono text-xs tracking-wider transition-all duration-200"
                style={{
                  color: active === href.slice(1) ? '#a78bfa' : '#94a3b8',
                  background: active === href.slice(1) ? 'rgba(167,139,250,0.1)' : 'transparent',
                }}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop right side */}
          <div className="hidden items-center gap-3 md:flex">
            {/* GitHub */}
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-fg-muted transition-colors hover:text-mint"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.18-1.48 3.14-1.17 3.14-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.36-5.25 5.65.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-fg-muted transition-colors hover:text-mint"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v15h-4V8zm7 0h3.83v2.05h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.66 4.8 6.13V23h-4V14.9c0-1.93-.04-4.42-2.7-4.42-2.7 0-3.11 2.1-3.11 4.27V23h-4V8z" />
              </svg>
            </a>
            {/* Hire Me */}
            <a
              href="#contact"
              className="ml-1 rounded-full px-5 py-2 text-xs font-bold transition-opacity hover:opacity-85"
              style={{ background: 'linear-gradient(135deg,#a78bfa,#22d3ee)', color: '#030712' }}
            >
              Hire Me
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setDrawerOpen(!drawerOpen)}
            className="grid h-10 w-10 place-items-center rounded-lg text-fg-muted transition hover:text-fg md:hidden"
            style={{ border: '1px solid rgba(167,139,250,0.2)' }}
          >
            {drawerOpen ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* ─── Mobile drawer overlay ─── */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={closeDrawer}
        >
          {/* Side drawer */}
          <div
            className="absolute right-0 top-0 flex h-full w-72 flex-col gap-1 px-6 pt-24 pb-10"
            style={{
              background: 'rgba(6,6,22,0.97)',
              backdropFilter: 'blur(24px)',
              borderLeft: '1px solid rgba(167,139,250,0.15)',
            }}
            onClick={e => e.stopPropagation()}
          >
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={closeDrawer}
                className="rounded-xl px-4 py-3.5 font-mono text-sm tracking-wider transition-all"
                style={{
                  color: active === href.slice(1) ? '#a78bfa' : '#94a3b8',
                  background: active === href.slice(1) ? 'rgba(167,139,250,0.1)' : 'transparent',
                }}
              >
                {label}
              </a>
            ))}

            <div
              className="mt-4 flex gap-4 border-t pt-4"
              style={{ borderColor: 'rgba(255,255,255,0.08)' }}
            >
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-fg-muted transition-colors hover:text-mint font-mono"
              >
                GitHub
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-fg-muted transition-colors hover:text-mint font-mono"
              >
                LinkedIn
              </a>
            </div>

            <a
              href="#contact"
              onClick={closeDrawer}
              className="mt-3 rounded-full py-2.5 text-center text-sm font-bold transition-opacity hover:opacity-85"
              style={{ background: 'linear-gradient(135deg,#a78bfa,#22d3ee)', color: '#030712' }}
            >
              Hire Me
            </a>

            <p className="mt-auto font-mono text-[10px] tracking-widest text-fg-muted text-center">
              Full-Stack · Cloud-Native · Agentic AI
            </p>
          </div>
        </div>
      )}
    </>
  )
}
