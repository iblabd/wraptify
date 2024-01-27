'use client'

import { Button } from '../ui/button'
import NavHeader from './nav-header'
import { ArrowRightIcon } from 'lucide-react'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [state, setState] = useState(false)
  const { status } = useSession()

  const navigation = [
    { name: 'Generate', href: '/generate' },
    { name: 'About', href: '#' },
    { name: 'FAQs', href: '#' },
  ]

  return (
    <header className="relative">
      <div className="container md:hidden">
        <NavHeader
          state={state}
          onClick={() => setState(!state)}
        />
      </div>
      <nav
        className={`bg-background pb-5 md:static md:block md:text-sm ${state ? 'absolute inset-x-4 top-2 z-20 rounded-xl border shadow-lg md:border-none md:shadow-none' : 'hidden'}`}
      >
        <div className="container items-center gap-x-20 md:flex">
          <NavHeader
            state={state}
            onClick={() => setState(!state)}
          />
          <div
            className={`mt-8 flex-1 items-center text-accent-foreground md:mt-0 md:flex md:font-medium ${state ? 'block' : 'hidden'} `}
          >
            <ul className="items-center justify-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="hover:text-accent-foreground/80"
                  >
                    <Link
                      href={item.href}
                      className="block"
                      scroll={false}
                    >
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <div className="mt-6 flex-1 items-center justify-end gap-x-6 space-y-6 md:mt-0 md:flex md:space-y-0">
              {status === 'authenticated' ? (
                <ul className="items-center justify-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                  <li className="text-destructive hover:text-destructive/80">
                    <Link
                      href="/api/auth/signout"
                      className="block"
                      scroll={false}
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              ) : (
                <Button className="w-full md:w-min">
                  <Link href="/api/auth/signin">
                    <div className="flex items-center">
                      <span>Get started</span>
                      <ArrowRightIcon className="ml-2 size-4" />
                    </div>
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
