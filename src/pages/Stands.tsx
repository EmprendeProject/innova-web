import '../App.css'
import { useReveal } from '../hooks/useReveal'
import Faq from '../components/Faq'
// import Footer from '../components/Footer'
import PastEditionCarousel from '../components/PastEditionCarousel'
import PlanoViewer from '../components/PlanoViewer'
import WhyExhibit from '../components/WhyExhibit'
import Countdown from '../components/Countdown'

import fondoImg from '../assets/elementos graficos/fondo.webp'
import tituloStand from '../assets/stands/titulo adquiere tu stand.png'
import portadaStands from '../assets/stands/portada de stands.png'
import ubicacion2 from '../assets/elementos graficos/ubicación 2.png'
import caracteristicasIconos from '../assets/entradas/caracteristicas iconos.webp'
import stand1 from '../assets/stands/stand 1.png'
import stand2 from '../assets/stands/stands 2.png'
import stand3 from '../assets/stands/stand 3.png'

function Stands() {
  useReveal()

  return (
    <div className="page" style={{ backgroundImage: `url(${fondoImg})`, paddingBottom: '80px' }}>
      <div className="page-inner" style={{ minHeight: '100vh', justifyContent: 'center' }}>

        <img
          src={tituloStand}
          alt="Adquiere tu stand"
          className="reveal"
          data-delay="0"
          style={{
            width: '100%',
            maxWidth: '400px',
            height: 'auto',
            display: 'block',
            objectFit: 'contain',
            marginBottom: '2rem',
          }}
          loading="eager"
        />

        <img
          src={portadaStands}
          alt="Portada de Stands"
          className="reveal"
          data-delay="20"
          style={{
            width: '100%',
            maxWidth: '500px',
            height: 'auto',
            display: 'block',
            objectFit: 'contain',
            marginBottom: '2rem',
            borderRadius: '16px',
            boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
          }}
          loading="eager"
        />

        <Countdown targetDate="2026-11-19T08:00:00" />

        <div className="buttons-group animate-fade-up" style={{ maxWidth: '400px', marginBottom: '3rem' }}>
          <a
            href="https://wa.me/584228638329?text=Hola,%20quiero%20información%20sobre%20los%20stands%20en%20Innova%20360"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn cta-btn--filled"
          >
            RESERVAR MI STAND AHORA
          </a>
        </div>

        <img
          src={caracteristicasIconos}
          alt="Características"
          className="reveal"
          data-delay="20"
          style={{
            width: '100%',
            maxWidth: '400px',
            height: 'auto',
            display: 'block',
            objectFit: 'contain',
            marginBottom: '2rem',
          }}
          loading="lazy"
        />

        {/* Oculto temporalmente:
        <img
          src={queEsInnova}
          alt="¿Qué es Innova?"
          className="reveal"
          data-delay="0"
          style={{
            width: '100%',
            maxWidth: '400px',
            height: 'auto',
            display: 'block',
            objectFit: 'contain',
            marginBottom: '2rem',
          }}
          loading="lazy"
        />
        */}

        {/* ── EDICIÓN PASADA CAROUSEL ── */}
        <PastEditionCarousel />

        {/* ── POR QUÉ EXPONER ── */}
        <WhyExhibit />

        <img
          src={ubicacion2}
          alt="Ubicación"
          className="reveal"
          data-delay="40"
          style={{
            width: '100%',
            maxWidth: '400px',
            height: 'auto',
            display: 'block',
            objectFit: 'contain',
            marginBottom: '2rem',
          }}
          loading="lazy"
        />

        <h2 className="why-exhibit-title reveal" style={{ marginBottom: '1rem', width: '100%', textAlign: 'center' }}>
          PLANO DEL EVENTO
        </h2>

        <PlanoViewer />

        {/* Oculto temporalmente:
        <img
          src={ellosYaConfiaron}
          alt="Ellos ya confiaron"
          className="reveal"
          data-delay="80"
          style={{
            width: '100%',
            maxWidth: '400px',
            height: 'auto',
            display: 'block',
            objectFit: 'contain',
            marginBottom: '2rem',
          }}
          loading="lazy"
        />
        */}

        <img
          src={stand1}
          alt="Stand 1"
          className="reveal"
          data-delay="0"
          style={{
            width: '100%',
            maxWidth: '400px',
            height: 'auto',
            display: 'block',
            objectFit: 'contain',
            marginBottom: '1rem',
          }}
          loading="lazy"
        />
        <div className="buttons-group reveal" data-delay="100" style={{ maxWidth: '400px', marginBottom: '3rem' }}>
          <a
            href="https://wa.me/584228638329?text=Hola,%20quiero%20información%20sobre%20el%20Stand%201%20en%20Innova%20360"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn cta-btn--filled"
          >
            ME INTERESA ESTE STAND
          </a>
        </div>

        <img
          src={stand2}
          alt="Stand 2"
          className="reveal"
          data-delay="0"
          style={{
            width: '100%',
            maxWidth: '400px',
            height: 'auto',
            display: 'block',
            objectFit: 'contain',
            marginBottom: '1rem',
          }}
          loading="lazy"
        />
        <div className="buttons-group reveal" data-delay="100" style={{ maxWidth: '400px', marginBottom: '3rem' }}>
          <a
            href="https://wa.me/584228638329?text=Hola,%20quiero%20información%20sobre%20el%20Stand%202%20en%20Innova%20360"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn cta-btn--filled"
          >
            ME INTERESA ESTE STAND
          </a>
        </div>

        <img
          src={stand3}
          alt="Stand 3"
          className="reveal"
          data-delay="0"
          style={{
            width: '100%',
            maxWidth: '400px',
            height: 'auto',
            display: 'block',
            objectFit: 'contain',
            marginBottom: '1rem',
          }}
          loading="lazy"
        />
        <div className="buttons-group reveal" data-delay="100" style={{ maxWidth: '400px', marginBottom: '4rem' }}>
          <a
            href="https://wa.me/584228638329?text=Hola,%20quiero%20información%20sobre%20el%20Stand%203%20en%20Innova%20360"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn cta-btn--filled"
          >
            RESERVAR ESTE STAND
          </a>
        </div>

        {/* ── FAQ ── */}
        <Faq />

      </div>

      {/* ── FOOTER ── */}
      {/* <Footer /> */}
    </div>
  )
}

export default Stands
