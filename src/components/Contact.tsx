import { profile } from '../data/profile'

export function Contact() {
  return (
    <section id="contact" className="neural-grid relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10" style={{ background: 'rgba(3,7,18,0.4)' }} />

      <div className="container-x relative text-center">
        <p className="accent-eyebrow uppercase tracking-[0.25em]">Need a Developer?</p>

        <a
          href={profile.socials.email}
          className="gradient-text mt-4 inline-flex items-center gap-4 text-4xl font-extrabold tracking-tight transition hover:opacity-80 md:text-6xl lg:text-7xl"
        >
          Let&apos;s Work Together
          <svg width="42" height="42" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M5 12h14m0 0l-6-6m6 6l-6 6"
              stroke="url(#arrow-grad)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="arrow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
          </svg>
        </a>

        {/* Social links row */}
        <div className="mt-12 flex items-center justify-center gap-6">
          {[
            { label: 'GitHub', href: profile.socials.github },
            { label: 'LinkedIn', href: profile.socials.linkedin },
            { label: 'YouTube', href: profile.socials.youtube },
            { label: 'Email', href: profile.socials.email },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer"
              className="font-mono text-xs text-fg-muted transition hover:text-mint"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
