import { profile } from '../data/profile'

const icons = {
  email: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="2" />
    </svg>
  ),
  github: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.18-1.48 3.14-1.17 3.14-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.36-5.25 5.65.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
    </svg>
  ),
  linkedin: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v15h-4V8zm7 0h3.83v2.05h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.66 4.8 6.13V23h-4V14.9c0-1.93-.04-4.42-2.7-4.42-2.7 0-3.11 2.1-3.11 4.27V23h-4V8z" />
    </svg>
  ),
  x: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zM17.083 19.77h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  ),
}

export function Footer() {
  return (
    <footer
      className="relative pb-10 pt-6"
      style={{ borderTop: '1px solid rgba(167,139,250,0.12)', background: 'rgba(3,7,18,0.8)' }}
    >
      <div className="container-x flex flex-col items-start justify-between gap-4 text-xs text-fg-muted md:flex-row md:items-center">
        <span className="font-mono">{profile.footer}</span>
        <div className="flex items-center gap-5">
          {(
            [
              { key: 'email', href: profile.socials.email, label: 'Email' },
              { key: 'github', href: profile.socials.github, label: 'GitHub' },
              { key: 'linkedin', href: profile.socials.linkedin, label: 'LinkedIn' },
              { key: 'x', href: profile.socials.x, label: 'X' },
            ] as const
          ).map((s) => (
            <a
              key={s.key}
              aria-label={s.label}
              href={s.href}
              target={s.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              className="text-fg-muted transition hover:text-mint"
            >
              {icons[s.key]}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
