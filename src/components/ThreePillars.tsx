const pillars = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    number: '01',
    title: 'Full-Stack Engineering',
    tagline: 'I own the entire product layer — UI to API to DB.',
    description:
      'From pixel-perfect React interfaces to robust Spring Boot backends, I build complete digital products end-to-end. Clean architecture, secure APIs, and production-grade code from day one.',
    stack: ['Java', 'Spring Boot', 'React', 'TypeScript', 'JPA/Hibernate', 'REST APIs', 'JWT'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 4C8 4 4.5 6.5 3 10c1 .5 2.5.5 3.5 0C7.5 8.5 9.5 7.5 12 7.5S16.5 8.5 17.5 10c1 .5 2.5.5 3.5 0C19.5 6.5 16 4 12 4z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M12 8.5c-2.5 0-4.5 1-5.5 2.5 1 .5 2.5.5 3.5 0 .5-.8 1.2-1.2 2-1.2s1.5.4 2 1.2c1 .5 2.5.5 3.5 0C16.5 9.5 14.5 8.5 12 8.5z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="12" cy="16" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    number: '02',
    title: 'Cloud-Native Architecture',
    tagline: 'I architect for scale, resilience, and zero-downtime.',
    description:
      'I design and deploy cloud-native systems on AWS — Beanstalk, EC2, RDS, S3, CloudWatch — with proper IAM, CI/CD pipelines, and Nginx/ELB configuration. Infrastructure that scales with your business.',
    stack: ['AWS', 'Docker', 'CI/CD', 'Beanstalk', 'RDS/Aurora', 'CloudWatch', 'Microservices'],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 7v1M12 16v1M7 12h1M16 12h1"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    number: '03',
    title: 'Agentic AI Systems',
    tagline: "I build AI that doesn't just respond — it acts.",
    description:
      "I don't just integrate AI APIs — I build autonomous agents that decide, act, and execute without human intervention. RAG pipelines, LangChain4j workflows, Spring AI orchestration, and prompt-engineered systems built for production.",
    stack: ['Spring AI', 'LangChain4j', 'RAG', 'pgvector', 'Claude', 'Prompt Engineering', 'Agents'],
  },
]

export function ThreePillars() {
  return (
    <section className="bg-navy-deep py-20 md:py-28">
      <div className="container-x">
        <div className="text-center">
          <p className="accent-eyebrow mb-3">What I Bring</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-fg md:text-4xl">
            Three Layers. One Engineer.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-fg-muted md:text-base">
            Most engineers master one discipline. I operate across all three — and connect them into systems that are greater than the sum of their parts.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="group flex flex-col rounded-2xl border border-mint/10 bg-navy-light p-7 transition hover:border-mint/40"
            >
              {/* Number + icon */}
              <div className="flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl border border-mint/20 bg-mint/5 text-mint transition group-hover:border-mint/50 group-hover:bg-mint/10">
                  {pillar.icon}
                </div>
                <span className="font-mono text-4xl font-extrabold text-mint/10 transition group-hover:text-mint/20">
                  {pillar.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-5 text-xl font-bold text-fg">{pillar.title}</h3>

              {/* Tagline */}
              <p className="mt-1 font-mono text-xs text-mint">{pillar.tagline}</p>

              {/* Description */}
              <p className="mt-4 flex-1 text-sm leading-relaxed text-fg-muted">
                {pillar.description}
              </p>

              {/* Stack tags */}
              <div className="mt-6 flex flex-wrap gap-1.5">
                {pillar.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-mint/15 bg-mint/5 px-2 py-0.5 font-mono text-[11px] text-mint/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
