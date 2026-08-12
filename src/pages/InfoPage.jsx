import { useScrollReveal } from '../hooks/useScrollEffects'

// Placeholder partner brands — replace with the brands you actually work with.
const PARTNERS = [
  'Partner One',
  'Partner Two',
  'Partner Three',
  'Partner Four',
  'Partner Five',
  'Partner Six',
  'Partner Seven',
  'Partner Eight',
  'Partner Nine',
  'Partner Ten',
]

export default function InfoPage() {
  useScrollReveal()

  return (
    <div className="page-content">
      <div className="info-overview">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 scroll-reveal">
              <h1>About Us</h1>
              <p style={{ textAlign: 'center' }}>
                Nakpo Studio is a modern design studio. We execute projects all
                over the world. Each meeting with a client for us is an
                opportunity to find out their preferences, produce unique ideas
                and apply that knowledge to our project, so that the results are
                higher than their expectations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="image-full-width"
        style={{ backgroundImage: 'url(/images/work/apex-ext.webp)' }}
      />

      <div className="logos container-fluid">
        <h2>Some of the brands we work with</h2>
        <div className="logos-grid-wrapper">
          <div className="logos-grid col5">
            {PARTNERS.map((name) => (
              <div className="logos-grid-item placeholder-logo" key={name}>
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
