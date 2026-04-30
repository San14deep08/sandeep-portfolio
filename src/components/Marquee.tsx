const phrases = ['Full-Stack Engineering', 'Cloud-Native Architecture', 'Agentic AI Systems']

export function Marquee() {
  const items = Array.from({ length: 4 }).flatMap(() => phrases)
  return (
    <div
      className="overflow-hidden border-y py-10 text-fg"
      style={{
        borderColor: 'rgba(167,139,250,0.15)',
        background: 'rgba(3,7,18,0.7)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[...items, ...items].map((p, i) => (
          <span key={i} className="mx-6 text-3xl font-extrabold tracking-tight md:text-5xl">
            {p}{' '}
            <span className="mx-3 bg-gradient-to-r from-[#a78bfa] to-[#22d3ee] bg-clip-text text-transparent">
              •
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
