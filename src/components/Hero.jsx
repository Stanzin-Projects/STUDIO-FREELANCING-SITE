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
        <video
          className="hero-iframe"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-poster.jpg"
        >
          <source src="/visualluxe-video-homepage.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="hero-cover">
        <img src="/images/visualluxe.png" alt="VisualLuxe logo" className="hero-logo-img" />
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
