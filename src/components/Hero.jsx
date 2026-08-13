import { useState } from 'react'

export default function Hero({ onArrowClick } = {}) {
  const [animating, setAnimating] = useState(false)

  const handleArrowClick = (e) => {
    if (onArrowClick) {
      onArrowClick(e)
    } else {
      e.preventDefault()
      document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="hero-large">
      <div className="iframe-wrapper">
        <iframe
          className="hero-iframe"
          src="https://player.vimeo.com/video/796965971?background=1"
          frameBorder="0"
          allow="autoplay"
          title="VisualLuxe — design & architecture showreel"
        />
      </div>

      <div className="hero-cover">
        <div className="logo hero-logo">
          <span className="logo-name">VISUAL-lUXE</span>
          <span className="logo-tag">Design &amp; Architecture & 3d Rendering </span> 
        </div>
      </div>

      <a
        href="#navbar"
        className={`arrow${animating ? ' arrow-animate' : ''}`}
        onMouseEnter={() => setAnimating(true)}
        onAnimationEnd={() => setAnimating(false)}
        onClick={handleArrowClick}
        aria-label="Scroll down"
      >
        <img src="/images/hero-arrow.svg" alt="" />
      </a>
    </header>
  )
}
