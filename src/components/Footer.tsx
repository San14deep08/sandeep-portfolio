import { profile } from '../data/profile'

const year = new Date().getFullYear()

const navigate = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const connect = [
  { label: 'GitHub', href: profile.socials.github },
  { label: 'LinkedIn', href: profile.socials.linkedin },
  { label: 'YouTube', href: profile.socials.youtube },
  { label: 'Email', href: profile.socials.email },
]

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.18-1.48 3.14-1.17 3.14-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.36-5.25 5.65.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v15h-4V8zm7 0h3.83v2.05h.05c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.66 4.8 6.13V23h-4V14.9c0-1.93-.04-4.42-2.7-4.42-2.7 0-3.11 2.1-3.11 4.27V23h-4V8z" />
  </svg>
)

export function Footer() {
  return (
    <footer
      className="relative pt-14 pb-8"
      style={{
        borderTop: '1px solid rgba(167,139,250,0.12)',
        background: 'rgba(3,7,18,0.9)',
      }}
    >
      <div className="container-x">

        {/* ── Top grid ── */}
        <div className="grid gap-10 md:grid-cols-3 md:gap-16">

          {/* Brand */}
          <div>
            <a href="#" className="group mb-4 flex items-center gap-2.5">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-black"
                style={{ background: 'linear-gradient(135deg,#a78bfa,#22d3ee)', color: '#030712' }}
              >
                S
              </span>
              <span className="font-mono font-bold text-fg transition-colors group-hover:text-mint">
                Sandeep Kumar Mahto
              </span>
            </a>
            <p className="max-w-xs text-xs leading-relaxed text-fg-muted">
              Full-Stack Engineer · Cloud-Native Architect · Agentic AI Builder.
              Building software that thinks.
            </p>
            {/* Social icons */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-fg-muted transition-colors hover:text-mint"
              >
                <GithubIcon />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-fg-muted transition-colors hover:text-mint"
              >
                <LinkedinIcon />
              </a>
              <a
                href={profile.socials.email}
                aria-label="Email"
                className="font-mono text-[10px] text-fg-muted transition-colors hover:text-mint"
              >
                sandeep88@gmail.com
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="mb-4 font-mono text-[10px] uppercase tracking-widest text-mint">
              Navigate
            </h3>
            <ul className="flex flex-col gap-2.5">
              {navigate.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-xs text-fg-muted transition-colors hover:text-fg"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-4 font-mono text-[10px] uppercase tracking-widest text-mint">
              Connect
            </h3>
            <ul className="flex flex-col gap-2.5">
              {connect.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noreferrer"
                    className="text-xs text-fg-muted transition-colors hover:text-fg"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          className="mt-12 flex flex-col items-center justify-between gap-3 pt-6 text-[11px] text-fg-muted md:flex-row"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <span className="font-mono">
            © {year} Sandeep Kumar Mahto. All rights reserved.
          </span>
          <span className="font-mono">
            Built with React · TypeScript · AI ❤️
          </span>
        </div>
      </div>
    </footer>
  )
}
