import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function WorkCard({ project }) {
  const videoRef = useRef(null)
  const [desktop, setDesktop] = useState(
    typeof window !== 'undefined' && window.matchMedia('(min-width: 992px)').matches,
  )

  // On desktop only: load the loop video and play/pause on hover,
  // exactly like the original site.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 992px)')

    const apply = () => {
      setDesktop(mq.matches)
      if (mq.matches && videoRef.current) {
        const source = videoRef.current.querySelector('source')
        if (source && !source.getAttribute('src') && source.dataset.src) {
          source.setAttribute('src', source.dataset.src)
          videoRef.current.load()
        }
      }
    }

    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  const play = () => {
    if (desktop && videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }

  const pause = () => {
    if (desktop && videoRef.current) {
      videoRef.current.pause()
    }
  }

  const colClass = [
    'col-work',
    `span-${project.span}`,
    'scroll-reveal',
    project.delay ? 'delay' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={colClass}>
      <div className={`work-card${project.shadow ? ' shadow' : ''}`}>
        <Link to={`/projects/${project.slug}`}>
          <div className="work-cover">
            <h2>{project.title}</h2>
            <h3>{project.category}</h3>
          </div>
          <video
            ref={videoRef}
            loop
            muted
            preload="auto"
            poster={project.image}
            onMouseEnter={play}
            onMouseLeave={pause}
          >
            <source data-src={project.video} type="video/mp4" />
          </video>
          <img src={project.image} alt={`${project.title} — ${project.category}`} />
        </Link>
      </div>
    </div>
  )
}
