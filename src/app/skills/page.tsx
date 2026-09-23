'use client'

import { Reveal } from '@/components/Reveal'
import {
  FaPython,
  FaNodeJs,
  FaReact,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaLinux,
  FaDatabase,
  FaCode,
  FaServer,
  FaTools,
  FaCloud,
  FaProjectDiagram,
  FaAndroid,
  FaMobileAlt,
} from 'react-icons/fa'
import {
  SiDjango,
  SiFlask,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiNginx,
  SiCelery,
  SiRabbitmq,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiPytest,
  SiSqlite,
  SiMysql,
  SiGithubactions,
  SiDart,
  SiFlutter,
  SiKotlin,
} from 'react-icons/si'

interface Skill {
  name: string
  level?: string
  icon: React.ComponentType<{ size?: number; className?: string }>
}

interface Category {
  title: string
  description: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  skills: Skill[]
}

const categories: Category[] = [
  {
    title: 'Mobile Engineering',
    description: 'Native Android & cross-platform applications with high tactility and offline capability.',
    icon: FaAndroid,
    skills: [
      { name: 'Android SDK', level: 'Production', icon: FaAndroid },
      { name: 'Kotlin', level: 'Advanced', icon: SiKotlin },
      { name: 'Jetpack Compose', level: 'Advanced', icon: FaMobileAlt },
      { name: 'Flutter', level: 'Production', icon: SiFlutter },
      { name: 'Dart', level: 'Advanced', icon: SiDart },
      { name: 'Room / SQLite', level: 'Advanced', icon: SiSqlite },
      { name: 'Material 3', level: 'Advanced', icon: FaCode },
      { name: 'Google Play Console', level: 'Production', icon: FaTools },
    ],
  },
  {
    title: 'Backend & APIs',
    description: 'High-throughput RESTful services, asynchronous dispatchers, and webhooks.',
    icon: FaServer,
    skills: [
      { name: 'Python', level: 'Expert', icon: FaPython },
      { name: 'FastAPI', level: 'Advanced', icon: SiFastapi },
      { name: 'Django / DRF', level: 'Advanced', icon: SiDjango },
      { name: 'Flask', level: 'Advanced', icon: SiFlask },
      { name: 'Node.js', level: 'Intermediate', icon: FaNodeJs },
      { name: 'RESTful API Design', level: 'Expert', icon: FaProjectDiagram },
      { name: 'Celery & Redis', level: 'Intermediate', icon: SiCelery },
      { name: 'RabbitMQ', level: 'Intermediate', icon: SiRabbitmq },
      { name: 'WebSockets', level: 'Intermediate', icon: FaCode },
    ],
  },
  {
    title: 'Modern Frontend & Web',
    description: 'Responsive, accessible web applications with SSR, state management, and real-time previews.',
    icon: FaReact,
    skills: [
      { name: 'TypeScript', level: 'Advanced', icon: SiTypescript },
      { name: 'Next.js (App Router)', level: 'Advanced', icon: SiNextdotjs },
      { name: 'React', level: 'Advanced', icon: FaReact },
      { name: 'Tailwind CSS', level: 'Expert', icon: SiTailwindcss },
      { name: 'JavaScript (ES6+)', level: 'Advanced', icon: SiJavascript },
      { name: 'PWA & Offline Web', level: 'Intermediate', icon: FaCloud },
    ],
  },
  {
    title: 'Databases & Storage',
    description: 'Schema modeling, indexing, query optimization, and offline persistent storage.',
    icon: FaDatabase,
    skills: [
      { name: 'PostgreSQL', level: 'Advanced', icon: SiPostgresql },
      { name: 'SQLite / Room', level: 'Advanced', icon: SiSqlite },
      { name: 'Redis Caching', level: 'Intermediate', icon: SiRedis },
      { name: 'MySQL', level: 'Intermediate', icon: SiMysql },
      { name: 'MongoDB', level: 'Intermediate', icon: SiMongodb },
    ],
  },
  {
    title: 'DevOps, Cloud & Architecture',
    description: 'Containerized deployment, continuous integration, and secure infrastructure.',
    icon: FaCloud,
    skills: [
      { name: 'Docker & Compose', level: 'Intermediate', icon: FaDocker },
      { name: 'Linux / Bash Scripting', level: 'Advanced', icon: FaLinux },
      { name: 'Git & GitHub Workflows', level: 'Advanced', icon: FaGitAlt },
      { name: 'GitHub Actions CI/CD', level: 'Intermediate', icon: SiGithubactions },
      { name: 'Nginx', level: 'Intermediate', icon: SiNginx },
      { name: 'AWS Basics', level: 'Familiar', icon: FaAws },
    ],
  },
  {
    title: 'Testing & Engineering Quality',
    description: 'Automated test suites, architectural discipline, and code maintainability.',
    icon: FaTools,
    skills: [
      { name: 'pytest', level: 'Advanced', icon: SiPytest },
      { name: 'Clean Architecture / MVVM', level: 'Advanced', icon: FaProjectDiagram },
      { name: 'Unit & Integration Testing', level: 'Advanced', icon: FaTools },
      { name: 'Design Patterns', level: 'Advanced', icon: FaCode },
      { name: 'API Security & Auth', level: 'Intermediate', icon: FaServer },
    ],
  },
]

export default function Skills() {
  const totalSkills = categories.reduce((acc, c) => acc + c.skills.length, 0)

  return (
    <section className="min-h-screen pt-28 pb-24">
      <div className="mx-auto px-6 max-w-7xl">
        <Reveal>
          <div className="max-w-3xl mx-auto mb-14 text-center">
            <p className="section-title">Technical Expertise</p>
            <h1 className="heading">
              Skills &amp; <span className="text-primary">Capabilities</span>
            </h1>
            <p className="text-muted mt-3 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              A comprehensive toolkit honed across {totalSkills} technologies, frameworks, and engineering methodologies.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, i) => (
            <Reveal key={category.title} delay={i * 60}>
              <div className="bg-surface/90 border border-border/60 hover:border-primary/40 rounded-2xl p-6 h-full flex flex-col justify-between transition-colors shadow-sm">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center shrink-0">
                      <category.icon className="text-primary" size={18} />
                    </div>
                    <div>
                      <h2 className="font-bold text-sm text-foreground">{category.title}</h2>
                      <span className="text-[11px] text-muted">{category.skills.length} competencies</span>
                    </div>
                  </div>

                  <p className="text-xs text-muted leading-relaxed mb-5">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-foreground bg-dark border border-border/40 hover:border-border transition-colors font-medium"
                      >
                        <skill.icon className="text-primary" size={13} />
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-border/40 flex items-center justify-between text-[11px] text-muted font-mono">
                  <span>Architecture</span>
                  <span className="text-primary font-semibold">Production Ready</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
