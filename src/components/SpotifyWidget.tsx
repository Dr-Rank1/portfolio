'use client'

import { useState, useEffect, useRef } from 'react'

interface Track {
  title: string
  artist: string
  albumArt: string
  url: string
  playing: boolean
}

export const SpotifyWidget = () => {
  const [track, setTrack] = useState<Track | null>(null)
  const [visible, setVisible] = useState(true)
  const [error, setError] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const fetchTrack = async () => {
      try {
        const res = await fetch('/api/spotify')
        if (!res.ok) throw new Error('not configured')
        const data = await res.json()
        setTrack(data)
        setError(false)
      } catch {
        setError(true)
      }
    }

    fetchTrack()
    intervalRef.current = setInterval(fetchTrack, 30000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  if (error || !track) return null
  if (!visible) return null

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div className="flex items-center gap-3 bg-[var(--surface)] border border-[var(--border)] rounded-xl px-4 py-3 shadow-lg backdrop-blur-md">
        <button
          onClick={() => setVisible(false)}
          className="absolute -top-2 -right-2 w-5 h-5 bg-[var(--border)] rounded-full flex items-center justify-center text-[10px] text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
          aria-label="Close"
        >
          ✕
        </button>
        <div className="relative w-10 h-10 shrink-0 rounded overflow-hidden bg-[var(--border)]">
          {track.albumArt ? (
            <img src={track.albumArt} alt="" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-lg">🎵</div>
          )}
          {track.playing && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary">
              <div className="h-full bg-primary animate-pulse" />
            </div>
          )}
        </div>
        <div className="min-w-0 max-w-[160px]">
          <p className="text-xs font-medium truncate">{track.title}</p>
          <p className="text-[11px] text-[var(--muted)] truncate">{track.artist}</p>
        </div>
        <a
          href={track.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--muted)] hover:text-primary transition-colors shrink-0"
          aria-label="Open in Spotify"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
        </a>
      </div>
    </div>
  )
}
