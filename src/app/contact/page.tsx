'use client'

import { useState, useRef } from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaPaperPlane,
  FaGooglePlay,
} from 'react-icons/fa'
import confetti from 'canvas-confetti'
import { Reveal } from '@/components/Reveal'

const contactInfo = [
  { icon: FaEnvelope, label: 'Email', value: 'mbaegicheha@gmail.com', href: 'mailto:mbaegicheha@gmail.com' },
  { icon: FaPhone, label: 'Phone / WhatsApp', value: '+254 708 617 059', href: 'tel:+254708617059' },
  { icon: FaMapMarkerAlt, label: 'Location', value: 'Nairobi, Kenya (UTC+3 / EAT)', href: null },
  { icon: FaGithub, label: 'GitHub', value: '@Dr-Rank1', href: 'https://github.com/Dr-Rank1' },
  { icon: FaLinkedin, label: 'LinkedIn', value: 'in/ianmbae', href: 'https://www.linkedin.com/in/ianmbae' },
]

function fireConfetti() {
  const defaults = { spread: 60, ticks: 100, gravity: 0.6, decay: 0.94, startVelocity: 30 }
  confetti({ ...defaults, particleCount: 40, origin: { x: 0.3, y: 0.7 } })
  confetti({ ...defaults, particleCount: 40, origin: { x: 0.7, y: 0.7 } })
  confetti({ ...defaults, particleCount: 20, origin: { x: 0.5, y: 0.6 }, spread: 120 })
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const subject = encodeURIComponent(
      formData.subject || `Engineering Opportunity / Inquiry from ${formData.name}`
    )
    const body = encodeURIComponent(
      `Hello Ian,\n\nI came across your portfolio and wanted to reach out regarding a software role / project.\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    )

    window.location.href = `mailto:mbaegicheha@gmail.com?subject=${subject}&body=${body}`

    fireConfetti()

    setSubmitStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
    setTimeout(() => setSubmitStatus('idle'), 6000)
  }

  return (
    <section className="min-h-screen pt-28 pb-24">
      <div className="mx-auto px-6 max-w-7xl">
        <Reveal>
          <div className="max-w-3xl mx-auto mb-14 text-center">
            <p className="section-title">Get In Touch</p>
            <h1 className="heading">
              Let&apos;s Build Something <span className="text-primary">Exceptional</span>
            </h1>
            <p className="text-muted mt-3 text-sm md:text-base leading-relaxed">
              Open to full-time engineering roles, technical contract consultations, and high-impact software projects.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          {/* Left Column: Direct Links & Status */}
          <Reveal delay={100} className="lg:col-span-5 space-y-6">
            <div className="bg-surface/80 border border-border/60 rounded-2xl p-6 space-y-5">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold mb-2 border border-cyan-500/20">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  Currently Accepting Inquiries
                </div>
                <h2 className="text-lg font-bold text-foreground">Direct Reachout</h2>
                <p className="text-xs text-muted leading-relaxed mt-1">
                  Have a specific role or architecture question? Feel free to reach out directly via email, phone, or LinkedIn.
                </p>
              </div>

              <div className="space-y-2.5">
                {contactInfo.map((info) => {
                  const content = (
                    <div className="flex items-center gap-3 p-3 bg-dark/60 border border-border/40 hover:border-primary/40 rounded-xl transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <info.icon size={14} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] text-muted uppercase font-semibold tracking-wider">{info.label}</p>
                        <p className="text-xs font-medium text-foreground truncate">{info.value}</p>
                      </div>
                    </div>
                  )

                  return info.href ? (
                    <a key={info.label} href={info.href} target="_blank" rel="noopener noreferrer" className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={info.label}>{content}</div>
                  )
                })}
              </div>

              {/* Developer credentials */}
              <div className="pt-3 border-t border-border/40 flex items-center justify-between text-xs text-muted">
                <span>Developer Profile:</span>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/Dr-Rank1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-dark text-muted hover:text-foreground border border-border/40"
                    aria-label="GitHub"
                  >
                    <FaGithub size={14} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ianmbae"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-dark text-muted hover:text-foreground border border-border/40"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={14} />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/developer?id=Dr_Rank"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-dark text-cyan-400 hover:text-cyan-300 border border-border/40"
                    aria-label="Google Play"
                  >
                    <FaGooglePlay size={13} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Contact Form */}
          <Reveal delay={200} className="lg:col-span-7">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-surface/90 border border-border/60 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4"
            >
              <h3 className="text-lg font-bold text-foreground">Send a Message</h3>
              <p className="text-xs text-muted leading-relaxed -mt-2">
                Fill in the details below to start a conversation directly in your email client.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-dark/70 border border-border/50 rounded-xl text-xs text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors"
                    placeholder="e.g. Jane Smith"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-dark/70 border border-border/50 rounded-xl text-xs text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors"
                    placeholder="jane@company.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1.5">Topic / Role</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 bg-dark/70 border border-border/50 rounded-xl text-xs text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors"
                  placeholder="e.g. Full-Stack / Mobile Engineer Position"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-foreground mb-1.5">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2.5 bg-dark/70 border border-border/50 rounded-xl text-xs text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Share details about your team, tech stack, or product..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-primary text-white rounded-xl text-xs font-semibold hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-md shadow-primary/25 disabled:opacity-50"
                disabled={isSubmitting}
              >
                <FaPaperPlane size={11} />
                {isSubmitting ? 'Opening Mail Client...' : 'Dispatch Message'}
              </button>

              {submitStatus === 'success' && (
                <div className="p-3 bg-primary/10 border border-primary/20 rounded-xl flex items-center gap-2 text-xs text-primary">
                  <FaCheckCircle size={14} />
                  <span>Email client pre-populated! Hit send to deliver your message.</span>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
