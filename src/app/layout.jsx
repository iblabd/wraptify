import './globals.css'
import { cn } from '@/lib/utils'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wraptify - Wrap Your Spotify!',
  description:
    'The ultimate way to wrap your spotify without waiting end of the year.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'scroll-smooth')}>{children}</body>
    </html>
  )
}
