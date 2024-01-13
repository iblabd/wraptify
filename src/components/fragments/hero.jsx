import { Button } from '../ui/button';
import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';


const Hero = () => (
  <div className="container mx-auto max-w-4xl space-y-5 py-20 text-center">
    <h1 className="mx-auto text-4xl font-extrabold text-foreground sm:text-6xl">
      Wrap your spotify{' '}
      <span className=" bg-gradient-to-r from-[#9867F0] to-[#ED4E50] bg-clip-text text-transparent">
        anytime you want
      </span>
    </h1>
    <p className="mx-auto max-w-xl text-accent-foreground">
      The ultimate way to wrap your spotify without waiting end of the year.
      Generate your wrapped list now.
    </p>
    <div className="flex items-center justify-center gap-x-3 font-medium">
      <Button>
        <Link href="/home">
          <div className="flex items-center">
            <span>Get my list</span>
            <ChevronRightIcon className="ml-2 size-4" />
          </div>
        </Link>
      </Button>
      <Button variant="ghost">
        <Link href="/login">
          <div className="flex items-center">
            <span>Learn more</span>
            <ChevronRightIcon className="ml-2 size-4" />
          </div>
        </Link>
      </Button>
    </div>
  </div>
)

export default Hero