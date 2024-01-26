import { Button } from '../ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { ChevronRightIcon } from 'lucide-react'
import Link from 'next/link'

const HomeCard = ({ title, description, icon, href }) => (
  <Link href={href}>
    <Card className="group hover:border-primary hover:bg-secondary">
      <CardHeader>
        <Button
          size="icon"
          className="mb-1"
        >
          {icon}
        </Button>
        <CardTitle className="group-hover:text-secondary-foreground">
          {title}
        </CardTitle>
        <div className="text-accent-foreground group-hover:text-foreground">
          {description}
        </div>
        <CardDescription className="flex items-center group-hover:text-primary">
          <span>Generate now</span>
          <ChevronRightIcon className="ml-1 size-3 transition-all group-hover:ml-2" />
        </CardDescription>
      </CardHeader>
    </Card>
  </Link>
)

export default HomeCard
