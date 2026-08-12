import { useEffect } from 'react'

/**
 * Navbar is always fixed to the top and overlaid on the hero.
 * `transparent` is true while the hero is on screen (dark gradient +
 * white links over the video, mirroring the original's `.transparent`
 * navbar design) and false once scrolled past the hero (solid light).
 *
 * Driven by an IntersectionObserver on the hero (the hero is 100vh, so
 * it stops intersecting exactly when it is scrolled past) — more robust
 * than a scroll listener across embedded/webview environments.
 */
export function useNavbarState(heroRef) {
  const [transparent, setTransparent] = useState(true)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        setTransparent(entries[0].isIntersecting)
      },
      { threshold: 0 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [heroRef])

  return { transparent }
}

/**
 * Port of the original scroll-reveal: a gray overlay covers each
 * `.scroll-reveal` card until it enters the viewport (bottom -50px),
 * then fades out over 1s (0.25s later for `.delay` cards) and is removed.
 */
export function useScrollReveal() {
  useEffect(() => {
    let observer = null
    const timer = setTimeout(() => {
      const els = document.querySelectorAll(
        '.scroll-reveal:not(.scroll-reveal-show)',
      )
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target
              el.classList.add('scroll-reveal-show')
              setTimeout(() => el.classList.add('display-none'), 1000)
              observer.unobserve(el)
            }
          })
        },
        { rootMargin: '0px 0px -50px 0px' },
      )
      els.forEach((el) => observer.observe(el))
    }, 500)

    return () => {
      clearTimeout(timer)
      observer?.disconnect()
    }
  }, [])
}
