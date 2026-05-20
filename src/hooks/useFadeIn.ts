import { useEffect, useRef } from 'react'

interface FadeInOptions {
  threshold?: number
  delay?: number
}

export function useFadeIn<T extends HTMLElement = HTMLElement>(options: FadeInOptions = {}) {
  const { threshold = 0.15, delay = 0 } = options
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Start hidden
    el.style.opacity = '0'
    el.style.transform = 'translateY(32px)'
    el.style.transition = `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, delay])

  return ref
}
