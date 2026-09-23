'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaCode,
  FaCloud,
  FaAndroid,
  FaMobileAlt,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaGooglePlay,
} from 'react-icons/fa'
import {
  SiPython,
  SiDjango,
  SiFastapi,
  SiKotlin,
  SiFlutter,
  SiPostgresql,
  SiNextdotjs,
  SiTypescript,
} from 'react-icons/si'
import { Reveal } from '@/components/Reveal'

const flagshipPreview = [
  {
    title: 'Wordle Tactile Edition',
    subtitle: 'Native Android Puzzle Game',
    desc: 'Jetpack Compose & Material 3 game with 2.5D extruded tactile tiles, gyroscope tilt parallax, and multi-board Dordle/Quordle engine.',
    tech: ['Kotlin', 'Compose', 'Material 3'],
    link: '/projects',
    github: 'https://github.com/Dr-Rank1/Wordle',
    icon: FaAndroid,
  },
  {
    title: 'Make-CV Platform',
    subtitle: 'Kenyan Career CV Builder',
    desc: 'Privacy-first CV generator with real-time A4 rendering, local autosave state, profile photo tools, and vector PDF compilation.',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
    link: '/projects',
    github: 'https://github.com/Dr-Rank1/Make-CV',
    icon: FaCode,
  },
  {
    title: 'Stikk WhatsApp Studio',
    subtitle: 'Flutter Multimedia Tool',
    desc: 'Sticker pack maker featuring on-device AI background removal, FFmpeg video cutouts, and Android WhatsApp intent linking.',
    tech: ['Flutter', 'Dart', 'FFmpeg'],
    link: '/projects',
    github: 'https://github.com/Dr-Rank1/Sticker',
    icon: FaMobileAlt,
  },
]

export default function Home() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="mx-auto px-6 max-w-7xl">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-6 lg:pt-14 pb-16">
          {/* Left Hero */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface border border-border/70 text-xs shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-muted font-medium">Available for Software Roles &amp; High-Impact Projects</span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-foreground">
                Crafting Scalable Backends &amp;{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-cyan-400">
                  Native Mobile Apps
                </span>
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p className="text-base sm:text-lg text-muted leading-relaxed max-w-xl">
                Hi, I&apos;m <strong className="text-foreground font-semibold">Ian Gicheha Mbae</strong> — a Software Engineer specializing in{' '}
                <span className="text-foreground font-medium">Python (Django, FastAPI)</span>,{' '}
                <span className="text-foreground font-medium">Android &amp; Kotlin (Jetpack Compose)</span>, and{' '}
                <span className="text-foreground font-medium">Flutter</span>. I engineer reliable systems from low-latency REST APIs to tactile mobile applications with apps published on Google Play.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={200}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary-dark shadow-md shadow-primary/25 transition-all hover:scale-[1.02]"
                >
                  Explore Featured Work
                  <FaArrowRight size={13} />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 border border-border/80 bg-surface/80 rounded-xl text-sm font-medium text-foreground hover:border-primary/50 transition-colors"
                >
                  Hire Me / Contact
                </Link>

                <a
                  href="https://github.com/Dr-Rank1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 border border-border/60 bg-surface/40 rounded-xl text-sm font-medium text-muted hover:text-foreground transition-colors"
                >
                  <FaGithub size={17} />
                  GitHub
                </a>
              </div>
            </Reveal>

            {/* Core Tech Stack Icons */}
            <Reveal delay={250}>
              <div className="pt-6 border-t border-border/50">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
                  Core Technologies
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {[
                    { name: 'Python', icon: SiPython },
                    { name: 'Django', icon: SiDjango },
                    { name: 'FastAPI', icon: SiFastapi },
                    { name: 'Kotlin', icon: SiKotlin },
                    { name: 'Flutter', icon: SiFlutter },
                    { name: 'TypeScript', icon: SiTypescript },
                    { name: 'Next.js', icon: SiNextdotjs },
                    { name: 'PostgreSQL', icon: SiPostgresql },
                  ].map((tech) => (
                    <span
                      key={tech.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-surface border border-border/60 text-foreground font-medium shadow-sm hover:border-primary/40 transition-colors"
                    >
                      <tech.icon className="text-primary" size={13} />
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Hero / Portrait Card */}
          <div className="lg:col-span-5 flex justify-center">
            <Reveal delay={200}>
              <div className="relative group">
                {/* Glow backdrop */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/30 via-indigo-600/20 to-cyan-500/20 blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />

                <div className="relative w-72 sm:w-80 rounded-2xl bg-surface border border-border/80 overflow-hidden shadow-2xl p-3">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-dark">
                    <Image
                      src="/photo.png"
                      alt="Ian Gicheha Mbae"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>

                  <div className="p-3.5 space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-sm font-bold text-foreground">Ian Gicheha Mbae</h2>
                        <p className="text-xs text-muted">Software Engineer · Nairobi, Kenya</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                        <FaCheckCircle size={14} />
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-2 border-t border-border/40 text-[11px] text-muted">
                      <a
                        href="https://play.google.com/store/apps/developer?id=Dr_Rank"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary hover:underline"
                      >
                        <FaGooglePlay size={11} />
                        Apps on Google Play
                      </a>
                      <span>·</span>
                      <a
                        href="https://github.com/Dr-Rank1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:underline"
                      >
                        @Dr-Rank1
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Impact Numbers */}
        <Reveal delay={300}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
            {[
              { number: '4+', label: 'Years Engineering Experience', sub: 'Production software' },
              { number: '30+', label: 'Repositories on GitHub', sub: '@Dr-Rank1 profile' },
              { number: '2', label: 'Google Play Apps Live', sub: 'Production published' },
              { number: '15+', label: 'Web & Mobile Systems', sub: 'Shipped to users' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-surface/80 border border-border/60 rounded-2xl p-5 hover:border-primary/40 transition-colors"
              >
                <p className="text-3xl font-extrabold text-primary tracking-tight">{stat.number}</p>
                <p className="text-xs font-semibold text-foreground mt-1">{stat.label}</p>
                <p className="text-[11px] text-muted mt-0.5">{stat.sub}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Featured Projects Highlight */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
                  Selected Work
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Featured Applications &amp; Projects
                </h2>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-dark transition-colors"
              >
                Browse All Projects ({'>'}30)
                <FaArrowRight size={11} />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="grid md:grid-cols-3 gap-6">
              {flagshipPreview.map((item) => (
                <div
                  key={item.title}
                  className="bg-surface border border-border/60 hover:border-primary/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                        <item.icon size={18} />
                      </div>
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-dark text-muted hover:text-foreground border border-border/40 hover:border-border transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <FaGithub size={14} />
                      </a>
                    </div>

                    <h3 className="font-bold text-base text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-medium text-primary mb-2.5">
                      {item.subtitle}
                    </p>
                    <p className="text-xs text-muted leading-relaxed mb-4">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-border/40 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-[10px] bg-dark text-muted font-mono border border-border/30"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link
                      href="/projects"
                      className="text-xs font-semibold text-primary hover:underline flex items-center gap-1 shrink-0 ml-2"
                    >
                      Details
                      <FaArrowRight size={9} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Recruiter Callout */}
        <Reveal delay={200}>
          <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-surface to-dark border border-border/70 text-center max-w-4xl mx-auto shadow-sm">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Looking for a dependable software engineer for your team?
            </h3>
            <p className="text-sm text-muted max-w-xl mx-auto mb-6 leading-relaxed">
              Whether you need backend API engineering, high-performance Android development, or full-stack web applications, I bring rapid execution, clean code, and architectural discipline.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/contact"
                className="px-6 py-3 bg-primary text-white rounded-xl text-xs font-semibold hover:bg-primary-dark shadow-md shadow-primary/25 transition-all"
              >
                Initiate Conversation
              </Link>
              <a
                href="https://www.linkedin.com/in/ianmbae"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-border/70 bg-surface rounded-xl text-xs font-semibold text-muted hover:text-foreground transition-colors inline-flex items-center gap-2"
              >
                <FaLinkedin size={14} />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
