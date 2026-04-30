import { experiences } from '../data/experience'

export function Experience() {
  return (
    <section id="experience" className="relative py-20 text-fg md:py-28">
      {/* Subtle section bg to improve text legibility */}
      <div className="absolute inset-0 -z-10" style={{ background: 'rgba(3,7,18,0.55)' }} />

      <div className="container-x">
        <div className="text-center">
          <p className="accent-eyebrow mb-3">Where I&apos;ve Been</p>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Professional Adventures!</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-fg-muted md:text-base">
            From tackling tough challenges to celebrating big wins — a glimpse into my professional journey.
          </p>
        </div>

        <ol className="mx-auto mt-14 flex max-w-3xl flex-col gap-12">
          {experiences.map((exp) => (
            <li key={exp.period + exp.role} className="grid gap-3 md:grid-cols-[160px_1fr] md:gap-8">
              <div className="font-mono text-xs uppercase tracking-wider text-mint">{exp.period}</div>
              <div className="glass-card p-6 transition-all duration-300">
                <h3 className="text-lg font-bold text-fg md:text-xl">
                  {exp.role}
                  <span className="text-mint"> @ {exp.company}</span>
                  <span className="ml-1 inline-block text-mint/50">↗</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{exp.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {exp.tags.map((t) => (
                    <span key={t} className="pill-dark">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
