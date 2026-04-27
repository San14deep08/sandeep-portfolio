import type { Project, ProjectLink } from '../data/projects'

const linkIcons: Record<ProjectLink['icon'], JSX.Element> = {
  globe: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path
        d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  ),
  github: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.27-5.23-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17.91-.25 1.89-.38 2.86-.38.97 0 1.95.13 2.86.38 2.18-1.48 3.14-1.17 3.14-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.36-5.25 5.65.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
    </svg>
  ),
  demo: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M10 9l5 3-5 3V9z" fill="currentColor" />
    </svg>
  ),
  ios: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="6" y="2" width="12" height="20" rx="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="18" r="1" fill="currentColor" />
    </svg>
  ),
  android: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="6" y="2" width="12" height="20" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M10 19h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-mint/10 bg-navy-light p-5 shadow-lg shadow-navy-deep/40 transition hover:-translate-y-1 hover:border-mint/40 hover:shadow-xl hover:shadow-mint/5">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-mint/10 bg-gradient-to-br from-navy-deep via-navy to-navy-light">
        <div className="absolute inset-0 grid place-items-center">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-mint/40">
            {project.title}
          </span>
        </div>
        <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
          <div className="absolute inset-0 bg-gradient-to-br from-mint/0 via-mint/0 to-mint/10" />
        </div>
      </div>

      <div className="mt-5 flex flex-1 flex-col">
        <h3 className="text-lg font-bold text-fg group-hover:text-mint">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-fg-muted">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-mint/20 bg-mint/5 px-2 py-0.5 font-mono text-[11px] font-medium text-mint"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.links.map((link) => (
            <a
              key={link.label + link.href}
              href={link.href}
              className="inline-flex items-center gap-2 rounded-full border border-mint/30 bg-transparent px-3 py-1.5 text-xs font-medium text-mint transition hover:bg-mint/10"
            >
              {linkIcons[link.icon]}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}
