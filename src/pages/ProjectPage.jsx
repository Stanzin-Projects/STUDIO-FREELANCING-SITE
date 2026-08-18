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
      <div className="project-page-inner">
        <Link to="/" className="project-back animated-link">
          ← Back to portfolio
        </Link>
        <div className="project-hero">
          <img src={project.image} alt={`${project.title} — ${project.category}`} />
        </div>
        <div className="project-content">
          <h1>{project.title}</h1>
          <p className="project-category">{project.category}</p>
          <p className="project-description">{project.description}</p>
          <div className="project-meta">
            <span>Category: {project.category}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
