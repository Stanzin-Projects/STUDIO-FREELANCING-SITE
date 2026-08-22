import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectPage() {
  const { slug } = useParams()

  const project = useMemo(
    () => projects.find((item) => item.slug === slug),
    [slug],
  )

  if (!project) {
    return (
      <div className="project-page">
        <div className="project-page-inner">
          <h1>Project not found</h1>
          <p>The selected project could not be found.</p>
          <Link to="/" className="animated-link">
            Back to portfolio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="project-page">
      {/* Full-width hero image */}
      <div className="project-hero-new">
        <img src={project.image} alt={`${project.title} — ${project.category}`} />
      </div>

      {/* Project info section */}
      <div className="project-info-section">
        <div className="project-info-inner">
          <Link to="/" className="project-back-new animated-link">
            ← Back to portfolio
          </Link>
          <h1 className="project-title-new">{project.title}</h1>
          <p className="project-category-new">{project.category}</p>
          {project.location && (
            <p className="project-location-new">{project.location}</p>
          )}
        </div>
      </div>

      {/* Divider */}
      <div className="project-divider" />

      {/* Gallery section */}
      {project.images && project.images.length > 0 && (
        <div className="project-gallery-new">
          <div className="gallery-bento">
            {project.images.map((img, i) => {
              // Create a bento layout pattern:
              // Even indices 0,2,4... in pairs = 2-col rows
              // Odd single images = full-width
              const posInPair = i % 4
              let className = 'bento-item'
              if (posInPair === 0 || posInPair === 1) {
                className += ' bento-half'
              } else {
                className += ' bento-full'
              }

              return (
                <div key={i} className={className}>
                  <img
                    src={img}
                    alt={`${project.title} — photo ${i + 1}`}
                    loading="lazy"
                  />
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
