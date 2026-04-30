const pillars = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
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
    gradient: 'from-[#7c3aed] to-[#4f46e5]',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 4C7.5 4 4 6.8 3 10.5c1.2.4 2.8.3 3.8-.3C8 8.4 9.8 7.5 12 7.5s4 .9 5.2 2.7c1 .6 2.6.7 3.8.3C20 6.8 16.5 4 12 4z"
          stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
        />
        <path
          d="M12 9c-2.2 0-4 .9-5 2.3 1 .5 2.5.5 3.3-.1.5-.7 1.1-1 1.7-1s1.2.3 1.7 1c.8.6 2.3.6 3.3.1C16 9.9 14.2 9 12 9z"
          stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"
        />
        <circle cx="12" cy="16.5" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    number: '02',
    title: 'Cloud-Native Architecture',
    tagline: 'I architect for scale, resilience, and zero-downtime.',
    description:
      'I design and deploy cloud-native systems on AWS — Beanstalk, EC2, RDS, S3, CloudWatch — with proper IAM, CI/CD pipelines, and Nginx/ELB configuration. Infrastructure that scales with your business.',
    stack: ['AWS', 'Docker', 'CI/CD', 'Beanstalk', 'RDS/Aurora', 'CloudWatch', 'Microservices'],
    gradient: 'from-[#06b6d4] to-[#4f46e5]',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="4" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="20" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="4" cy="18" r="1.5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="20" cy="18" r="1.5" stroke="currentColor" strokeWidth="1.8" />
        <line x1="5.5" y1="6.8" x2="9.5" y2="10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="18.5" y1="6.8" x2="14.5" y2="10.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="5.5" y1="17.2" x2="9.5" y2="13.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="18.5" y1="17.2" x2="14.5" y2="13.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    number: '03',
    title: 'Agentic AI Systems',
    tagline: "I build AI that doesn't just respond — it acts.",
    description:
      "I don't just integrate AI APIs — I build autonomous agents that decide, act, and execute. RAG pipelines, LangChain4j workflows, Spring AI orchestration, and prompt-engineered systems built for production.",
    stack: ['Spring AI', 'LangChain4j', 'RAG', 'pgvector', 'Claude', 'Prompt Engineering', 'Agents'],
    gradient: 'from-[#ec4899] to-[#a78bfa]',
  },
]

export function ThreePillars() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="container-x">
        <div className="text-center">
          <p className="accent-eyebrow mb-3">What I Bring</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-fg md:text-4xl">
            Three Layers. One Engineer.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-fg-muted md:text-base">
            Most engineers master one discipline. I operate across all three — and connect them into systems
            greater than the sum of their parts.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="glass-card group flex flex-col p-7 transition-all duration-300">
              {/* Icon + number */}
              <div className="flex items-start justify-between">
                <div
                  className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${pillar.gradient} p-[1px]`}
                >
                  <div className="grid h-full w-full place-items-center rounded-xl bg-navy/80 text-mint">
                    {pillar.icon}
                  </div>
                </div>
                <span className="font-mono text-4xl font-extrabold text-white/5 transition group-hover:text-white/10">
                  {pillar.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-5 text-xl font-bold text-fg">{pillar.title}</h3>

              {/* Tagline */}
              <p className="mt-1 font-mono text-xs text-mint/80">{pillar.tagline}</p>

              {/* Description */}
              <p className="mt-4 flex-1 text-sm leading-relaxed text-fg-muted">{pillar.description}</p>

              {/* Stack tags */}
              <div className="mt-6 flex flex-wrap gap-1.5">
                {pillar.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/8 bg-white/4 px-2 py-0.5 font-mono text-[11px] text-fg-muted"
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
