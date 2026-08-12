import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import TeamPage from './pages/TeamPage'
import InfoPage from './pages/InfoPage'
import ProjectPage from './pages/ProjectPage'

export default function App() {
  useEffect(() => {
    document.body.classList.add('loaded')
    return () => document.body.classList.remove('loaded')
  }, [])

  return (
    <div className="all">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  )
}
