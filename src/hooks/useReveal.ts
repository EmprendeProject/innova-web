import { useEffect } from 'react'

/**
 * useReveal — Scroll-reveal elegante con IntersectionObserver.
 * Agrega la clase `.is-visible` a cada elemento con `.reveal`
 * cuando entra al viewport. La animación se dispara una sola vez.
 */
export function useReveal(
  selector = '.reveal, .reveal-scale, .reveal-left, .reveal-right',
  threshold = 0.12
) {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(selector)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const delay = el.dataset.delay ?? '0'
            el.style.transitionDelay = `${delay}ms`
            el.classList.add('is-visible')
            observer.unobserve(el)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [selector, threshold])
}
