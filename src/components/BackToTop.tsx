import { useEffect, useState } from 'react'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-8 right-8 z-50 grid h-11 w-11 place-items-center rounded-full border border-mint/30 bg-navy-light shadow-lg shadow-black/40 transition-all duration-300 hover:border-mint/60 hover:shadow-mint/10"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.85)',
        pointerEvents: visible ? 'auto' : 'none',
        background: 'rgba(13,13,26,0.85)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-mint"
        aria-hidden
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  )
}
