'use client'

import { useState, useEffect } from 'react'

const bootLines = [
  { text: 'Booting portfolio kernel...', delay: 200 },
  { text: 'Loading personality matrix...', delay: 400 },
  { text: '> whoami', delay: 700 },
  { text: 'ian_mbae', delay: 1000 },
  { text: '> python --version', delay: 1400 },
  { text: 'Python 3.x — full stack, back to front.', delay: 1700 },
]

export const TerminalSplash = ({ onDone }: { onDone: () => void }) => {
  const [visibleLines, setVisibleLines] = useState<number[]>([])
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const timers: NodeJS.Timeout[] = []

    bootLines.forEach((line, i) => {
      timers.push(
        setTimeout(() => {
          setVisibleLines((prev) => [...prev, i])
        }, line.delay)
      )
    })

    const doneTimer = setTimeout(() => {
      setShowCursor(false)
      setTimeout(onDone, 400)
    }, 3000)

    return () => {
      timers.forEach(clearTimeout)
      clearTimeout(doneTimer)
    }
  }, [onDone])

  return (
    <div className="fixed inset-0 z-[100] bg-[var(--bg)] flex items-center justify-center">
      <div className="font-mono text-sm max-w-md w-full px-6">
        {bootLines.map((line, i) => (
          <div
            key={i}
            className={`transition-opacity duration-300 ${
              visibleLines.includes(i) ? 'opacity-100' : 'opacity-0'
            } ${line.text.startsWith('>') ? 'text-primary' : 'text-[var(--foreground)]'}`}
          >
            {line.text}
            {i === visibleLines.length - 1 && showCursor && (
              <span className="ml-0.5 animate-pulse">&#9608;</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
