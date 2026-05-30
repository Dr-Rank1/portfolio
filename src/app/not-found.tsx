'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function NotFound() {
  const [text, setText] = useState('')
  const [path, setPath] = useState('')

  useEffect(() => {
    setPath(window.location.pathname)
  }, [])

  useEffect(() => {
    const msg = 'Error: page not found. Use "cd ~" to return home.'
    let i = 0
    const t = setInterval(() => {
      setText(msg.slice(0, i + 1))
      i++
      if (i >= msg.length) clearInterval(t)
    }, 30)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center pt-16">
      <div className="font-mono text-sm max-w-lg w-full px-6">
        <div className="text-primary mb-4">$ curl -s https://ianmbae.dev{path}</div>
        <div className="text-red-400 mb-2">&gt; {text}<span className="animate-pulse">&#9608;</span></div>
        <div className="mt-6 flex gap-4">
          <Link
            href="/"
            className="text-primary hover:underline underline-offset-2"
          >
            cd ~
          </Link>
          <Link
            href="/projects"
            className="text-primary hover:underline underline-offset-2"
          >
            ls ./projects
          </Link>
          <Link
            href="/contact"
            className="text-primary hover:underline underline-offset-2"
          >
            cat ./contact
          </Link>
        </div>
      </div>
    </div>
  )
}
