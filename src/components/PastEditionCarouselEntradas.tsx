import { useRef, useState, useEffect } from 'react'
import '../styles/PastEditionCarousel.css'
import img1 from '../assets/primera edicion/1.png'
import img2 from '../assets/primera edicion/2.png'
import img3 from '../assets/primera edicion/3.png'
import img4 from '../assets/primera edicion/4.png'
import img5 from '../assets/primera edicion/5.png'

const images = [img1, img2, img3, img4, img5]

function PastEditionCarouselEntradas() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollLeft = carouselRef.current.scrollLeft
        const width = carouselRef.current.clientWidth
        const index = Math.round(scrollLeft / width)
        setActiveIndex(index)
      }
    }

    const currentRef = carouselRef.current
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  const scrollTo = (index: number) => {
    if (carouselRef.current) {
      const width = carouselRef.current.clientWidth
      carouselRef.current.scrollTo({
        left: width * index,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="past-edition-section reveal" data-delay="40" style={{ padding: '0', background: 'transparent' }}>
      <div className="carousel-container" style={{ maxWidth: '900px', margin: '0 auto', border: '4px solid #fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
        <div className="carousel-track" ref={carouselRef}>
          {images.map((src, i) => (
            <div className="carousel-slide" key={i}>
              <img src={src} alt={`Edición pasada ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
        <div className="carousel-indicators">
          {images.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === activeIndex ? 'active' : ''}`}
              onClick={() => scrollTo(i)}
              aria-label={`Ir a la imagen ${i + 1}`}
              style={{ background: i === activeIndex ? '#1d4ed8' : 'rgba(29,78,216,0.3)' }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PastEditionCarouselEntradas
