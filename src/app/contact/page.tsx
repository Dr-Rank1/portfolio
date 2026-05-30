'use client'

import { useState, useRef } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import confetti from 'canvas-confetti'
import { Reveal } from '@/components/Reveal'

const contactInfo = [
  { icon: FaEnvelope, label: 'Email', value: 'mbaegicheha@gmail.com' },
  { icon: FaPhone, label: 'Phone', value: '+254 708617059' },
  { icon: FaMapMarkerAlt, label: 'Location', value: 'Nairobi, Kenya' },
  { icon: FaGithub, label: 'GitHub', value: '@stewiriffin' },
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
      formData.subject || `Portfolio contact from ${formData.name}`
    )
    const body = encodeURIComponent(
      `Hi Ian,\n\nYou have a new message from your portfolio.\n\n` +
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
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <p className="section-title">Get In Touch</p>
            <h1 className="heading">
              Let&apos;s Work <span className="text-primary">Together</span>
            </h1>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <Reveal delay={100}>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Let&apos;s connect</h2>
              <p className="text-muted text-sm leading-relaxed">
                I&apos;m always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to reach out.
              </p>
            </div>

            <div className="space-y-3">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-center gap-3 p-3.5 bg-surface border border-border/50 rounded-lg"
                >
                  <info.icon className="text-primary shrink-0" size={16} />
                  <div className="text-sm">
                    <p className="text-muted text-xs">{info.label}</p>
                    <p className="font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-xs text-muted mb-3">Follow me on:</p>
              <div className="flex gap-2">
                {[
                  { icon: FaGithub, href: 'https://github.com/stewiriffin', label: 'GitHub' },
                  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ianmbae', label: 'LinkedIn' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-surface border border-border/50 rounded-lg flex items-center justify-center text-muted hover:text-foreground hover:border-border/80 transition-colors"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          </Reveal>

          <Reveal delay={200}>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-surface border border-border/50 rounded-xl p-6"
          >
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs text-muted mb-1.5">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-dark border border-border/50 rounded-lg text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-xs text-muted mb-1.5">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 bg-dark border border-border/50 rounded-lg text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-xs text-muted mb-1.5">Subject</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-2.5 bg-dark border border-border/50 rounded-lg text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary/50 transition-colors"
                placeholder="Project Inquiry"
              />
            </div>

            <div className="mb-6">
              <label className="block text-xs text-muted mb-1.5">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-2.5 bg-dark border border-border/50 rounded-lg text-sm text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <p className="mt-3 text-xs text-center text-primary">
                Email client opened — just hit send.
              </p>
            )}
          </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
