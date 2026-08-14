import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Intro from './components/Intro'
import HomePage from './pages/HomePage'
import TeamPage from './pages/TeamPage'
import InfoPage from './pages/InfoPage'
import ProjectPage from './pages/ProjectPage'

export default function App() {
  const [introDone, setIntroDone] = useState(false)

  useEffect(() => {
    if (introDone) {
      // Text intro finished → reveal the whole website (crossfade).
      document.body.classList.add('loaded')
      document.body.classList.remove('intro-active')
    } else {
      // During the intro: black screen, no scroll until the site loads.
      document.body.classList.add('intro-active')
      document.body.classList.remove('loaded')
    }
    return () => {
      document.body.classList.remove('loaded', 'intro-active')
    }
  }, [introDone])

  return (
    <>
      {!introDone && <Intro onDone={() => setIntroDone(true)} />}
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
    </>
  )
}
