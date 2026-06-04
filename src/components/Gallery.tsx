import { useState, useEffect, useCallback } from 'react'
import { galleryItems, CATEGORIES } from '../data/gallery'
import { useFadeIn } from '../hooks/useFadeIn'
import type { GalleryCategory } from '../data/gallery'

// ── Lightbox ──────────────────────────────────────────────────────────────────
function Lightbox({
  src,
  caption,
  onClose,
  onPrev,
  onNext,
}: {
  src: string
  caption: string
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ background: 'rgba(3,7,18,0.95)', backdropFilter: 'blur(12px)' }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full text-fg-muted transition hover:text-fg"
        style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
        aria-label="Close"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {/* Prev */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        className="absolute left-4 grid h-10 w-10 place-items-center rounded-full text-fg-muted transition hover:text-mint"
        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
        aria-label="Previous"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Image */}
      <div
        className="relative mx-16 max-h-[85vh] max-w-4xl overflow-hidden rounded-2xl"
        style={{ border: '1px solid rgba(167,139,250,0.2)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={caption}
          className="max-h-[80vh] w-full object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"%3E%3Crect fill="%230d0d1a" width="600" height="400"/%3E%3Ctext fill="%23a78bfa" font-family="monospace" font-size="14" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EPhoto coming soon%3C/text%3E%3C/svg%3E'
          }}
        />
        {caption && (
          <div className="absolute bottom-0 left-0 right-0 px-5 py-3" style={{ background: 'linear-gradient(transparent, rgba(3,7,18,0.9))' }}>
            <p className="text-sm text-fg-muted">{caption}</p>
          </div>
        )}
      </div>

      {/* Next */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        className="absolute right-4 grid h-10 w-10 place-items-center rounded-full text-fg-muted transition hover:text-mint"
        style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
        aria-label="Next"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden>
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  )
}

// ── Category emoji map ────────────────────────────────────────────────────────
const categoryEmoji: Record<string, string> = {
  All: '✦',
  Touring: '🚗',
  Trekking: '🏔️',
  Cricket: '🏏',
  Life: '✨',
}

// ── Main Gallery component ────────────────────────────────────────────────────
export function Gallery() {
  const ref = useFadeIn<HTMLElement>()
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const showPrev = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length))
  }, [filtered.length])

  const showNext = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length))
  }, [filtered.length])

  return (
    <>
      <section ref={ref} id="gallery" className="relative py-20 md:py-28">
        <div className="absolute inset-0 -z-10" style={{ background: 'rgba(3,7,18,0.5)' }} />

        <div className="container-x">

          {/* Header */}
          <div className="text-center">
            <p className="accent-eyebrow mb-3">Beyond the Code</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-fg md:text-4xl">
              Life in{' '}
              <span className="gradient-text">Frames</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-fg-muted md:text-base">
              Touring, trekking, cricket, and everything in between — a glimpse into
              the adventures that fuel the code.
            </p>
          </div>

          {/* Category filter tabs */}
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = cat === activeCategory
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="flex items-center gap-1.5 rounded-full px-4 py-2 font-mono text-xs tracking-wider transition-all duration-200"
                  style={{
                    background: isActive ? 'rgba(167,139,250,0.15)' : 'rgba(255,255,255,0.04)',
                    border: isActive ? '1px solid rgba(167,139,250,0.5)' : '1px solid rgba(255,255,255,0.08)',
                    color: isActive ? '#a78bfa' : '#94a3b8',
                  }}
                >
                  <span>{categoryEmoji[cat]}</span>
                  {cat}
                </button>
              )
            })}
          </div>

          {/* Photo grid */}
          <div className="mt-10 columns-2 gap-4 md:columns-3 lg:columns-4">
            {filtered.map((item, index) => (
              <div
                key={item.src}
                className="group relative mb-4 cursor-zoom-in overflow-hidden rounded-xl break-inside-avoid"
                style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                onClick={() => openLightbox(index)}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent && !parent.querySelector('.placeholder')) {
                      const placeholder = document.createElement('div')
                      placeholder.className = 'placeholder'
                      placeholder.style.cssText = 'height:180px;display:flex;align-items:center;justify-content:center;background:rgba(13,13,26,0.8);'
                      placeholder.innerHTML = `<div style="text-align:center;padding:16px"><div style="font-size:28px;margin-bottom:8px">${categoryEmoji[item.category]}</div><p style="font-family:monospace;font-size:11px;color:#94a3b8">${item.caption}</p></div>`
                      parent.appendChild(placeholder)
                    }
                  }}
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex items-end opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: 'linear-gradient(transparent 40%, rgba(3,7,18,0.85))' }}
                >
                  <p className="w-full px-3 pb-3 text-xs text-fg-muted">{item.caption}</p>
                </div>
                {/* Category pill */}
                <span
                  className="absolute right-2 top-2 rounded-full px-2 py-0.5 font-mono text-[10px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: 'rgba(167,139,250,0.25)', color: '#a78bfa', border: '1px solid rgba(167,139,250,0.3)' }}
                >
                  {item.category}
                </span>
              </div>
            ))}
          </div>

          {/* Instagram CTA */}
          <div className="mt-14 flex flex-col items-center gap-4">
            <p className="font-mono text-xs text-fg-muted tracking-widest uppercase">Want to see more?</p>
            <a
              href="https://www.instagram.com/kumar_sandeep54"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-full px-7 py-3.5 font-semibold text-sm transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, rgba(236,72,153,0.15), rgba(124,58,237,0.15))',
                border: '1px solid rgba(236,72,153,0.3)',
                color: '#f1f5f9',
              }}
            >
              {/* Instagram icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              Follow on Instagram
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1" aria-hidden>
                <path d="M5 12h14m0 0l-6-6m6 6l-6 6" />
              </svg>
            </a>
          </div>

        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          src={filtered[lightboxIndex].src}
          caption={filtered[lightboxIndex].caption}
          onClose={closeLightbox}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </>
  )
}
