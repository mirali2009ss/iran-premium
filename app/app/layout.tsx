import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IRAN — Discover Iran',
  description:
    'Iran is more than a destination. Discover its cities, history, culture, nature, architecture and stories.',
  keywords: [
    'Iran',
    'Iran travel',
    'Persia',
    'Iranian culture',
    'Iran cities',
    'Iran history',
    'Persian architecture',
  ],
  openGraph: {
    title: 'IRAN — Discover Iran',
    description: 'ایران را فقط نبین؛ کشفش کن.',
    type: 'website',
    locale: 'fa_IR',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
