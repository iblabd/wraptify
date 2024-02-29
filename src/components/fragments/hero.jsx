import { Button } from '../ui/button'
import GithubIcon from '@/components/ui/github-logo'
import { Heading1Icon } from 'lucide-react'
import { ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'

const Hero = () => (
  <div className="container mx-auto max-w-4xl space-y-5 py-20 text-center">
    <h2 class="mx-auto py-2 text-center text-4xl font-black tracking-tight text-primary md:text-5xl lg:text-6xl">
      Wrap your spotify
      <br />
      <span class="mt-1 inline-flex h-10 bg-gradient-to-r from-[#9867F0] to-[#ED4E50] bg-clip-text pb-2 text-transparent sm:h-14 lg:h-[4.125rem]">
        anytime you want.
      </span>
    </h2>
    <p className="mx-auto max-w-xl text-accent-foreground">
      The ultimate way to wrap your spotify without waiting end of the year.
      Generate your wrapped list now.
    </p>
    <div className="flex items-center justify-center gap-x-3 font-medium">
      <Link href="/generate">
        <Button>
          <div className="flex items-center">
            <span>Get started</span>
            <ChevronRightIcon className="ml-2 size-4" />
          </div>
        </Button>
      </Link>
      <Button variant="outline">
        <Link
          href="https://github.com/iblabd/wraptify"
          target="blank"
          passHref
        >
          <div className="flex items-center">
            <GithubIcon className="mr-2 size-4" />
            <span>Star on Github</span>
          </div>
        </Link>
      </Button>
    </div>
  </div>
)

export default Hero
