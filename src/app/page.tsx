'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaArrowRight, FaCode, FaCodeBranch, FaCloud } from 'react-icons/fa'
import { TerminalSplash } from '@/components/TerminalSplash'
import { Reveal } from '@/components/Reveal'

export default function Home() {
  const [booted, setBooted] = useState(false)

  if (!booted) return <TerminalSplash onDone={() => setBooted(true)} />

  return (
    <section className="min-h-screen flex items-center pt-24">
      <div className="mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <Reveal>
            <div className="space-y-8">
              <div>
                <p className="section-title">Python Developer</p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]">
                  Ian{' '}
                  <span className="text-primary">Gicheha</span>{' '}
                  Mbae
                </h1>
              </div>

              <p className="text-lg text-muted leading-relaxed max-w-lg">
                Building scalable backend systems and APIs with{' '}
                <span className="text-foreground font-medium">Python</span>,{' '}
                <span className="text-foreground font-medium">Django</span>, and{' '}
                <span className="text-foreground font-medium">FastAPI</span>.
                Based in Nairobi.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
                >
                  View Projects
                  <FaArrowRight size={13} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg text-muted hover:text-foreground hover:border-border/80 transition-colors"
                >
                  Get in Touch
                </Link>
                <a
                  href="https://github.com/stewiriffin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg text-muted hover:text-foreground hover:border-border/80 transition-colors"
                >
                  <FaGithub size={16} />
                  GitHub
                </a>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                <span className="text-sm text-muted">Connect:</span>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/stewiriffin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-foreground transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ianmbae"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-foreground transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right */}
          <Reveal delay={200}>
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                <div className="w-72 h-96 rounded-2xl overflow-hidden border border-border/50">
                  <Image
                    src="/photo.png"
                    alt="Ian Gicheha Mbae"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <Reveal delay={400}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/30 rounded-xl overflow-hidden mt-24">
            {[
              { number: '4+', label: 'Years Experience', icon: FaCode },
              { number: '24+', label: 'GitHub Repos', icon: FaCodeBranch },
              { number: '15+', label: 'Projects Shipped', icon: FaCloud },
              { number: '20+', label: 'Technologies', icon: FaCode },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-dark p-6"
              >
                <stat.icon className="text-primary mb-3" size={16} />
                <p className="text-2xl font-bold">{stat.number}</p>
                <p className="text-sm text-muted mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
