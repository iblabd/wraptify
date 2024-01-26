import HomeCard from '@/components/fragments/home-card'
import { authOptions } from '@/lib/auth'
import { Music2Icon } from 'lucide-react'
import { getServerSession } from 'next-auth'

export default async function Generate() {
  const session = await getServerSession(authOptions)
  return (
    <div className="container pb-12 pt-6">
      <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
        Hello, {session.user.name}!
      </h2>
      <p className="text-lg text-accent-foreground sm:text-xl">
        What would you wrap now?
      </p>
      <div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <HomeCard
          href="/generate/track"
          title="Top songs"
          description="Wrap your top songs."
          icon={<Music2Icon className="size-4" />}
        />
      </div>
    </div>
  )
}
