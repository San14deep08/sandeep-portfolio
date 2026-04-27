import { profile } from '../data/profile'
import { WaveDecor } from './WaveDecor'

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-28 md:pb-32 md:pt-40">
      <WaveDecor position="top-right" />
      <WaveDecor position="bottom-left" />

      <div className="container-x relative">
        <p className="accent-eyebrow mb-6">{profile.greeting}</p>

        <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl lg:text-[88px]">
          <span className="text-fg">{profile.headline.leading}</span>
          <br />
          <span className="text-fg-muted">{profile.headline.trailing}</span>
        </h1>

        <div className="mt-12 grid items-end gap-10 md:grid-cols-2 md:gap-16">
          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-mint bg-mint/10 px-7 py-4 text-base font-semibold text-mint transition hover:gap-5 hover:bg-mint/20"
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

          <p className="max-w-md text-sm leading-relaxed text-fg-muted md:text-base">
            I am a Full-Stack & Cloud Engineer.
            <br />I specialize in building <strong className="font-semibold text-fg">scalable</strong>,{' '}
            <strong className="font-semibold text-fg">secure</strong>, and{' '}
            <strong className="font-semibold text-fg">cloud-native</strong> digital products, that deliver
            exceptional user experiences.
          </p>
        </div>
      </div>

      <div className="container-x mt-20 md:mt-28">
        <div className="relative h-px w-full overflow-hidden bg-mint/10">
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-mint to-transparent" />
        </div>
      </div>
    </section>
  )
}
