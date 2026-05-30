'use client'

import { useState, useEffect } from 'react'
import { FaGithub, FaCode, FaExternalLinkAlt, FaStar, FaCodeBranch, FaGooglePlay } from 'react-icons/fa'
import { Reveal } from '@/components/Reveal'
import { SiPython, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiDart } from 'react-icons/si'

interface Repository {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
  topics: string[]
  fork: boolean
}

const getLanguageIcon = (language: string | null) => {
  switch (language?.toLowerCase()) {
    case 'python':     return SiPython
    case 'typescript': return SiTypescript
    case 'javascript': return SiJavascript
    case 'html':       return SiHtml5
    case 'css':        return SiCss3
    case 'dart':       return SiDart
    default:           return FaCode
  }
}

const repoDescriptions: Record<string, string> = {
  'QR-app':                       'Cross-platform mobile app for generating and scanning QR codes.',
  'QR-code-':                     'Web-based QR code generator with customisable output and instant download.',
  'Mama-Fua':                     'Laundry service management platform for booking, tracking orders, and payments.',
  'Kra':                          'Tax compliance and KRA PIN verification tool for Kenyan businesses.',
  'linkedln-tool':                 'Browser automation tool for LinkedIn outreach and connection management.',
  'Resume-builder':               'Interactive resume builder with live preview and one-click PDF export.',
  'MD-editor':                    'Real-time Markdown editor with live preview, syntax highlighting, and export.',
  'PDF':                          'PDF generation and manipulation tool for creating documents from structured templates.',
  'Whatsapp-business-automation': 'Python automation suite for WhatsApp Business API.',
  'Jumian':                       'Full-stack TypeScript web application with a modern UI and RESTful backend.',
  'Chemical-Equation':            'Chemical equation balancer and molecular formula validator.',
  'portfolio':                    'Previous iteration of my personal developer portfolio website.',
  'Gretsa-Portal-v2':             'Student and staff portal for Gretsa University — v2 rebuild.',
  'Merry-Christmas':              'Interactive Christmas greeting card with CSS animations and festive effects.',
  'happy-birthday':               'Animated birthday greeting page with confetti effects and personalised messages.',
  'Find-out-':                    'Interactive information-discovery tool for querying and displaying data in real time.',
  'website-compare-':             'Side-by-side website comparison tool for visual UI and content analysis.',
  'clinic-response-2':            'Clinic management system for patient intake and appointment scheduling.',
  'Predictor':                    'Prediction tool with a clean web interface, powered by a JavaScript ML model.',
  'weather-app':                  'Real-time weather dashboard via OpenWeatherMap API.',
  'Tiktok-video-downloader-':     'Web tool for downloading TikTok videos without watermarks.',
  'Youtube':                      'YouTube utilities — search, metadata extraction, and video download helpers.',
  'personal-website':             'Earlier version of my personal developer website and portfolio.',
  'therapist':                    'Landing page for a therapist practice with service listings and contact form.',
}

const formatRepoName = (name: string) =>
  name.replace(/[-_]/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())

const projectPriority: Record<string, number> = {
  'Whatsapp-business-automation': 100,
  'Gretsa-Portal-v2': 95,
  'Mama-Fua': 90,
  'Kra': 85,
  'QR-app': 80,
  'QR Code Scanner': 80,
  'Quick PDF': 78,
  'clinic-response-2': 75,
  'Jumian': 70,
  'linkedln-tool': 65,
  'Resume-builder': 60,
  'MD-editor': 55,
  'Chemical-Equation': 50,
  'Predictor': 45,
  'weather-app': 40,
  'Tiktok-video-downloader-': 35,
  'Youtube': 30,
  'Find-out-': 25,
  'website-compare-': 20,
  'therapist': 15,
  'Merry-Christmas': 10,
  'happy-birthday': 10,
  'PDF': 5,
  'QR-code-': 5,
  'portfolio': 3,
  'personal-website': 1,
}

const sortByPriority = (a: Repository, b: Repository) => {
  const aPrio = projectPriority[formatRepoName(a.name)] || a.stargazers_count + a.forks_count
  const bPrio = projectPriority[formatRepoName(b.name)] || b.stargazers_count + b.forks_count
  return bPrio - aPrio
}

const timeAgo = (dateStr: string) => {
  const diff = Date.now() - new Date(dateStr).getTime()
  const days = Math.floor(diff / 86400000)
  if (days < 1)  return 'today'
  if (days < 7)  return `${days}d ago`
  if (days < 30) return `${Math.floor(days / 7)}w ago`
  if (days < 365) return `${Math.floor(days / 30)}mo ago`
  return `${Math.floor(days / 365)}y ago`
}

const playStoreApps: Repository[] = [
  {
    id: -1,
    name: 'QR Code Scanner',
    description: 'Fast, reliable QR and barcode scanner built with Flutter — scan, generate, and share codes instantly.',
    html_url: 'https://play.google.com/store/apps/details?id=com.dr_rank.qrcodescanner&hl=en_US',
    language: 'Dart',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: new Date().toISOString(),
    topics: [],
    fork: false,
  },
  {
    id: -2,
    name: 'Quick PDF',
    description: 'Lightweight PDF viewer and manager for Android — open, read, and organise PDF documents on the go.',
    html_url: 'https://play.google.com/store/apps/details?id=com.rank.quickpdf&hl=en_US',
    language: 'Dart',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: new Date().toISOString(),
    topics: [],
    fork: false,
  },
]

export default function Projects() {
  const [repos, setRepos] = useState<Repository[]>([])
  const [filtered, setFiltered] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeLanguage, setActiveLanguage] = useState<string>('All')
  const [languages, setLanguages] = useState<string[]>([])

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/stewiriffin/repos?sort=updated&per_page=100'
        )
        if (!response.ok) throw new Error('Failed to fetch repositories')
        const data: Repository[] = await response.json()

        const withCode = data.filter((r) => !r.fork && r.language !== null)
        const allProjects = [...withCode, ...playStoreApps].sort(sortByPriority)
        setRepos(allProjects)
        setFiltered(allProjects)

        const langs = ['All', ...Array.from(new Set(allProjects.map((r) => r.language!)))]
        setLanguages(langs)
      } catch (err) {
        setError('Failed to load projects from GitHub')
      } finally {
        setLoading(false)
      }
    }
    fetchRepos()
  }, [])

  const handleFilter = (lang: string) => {
    setActiveLanguage(lang)
    setFiltered(
      lang === 'All' ? [...repos].sort(sortByPriority) : repos.filter((r) => r.language === lang).sort(sortByPriority)
    )
  }

  return (
    <section className="min-h-screen pt-28 pb-24">
      <div className="mx-auto px-6 max-w-7xl">
        <Reveal>
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <p className="section-title">My Work</p>
            <h1 className="heading">
              Featured <span className="text-primary">Projects</span>
            </h1>
            {repos.length > 0 && (
              <p className="text-muted mt-3 text-sm">
                {repos.length} repositories from{' '}
                <a
                  href="https://github.com/stewiriffin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  @stewiriffin
                </a>
              </p>
            )}
          </div>
        </Reveal>

        {!loading && !error && languages.length > 1 && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => handleFilter(lang)}
                className={`px-4 py-1.5 rounded-lg text-sm transition-colors ${
                  activeLanguage === lang
                    ? 'bg-primary text-white'
                    : 'bg-surface text-muted border border-border/50 hover:text-foreground'
                }`}
              >
                {lang}
                {lang !== 'All' && (
                  <span className="ml-1.5 text-xs opacity-60">
                    {repos.filter((r) => r.language === lang).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center py-24">
            <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center text-muted py-12">
            <p>{error}</p>
          </div>
        ) : (
          <>
            <Reveal delay={100}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((repo) => {
                const LanguageIcon = getLanguageIcon(repo.language)

                return (
                  <div
                    key={repo.id}
                    className="group bg-surface border border-border/50 rounded-xl p-5 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <LanguageIcon className="text-primary" size={18} />
                      </div>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-foreground transition-colors"
                        aria-label={repo.id < 0 ? 'View on Play Store' : 'View on GitHub'}
                      >
                        {repo.id < 0 ? <FaGooglePlay size={16} /> : <FaGithub size={16} />}
                      </a>
                    </div>

                    <h2 className="font-semibold mb-1.5 group-hover:text-primary transition-colors">
                      {formatRepoName(repo.name)}
                    </h2>
                    <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-2">
                      {repo.description || repoDescriptions[repo.name] || 'No description available.'}
                    </p>

                    <div className="flex items-center justify-between text-xs text-muted">
                      <div className="flex items-center gap-3">
                        {repo.id >= 0 && (
                          <>
                            <span className="flex items-center gap-1">
                              <FaStar size={11} />
                              {repo.stargazers_count}
                            </span>
                            <span className="flex items-center gap-1">
                              <FaCodeBranch size={11} />
                              {repo.forks_count}
                            </span>
                          </>
                        )}
                        {repo.id < 0 && (
                          <span className="flex items-center gap-1 text-primary">
                            <FaGooglePlay size={11} />
                            Play Store
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-[var(--surface)] text-[11px]">
                          {repo.language}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            </Reveal>

            <Reveal delay={200}>
            <div className="text-center mt-10">
              <a
                href="https://github.com/stewiriffin?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg text-sm text-muted hover:text-foreground hover:border-border/80 transition-colors"
              >
                View All on GitHub
                <FaExternalLinkAlt size={12} />
              </a>
            </div>
            </Reveal>
          </>
        )}
      </div>
    </section>
  )
}
