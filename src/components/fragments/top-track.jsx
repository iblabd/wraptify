'use client'

import TopTrackFrame from '@/components/fragments/frame/top-track'
import { Button } from '@/components/ui/button'
import html2canvas from 'html2canvas'

export function TopTrack({ tracks }) {
  const handleImageDownload = async () => {
    const element = document.getElementById('top-track-frame')
    const canvas = await html2canvas(element, {
      useCORS: true,
      scale: 3.75,
      windowWidth: 1920,
      windowHeight: 1080,
    })
    const data = canvas.toDataURL('image/jpg')
    const link = document.createElement('a')

    link.href = data
    const now = new Date()
    const timestamp = now.getTime() / 1000
    const filename = `wraptify-${Math.floor(timestamp)}.jpg`
    link.download = filename

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
