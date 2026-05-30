import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/50 py-8">
      <div className="mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          &copy; {currentYear} Ian Gicheha Mbae.
        </p>
        <div className="flex items-center gap-3">
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
    </footer>
  )
}
