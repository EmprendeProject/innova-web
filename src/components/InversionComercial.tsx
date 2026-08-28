import { useState, useEffect } from 'react'
import '../styles/InversionComercial.css'
import prototipo1 from '../assets/stands/stand 2x2.png'
import prototipo2 from '../assets/stands/stand 3x2.png'
import prototipo3 from '../assets/stands/stand 3x3.png'

const STANDS = [
  {
    id: 1,
    img: prototipo1,
    medida: '2 × 2 m',
    area: '4 m²',
    precio: '400',
    recomendado: false,
  },
  {
    id: 2,
    img: prototipo2,
    medida: '3 × 2 m',
    area: '6 m²',
    precio: '600',
    recomendado: true,
  },
  {
    id: 3,
    img: prototipo3,
    medida: '3 × 3 m',
    area: '9 m²',
    precio: '800',
    recomendado: false,
  }
]

export default function InversionComercial() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  
  // Swipe and Drag logic
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    if (isPaused || isDragging) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % STANDS.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [isPaused, isDragging])

  const handleDragStart = (clientX: number) => {
    setIsPaused(true)
    setIsDragging(true)
    setTouchStart(clientX)
    setTouchEnd(0)
  }

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return
    setTouchEnd(clientX)
  }

  const handleDragEnd = () => {
    setIsPaused(false)
    setIsDragging(false)
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      setActiveIndex((prev) => (prev + 1) % STANDS.length)
    } else if (isRightSwipe) {
      setActiveIndex((prev) => (prev - 1 + STANDS.length) % STANDS.length)
    }
    
    setTouchStart(0)
    setTouchEnd(0)
  }

  return (
    <section className="s2-section" style={{ width: '100%', background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(6px)' }}>
      <div className="s2-container">
        
        {/* Header */}
        <div className="s2-section-header reveal">
          <span className="s2-eyebrow">Propuesta básica</span>
          <h2 className="s2-title s2-title--lg s2-mb-16">
            Zona expo comercial <span className="s2-title--gradient-blue">"general"</span>
          </h2>
          <div className="s2-divider" />
        </div>

        {/* Carousel */}
        <div 
          className={`inv-carousel-container ${isDragging ? 'inv-dragging' : ''}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => { setIsPaused(false); setIsDragging(false); }}
          onTouchStart={(e) => handleDragStart(e.targetTouches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.targetTouches[0].clientX)}
          onTouchEnd={handleDragEnd}
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
        >
          <div 
            className="inv-carousel-track" 
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {STANDS.map((stand, i) => (
              <div key={stand.id} className="inv-carousel-slide">
                <div className={`inv-card ${stand.recomendado ? 'inv-card--highlight' : ''}`}>
                  {stand.recomendado && (
                    <div className="inv-badge">Recomendado</div>
                  )}
                  <div className="inv-card-visual">
                    <div className="inv-img-wrapper">
                      <img src={stand.img} alt={`Stand ${stand.medida}`} loading="lazy" />
                    </div>
                    <div className="inv-dimensions">
                      <div className="inv-dim-x"></div>
                      <div className="inv-dim-y"></div>
                    </div>
                  </div>

                  <div className="inv-card-content">
                    <div className="inv-card-measurements">
                      <span className="inv-medida">{stand.medida}</span>
                      <span className="inv-area">{stand.area}</span>
                    </div>

                    <div className="inv-card-price">
                      <span className="inv-currency">USD</span>
                      <span className="inv-amount">{stand.precio}</span>
                    </div>
                  </div>

                  <div className="inv-card-footer">
                    <p>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', color: '#005bd8' }}>
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      Incluye tabiquería y tomacorriente
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="inv-carousel-dots">
            {STANDS.map((_, i) => (
              <button 
                key={i} 
                className={`inv-dot ${i === activeIndex && !isDragging && !isPaused ? 'inv-dot--active' : i === activeIndex ? 'inv-dot--selected' : ''}`}
                onClick={() => setActiveIndex(i)}
                aria-label={`Ir a stand ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="inv-action-wrap reveal">
          <button className="inv-primary-btn">
            Adquirir un paquete general
          </button>
        </div>
      </div>
    </section>
  )
}
