import profilePhoto from '../assets/profile.jpg'

export function About() {
  const facts = [
    { icon: '📍', text: 'Based in India' },
    { icon: '💼', text: 'Open to Opportunities' },
    { icon: '🤖', text: 'Agentic AI Enthusiast' },
    { icon: '☁️', text: 'AWS Practitioner' },
  ]

  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="absolute inset-0 -z-10" style={{ background: 'rgba(3,7,18,0.45)' }} />

      <div className="container-x">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">

          {/* ── Photo column ── */}
          <div className="flex justify-center md:justify-start">
            <div className="relative">
              {/* Glow behind photo */}
              <div
                className="absolute -inset-6 -z-10 rounded-3xl opacity-25"
                style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.6) 0%, transparent 70%)' }}
              />
              {/* Photo frame */}
              <div
                className="relative h-72 w-72 overflow-hidden rounded-2xl"
                style={{
                  border: '1.5px solid rgba(167,139,250,0.35)',
                  background: 'rgba(255,255,255,0.03)',
                }}
              >
                <img
                  src={profilePhoto}
                  alt="Sandeep Kumar Mahto"
                  className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />

                {/* Corner accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ background: 'linear-gradient(90deg,#a78bfa,#22d3ee)' }}
                />
              </div>
            </div>
          </div>

          {/* ── Content column ── */}
          <div>
            <p className="accent-eyebrow mb-3">Who I Am</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-fg md:text-4xl">
              Engineer by craft,{' '}
              <span className="gradient-text">AI builder by choice.</span>
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-fg-muted">
              I'm Sandeep — a Full-Stack Engineer at{' '}
              <span className="text-fg font-medium">Infinite Computer Solutions</span> with
              hands-on experience building production systems in Java, Spring Boot, and React.
              I don't stop at "working" code — I architect for scale, resilience, and intelligence.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-fg-muted">
              My edge is the intersection of three disciplines most engineers pick only one from:
              full-stack product development, cloud-native infrastructure on AWS, and autonomous
              AI agents that operate without human intervention.
            </p>

            {/* Currently building */}
            <div
              className="mt-6 rounded-xl p-4"
              style={{
                background: 'rgba(167,139,250,0.07)',
                border: '1px solid rgba(167,139,250,0.2)',
              }}
            >
              <p className="mb-1.5 font-mono text-[10px] uppercase tracking-widest text-mint">
                ⚡ Currently Building
              </p>
              <p className="text-sm text-fg">
                AI-powered content pipeline — turning developer tutorials into multi-format
                publishing with Spring AI + LangChain4j. Live at{' '}
                <a
                  href="https://www.youtube.com/@DevWithAI"
                  target="_blank"
                  rel="noreferrer"
                  className="text-mint hover:opacity-80 transition-opacity"
                >
                  @DevWithAI
                </a>
                .
              </p>
            </div>

            {/* Quick facts */}
            <div className="mt-5 flex flex-wrap gap-2">
              {facts.map(({ icon, text }) => (
                <span key={text} className="pill-dark">
                  {icon} {text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
