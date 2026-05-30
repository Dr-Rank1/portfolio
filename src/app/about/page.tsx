'use client'

import Image from 'next/image'
import { FaGithub, FaDatabase, FaGraduationCap } from 'react-icons/fa'
import { SiPython, SiReact } from 'react-icons/si'
import { Reveal } from '@/components/Reveal'

const highlights = [
  { title: 'Backend Architecture', subtitle: 'Scalable API Design', icon: FaGraduationCap },
  { title: 'Python Development', subtitle: 'Django · Flask · FastAPI', icon: SiPython },
  { title: 'Web Development', subtitle: 'React · TypeScript', icon: SiReact },
  { title: 'Database Design', subtitle: 'PostgreSQL · MongoDB', icon: FaDatabase },
]

export default function About() {
  return (
    <section className="min-h-screen pt-28 pb-24">
      <div className="mx-auto px-6 max-w-7xl">
        <Reveal>
          <div className="max-w-3xl mx-auto mb-16">
            <p className="section-title">About Me</p>
            <h1 className="heading text-balance">
              Building things that <span className="text-primary">matter</span>
            </h1>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left — photo + info */}
          <Reveal delay={100} className="lg:col-span-2">
          <div className="space-y-4">
            <div className="relative w-full max-w-sm mx-auto aspect-[3/4] rounded-2xl overflow-hidden border border-border/50">
              <Image
                src="/photo.png"
                alt="Ian Gicheha Mbae"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-surface border border-border/50">
              <FaGithub className="text-primary shrink-0" size={16} />
              <div className="text-sm">
                <p className="font-medium">@stewiriffin</p>
                <p className="text-muted">github.com/stewiriffin</p>
              </div>
              <a
                href="https://github.com/stewiriffin"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-xs text-primary hover:text-secondary transition-colors"
              >
                View Profile
              </a>
            </div>
          </div>
          </Reveal>

          {/* Right — bio */}
          <Reveal delay={200} className="lg:col-span-3">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Python Developer with 4 years of experience
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  I&apos;m <span className="text-foreground font-medium">Ian Gicheha Mbae</span> —
                  a backend developer focused on building clean, scalable APIs and web applications.
                  I started coding at 16 and have been building ever since.
                </p>
                <p>
                  My work centres on the Python ecosystem:{' '}
                  <span className="text-foreground">Django</span>,{' '}
                  <span className="text-foreground">FastAPI</span>, and{' '}
                  <span className="text-foreground">Flask</span> for APIs, paired with{' '}
                  <span className="text-foreground">PostgreSQL</span> and{' '}
                  <span className="text-foreground">Redis</span> on the data layer, and{' '}
                  <span className="text-foreground">Docker</span> for deployment.
                  I care about code that is readable, testable, and built to last.
                </p>
                <p>
                  Outside of work I contribute to open source, explore machine learning,
                  and document everything I build on GitHub.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-surface border border-border/50"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="text-primary" size={15} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium leading-tight">{item.title}</p>
                      <p className="text-xs text-muted mt-0.5">{item.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-8 pt-6 border-t border-border/50">
              {[
                { n: '4+', l: 'Years coding' },
                { n: '24+', l: 'Repositories' },
                { n: '15+', l: 'Projects shipped' },
              ].map((s) => (
                <div key={s.l}>
                  <p className="text-2xl font-bold text-primary">{s.n}</p>
                  <p className="text-xs text-muted mt-0.5">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
