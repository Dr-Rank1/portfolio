'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaGooglePlay,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import {
  SiPython,
  SiFastapi,
  SiDjango,
  SiKotlin,
  SiFlutter,
  SiTypescript,
} from 'react-icons/si'
import { Reveal } from '@/components/Reveal'

const appsOnPlay = [
  {
    title: 'Quick PDF Manager',
    category: 'Productivity · Android',
    desc: 'Lightweight offline PDF organizer. Built after getting annoyed with heavy ad-bloated PDF apps that freeze on simple docs.',
    tech: ['Flutter', 'Dart', 'Offline'],
    playStore: 'https://play.google.com/store/apps/details?id=com.rank.quickpdf',
    github: 'https://github.com/Dr-Rank1/quick-pdf',
  },
  {
    title: 'QR & Barcode Scanner Pro',
    category: 'Utilities · Android',
    desc: 'Instant camera detection with zero lag. Includes flashlight toggle, scan history, and custom QR generator.',
    tech: ['Flutter', 'CameraX', 'Material 3'],
    playStore: 'https://play.google.com/store/apps/details?id=com.dr_rank.qrcodescanner',
    github: 'https://github.com/Dr-Rank1/QR-app',
  },
  {
    title: 'TempBox (Temp Mail)',
    category: 'Privacy · Android',
    desc: 'Instant disposable inboxes without account registration. Eliminates spam when testing services or getting one-time codes.',
    tech: ['Kotlin', 'Android SDK', 'Coroutines'],
    playStore: 'https://play.google.com/store/apps/details?id=com.rank.tempbox',
    github: 'https://github.com/Dr-Rank1/Temporary-email',
  },
  {
    title: 'Pazia (Wallpapers)',
    category: 'Personalization · Android',
    desc: 'Curated HD/4K wallpaper browser with one-tap home and lock screen application, powered by real photographer submissions.',
    tech: ['Kotlin', 'Material You', 'Pexels API'],
    playStore: 'https://play.google.com/store/apps/details?id=com.rank.quickwallpaper',
    github: 'https://github.com/Dr-Rank1/Quick-wallpaper',
  },
]

const recentBuilds = [
  {
    name: 'Wordle Tactile Edition',
    type: 'Native Android',
    note: 'Jetpack Compose word puzzle with 2.5D extruded tactile tiles, haptic keys, and gyroscope tilt parallax.',
    tech: 'Kotlin · Compose',
    link: 'https://github.com/Dr-Rank1/Wordle',
  },
  {
    name: 'Make-CV (Kenyan Standard)',
    type: 'Web App',
    note: 'Live A4 preview rendering, local state autosave, and direct vector PDF compilation.',
    tech: 'Next.js · TypeScript',
    link: 'https://github.com/Dr-Rank1/Make-CV',
  },
  {
    name: 'Stikk Sticker Studio',
    type: 'Flutter Mobile',
    note: 'WhatsApp sticker creator with on-device background cutout, FFmpeg conversion, and native intent packaging.',
    tech: 'Flutter · Dart · FFmpeg',
    link: 'https://github.com/Dr-Rank1/Sticker',
  },
  {
    name: 'WhatsApp Automation Suite',
    type: 'Backend',
    note: 'Async Python daemon handling Cloud API webhooks, automated customer routing, and message templating.',
    tech: 'Python · FastAPI',
    link: 'https://github.com/Dr-Rank1/Whatsapp-business-automation',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-16 sm:pb-20">
      <div className="mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Hero Section */}
        <div className="pt-4 sm:pt-10 pb-12 sm:pb-16 border-b border-border/60">
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Bio & Intro */}
            <div className="w-full lg:col-span-8 space-y-5 sm:space-y-6">
              {/* Personal Location */}
              <Reveal>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-border/70 text-xs text-muted">
                  <FaMapMarkerAlt size={12} className="text-cyan-400 shrink-0" />
                  <span>Nairobi, Kenya</span>
                </div>
              </Reveal>

              <Reveal delay={60}>
                <div className="space-y-1.5 sm:space-y-2">
                  <p className="text-xs sm:text-sm font-mono text-cyan-400 tracking-wide">
                    Ian Gicheha Mbae
                  </p>
                  <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-snug sm:leading-tight">
                    I build software that runs smoothly on phones and servers.
                  </h1>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="text-sm sm:text-base text-muted space-y-3 leading-relaxed max-w-2xl">
                  <p>
                    I&apos;m a software engineer who enjoys shipping complete products. Most of my days are spent
                    working with <strong className="text-foreground font-medium">Python (FastAPI, Django)</strong> on the backend
                    and building native mobile apps with <strong className="text-foreground font-medium">Android (Kotlin / Jetpack Compose)</strong> and <strong className="text-foreground font-medium">Flutter</strong>.
                  </p>
                  <p>
                    I have 4 apps currently live on the Google Play Store, and I publish open-source code
                    on GitHub under <a href="https://github.com/Dr-Rank1" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-mono">@Dr-Rank1</a>.
                  </p>
                </div>
              </Reveal>

              {/* Action buttons */}
              <Reveal delay={180}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 pt-2">
                  <div className="flex gap-2 w-full sm:w-auto">
                    <Link
                      href="/projects"
                      className="flex-1 sm:flex-none justify-center inline-flex items-center gap-2 px-5 py-3 sm:py-2.5 bg-primary text-white rounded-xl sm:rounded-lg text-xs font-semibold hover:bg-primary-dark active:scale-95 transition-transform shadow-sm"
                    >
                      View Projects
                      <FaArrowRight size={11} />
                    </Link>
                    <Link
                      href="/contact"
                      className="flex-1 sm:flex-none justify-center inline-flex items-center gap-2 px-4 py-3 sm:py-2.5 bg-surface border border-border/70 rounded-xl sm:rounded-lg text-xs font-medium text-foreground hover:border-primary/50 active:scale-95 transition-transform"
                    >
                      Say Hello
                    </Link>
                  </div>
                  <div className="flex gap-2 w-full sm:w-auto">
                    <a
                      href="https://github.com/Dr-Rank1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none justify-center inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-surface/50 sm:bg-transparent border sm:border-transparent border-border/50 rounded-xl sm:rounded-none text-xs text-muted hover:text-foreground active:scale-95 transition-transform"
                    >
                      <FaGithub size={15} />
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ianmbae"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none justify-center inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-surface/50 sm:bg-transparent border sm:border-transparent border-border/50 rounded-xl sm:rounded-none text-xs text-muted hover:text-foreground active:scale-95 transition-transform"
                    >
                      <FaLinkedin size={15} />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Photo & quick card (compact and well-centered on mobile) */}
            <div className="w-full lg:col-span-4 flex justify-center lg:justify-end">
              <Reveal delay={150}>
                <div className="w-full max-w-[260px] sm:max-w-[280px] bg-surface border border-border/70 rounded-2xl p-2.5 sm:p-3 shadow-md space-y-2.5">
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-dark">
                    <Image
                      src="/photo.png"
                      alt="Ian Gicheha Mbae"
                      fill
                      sizes="(max-width: 640px) 260px, 280px"
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                  <div className="px-1 text-xs space-y-1">
                    <p className="font-semibold text-foreground">Ian Gicheha Mbae</p>
                    <p className="text-muted text-[11px]">Developer · Builder · Problem Solver</p>
                    <div className="pt-2 border-t border-border/50 flex items-center justify-between text-[11px] text-muted font-mono">
                      <span>Google Play</span>
                      <a
                        href="https://play.google.com/store/apps/developer?id=Dr_Rank"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:underline font-semibold"
                      >
                        Dr_Rank
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Section 1: Live Apps on Google Play */}
        <div className="py-10 sm:py-14 border-b border-border/60">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-6 sm:mb-8 gap-1.5">
              <div>
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                  Production Apps
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  Published on Google Play
                </h2>
              </div>
              <p className="text-xs text-muted">
                Shipped to real users with clean UI and zero clutter.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {appsOnPlay.map((app) => (
                <div
                  key={app.title}
                  className="bg-surface border border-border/60 hover:border-primary/40 rounded-2xl p-4 sm:p-5 transition-all flex flex-col justify-between group shadow-sm"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors truncate">
                          {app.title}
                        </h3>
                        <p className="text-[11px] text-muted font-mono mt-0.5">
                          {app.category}
                        </p>
                      </div>
                      <a
                        href={app.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-dark text-cyan-400 hover:text-cyan-300 border border-border/50 hover:border-border transition-colors shrink-0 active:scale-95"
                        title="Open on Google Play Store"
                        aria-label="Google Play Store"
                      >
                        <FaGooglePlay size={13} />
                      </a>
                    </div>

                    <p className="text-xs text-muted leading-relaxed pt-1">
                      {app.desc}
                    </p>
                  </div>

                  <div className="pt-3.5 mt-3 border-t border-border/40 flex items-center justify-between text-xs">
                    <div className="flex flex-wrap gap-1">
                      {app.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-[10px] bg-dark text-muted font-mono border border-border/30"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3 shrink-0 ml-2">
                      <a
                        href={app.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-foreground text-xs py-1"
                        title="GitHub source"
                      >
                        Code
                      </a>
                      <a
                        href={app.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:underline font-semibold text-xs flex items-center gap-1 py-1"
                      >
                        Play Store
                        <FaArrowRight size={9} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Section 2: Recent Projects & Open Source Builds */}
        <div className="py-10 sm:py-14 border-b border-border/60">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-6 sm:mb-8 gap-1.5">
              <div>
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                  Selected Work
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  Things I&apos;ve Built Recently
                </h2>
              </div>
              <Link
                href="/projects"
                className="text-xs font-medium text-primary hover:underline flex items-center gap-1"
              >
                Browse all 30+ repositories
                <FaArrowRight size={10} />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="divide-y divide-border/50 border-t border-b border-border/50">
              {recentBuilds.map((b) => (
                <div
                  key={b.name}
                  className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 hover:bg-surface/40 px-2 -mx-2 rounded-xl transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <a
                        href={b.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-sm text-foreground hover:text-primary transition-colors"
                      >
                        {b.name}
                      </a>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-dark border border-border/50 text-muted">
                        {b.type}
                      </span>
                    </div>
                    <p className="text-xs text-muted leading-relaxed">
                      {b.note}
                    </p>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 pt-1 sm:pt-0 shrink-0">
                    <span className="text-[11px] font-mono text-muted">
                      {b.tech}
                    </span>
                    <a
                      href={b.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary hover:underline font-semibold flex items-center gap-1"
                    >
                      GitHub
                      <FaArrowRight size={9} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Section 3: Honest Tech & Philosophy */}
        <div className="py-10 sm:py-14 border-b border-border/60">
          <Reveal>
            <div className="grid md:grid-cols-12 gap-6 sm:gap-8 items-start">
              <div className="md:col-span-5 space-y-2 sm:space-y-3">
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block">
                  How I Work
                </span>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  The tools I reach for daily.
                </h2>
                <p className="text-xs text-muted leading-relaxed">
                  I prefer boring, battle-tested technologies that allow me to ship reliable software quickly,
                  without unnecessary layers or overhead.
                </p>
              </div>

              <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div className="p-4 rounded-xl bg-surface border border-border/60 space-y-1.5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <SiPython className="text-primary shrink-0" size={16} />
                    <span>Python &amp; APIs</span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">
                    FastAPI for asynchronous microservices and clean schemas; Django for full database-backed applications. Paired with PostgreSQL and Redis.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-surface border border-border/60 space-y-1.5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <SiKotlin className="text-primary shrink-0" size={16} />
                    <span>Native Android</span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">
                    Kotlin with Jetpack Compose. I like building tactile interfaces with real physics, haptic feedback, and local Room databases for offline reliability.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-surface border border-border/60 space-y-1.5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <SiFlutter className="text-primary shrink-0" size={16} />
                    <span>Cross-Platform Flutter</span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">
                    Dart &amp; Flutter when I need fast cross-platform deployment. I&apos;ve shipped two production Flutter tools directly to the Google Play Store.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-surface border border-border/60 space-y-1.5">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    <SiTypescript className="text-primary shrink-0" size={16} />
                    <span>Web Frontends</span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">
                    TypeScript with Next.js and Tailwind CSS when an app needs a web counterpart or clean dashboard interface.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Section 4: Human Contact Footnote */}
        <div className="pt-10 sm:pt-14 pb-4">
          <Reveal>
            <div className="bg-surface border border-border/70 rounded-2xl p-5 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6">
              <div className="space-y-1.5 max-w-xl">
                <h3 className="text-sm sm:text-base font-bold text-foreground">
                  Want to chat about a role, a project, or just talk tech?
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  I check my email regularly and respond promptly. Shoot me a note at{' '}
                  <a href="mailto:mbaegicheha@gmail.com" className="text-foreground hover:underline font-mono break-all">
                    mbaegicheha@gmail.com
                  </a>.
                </p>
              </div>
              <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0">
                <Link
                  href="/contact"
                  className="flex-1 sm:flex-none text-center px-5 py-3 sm:py-2.5 bg-primary text-white text-xs font-semibold rounded-xl sm:rounded-lg hover:bg-primary-dark active:scale-95 transition-transform"
                >
                  Contact Page
                </Link>
                <a
                  href="https://github.com/Dr-Rank1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none text-center px-4 py-3 sm:py-2.5 bg-dark border border-border/60 text-xs font-medium text-muted hover:text-foreground rounded-xl sm:rounded-lg active:scale-95 transition-transform"
                >
                  GitHub
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}
