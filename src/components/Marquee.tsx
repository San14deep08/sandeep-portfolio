const phrase = 'Full Stack DEVELOPER'

export function Marquee() {
  const items = Array.from({ length: 8 }).map(() => phrase)
  return (
    <div className="overflow-hidden border-y border-mint/10 bg-navy-deep py-10 text-fg">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[...items, ...items].map((p, i) => (
          <span key={i} className="mx-6 text-3xl font-extrabold tracking-tight md:text-5xl">
            {p} <span className="mx-3 text-mint">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}
