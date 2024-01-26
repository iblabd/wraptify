'use client'

import TopTrackFrame from '@/components/fragments/frame/top-track'
import { Button } from '@/components/ui/button'
import html2canvas from 'html2canvas'

export function TopTrack({ tracks }) {
  const handleImageDownload = async () => {
    const element = document.getElementById('top-track-frame')
    const canvas = await html2canvas(element, {
      useCORS: true,
    })
    const data = canvas.toDataURL('image/jpg')
    const link = document.createElement('a')

    link.href = data
    link.download = 'downloaded-image.jpg'

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return (
    <div class="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
      <Button
        onClick={handleImageDownload}
        size="lg"
        className="w-full"
      >
        Download
      </Button>
      <TopTrackFrame tracks={tracks} />
    </div>
  )
}
