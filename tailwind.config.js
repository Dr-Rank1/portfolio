/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        dark: 'var(--bg)',
        darker: 'var(--bg-darker)',
        surface: 'var(--surface)',
        card: 'var(--card)',
        border: 'var(--border)',
        muted: 'var(--muted)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
}
