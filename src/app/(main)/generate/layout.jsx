import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function MainLayout({ children }) {
  const session = await getServerSession(authOptions)
  if (!session) {
    redirect('/api/auth/signin')
  } else {
    return children
  }
}
