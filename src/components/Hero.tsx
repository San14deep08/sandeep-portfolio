import { profile } from '../data/profile'

export function Hero() {
  return (
    <section className="neural-grid relative overflow-hidden pb-24 pt-28 md:pb-32 md:pt-44">
      <div className="container-x relative">
        {/* Greeting */}
        <p className="accent-eyebrow mb-6">{profile.greeting}</p>

        {/* Power headline */}
        <h1 className="font-display text-5xl font-extrabold leading-[1.08] tracking-tight md:text-7xl lg:text-[84px]">
          <span className="text-fg">{profile.headline.leading}</span>
          <br />
          <span className="gradient-text">{profile.headline.trailing}</span>
        </h1>

        {/* Identity badge */}
        <p className="mt-6 font-mono text-xs tracking-widest text-fg-muted md:text-sm">
          {profile.badge}
        </p>

        {/* CTA + blurb */}
        <div className="mt-12 grid items-start gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col gap-4">
            <a
              href="#contact"
              className="group inline-flex w-fit items-center gap-3 rounded-full border border-mint/50 bg-mint/10 px-7 py-4 text-base font-semibold text-mint shadow-lg shadow-mint/10 transition hover:gap-5 hover:bg-mint/20 hover:shadow-mint/20"
            >
              Let&apos;s Talk
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden>
                <path
                  d="M1 7h15m0 0L11 1m5 6l-5 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 text-sm text-fg-muted transition hover:text-mint"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.18-1.48 3.14-1.17 3.14-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.36-5.25 5.65.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
              </svg>
              View GitHub
            </a>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-fg-muted md:text-base">
            {profile.blurb}
          </p>
        </div>
      </div>

      {/* Glow divider */}
      <div className="container-x mt-20 md:mt-28">
        <div className="relative h-px w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-mint/40 to-transparent" />
        </div>
      </div>
    </section>
  )
}
