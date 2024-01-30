import { Header } from '@/components/fragments/header'
import { TopTrack } from '@/components/fragments/top-track'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'

export default async function Generate() {
  const session = await getServerSession(authOptions)
  return (
    <>
      <Header
        title="Get your top tracks"
        subtitle="Wrap your most listened track in custom range."
      />
      <TopTrack session={session} />
    </>
  )
}
