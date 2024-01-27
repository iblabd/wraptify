import { Header } from '@/components/fragments/header'
import { TopTrack } from '@/components/fragments/top-track'
import { authOptions } from '@/lib/auth'
import getTopTracks from '@/services/get-top-tracks'
import { getServerSession } from 'next-auth'

export default async function Generate() {
  const session = await getServerSession(authOptions)
  const topTracks = await getTopTracks(session.accessToken)
  return (
    <>
      <Header
        title="Get your top tracks"
        subtitle="Wrap your most listened track in custom range."
      />
      <TopTrack tracks={topTracks} />
    </>
  )
}
