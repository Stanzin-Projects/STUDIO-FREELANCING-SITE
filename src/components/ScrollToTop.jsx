import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash === '#content') {
      // Small delay so the home page has rendered before scrolling.
      const t = setTimeout(() => {
        document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' })
      }, 60)
      return () => clearTimeout(t)
    }
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return null
}
