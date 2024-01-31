import { Header } from '@/components/fragments/header'
import { TopArtists } from '@/components/fragments/top-artists'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'

export default async function Generate() {
  const session = await getServerSession(authOptions)
  return (
    <>
      <Header
        title="Get your top artists"
        subtitle="Wrap your top artists at certain period"
      />
      <TopArtists session={session} />
    </>
  )
}
