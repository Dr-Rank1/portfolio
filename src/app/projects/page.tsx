'use client'

import { useState, useEffect, useMemo } from 'react'
import {
  FaGithub,
  FaExternalLinkAlt,
  FaStar,
  FaGooglePlay,
  FaSearch,
  FaMobileAlt,
  FaLayerGroup,
  FaTerminal,
  FaAndroid,
  FaGlobe,
} from 'react-icons/fa'
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiDart,
  SiKotlin,
  SiHtml5,
  SiCss3,
} from 'react-icons/si'
import { Reveal } from '@/components/Reveal'

export interface ProjectItem {
  id: number | string
  name: string
  title: string
  description: string
  category: 'Mobile' | 'Full-Stack' | 'Backend' | 'Tools'
  language: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  playStoreUrl?: string
  featured?: boolean
  stars?: number
}

// Curated flagship projects that showcase real depth to hiring managers
const curatedProjects: ProjectItem[] = [
  // --- LIVE ON GOOGLE PLAY (PINNED TO TOP) ---
  {
    id: 'quick-pdf-playstore',
    name: 'quick-pdf',
    title: 'Quick PDF Manager',
    description:
      'Production document companion published on Google Play. Clean offline PDF viewing, bookmarking, file organization, and document export optimized for minimal memory footprint.',
    category: 'Mobile',
    language: 'Dart',
    tags: ['Flutter', 'Google Play', 'Document Processing', 'Dart'],
    githubUrl: 'https://github.com/Dr-Rank1/quick-pdf',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.rank.quickpdf',
    featured: true,
  },
  {
    id: 'qr-scanner-playstore',
    name: 'QR-app',
    title: 'QR & Barcode Scanner Pro',
    description:
      'Production Android & iOS application published on Google Play. Built with Flutter for millisecond camera barcode detection, custom QR design styling, history tracking, and instant sharing.',
    category: 'Mobile',
    language: 'Dart',
    tags: ['Flutter', 'Google Play', 'CameraX', 'Dart', 'Material 3'],
    githubUrl: 'https://github.com/Dr-Rank1/QR-app',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.dr_rank.qrcodescanner',
    featured: true,
  },
  {
    id: 'tempbox-playstore',
    name: 'Temporary-email',
    title: 'TempBox — Disposable Temp Mail',
    description:
      'Live disposable temporary email client published on Google Play. Instant inbox generation with zero registration, live auto-sync, push notifications, and private attachment handling.',
    category: 'Mobile',
    language: 'Kotlin',
    tags: ['Android', 'Google Play', 'Kotlin', 'Coroutines', 'Privacy Tech'],
    githubUrl: 'https://github.com/Dr-Rank1/Temporary-email',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.rank.tempbox',
    featured: true,
  },
  {
    id: 'quick-wallpaper-playstore',
    name: 'Quick-wallpaper',
    title: 'Pazia — Quick Wallpaper HD & 4K',
    description:
      'Production wallpaper personalization app published on Google Play. Delivers curated HD/4K photography, instant one-tap home/lock screen application, smart tagging, and local favorites.',
    category: 'Mobile',
    language: 'Kotlin',
    tags: ['Android', 'Google Play', 'Material You', 'Kotlin', 'Pexels API'],
    githubUrl: 'https://github.com/Dr-Rank1/Quick-wallpaper',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.rank.quickwallpaper',
    featured: true,
  },
  // --- FLAGSHIP OPEN SOURCE & FULL-STACK ---
  {
    id: 'wordle-android',
    name: 'Wordle',
    title: 'Wordle Tactile Android Edition',
    description:
      'High-polish Android word puzzle game built with Jetpack Compose & Material 3. Features 2.5D extruded tiles, 3D mechanical haptic keys, gyroscope tilt parallax, multi-board Dordle/Quordle modes, 50 campaign levels, and 100% offline play.',
    category: 'Mobile',
    language: 'Kotlin',
    tags: ['Android', 'Jetpack Compose', 'Material 3', 'MVVM', 'Offline-First'],
    githubUrl: 'https://github.com/Dr-Rank1/Wordle',
    featured: true,
  },
  {
    id: 'make-cv',
    name: 'Make-CV',
    title: 'Make-CV: Kenyan CV Builder',
    description:
      'Privacy-first professional CV builder tailored for Kenyan career standards. Features live A4 preview rendering, local autosave, profile photo management, automated career section tools, and instantaneous vector PDF export.',
    category: 'Full-Stack',
    language: 'TypeScript',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'PDF Generation', 'TypeScript'],
    githubUrl: 'https://github.com/Dr-Rank1/Make-CV',
    liveUrl: 'https://make-cv.vercel.app',
    featured: true,
  },
  {
    id: 'stikk-sticker',
    name: 'Sticker',
    title: 'Stikk: WhatsApp Sticker Studio',
    description:
      'Flutter WhatsApp sticker maker for converting photos, TikTok clips, and memes into custom sticker packs. Leverages on-device AI background removal, FFmpeg video processing, local SQLite storage, and native WhatsApp intent integrations.',
    category: 'Mobile',
    language: 'Dart',
    tags: ['Flutter', 'Dart', 'FFmpeg', 'AI Cutout', 'Android Intents'],
    githubUrl: 'https://github.com/Dr-Rank1/Sticker',
    featured: true,
  },
  {
    id: 'kalro-app',
    name: 'Kalro-App',
    title: 'KALRO Sericulture Farm Assistant',
    description:
      'Offline-first sericulture agricultural assistant engineered for Kenyan Eri and Bombyx silk farmers. Integrates predictive lifecycle growth models, incubation calculators, and full Swahili localization for rural farmers.',
    category: 'Full-Stack',
    language: 'TypeScript',
    tags: ['TypeScript', 'PWA', 'Offline-First', 'AgriTech', 'Localization'],
    githubUrl: 'https://github.com/Dr-Rank1/Kalro-App',
    featured: true,
  },
  {
    id: 'whatsapp-automation',
    name: 'Whatsapp-business-automation',
    title: 'WhatsApp Business API Automation',
    description:
      'Python backend automation suite for the WhatsApp Business Cloud API. Handles webhook verification, automated conversational dispatch, transactional message templating, and CRM status synchronization.',
    category: 'Backend',
    language: 'Python',
    tags: ['Python', 'FastAPI', 'WhatsApp API', 'Webhooks', 'AsyncIO'],
    githubUrl: 'https://github.com/Dr-Rank1/Whatsapp-business-automation',
    featured: true,
  },
  {
    id: 'voicenotes',
    name: 'VoiceNotes',
    title: 'VoiceNotes & Speech Scribe',
    description:
      'Native Android voice recorder and transcriber. Features continuous speech-to-text, note pinning, streak tracking, daily notification reminders, full-text SQLite search, and PDF/TXT export.',
    category: 'Mobile',
    language: 'Java',
    tags: ['Java', 'Android SDK', 'Speech-to-Text', 'SQLite', 'Room'],
    githubUrl: 'https://github.com/Dr-Rank1/VoiceNotes',
    featured: false,
  },
  {
    id: 'life-simulator',
    name: 'Life-simulator',
    title: 'Life Journey Simulator',
    description:
      'Text RPG life simulator for Android. Players advance life year by year, balancing education, career, finances, relationships, and legacy across 15 simulated countries with complex RNG state trees.',
    category: 'Mobile',
    language: 'Kotlin',
    tags: ['Kotlin', 'Game Logic', 'State Management', 'Android'],
    githubUrl: 'https://github.com/Dr-Rank1/Life-simulator',
    featured: false,
  },
  {
    id: 'mama-fua',
    name: 'Mama-Fua',
    title: 'Mama Fua On-Demand Laundry',
    description:
      'Full-stack on-demand home cleaning and laundry booking platform with order status tracking, geographic dispatch, and M-Pesa mobile payment integration.',
    category: 'Full-Stack',
    language: 'TypeScript',
    tags: ['Next.js', 'PostgreSQL', 'M-Pesa API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Dr-Rank1/Mama-Fua',
    featured: false,
  },
  {
    id: 'kra-tool',
    name: 'Kra',
    title: 'KRA Tax & Compliance Validator',
    description:
      'Kenyan tax compliance assistant automating KRA PIN validation, withholding calculations, and ledger exports for SMEs and freelance contractors.',
    category: 'Full-Stack',
    language: 'TypeScript',
    tags: ['TypeScript', 'Financial Tech', 'Compliance', 'APIs'],
    githubUrl: 'https://github.com/Dr-Rank1/Kra',
    featured: false,
  },
  {
    id: 'gretsa-portal',
    name: 'Gretsa-Portal-v2',
    title: 'Gretsa University Academic Portal',
    description:
      'Modern responsive academic portal architecture for university course enrollment, timetable schedules, grade distribution analytics, and faculty notifications.',
    category: 'Full-Stack',
    language: 'TypeScript',
    tags: ['TypeScript', 'Next.js', 'Auth', 'Education Tech'],
    githubUrl: 'https://github.com/Dr-Rank1/Gretsa-Portal-v2',
    featured: false,
  },
  {
    id: 'md-editor',
    name: 'MD-editor',
    title: 'Modern Markdown Studio',
    description:
      'Live markdown editing suite with instantaneous split-pane parsing, GitHub-flavored markdown extensions, MathJax math rendering, and export to HTML & PDF.',
    category: 'Tools',
    language: 'JavaScript',
    tags: ['React', 'Markdown', 'Web Tools', 'Productivity'],
    githubUrl: 'https://github.com/Dr-Rank1/MD-editor',
    liveUrl: 'https://md-editor-five.vercel.app',
    featured: false,
  },
  {
    id: 'chemical-equation',
    name: 'Chemical-Equation',
    title: 'Chemical Equation Balancer',
    description:
      'Scientific calculator and molecular formula balancer with step-by-step matrix stoichiometric breakdown and molar mass calculation.',
    category: 'Tools',
    language: 'TypeScript',
    tags: ['TypeScript', 'Algorithms', 'STEM', 'Math'],
    githubUrl: 'https://github.com/Dr-Rank1/Chemical-Equation',
    liveUrl: 'https://chemical-equation.vercel.app',
    featured: false,
  },
  {
    id: 'linkedin-automation',
    name: 'linkedln-tool',
    title: 'Professional Networking Automation',
    description:
      'Intelligent browser automation pipeline for professional lead discovery, automated connection requests, and CRM follow-up tracking.',
    category: 'Backend',
    language: 'JavaScript',
    tags: ['Node.js', 'Puppeteer', 'Automation', 'Scraping'],
    githubUrl: 'https://github.com/Dr-Rank1/linkedln-tool',
    featured: false,
  },
]

const getLanguageIcon = (lang: string) => {
  switch (lang.toLowerCase()) {
    case 'python':
      return SiPython
    case 'kotlin':
      return SiKotlin
    case 'dart':
      return SiDart
    case 'typescript':
      return SiTypescript
    case 'javascript':
      return SiJavascript
    case 'html':
      return SiHtml5
    case 'css':
      return SiCss3
    default:
      return FaTerminal
  }
}

type CategoryTab = 'All' | 'Featured' | 'Mobile' | 'Full-Stack' | 'Backend' | 'Tools'

export default function Projects() {
  const [projects, setProjects] = useState<ProjectItem[]>(curatedProjects)
  const [activeCategory, setActiveCategory] = useState<CategoryTab>('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [activeLang, setActiveLang] = useState<string>('All')

  // Dynamic enrichment from GitHub to fetch stars and recent updates without breaking if rate-limited
  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const res = await fetch('https://api.github.com/users/Dr-Rank1/repos?sort=pushed&per_page=100')
        if (!res.ok) return
        const repos: Array<{
          name: string
          description?: string
          stargazers_count: number
          html_url: string
          language?: string
          homepage?: string
          fork: boolean
        }> = await res.json()

        setProjects((prev) => {
          const map = new Map<string, ProjectItem>()
          prev.forEach((p) => map.set(p.name.toLowerCase(), { ...p }))

          repos
            .filter((r) => !r.fork && r.name !== 'stewiriffin' && r.name !== 'portfolio' && r.name !== 'tester')
            .forEach((r) => {
              const key = r.name.toLowerCase()
              const existing = map.get(key)
              if (existing) {
                existing.stars = r.stargazers_count
                if (r.homepage && !existing.liveUrl) existing.liveUrl = r.homepage
              } else if (r.language) {
                // Add remaining repos from GitHub
                map.set(key, {
                  id: r.name,
                  name: r.name,
                  title: r.name.replace(/[-_]/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
                  description: r.description || 'Open source software project built with ' + r.language,
                  category: r.language === 'Kotlin' || r.language === 'Dart' || r.language === 'Java' ? 'Mobile' : r.language === 'Python' ? 'Backend' : 'Full-Stack',
                  language: r.language,
                  tags: [r.language, 'Open Source'],
                  githubUrl: r.html_url,
                  liveUrl: r.homepage || undefined,
                  featured: false,
                  stars: r.stargazers_count,
                })
              }
            })

          return Array.from(map.values())
        })
      } catch {
        // Fallback to static curated list if offline or rate-limited
      }
    }

    fetchGitHubData()
  }, [])

  const availableLanguages = useMemo(() => {
    const langs = new Set<string>()
    projects.forEach((p) => {
      if (p.language) langs.add(p.language)
    })
    return ['All', ...Array.from(langs)]
  }, [projects])

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      // Category filter
      if (activeCategory === 'Featured' && !p.featured) return false
      if (activeCategory !== 'All' && activeCategory !== 'Featured' && p.category !== activeCategory) return false

      // Language filter
      if (activeLang !== 'All' && p.language !== activeLang) return false

      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase()
        const matchTitle = p.title.toLowerCase().includes(q)
        const matchDesc = p.description.toLowerCase().includes(q)
        const matchTag = p.tags.some((t) => t.toLowerCase().includes(q))
        const matchLang = p.language.toLowerCase().includes(q)
        return matchTitle || matchDesc || matchTag || matchLang
      }

      return true
    }).sort((a, b) => {
      // Pin live Google Play apps to the very top
      const aIsPlay = a.playStoreUrl ? 1 : 0
      const bIsPlay = b.playStoreUrl ? 1 : 0
      if (aIsPlay !== bIsPlay) return bIsPlay - aIsPlay

      // Next prioritize featured projects
      const aFeat = a.featured ? 1 : 0
      const bFeat = b.featured ? 1 : 0
      if (aFeat !== bFeat) return bFeat - aFeat

      return 0
    })
  }, [projects, activeCategory, activeLang, searchQuery])

  return (
    <section className="min-h-screen pt-28 pb-24">
      <div className="mx-auto px-6 max-w-7xl">
        {/* Header banner */}
        <Reveal>
          <div className="max-w-3xl mx-auto mb-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
              <FaLayerGroup size={12} />
              Portfolio &amp; Production Software
            </div>
            <h1 className="heading">
              Featured <span className="text-primary">Projects</span>
            </h1>
            <p className="text-muted mt-3 text-sm md:text-base leading-relaxed">
              A comprehensive showcase of native Android apps, production Flutter tools on Google Play,
              scalable Python backend architectures, and modern web platforms.
            </p>
          </div>
        </Reveal>

        {/* Filters and Search controls */}
        <Reveal delay={100}>
          <div className="bg-surface/80 border border-border/60 rounded-2xl p-4 mb-8 backdrop-blur-sm shadow-sm space-y-4">
            {/* Search Input + Categories */}
            <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
              {/* Category buttons */}
              <div className="flex flex-wrap gap-1.5">
                {(['All', 'Featured', 'Mobile', 'Full-Stack', 'Backend', 'Tools'] as CategoryTab[]).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveCategory(tab)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      activeCategory === tab
                        ? 'bg-primary text-white shadow-sm shadow-primary/25'
                        : 'bg-dark/50 text-muted hover:text-foreground border border-border/40 hover:border-border'
                    }`}
                  >
                    {tab}
                    {tab === 'Featured' && ' ⭐️'}
                  </button>
                ))}
              </div>

              {/* Search bar */}
              <div className="relative min-w-[240px]">
                <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted text-xs pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search projects by tech, keyword..."
                  className="w-full pl-9 pr-4 py-1.5 text-xs bg-dark/60 border border-border/50 rounded-lg text-foreground placeholder:text-muted/60 focus:outline-none focus:border-primary transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-muted hover:text-foreground"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Language Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 border-t border-border/40 text-xs text-muted">
              <span className="shrink-0 text-[11px] font-medium text-foreground">Filter Language:</span>
              {availableLanguages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setActiveLang(lang)}
                  className={`px-2.5 py-1 rounded-md text-[11px] shrink-0 transition-colors ${
                    activeLang === lang
                      ? 'bg-primary/20 text-primary border border-primary/30 font-semibold'
                      : 'hover:text-foreground bg-dark/40 border border-border/30'
                  }`}
                >
                  {lang}
                </button>
              ))}
              <span className="ml-auto shrink-0 text-[11px] text-muted font-mono">
                Showing {filteredProjects.length} of {projects.length}
              </span>
            </div>
          </div>
        </Reveal>

        {/* Project Grid */}
        <Reveal delay={150}>
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 bg-surface/40 border border-border/50 rounded-2xl">
              <p className="text-muted text-sm">No projects match the selected criteria.</p>
              <button
                onClick={() => {
                  setActiveCategory('All')
                  setActiveLang('All')
                  setSearchQuery('')
                }}
                className="mt-3 px-4 py-1.5 bg-primary text-white text-xs rounded-lg"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProjects.map((project) => {
                const LangIcon = getLanguageIcon(project.language)

                return (
                  <div
                    key={project.id}
                    className="group bg-surface/90 hover:bg-surface border border-border/60 hover:border-primary/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 flex flex-col justify-between"
                  >
                    <div>
                      {/* Card Top: icon, category badge, action links */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-2.5">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                            <LangIcon size={18} />
                          </div>
                          <div>
                            <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-dark border border-border/50 text-muted">
                              {project.category}
                            </span>
                            {project.featured && (
                              <span className="ml-1.5 text-[10px] font-bold text-accent">
                                ★ Featured
                              </span>
                            )}
                          </div>
                        </div>

                        {/* External buttons */}
                        <div className="flex items-center gap-2">
                          {project.playStoreUrl && (
                            <a
                              href={project.playStoreUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                              title="View on Google Play"
                              aria-label="Google Play Store"
                            >
                              <FaGooglePlay size={13} />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                              title="Visit live website"
                              aria-label="Live Demo"
                            >
                              <FaGlobe size={13} />
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 rounded-lg bg-dark text-muted hover:text-foreground border border-border/50 hover:border-border transition-colors"
                              title="View source code on GitHub"
                              aria-label="GitHub Repository"
                            >
                              <FaGithub size={13} />
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors mb-2 leading-snug">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-muted leading-relaxed line-clamp-3 mb-4">
                        {project.description}
                      </p>
                    </div>

                    {/* Footer: Tags and Metadata */}
                    <div className="pt-3 border-t border-border/40">
                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-[10px] bg-dark/70 text-muted font-mono border border-border/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Bottom status line */}
                      <div className="flex items-center justify-between text-[11px] text-muted">
                        <span className="font-medium text-foreground flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {project.language}
                        </span>

                        <div className="flex items-center gap-3">
                          {typeof project.stars === 'number' && project.stars > 0 && (
                            <span className="flex items-center gap-1 text-muted">
                              <FaStar size={10} className="text-accent" />
                              {project.stars}
                            </span>
                          )}
                          {project.playStoreUrl ? (
                            <span className="text-[10px] text-primary font-medium">Google Play App</span>
                          ) : project.liveUrl ? (
                            <span className="text-[10px] text-primary font-medium">Live Web App</span>
                          ) : (
                            <span className="text-[10px] text-muted">Open Source</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </Reveal>

        {/* GitHub profile banner */}
        <Reveal delay={200}>
          <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-surface via-surface/80 to-surface border border-border/60 text-center flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold text-foreground">
                Want to explore the complete source code?
              </h3>
              <p className="text-xs text-muted mt-1">
                Explore 30+ repositories, stars, and open source commits directly on GitHub.
              </p>
            </div>
            <a
              href="https://github.com/Dr-Rank1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-dark dark:bg-white dark:text-black font-semibold rounded-xl text-xs hover:opacity-90 transition-opacity shadow-lg"
            >
              <FaGithub size={15} />
              Visit @Dr-Rank1 on GitHub
              <FaExternalLinkAlt size={10} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
