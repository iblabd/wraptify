import Navbar from '@/components/fragments/navbar'

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="container">{children}</div>
    </>
  )
}
