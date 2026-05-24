import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const observed = new WeakSet()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -20px 0px' },
    )

    const observeElements = () => {
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
        if (!observed.has(el)) {
          observed.add(el)
          observer.observe(el)
        }
      })
    }

    observeElements()
    const timer = setTimeout(observeElements, 300)
    window.addEventListener('load', observeElements)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('load', observeElements)
      observer.disconnect()
    }
  }, [])
}
