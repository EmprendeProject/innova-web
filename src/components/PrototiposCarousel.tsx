import { useState } from 'react'
import prototipo1 from '../assets/stands/prototipo 1.png'
import prototipo2 from '../assets/stands/prorotipo 2.png'
import prototipo3 from '../assets/stands/prototipo 3.png'
import '../styles/PrototiposCarousel.css'

const SLIDES = [
  { src: prototipo1, label: 'Stand ORO',      subtitle: 'Stand 2×2 m · Modalidad Alquiler' },
  { src: prototipo2, label: 'Stand PLATINO',   subtitle: 'Stand 3×2 m · Modalidad Alquiler' },
  { src: prototipo3, label: 'Stand DIAMANTE',  subtitle: 'Stand 4×2 m · Modalidad Alquiler' },
]

export default function PrototiposCarousel() {
  const [active, setActive] = useState(0)

  const prev = () => setActive(i => (i - 1 + SLIDES.length) % SLIDES.length)
  const next = () => setActive(i => (i + 1) % SLIDES.length)

  return (
    <section className="proto-section">
      <div className="proto-header reveal">
        <span className="proto-eyebrow">Diseños oficiales</span>
        <h2 className="proto-title">
          Nuestros Prototipos de Stands
        </h2>
        <div className="proto-divider" />
      </div>

      <div className="proto-carousel reveal">
        {/* Prev button */}
        <button className="proto-btn proto-btn--prev" onClick={prev} aria-label="Anterior">
          ‹
        </button>

        {/* Slides */}
        <div className="proto-track">
          {SLIDES.map((slide, i) => {
            const offset = i - active
            const isActive = offset === 0
            const isPrev  = offset === -1 || (active === 0 && i === SLIDES.length - 1)
            const isNext  = offset === 1  || (active === SLIDES.length - 1 && i === 0)
            return (
              <div
                key={slide.label}
                className={`proto-slide ${isActive ? 'proto-slide--active' : ''} ${isPrev ? 'proto-slide--prev' : ''} ${isNext ? 'proto-slide--next' : ''}`}
                onClick={() => !isActive && setActive(i)}
              >
                <div className="proto-img-wrap">
                  <img src={slide.src} alt={slide.label} loading="lazy" />
                </div>
                {isActive && (
                  <div className="proto-info">
                    <p className="proto-info__label">{slide.label}</p>
                    <p className="proto-info__sub">{slide.subtitle}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Next button */}
        <button className="proto-btn proto-btn--next" onClick={next} aria-label="Siguiente">
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="proto-dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`proto-dot ${i === active ? 'proto-dot--active' : ''}`}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
