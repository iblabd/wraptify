'use client'

import { Label } from '@/components/ui/label'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

function CustomizeTimePeriod({ timePeriod, setTimePeriod }) {
  return (
    <div className="flex w-full flex-col space-y-2">
      <Label>Time period</Label>
      <Tabs
        defaultValue={timePeriod}
        className="flex w-full"
        onValueChange={(value) => setTimePeriod(value)}
      >
        <TabsList className="flex w-full">
          <TabsTrigger
            className="flex w-full"
            value="short_term"
          >
            Last month
          </TabsTrigger>
          <TabsTrigger
            className="flex w-full"
            value="medium_term"
          >
            6 months ago
          </TabsTrigger>
          <TabsTrigger
            className="flex w-full"
            value="long_term"
          >
            All time
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}

export default CustomizeTimePeriod
