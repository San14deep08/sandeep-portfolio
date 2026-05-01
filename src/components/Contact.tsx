import { useState } from 'react'
import { profile } from '../data/profile'

type Status = 'idle' | 'loading' | 'success' | 'error'

const WEB3FORMS_KEY = '568ed326-e397-49d4-b06a-ea5192098777'

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          subject: form.subject || `Portfolio message from ${form.name}`,
          message: form.message,
          from_name: 'devwithai.dev',
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const socialLinks = [
    { label: 'GitHub', href: profile.socials.github },
    { label: 'LinkedIn', href: profile.socials.linkedin },
    { label: 'YouTube', href: profile.socials.youtube },
    { label: 'Email', href: profile.socials.email },
  ]

  return (
    <section id="contact" className="neural-grid relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10" style={{ background: 'rgba(3,7,18,0.4)' }} />

      <div className="container-x relative">

        {/* ── Header ── */}
        <div className="mb-14 text-center">
          <p className="accent-eyebrow uppercase tracking-[0.25em]">Get In Touch</p>
          <h2
            className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl"
            style={{
              background: 'linear-gradient(135deg,#a78bfa 0%,#818cf8 45%,#22d3ee 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Let's Work Together
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-fg-muted md:text-base">
            Have a project in mind, a role to fill, or just want to talk AI?
            Drop a message — I reply within 24 hours.
          </p>
        </div>

        {/* ── Form / Success ── */}
        <div className="mx-auto max-w-2xl">
          {status === 'success' ? (
            /* Success state */
            <div className="glass-card flex flex-col items-center gap-4 px-8 py-14 text-center">
              <div className="text-5xl">✅</div>
              <h3 className="text-xl font-bold text-fg">Message Sent!</h3>
              <p className="max-w-sm text-sm text-fg-muted">
                Thanks for reaching out,{' '}
                <span className="text-mint">{form.name || 'friend'}</span>! I'll get back
                to you within 24 hours.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-2 font-mono text-xs text-mint transition-opacity hover:opacity-75"
              >
                ← Send another message
              </button>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} className="glass-card flex flex-col gap-5 p-8">

              {/* Name + Email row */}
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-fg-muted">
                    Name <span className="text-mint">*</span>
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="rounded-lg px-4 py-3 text-sm text-fg outline-none transition-all duration-200 placeholder:text-fg-muted/40 focus:ring-1 focus:ring-mint/50"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.09)',
                    }}
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-fg-muted">
                    Email <span className="text-mint">*</span>
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@company.com"
                    className="rounded-lg px-4 py-3 text-sm text-fg outline-none transition-all duration-200 placeholder:text-fg-muted/40 focus:ring-1 focus:ring-mint/50"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.09)',
                    }}
                  />
                </label>
              </div>

              {/* Subject */}
              <label className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-fg-muted">
                  Subject
                </span>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project idea · Job opportunity · Just saying hi"
                  className="rounded-lg px-4 py-3 text-sm text-fg outline-none transition-all duration-200 placeholder:text-fg-muted/40 focus:ring-1 focus:ring-mint/50"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.09)',
                  }}
                />
              </label>

              {/* Message */}
              <label className="flex flex-col gap-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-fg-muted">
                  Message <span className="text-mint">*</span>
                </span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project, role, or idea..."
                  className="resize-none rounded-lg px-4 py-3 text-sm text-fg outline-none transition-all duration-200 placeholder:text-fg-muted/40 focus:ring-1 focus:ring-mint/50"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.09)',
                  }}
                />
              </label>

              {/* Error */}
              {status === 'error' && (
                <p className="font-mono text-xs text-red-400">
                  ⚠ Something went wrong. Please try again or email me directly at{' '}
                  <a href={profile.socials.email} className="underline">
                    sandeep88@gmail.com
                  </a>
                  .
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex items-center justify-center gap-2 rounded-full py-3.5 px-8 font-bold transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-50"
                style={{ background: 'linear-gradient(135deg,#a78bfa,#22d3ee)', color: '#030712' }}
              >
                {status === 'loading' ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                      <path d="M5 12h14m0 0l-6-6m6 6l-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}

          {/* ── Direct links ── */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            {socialLinks.map(s => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                className="font-mono text-xs text-fg-muted transition-colors hover:text-mint"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
