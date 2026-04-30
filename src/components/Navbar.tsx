import { useState } from 'react'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="fixed right-6 top-6 z-40 grid h-12 w-12 place-items-center rounded-full border border-mint/30 bg-white/5 text-mint shadow-lg shadow-black/30 backdrop-blur-md transition hover:scale-105 hover:border-mint/60 hover:bg-white/10 md:right-10 md:top-8"
      >
        <span className="sr-only">Open menu</span>
        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden>
          <path d="M1 1h16M1 7h16M1 13h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center px-6 text-fg backdrop-blur-xl"
          style={{ background: 'rgba(3, 7, 18, 0.92)' }}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full border border-mint/30 text-mint backdrop-blur-md transition hover:bg-mint/10 md:right-10 md:top-8"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
              <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <nav className="flex flex-col items-center gap-8 text-center">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-4xl font-extrabold tracking-tight transition hover:text-mint md:text-6xl"
              >
                <span className="mr-3 font-mono text-base text-mint opacity-60">0{i + 1}.</span>
                {l.label}
              </a>
            ))}
          </nav>

          {/* Aurora hint inside menu */}
          <p className="absolute bottom-10 font-mono text-xs tracking-widest text-fg-muted">
            Full-Stack · Cloud-Native · Agentic AI
          </p>
        </div>
      )}
    </>
  )
}
