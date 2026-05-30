import { NextResponse } from 'next/server'

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing'

async function getAccessToken(): Promise<string | null> {
  if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) return null

  const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')

  const res = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: REFRESH_TOKEN,
    }),
  })

  if (!res.ok) return null
  const data = await res.json()
  return data.access_token
}

export async function GET() {
  const token = await getAccessToken()
  if (!token) {
    return NextResponse.json(
      { error: 'Spotify not configured' },
      { status: 503 }
    )
  }

  const res = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: { Authorization: `Bearer ${token}` },
    cache: 'no-store',
  })

  if (res.status === 204 || !res.ok) {
    return NextResponse.json({
      title: 'Not playing',
      artist: '—',
      albumArt: null,
      url: 'https://open.spotify.com',
      playing: false,
    })
  }

  const data = await res.json()
  const item = data.item

  return NextResponse.json({
    title: item.name,
    artist: item.artists.map((a: { name: string }) => a.name).join(', '),
    albumArt: item.album?.images?.[0]?.url || null,
    url: item.external_urls?.spotify || 'https://open.spotify.com',
    playing: data.is_playing,
  })
}
