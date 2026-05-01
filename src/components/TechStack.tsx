const groups = [
  {
    category: 'Frontend',
    accent: '#22d3ee',
    techs: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite', 'HTML / CSS', 'Redux'],
  },
  {
    category: 'Backend',
    accent: '#a78bfa',
    techs: ['Java 17', 'Spring Boot', 'Spring Security', 'JPA / Hibernate', 'REST APIs', 'JWT', 'Maven'],
  },
  {
    category: 'Cloud & DevOps',
    accent: '#f59e0b',
    techs: ['AWS EC2', 'AWS RDS', 'AWS S3', 'Elastic Beanstalk', 'CloudWatch', 'Docker', 'CI/CD', 'Nginx'],
  },
  {
    category: 'AI & Agents',
    accent: '#ec4899',
    techs: ['Spring AI', 'LangChain4j', 'RAG Pipelines', 'pgvector', 'Claude API', 'Prompt Engineering', 'Vector DBs'],
  },
  {
    category: 'Databases & Tools',
    accent: '#34d399',
    techs: ['PostgreSQL', 'MySQL', 'Redis', 'Git / GitHub', 'IntelliJ IDEA', 'Postman'],
  },
]

export function TechStack() {
  return (
    <section id="skills" className="relative py-20 md:py-28">
      {/* Subtle bg */}
      <div className="absolute inset-0 -z-10" style={{ background: 'rgba(3,7,18,0.55)' }} />

      <div className="container-x">
        {/* Header */}
        <div className="text-center">
          <p className="accent-eyebrow mb-3">What I Work With</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-fg md:text-4xl">
            My Tech Stack
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-fg-muted md:text-base">
            Tools and technologies I use to build full-stack products, cloud infrastructure,
            and autonomous AI systems.
          </p>
        </div>

        {/* Groups grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map(({ category, accent, techs }) => (
            <div
              key={category}
              className="glass-card p-6 transition-all duration-300"
            >
              {/* Category header */}
              <div className="mb-4 flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full flex-shrink-0"
                  style={{ background: accent }}
                />
                <h3
                  className="font-mono text-xs font-bold uppercase tracking-widest"
                  style={{ color: accent }}
                >
                  {category}
                </h3>
              </div>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2">
                {techs.map(tech => (
                  <span
                    key={tech}
                    className="rounded-md px-3 py-1 font-mono text-[11px] text-fg transition-all duration-200 hover:scale-105"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: `1px solid ${accent}26`,
                      color: '#cbd5e1',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* "Always learning" card */}
          <div
            className="glass-card p-6 flex flex-col items-center justify-center text-center gap-3"
            style={{ border: '1px dashed rgba(167,139,250,0.25)' }}
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full text-xl"
              style={{ background: 'rgba(167,139,250,0.1)' }}
            >
              🚀
            </div>
            <p className="font-mono text-xs uppercase tracking-widest text-mint">Always Learning</p>
            <p className="text-xs text-fg-muted leading-relaxed">
              Exploring Kubernetes, Kafka, multi-agent orchestration, and next-gen AI tooling.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
