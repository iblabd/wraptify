import { Button } from '../ui/button'
import { MenuIcon, XIcon } from 'lucide-react'
import Link from 'next/link'

const NavHeader = ({ onClick, state }) => (
  <div className="flex items-center justify-between py-5 md:block">
    <Link href="/">
      <div className="text-xl font-bold">Wraptify</div>
    </Link>
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        role="button"
        aria-label="Open the menu"
        onClick={onClick}
      >
        {state ? <XIcon className="size-6" /> : <MenuIcon className="size-6" />}
      </Button>
    </div>
  </div>
)

export default NavHeader
