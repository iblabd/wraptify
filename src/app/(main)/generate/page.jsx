import HomeCard from '@/components/fragments/home-card'
import { authOptions } from '@/lib/auth'
import { HeadphonesIcon, Music2Icon, UserIcon, UsersIcon } from 'lucide-react'
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
          title="My profile"
          description="Share your spotify profile with number of followers as an image."
          icon={<UserIcon className="size-4" />}
        />
        <HomeCard
          title="Top track's"
          description="Wrap your top track's now."
          icon={<Music2Icon className="size-4" />}
        />
        <HomeCard
          title="Top artists"
          description="Wrap your top artists now."
          icon={<UsersIcon className="size-4" />}
        />
        <HomeCard
          title="Top genres"
          description="Wrap your top genres now."
          icon={<HeadphonesIcon className="size-4" />}
        />
      </div>
    </div>
  )
}
