import Hero from '@/components/fragments/hero'
import Navbar from '@/components/fragments/navbar'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function Main() {
  const session = await getServerSession(authOptions)
  if (session) {
    redirect('/generate')
  } else {
    return (
      <>
        <Navbar />
        <Hero />
      </>
    )
  }
}
