# Ian Gicheha Mbae - Portfolio

Production software engineering portfolio website built with Next.js 15 (App Router), TypeScript, and Tailwind CSS. The site highlights full-stack backend development, native Android engineering with Jetpack Compose, and cross-platform mobile apps deployed to the Google Play Store.

Live URL: [https://ianmbae.vercel.app](https://ianmbae.vercel.app)

---

## Overview

This repository houses the source code for my personal portfolio. It presents a clean, performance-oriented design that showcases production software, technical competencies, and active open-source repositories.

Key sections and features include:
- Home: Direct overview of core specialities (Python/FastAPI/Django, Android/Kotlin, Flutter), pinned Google Play Store applications, recent architecture builds, and development principles.
- Projects: Interactive project catalogue with real-time text search, category tabs (Featured, Mobile, Full-Stack, Backend, Tools), language filters, live demo links, and Google Play Store badges.
- Skills: Technical breakdown across backend systems, mobile engineering, web interfaces, database architecture, DevOps, and testing methodologies.
- About: Detailed engineering background, design philosophy, and verified developer links.
- Contact: Direct email dispatch, phone/WhatsApp connectivity, and social developer links.
- Theme Support: System-aware dark and light modes with persistent localStorage state.
- SEO and Verification: Built-in OpenGraph metadata, structured metadataBase, and Google Search Console verification support.

---

## Live Google Play Store Applications

The portfolio features four active Android applications published under developer ID `Dr_Rank`:

1. Quick PDF Manager
   - Stack: Flutter, Dart
   - Scope: Lightweight offline document viewer, bookmarking, and storage optimization.
   - Link: [Google Play Store](https://play.google.com/store/apps/details?id=com.rank.quickpdf)
   - Repository: [Dr-Rank1/quick-pdf](https://github.com/Dr-Rank1/quick-pdf)

2. QR and Barcode Scanner Pro
   - Stack: Flutter, CameraX, Material 3
   - Scope: Real-time camera barcode reading, flashlight toggle, scan history, and custom QR generation.
   - Link: [Google Play Store](https://play.google.com/store/apps/details?id=com.dr_rank.qrcodescanner)
   - Repository: [Dr-Rank1/QR-app](https://github.com/Dr-Rank1/QR-app)

3. TempBox (Disposable Temp Mail)
   - Stack: Kotlin, Android SDK, Coroutines
   - Scope: On-demand temporary inboxes with live auto-sync and zero registration requirement.
   - Link: [Google Play Store](https://play.google.com/store/apps/details?id=com.rank.tempbox)
   - Repository: [Dr-Rank1/Temporary-email](https://github.com/Dr-Rank1/Temporary-email)

4. Pazia (Quick Wallpaper HD and 4K)
   - Stack: Kotlin, Material You, Pexels API
   - Scope: Curated HD/4K wallpaper browser with one-tap home and lock screen application.
   - Link: [Google Play Store](https://play.google.com/store/apps/details?id=com.rank.quickwallpaper)
   - Repository: [Dr-Rank1/Quick-wallpaper](https://github.com/Dr-Rank1/Quick-wallpaper)

---

## Technical Stack

### Core Framework and Languages
- Framework: Next.js 15 (App Router, React Server Components, Static Site Generation)
- Language: TypeScript
- Library: React 18
- Styling: Tailwind CSS, PostCSS, Autoprefixer
- Animation: Framer Motion (Intersection Observer reveals and page transitions)
- Icons: React Icons (Simple Icons, Font Awesome)
- Fonts: Inter (next/font/google with swap optimization)

### Deployment and Performance
- Hosting: Vercel Edge Network
- Production URL: `https://ianmbae.vercel.app`
- Verification: Google Search Console HTML verification file (`public/google12b81ea35da6c77a.html`)

---

## Directory Architecture

```
portfolio/
├── public/
│   ├── favicon.ico                         # Favicon icon
│   ├── icon.png                            # High-resolution application mark
│   ├── photo.png                           # Profile portrait
│   └── google12b81ea35da6c77a.html         # Google Search Console verification asset
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx                    # Detailed background, principles, and timeline
│   │   ├── api/
│   │   │   └── spotify/
│   │   │       └── route.ts                # Serverless Spotify Now-Playing API route
│   │   ├── contact/
│   │   │   └── page.tsx                    # Direct messaging form and connection endpoints
│   │   ├── projects/
│   │   │   └── page.tsx                    # Searchable, filterable project catalogue
│   │   ├── skills/
│   │   │   └── page.tsx                    # Grouped technical competencies breakdown
│   │   ├── globals.css                     # Design tokens, color system, and utility classes
│   │   ├── layout.tsx                      # Root layout, navigation, metadataBase, and themes
│   │   ├── not-found.tsx                   # Terminal-styled 404 handler
│   │   └── page.tsx                        # Home view with pinned store apps and bio
│   └── components/
│       ├── Footer.tsx                      # Global footer navigation and developer links
│       ├── Navigation.tsx                  # Floating navigation pill with active indicator
│       ├── Reveal.tsx                      # Viewport intersection animation wrapper
│       ├── SpotifyWidget.tsx               # Audio activity widget with graceful fallback
│       ├── TerminalSplash.tsx              # CLI boot loader component
│       └── ThemeToggle.tsx                 # Dark/light mode theme toggle
├── next.config.js                          # Next.js build and runtime configuration
├── package.json                            # Package dependencies and operational scripts
├── postcss.config.js                       # PostCSS plugins
├── tailwind.config.js                      # Tailwind theme extensions and color tokens
└── tsconfig.json                           # TypeScript compiler options
```

---

## Getting Started

### Prerequisites
- Node.js 18.17.0 or later
- npm (v9 or later) or yarn / pnpm

### Local Development Setup

1. Clone the repository:
```bash
git clone https://github.com/Dr-Rank1/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Launch development server:
```bash
npm run dev
```

4. Access the site in your browser at `http://localhost:3000`.

### Building for Production

Compile an optimized production build:
```bash
npm run build
```

Run the compiled production server locally:
```bash
npm start
```

Run static analysis and linting:
```bash
npm run lint
```

---

## Developer Contact

- Developer: Ian Gicheha Mbae
- Location: Nairobi, Kenya
- Email: mbaegicheha@gmail.com
- Telephone: +254 708 617 059
- GitHub: [https://github.com/Dr-Rank1](https://github.com/Dr-Rank1)
- Google Play: [https://play.google.com/store/apps/developer?id=Dr_Rank](https://play.google.com/store/apps/developer?id=Dr_Rank)
- LinkedIn: [https://www.linkedin.com/in/ianmbae](https://www.linkedin.com/in/ianmbae)

---

## License

This project is licensed under the MIT License.
