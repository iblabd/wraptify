import './globals.css'
import NextAuthProvider from '@/contexts/next-auth-provider'
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
      <body className={cn(inter.className, 'scroll-smooth')}>
        <NextAuthProvider>
          <div className="mx-auto flex h-fit w-full flex-col sm:max-w-4xl">
            {children}
          </div>
        </NextAuthProvider>
      </body>
    </html>
  )
}
