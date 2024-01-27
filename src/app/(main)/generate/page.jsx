import { Header } from '@/components/fragments/header'
import HomeCard from '@/components/fragments/home-card'
import { authOptions } from '@/lib/auth'
import { Music2Icon } from 'lucide-react'
import { getServerSession } from 'next-auth'

export default async function Generate() {
  const session = await getServerSession(authOptions)
  return (
    <>
      <Header
        title={`Hello, ${session.user.name}!`}
        subtitle="What would you wrap now?"
      />
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <HomeCard
          href="/generate/track"
          title="Top songs"
          description="Wrap your top songs."
          icon={<Music2Icon className="size-4" />}
        />
      </div>
    </>
  )
}
