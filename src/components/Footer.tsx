import { FaGithub, FaLinkedin, FaGooglePlay } from 'react-icons/fa'
import Link from 'next/link'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/50 py-10 bg-surface/30">
      <div className="mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs text-muted">
          <span className="font-semibold text-foreground">Ian Gicheha Mbae</span>
          <span className="hidden sm:inline">·</span>
          <span>Software Engineer &amp; Mobile Developer</span>
          <span className="hidden sm:inline">·</span>
          <span>Nairobi, Kenya</span>
        </div>

        {/* Quick Nav Links */}
        <div className="flex items-center gap-4 text-xs text-muted">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <Link href="/projects" className="hover:text-foreground transition-colors">Projects</Link>
          <Link href="/skills" className="hover:text-foreground transition-colors">Skills</Link>
          <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
          <Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-2.5">
          <a
            href="https://github.com/Dr-Rank1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-surface border border-border/50 flex items-center justify-center text-muted hover:text-foreground hover:border-border transition-colors"
            aria-label="GitHub Profile"
          >
            <FaGithub size={15} />
          </a>
          <a
            href="https://www.linkedin.com/in/ianmbae"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-surface border border-border/50 flex items-center justify-center text-muted hover:text-foreground hover:border-border transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={15} />
          </a>
          <a
            href="https://play.google.com/store/apps/developer?id=Dr.+Rank"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-surface border border-border/50 flex items-center justify-center text-emerald-500 hover:text-emerald-400 hover:border-border transition-colors"
            aria-label="Google Play Store"
          >
            <FaGooglePlay size={13} />
          </a>
        </div>
      </div>
      <div className="text-center text-[11px] text-muted/60 mt-6">
        &copy; {currentYear} Ian Gicheha Mbae. Built with Next.js, TypeScript &amp; Tailwind CSS.
      </div>
    </footer>
  )
}
