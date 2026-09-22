import './globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata={title:'IRAN — Discover the extraordinary',description:'An interactive editorial journey through Iran: cities, history, culture, nature and architecture.',openGraph:{title:'IRAN — Discover the extraordinary',description:'An interactive editorial journey through Iran.'}}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
