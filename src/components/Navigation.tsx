'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeToggle } from '@/components/ThemeToggle'
import { FaGithub, FaBriefcase } from 'react-icons/fa'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/skills' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark/85 backdrop-blur-xl border-b border-border/60 shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto px-6 max-w-7xl flex items-center justify-between h-16">
        <Link
          href="/"
          className="group text-base font-semibold tracking-tight flex items-center gap-2.5"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white text-xs font-bold shadow-md shadow-primary/20 group-hover:scale-105 transition-transform">
            IM
          </span>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-foreground group-hover:text-primary transition-colors">
              Ian Mbae
            </span>
            <span className="text-[10px] text-muted -mt-0.5 font-mono">
              Software Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-surface/50 border border-border/50 px-2 py-1.5 rounded-full backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-colors ${
                  isActive
                    ? 'text-white'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-nav-pill"
                    className="absolute inset-0 bg-primary rounded-full shadow-sm shadow-primary/30"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </Link>
            )
          })}
        </nav>

        {/* Right CTA / Controls */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="https://github.com/Dr-Rank1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-surface border border-transparent hover:border-border/50 transition-colors"
            aria-label="GitHub Profile"
          >
            <FaGithub size={17} />
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary text-white text-xs font-medium rounded-lg hover:bg-primary-dark shadow-sm shadow-primary/20 transition-all hover:scale-[1.02]"
          >
            <FaBriefcase size={11} />
            Hire Me
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="w-9 h-9 rounded-lg border border-border/50 bg-surface flex items-center justify-center text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5 w-4">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                className="block w-full h-[1.5px] bg-current origin-center"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-full h-[1.5px] bg-current"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                className="block w-full h-[1.5px] bg-current origin-center"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-border/60 bg-dark/95 backdrop-blur-2xl overflow-hidden"
          >
            <div className="mx-auto px-6 py-4 flex flex-col gap-1.5">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? 'text-primary bg-primary/10 font-semibold'
                        : 'text-muted hover:text-foreground hover:bg-surface'
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                  </Link>
                )
              })}
              <div className="pt-3 mt-2 border-t border-border/50 flex gap-2">
                <Link
                  href="/contact"
                  className="flex-1 text-center py-2.5 bg-primary text-white text-xs font-semibold rounded-lg shadow-sm"
                >
                  Hire Me / Contact
                </Link>
                <a
                  href="https://github.com/Dr-Rank1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-surface border border-border/50 rounded-lg flex items-center justify-center text-muted hover:text-foreground"
                  aria-label="GitHub"
                >
                  <FaGithub size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
