import './globals.css'
import NextAuthProvider from '@/contexts/next-auth-provider'
import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata = {
  title: 'Wraptify - Wrap Your Spotify!',
  description:
    'The ultimate way to wrap your spotify without waiting end of the year.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(poppins.className, 'scroll-smooth')}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  )
}
