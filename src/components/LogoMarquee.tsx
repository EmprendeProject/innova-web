import '../styles/LogoMarquee.css'

import logo1 from '../assets/logos de empresas/2.png'
import logo2 from '../assets/logos de empresas/3.png'
import logo3 from '../assets/logos de empresas/4.png'
import logo4 from '../assets/logos de empresas/smarttea.png'

const LOGOS = [logo1, logo2, logo3, logo4]

export default function LogoMarquee() {
  return (
    <section className="s2-marquee-section">
      <h3 className="s2-marquee-title reveal">
        MARCAS QUE YA HAN CONFIADO EN INNOVA 360
      </h3>
      
      <div className="s2-marquee-container reveal" data-delay="100">
        <div className="s2-marquee-track">
          {/* Render two sets for infinite scroll loop effect */}
          {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, index) => (
            <div className="s2-marquee-item" key={index}>
              <img src={logo} alt={`Logo aliado ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
