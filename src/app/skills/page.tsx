'use client'

import { Reveal } from '@/components/Reveal'
import {
  FaPython, FaNodeJs, FaReact, FaDocker, FaAws, FaGitAlt, FaLinux, FaDatabase,
  FaCode, FaServer, FaTools, FaCloud, FaProjectDiagram,
} from 'react-icons/fa'
import {
  SiDjango, SiFlask, SiFastapi, SiPostgresql, SiMongodb, SiRedis,
  SiNginx, SiCelery, SiRabbitmq, SiTypescript, SiJavascript,
  SiNextdotjs, SiTailwindcss, SiGraphql, SiPytest, SiSqlite,
  SiMysql, SiElasticsearch, SiGithubactions, SiLinux, SiDart,
  SiExpress, SiSelenium, SiCss3, SiHtml5, SiBootstrap,
} from 'react-icons/si'

interface Skill {
  name: string
  icon: React.ComponentType<{ size?: number; className?: string }>
}

interface Category {
  title: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  skills: Skill[]
}

const categories: Category[] = [
  {
    title: 'Languages',
    icon: FaCode,
    skills: [
      { name: 'Python', icon: FaPython },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'Dart', icon: SiDart },
      { name: 'SQL', icon: FaDatabase },
      { name: 'Bash', icon: SiLinux },
    ],
  },
  {
    title: 'Backend',
    icon: FaServer,
    skills: [
      { name: 'Django', icon: SiDjango },
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'Flask', icon: SiFlask },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Express', icon: SiExpress },
      { name: 'REST APIs', icon: FaProjectDiagram },
      { name: 'GraphQL', icon: SiGraphql },
      { name: 'Celery', icon: SiCelery },
      { name: 'RabbitMQ', icon: SiRabbitmq },
      { name: 'WebSockets', icon: FaCode },
    ],
  },
  {
    title: 'Databases',
    icon: FaDatabase,
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
      { name: 'SQLite', icon: SiSqlite },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Redis', icon: SiRedis },
      { name: 'Elasticsearch', icon: SiElasticsearch },
    ],
  },
  {
    title: 'DevOps & Cloud',
    icon: FaCloud,
    skills: [
      { name: 'Docker', icon: FaDocker },
      { name: 'AWS', icon: FaAws },
      { name: 'Nginx', icon: SiNginx },
      { name: 'GitHub Actions', icon: SiGithubactions },
      { name: 'Linux', icon: SiLinux },
    ],
  },
  {
    title: 'Frontend',
    icon: FaReact,
    skills: [
      { name: 'React', icon: FaReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Bootstrap', icon: SiBootstrap },
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss3 },
    ],
  },
  {
    title: 'Tools & Testing',
    icon: FaTools,
    skills: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'pytest', icon: SiPytest },
      { name: 'Selenium', icon: SiSelenium },
      { name: 'CI/CD', icon: FaCloud },
      { name: 'Agile/Scrum', icon: FaCode },
    ],
  },
]

export default function Skills() {
  return (
    <section className="min-h-screen pt-28 pb-24">
      <div className="mx-auto px-6 max-w-7xl">
        <Reveal>
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <p className="section-title">What I Do</p>
            <h1 className="heading">
              Technical <span className="text-primary">Skills</span>
            </h1>
            <p className="text-muted mt-4 text-sm max-w-md mx-auto">
              {categories.reduce((acc, c) => acc + c.skills.length, 0)} technologies across {categories.length} categories
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category, i) => (
            <Reveal key={category.title} delay={i * 60}>
              <div className="bg-surface border border-border/50 rounded-xl p-5 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center">
                    <category.icon className="text-primary" size={16} />
                  </div>
                  <h2 className="font-semibold text-sm">{category.title}</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-muted bg-[var(--bg)] border border-border/50"
                    >
                      <skill.icon size={12} />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
