import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { SpotifyWidget } from '@/components/SpotifyWidget'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ian Gicheha Mbae | Python Developer',
  description: 'Backend developer building scalable APIs and web applications with Python, Django, and FastAPI.',
  openGraph: {
    title: 'Ian Gicheha Mbae | Python Developer',
    description: 'Backend developer building scalable APIs and web applications with Python, Django, and FastAPI.',
    type: 'website',
    images: [{ url: '/photo.png', width: 576, height: 1312, alt: 'Ian Gicheha Mbae' }],
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
        <div className="fixed inset-0 bg-gradient-to-b from-primary/[0.02] to-transparent pointer-events-none" />
        <Navigation />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
        <SpotifyWidget />
      </body>
    </html>
  )
}
