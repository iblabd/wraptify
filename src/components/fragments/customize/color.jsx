'use client'

import { Button } from '@/components/ui/button'
import { createQueryString, generateColorScheme } from '@/lib/utils'
import { DicesIcon } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

function CustomizeColor() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const generateNewColor = () => {
    const color = generateColorScheme()
    router.push(
      pathname +
        '?' +
        createQueryString(searchParams, [
          { name: 'textColor', value: color.textColor },
          { name: 'bgColor', value: color.bgColor },
        ]),
      { scroll: false },
    )
  }

  return (
    <div className="flex flex-col space-y-1">
      <div className="scroll-m-20 text-2xl font-medium tracking-tight">
        Color
      </div>
      <div className="w-full">
        <Button onClick={generateNewColor}>
          <div className="flex items-center">
            <DicesIcon className="mr-2 h-4 w-4" />
            <span>Generate random color</span>
          </div>
        </Button>
      </div>
    </div>
  )
}

export default CustomizeColor
