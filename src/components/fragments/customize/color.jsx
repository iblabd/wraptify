'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { createQueryString, generateColorScheme } from '@/lib/utils'
import { DicesIcon } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

function CustomizeColor() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [textColor, setTextColor] = useState(searchParams.get('textColor'))
  const [bgColor, setBgColor] = useState(searchParams.get('bgColor'))

  useEffect(() => {
    router.push(
      pathname +
        '?' +
        createQueryString(searchParams, [
          { name: 'textColor', value: textColor },
          { name: 'bgColor', value: bgColor },
        ]),
      { scroll: false },
    )
  }, [textColor, bgColor])

  const generateRandomColor = () => {
    const color = generateColorScheme()
    setTextColor(color.textColor)
    setBgColor(color.bgColor)
  }

  return (
    <div className="flex w-full items-end space-x-2">
      <div className="flex w-full flex-col space-y-2">
        <Label>Background color</Label>
        <Input
          placeholder="#000000"
          defaultValue={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
        />
      </div>
      <div className="flex w-full flex-col space-y-2">
        <Label>Text color</Label>
        <Input
          placeholder="#FFFFFF"
          defaultValue={textColor}
          onChange={(e) => setTextColor(e.target.value)}
        />
      </div>
      <Button
        onClick={generateRandomColor}
        size="icon"
        className="aspect-square"
      >
        <DicesIcon className="h-4 w-4" />
      </Button>
    </div>
  )
}

export default CustomizeColor
