'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  FaGithub,
  FaDatabase,
  FaGraduationCap,
  FaGooglePlay,
  FaMobileAlt,
  FaServer,
  FaBriefcase,
  FaCheck,
} from 'react-icons/fa'
import { SiPython, SiReact, SiKotlin, SiFlutter } from 'react-icons/si'
import { Reveal } from '@/components/Reveal'

const highlights = [
  {
    title: 'Mobile Engineering',
    subtitle: 'Native Android (Jetpack Compose) & Flutter',
    icon: FaMobileAlt,
  },
  {
    title: 'Backend Systems',
    subtitle: 'Python, Django, FastAPI & RESTful APIs',
    icon: FaServer,
  },
  {
    title: 'Modern Web Apps',
    subtitle: 'TypeScript, Next.js & Tailwind CSS',
    icon: SiReact,
  },
  {
    title: 'Database Architecture',
    subtitle: 'PostgreSQL, SQLite, Room & Redis',
    icon: FaDatabase,
  },
]

const competencies = [
  'Clean Architecture, MVVM & Modular Codebases',
  'Offline-First App Design & SQLite / Room State Storage',
  'RESTful & Asynchronous API Design (FastAPI, Django REST Framework)',
  'On-Device Processing (AI Background Cutouts, FFmpeg, Image Manipulation)',
  'Payment & Verification Integrations (M-Pesa, KRA APIs, WhatsApp Business)',
  'End-to-End Publishing Pipeline on Google Play Console',
]

export default function About() {
  return (
    <section className="min-h-screen pt-28 pb-24">
      <div className="mx-auto px-6 max-w-7xl">
        <Reveal>
          <div className="max-w-3xl mx-auto mb-14 text-center">
            <p className="section-title">About Me</p>
            <h1 className="heading text-balance">
              Building Software that is <span className="text-primary">Reliable, Fast &amp; Thoughtful</span>
            </h1>
            <p className="text-muted mt-3 text-sm md:text-base leading-relaxed">
              Software Engineer based in Nairobi with over 4 years of hands-on experience building systems from ground up.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left — photo + info */}
          <Reveal delay={100} className="lg:col-span-2">
            <div className="space-y-4">
              <div className="relative w-full max-w-sm mx-auto aspect-[3/4] rounded-2xl overflow-hidden border border-border/70 shadow-lg bg-surface">
                <Image
                  src="/photo.png"
                  alt="Ian Gicheha Mbae"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* GitHub Card */}
              <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-surface border border-border/60">
                <FaGithub className="text-primary shrink-0" size={18} />
                <div className="text-sm">
                  <p className="font-semibold text-foreground">@Dr-Rank1</p>
                  <p className="text-muted text-xs">github.com/Dr-Rank1</p>
                </div>
                <a
                  href="https://github.com/Dr-Rank1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto text-xs px-3 py-1 bg-dark rounded-md border border-border/50 text-primary hover:text-foreground transition-colors font-medium"
                >
                  View Profile
                </a>
              </div>

              {/* Google Play Card */}
              <div className="flex items-center gap-3 px-4 py-3.5 rounded-xl bg-surface border border-border/60">
                <FaGooglePlay className="text-emerald-500 shrink-0" size={16} />
                <div className="text-sm">
                  <p className="font-semibold text-foreground">Published Developer</p>
                  <p className="text-muted text-xs">Google Play Store</p>
                </div>
                <a
                  href="https://play.google.com/store/apps/developer?id=Dr.+Rank"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto text-xs px-3 py-1 bg-dark rounded-md border border-border/50 text-emerald-500 hover:text-foreground transition-colors font-medium"
                >
                  Explore Apps
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right — bio */}
          <Reveal delay={200} className="lg:col-span-3">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-foreground">
                  Full-Cycle Software Engineer with Passion for Craftsmanship
                </h2>
                <div className="space-y-4 text-muted text-sm sm:text-base leading-relaxed">
                  <p>
                    I&apos;m <span className="text-foreground font-semibold">Ian Gicheha Mbae</span>.
                    I focus on the entire lifecycle of software delivery — designing resilient backend architectures, crafting seamless native user interfaces, and shipping finished applications to real users.
                  </p>
                  <p>
                    On the mobile side, I build native Android applications with{' '}
                    <span className="text-foreground font-medium">Kotlin and Jetpack Compose</span> (implementing tactile 2.5D physics, haptics, and clean MVVM patterns) as well as cross-platform mobile apps with{' '}
                    <span className="text-foreground font-medium">Flutter and Dart</span> published on the Google Play Store.
                  </p>
                  <p>
                    On the server and cloud side, I construct robust backend microservices with{' '}
                    <span className="text-foreground font-medium">Python, FastAPI, and Django</span>, backed by{' '}
                    <span className="text-foreground font-medium">PostgreSQL, Redis, and Docker</span>.
                  </p>
                  <p>
                    Whether collaborating with engineering teams or owning a product end-to-end, my focus is always on writeable, testable, and maintainable systems that solve concrete problems.
                  </p>
                </div>
              </div>

              {/* Pillars */}
              <div className="grid sm:grid-cols-2 gap-3.5">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="p-4 rounded-xl bg-surface border border-border/60 hover:border-primary/40 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <item.icon className="text-primary" size={16} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-bold text-foreground leading-tight">{item.title}</p>
                        <p className="text-xs text-muted mt-0.5">{item.subtitle}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Engineering Competencies checklist */}
              <div className="p-5 rounded-2xl bg-surface/60 border border-border/60 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-primary">
                  Engineering Principles &amp; Practices
                </h3>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {competencies.map((comp) => (
                    <div key={comp} className="flex items-start gap-2 text-xs text-muted">
                      <FaCheck className="text-primary shrink-0 mt-0.5" size={10} />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Bar */}
              <div className="flex flex-wrap gap-8 pt-6 border-t border-border/60">
                {[
                  { n: '4+', l: 'Years Experience' },
                  { n: '30+', l: 'Active Repositories' },
                  { n: '2', l: 'Live Play Store Apps' },
                  { n: '100%', l: 'Clean Code Commitment' },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">{s.n}</p>
                    <p className="text-xs text-muted mt-0.5">{s.l}</p>
                  </div>
                ))}
              </div>

              {/* CTA button */}
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl text-xs font-semibold hover:bg-primary-dark shadow-md shadow-primary/20 transition-all"
                >
                  <FaBriefcase size={12} />
                  Discuss an Opportunity
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
