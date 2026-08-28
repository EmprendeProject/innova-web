import '../styles/LogoMarquee.css'

import logoAlnatural    from '../assets/logos de empresas/LOGO ALNATURAL-CF.png'
import logoDcBelleza    from '../assets/logos de empresas/LOGO DC BELLEZA VIP-CF.png'
import logoDrJose       from '../assets/logos de empresas/LOGO DR JOSE LUIS BLANCO-CF.png'
import logoFigurasRed   from '../assets/logos de empresas/LOGO FIGURAS RED-CF.png'
import logoInterlight   from '../assets/logos de empresas/LOGO INTERLIGHT-CF.png'
import logoKiripharma   from '../assets/logos de empresas/LOGO KIRIPHARMA-CF.png'
import logoSmarttea     from '../assets/logos de empresas/smarttea.png'

const LOGOS = [
  { src: logoAlnatural,  alt: 'Al Natural' },
  { src: logoDcBelleza,  alt: 'DC Belleza VIP' },
  { src: logoDrJose,     alt: 'Dr. Jose Luis Blanco' },
  { src: logoFigurasRed, alt: 'Figuras Red' },
  { src: logoInterlight, alt: 'Interlight' },
  { src: logoKiripharma, alt: 'Kiripharma' },
  { src: logoSmarttea,   alt: 'Smarttea' },
]

export default function LogoMarquee() {
  // Triple the logos for a seamless infinite scroll
  const track = [...LOGOS, ...LOGOS, ...LOGOS]

  return (
    <section className="s2-marquee-section">
      <h3 className="s2-marquee-title reveal">
        MARCAS QUE YA HAN CONFIADO EN INNOVA 360
      </h3>

      <div className="s2-marquee-container reveal" data-delay="100">
        <div className="s2-marquee-track">
          {track.map((logo, index) => (
            <div className="s2-marquee-item" key={index}>
              <img src={logo.src} alt={logo.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
