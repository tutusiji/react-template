import { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
// import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation()
  const isFullscreenPage = ['/dashboard', '/operation-panel'].includes(
    location.pathname.toLowerCase()
  )

  // On fullscreen pages, we render children directly without the layout wrapper
  if (isFullscreenPage) {
    return <>{children}</>
  }

  // Standard layout for other pages
  return (
    <div className='layout-container'>
      <Header />
      <main className='main-content container-content'>{children}</main>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
