import { cn } from '@/lib/utils'
import { Loader2Icon } from 'lucide-react'

function Spinner({ className }) {
  return <Loader2Icon className={cn('size-4 animate-spin', className)} />
}

export default Spinner
