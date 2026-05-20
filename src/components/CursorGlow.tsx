import { useEffect, useRef } from 'react'

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let raf: number
    let targetX = -200
    let targetY = -200
    let currentX = -200
    let currentY = -200

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX
      targetY = e.clientY
    }

    const animate = () => {
      // Smooth lerp follow
      currentX += (targetX - currentX) * 0.08
      currentY += (targetY - currentY) * 0.08

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${currentX}px, ${currentY}px)`
      }
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed left-0 top-0 z-0"
      style={{
        width: '420px',
        height: '420px',
        marginLeft: '-210px',
        marginTop: '-210px',
        background: 'radial-gradient(circle, rgba(124,58,237,0.13) 0%, rgba(167,139,250,0.06) 40%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(8px)',
        willChange: 'transform',
      }}
      aria-hidden
    />
  )
}
