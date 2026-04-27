type Props = {
  position: 'top-right' | 'bottom-left' | 'top-left'
  className?: string
}

export function WaveDecor({ position, className = '' }: Props) {
  const flip =
    position === 'bottom-left'
      ? 'left-0 bottom-0 -scale-x-100 -scale-y-100'
      : position === 'top-left'
        ? 'left-0 top-0 -scale-x-100'
        : 'right-0 top-0'

  return (
    <svg
      className={`pointer-events-none absolute ${flip} h-72 w-72 text-mint/15 md:h-96 md:w-96 ${className}`}
      viewBox="0 0 400 400"
      fill="none"
      aria-hidden
    >
      {Array.from({ length: 18 }).map((_, i) => {
        const offset = i * 10
        return (
          <path
            key={i}
            d={`M ${400 - offset} 0 Q ${380 - offset} ${180 + offset} ${0} ${380 - offset}`}
            stroke="currentColor"
            strokeWidth="0.6"
            fill="none"
          />
        )
      })}
    </svg>
  )
}
