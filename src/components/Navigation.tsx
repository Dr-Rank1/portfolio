'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeToggle } from '@/components/ThemeToggle'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
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
          ? 'bg-dark/80 backdrop-blur-lg border-b border-border/50 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto px-6 max-w-7xl flex items-center justify-between h-16">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight flex items-center gap-2"
        >
          <span className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-white text-xs font-bold">
            I
          </span>
          <span className="hidden sm:inline">Ian Mbae</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm transition-colors ${
                  isActive
                    ? 'text-foreground'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                  />
                )}
              </Link>
            )
          })}
          <div className="ml-3 flex items-center gap-2">
            <ThemeToggle />
          </div>
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="relative w-8 h-8 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
                className="block w-5 h-px bg-current origin-center"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0, x: -4 } : { opacity: 1, x: 0 }}
                className="block w-5 h-px bg-current"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
                className="block w-5 h-px bg-current origin-center"
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/50 bg-dark/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="mx-auto px-6 max-w-7xl py-3 flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-2.5 rounded-lg text-sm transition-colors ${
                      isActive
                        ? 'text-foreground bg-primary/10'
                        : 'text-muted hover:text-foreground hover:bg-[var(--surface)]'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}

            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
