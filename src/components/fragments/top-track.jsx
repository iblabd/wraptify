'use client'

import TopTrackFrame from '@/components/fragments/frame/top-track'
import { Button } from '@/components/ui/button'
import { handleImageDownload } from '@/lib/handle-image-download'
import { useSearchParams } from 'next/navigation'

export function TopTrack({ tracks }) {
  const searchParams = useSearchParams()
  const bgColor = searchParams.get('bgColor')
  const textColor = searchParams.get('textColor')
  return (
    <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
      <Button
        onClick={() => handleImageDownload({ id: 'tracks' })}
        size="lg"
        className="w-full"
      >
        Download
      </Button>
      <TopTrackFrame
        tracks={tracks}
        bgColor={bgColor}
        textColor={textColor}
      />
    </div>
  )
}
