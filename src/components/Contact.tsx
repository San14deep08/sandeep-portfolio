import { profile } from '../data/profile'
import { WaveDecor } from './WaveDecor'

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy py-24 md:py-32">
      <WaveDecor position="top-right" />
      <WaveDecor position="bottom-left" />

      <div className="container-x relative text-center">
        <p className="accent-eyebrow uppercase tracking-[0.25em]">Need a Developer?</p>
        <a
          href={profile.socials.email}
          className="mt-4 inline-flex items-center gap-4 text-4xl font-extrabold tracking-tight text-fg transition hover:text-mint md:text-6xl lg:text-7xl"
        >
          Let&apos;s Work Together
          <svg width="42" height="42" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M5 12h14m0 0l-6-6m6 6l-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  )
}
