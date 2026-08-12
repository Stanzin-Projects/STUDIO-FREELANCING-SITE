import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="content-wrap" id="content">
        <Portfolio />
      </div>
    </>
  )
}
