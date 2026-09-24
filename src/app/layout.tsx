import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { SpotifyWidget } from '@/components/SpotifyWidget'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ianmbae.vercel.app'),
  title: 'Ian Gicheha Mbae | Software Engineer (Python, Android, Flutter)',
  description:
    'Software Engineer based in Nairobi building scalable backend architectures with Python, Django, & FastAPI, and tactile native mobile apps with Android (Jetpack Compose) & Flutter.',
  keywords: [
    'Ian Gicheha Mbae',
    'Ian Mbae',
    'Python Developer',
    'Android Developer',
    'Kotlin',
    'Jetpack Compose',
    'Flutter',
    'Django',
    'FastAPI',
    'TypeScript',
    'Next.js',
    'Software Engineer Nairobi',
    'Kenya Software Engineer',
  ],
  authors: [{ name: 'Ian Gicheha Mbae' }],
  openGraph: {
    title: 'Ian Gicheha Mbae | Software Engineer',
    description:
      'Building scalable backend systems and high-craft mobile apps with Python, Kotlin (Compose), Flutter, and TypeScript.',
    type: 'website',
    images: [{ url: '/photo.png', width: 576, height: 1312, alt: 'Ian Gicheha Mbae' }],
  },
  icons: {
    icon: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) {
                    theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
                  }
                  document.documentElement.setAttribute('data-theme', theme);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="fixed inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent pointer-events-none" />
        <Navigation />
        <main className="relative z-10">{children}</main>
        <Footer />
        <SpotifyWidget />
      </body>
    </html>
  )
}
