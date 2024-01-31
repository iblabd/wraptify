import Navbar from '@/components/fragments/navbar'
import Link from 'next/link'

export default function MainLayout({ children }) {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <div className="container">{children}</div>
      </div>
      <div className="container mb-8 text-sm text-muted-foreground">
        Built by{' '}
        <Link
          href="https://github.com/iblabd"
          passHref
          className="text-blue-500 underline hover:text-blue-700"
          target="blank"
        >
          Iqbal Abdurrahman
        </Link>
        .
      </div>
    </>
  )
}
