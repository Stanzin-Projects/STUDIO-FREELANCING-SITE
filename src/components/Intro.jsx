import { useEffect, useState } from 'react'

// Intro splash: brand text animates in over a black screen, then the
// whole website fades in underneath (see App.jsx for the handoff timing).
const WORDMARK = 'VISUALLUXE'
const TAGLINE = 'Design & Architecture & 3d Rendering'

export default function Intro({ onDone }) {
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    // Text animation finishes ~2.1s → start crossfade at 2.6s,
    // remove the overlay at 3.4s once it is fully transparent.
    const leave = setTimeout(() => setLeaving(true), 2600)
    const done = setTimeout(() => onDone?.(), 3400)
    return () => {
      clearTimeout(leave)
      clearTimeout(done)
    }
  }, [onDone])

  return (
    <div className={`intro${leaving ? ' intro-leave' : ''}`} aria-hidden="true">
      <div className="intro-logo">
        <span className="intro-name">
          {WORDMARK.split('').map((ch, i) => (
            <span
              key={i}
              className="intro-char"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              {ch}
            </span>
          ))}
        </span>
        <span className="intro-tag">
          {TAGLINE.split(' ').map((word, i) => (
            <span
              key={i}
              className="intro-word"
              style={{ animationDelay: `${0.55 + i * 0.14}s` }}
            >
              {word}
              {'\u00A0'}
            </span>
          ))}
        </span>
      </div>
    </div>
  )
}
