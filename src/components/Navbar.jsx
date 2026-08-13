import { useCallback, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_ITEMS = [
  { label: 'Portfolio', to: '/#content', id: 'portfolio' },
  { label: 'Team', to: '/team', id: 'team' },
  { label: 'Info', to: '/info', id: 'info' },
]

export default function Navbar() {
  const location = useLocation()
  const [visible, setVisible] = useState(false) // display-none
  const [shown, setShown] = useState(false) // hide (opacity)

  const openMenu = useCallback(() => {
    setVisible(true)
    setTimeout(() => setShown(true), 100)
  }, [])

  const closeMenu = useCallback(() => {
    setShown(false)
    setTimeout(() => setVisible(false), 300)
  }, [])

  // Portfolio is active on the home page, others on their own routes.
  const isActive = (item) =>
    item.id === 'portfolio'
      ? location.pathname === '/'
      : location.pathname === item.to

  const overlayClass = [
    'mobile-overlay',
    visible ? '' : 'display-none',
    shown ? '' : 'hide',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <nav id="navbar" className="navbar">
      <Link to="/" className="brand" aria-label="VisualLuxe — home">
        <img
          className="brand-logo scale-125 md:*:scale-105"
          src="public\images\visualluxe.png"
          alt="VisualLuxe logo"
        />
      </Link>

      <div className="navbar-collapse justify-content-end">
        <ul className="navbar-nav">
          {NAV_ITEMS.map((item) => (
            <li
              className={`nav-item ${isActive(item) ? 'active' : ''}`}
              key={item.id}
            >
              <Link
                className={`nav-link ${isActive(item) ? 'active' : ''}`}
                to={item.to}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        id="mobile-nav-toggle"
        onClick={openMenu}
        role="button"
        aria-label="Open menu"
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </div>

      <div id="mobile-overlay" className={overlayClass}>
        <div className="mobile-overlay-header">
          <Link
            to="/"
            className="mobile-overlay-header-brand"
            onClick={closeMenu}
          >
            <span className="brand-mark" aria-hidden="true">
              N
            </span>
          </Link>
          <div
            id="mobile-overlay-close"
            className="mobile-overlay-header-close"
            onClick={closeMenu}
            role="button"
            aria-label="Close menu"
          />
        </div>

        <ul className="navbar-nav">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <Link
                className={`nav-link ${isActive(item) ? 'active' : ''}`}
                to={item.to}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mobile-overlay-contact">
          <div className="main">
            Contact
            <br />
            <a href="tel:+0000000000" className="animated-link">
              +00 000 000 000
            </a>
            <br />
            <a href="mailto:hello@visualluxe.studio" className="animated-link">
              hello@visualluxe.studio
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
