import { Header } from '@/components/fragments/header'
import { TopSongs } from '@/components/fragments/top-songs'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'

export default async function Generate() {
  const session = await getServerSession(authOptions)
  return (
    <>
      <Header
        title="Get your top songs"
        subtitle="Wrap your top songs at certain period"
      />
      <TopSongs session={session} />
    </>
  )
}
