import { TopTrack } from '@/components/fragments/top-track'
import { authOptions } from '@/lib/auth'
import getTopTracks from '@/services/get-top-tracks'
import { getServerSession } from 'next-auth'

export default async function Generate() {
  const session = await getServerSession(authOptions)
  const topTracks = await getTopTracks(session.accessToken)

  return (
    <div className="container pb-12 pt-6">
      <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
        Get your top tracks
      </h2>
      <p className="text-lg text-accent-foreground sm:text-xl">
        Wrap your most listened track in custom range.
      </p>
      <TopTrack tracks={topTracks} />
    </div>
  )
}
