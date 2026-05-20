import { useEffect, useState } from 'react'

interface TypewriterOptions {
  delay?: number   // ms before typing starts
  speed?: number   // ms per character
}

export function useTypewriter(text: string, options: TypewriterOptions = {}) {
  const { delay = 600, speed = 48 } = options
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setDone(false)

    const startTimer = setTimeout(() => {
      let i = 0
      const tick = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(tick)
          setDone(true)
        }
      }, speed)
      return () => clearInterval(tick)
    }, delay)

    return () => clearTimeout(startTimer)
  }, [text, delay, speed])

  return { displayed, done }
}
