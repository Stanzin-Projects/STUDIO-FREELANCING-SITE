import WorkCard from './WorkCard'
import { projects } from '../data/projects'
import { useScrollReveal } from '../hooks/useScrollEffects'

export default function Portfolio() {
  useScrollReveal()

  return (
    <div className="container-fluid work-cards-wrapper">
      <div className="row work-cards">
        {projects.map((project, i) => (
          <WorkCard key={i} project={project} />
        ))}
      </div>
    </div>
  )
}
