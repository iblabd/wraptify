'use client'

import CustomizeColor from './customize/color'
import CustomizeTimePeriod from './customize/time-period'
import TopTrackFrame from '@/components/fragments/frame/top-track'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { handleImageDownload } from '@/lib/handle-image-download'
import getTopTracks from '@/services/get-top-tracks'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export function TopTrack({ session }) {
  const searchParams = useSearchParams()
  const bgColor = searchParams.get('bgColor')
  const textColor = searchParams.get('textColor')
  const [trackList, setTrackList] = useState()
  const [timePeriod, setTimePeriod] = useState(searchParams.get('time_period'))

  useEffect(() => {
    if (session) {
      const getTracks = async (session, timePeriod) => {
        const track = await getTopTracks(session.accessToken, timePeriod)
        setTrackList(track)
      }
      getTracks(session, timePeriod)
    }
  }, [timePeriod, setTimePeriod])

  return (
    <div className="mt-8 grid grid-cols-1 gap-6 gap-y-12 pb-40 lg:grid-cols-2 lg:pb-6">
      <div className="order-last flex w-full flex-col space-y-4 lg:order-first">
        <Accordion
          type="single"
          defaultValue="customize"
          collapsible
        >
          <AccordionItem value="customize">
            <AccordionTrigger className="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Customize
            </AccordionTrigger>
            <AccordionContent className="mt-2 flex flex-col space-y-6 px-1">
              <CustomizeColor />
              <CustomizeTimePeriod
                timePeriod={timePeriod}
                setTimePeriod={setTimePeriod}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Button
          onClick={() => handleImageDownload({ id: 'tracks' })}
          size="lg"
          className="w-full"
          disabled={!trackList}
        >
          {trackList ? 'Download' : 'Please wait'}
        </Button>
      </div>
      <TopTrackFrame
        tracks={trackList}
        bgColor={bgColor}
        textColor={textColor}
      />
    </div>
  )
}
