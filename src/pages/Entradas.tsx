import '../App.css'
import { useReveal } from '../hooks/useReveal'

import fondoImg from '../assets/elementos graficos/fondo.webp'
import tituloImg from '../assets/entradas/titulo entradas.webp'
import caracteristicasImg from '../assets/entradas/caracteristicas iconos.webp'
import ponentesImg from '../assets/entradas/ponentes.webp'
import adquiereImg from '../assets/entradas/adquiere tu entrada.webp'
import entradaExpoferiaImg from '../assets/entradas/Entrada expo feria.png'
import entradaVipImg from '../assets/entradas/Entrada vip.png'
import entradaDiamanteImg from '../assets/entradas/Entrada diamante.png'
import quienParticipa1 from '../assets/entradas/quien participa 1.webp'
import quienParticipa2 from '../assets/entradas/quien participa 2.webp'

const WHATSAPP = '+584228638329'

function Entradas() {
  // Activa el scroll-reveal para todos los .reveal* de esta página
  useReveal()

  const wa = (msg: string) =>
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`

  const btnText = 'Hola! Me interesa comprar entradas para el evento Innova 360 · Expo Congreso Internacional Estética y Bienestar 2026. ¿Me puedes dar más información?'

  return (
    <div className="page" style={{ backgroundImage: `url(${fondoImg})` }}>
      <div className="page-inner" style={{ minHeight: '100vh', justifyContent: 'center' }}>

        {/* Title — animación de carga inmediata */}
        <img
          src={tituloImg}
          alt="Compra de Entradas"
          className="titular-img animate-fade-down"
          style={{ marginBottom: '1.5rem', marginTop: '2rem' }}
        />

        {/* VSL Video Embed */}
        <div
          className="animate-fade-up"
          style={{
            width: '100%',
            maxWidth: '420px',
            marginBottom: '2rem',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
            animationDelay: '0.2s',
          }}
        >
          <vsl-player data-id="d8873fce-7475-4dcd-900b-8785b4714f6a" />
        </div>

        {/* CTA Button principal */}
        <div className="buttons-group reveal" data-delay="80">
          <a
            href={wa(btnText)}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn cta-btn--filled"
          >
            COMPRAR ENTRADAS AHORA
          </a>
        </div>

        {/* ── QUIÉN PARTICIPA ── */}
        <div className="quien-participa-group reveal" data-delay="0">
          <img
            src={quienParticipa1}
            alt="¿Quién participa? - Parte 1"
            className="quien-participa-img"
            loading="lazy"
          />
          <img
            src={quienParticipa2}
            alt="¿Quién participa? - Parte 2"
            className="quien-participa-img"
            loading="lazy"
          />
        </div>

        {/* Características iconos */}
        <img
          src={caracteristicasImg}
          alt="Características del evento"
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

        {/* Ponentes */}
        <img
          src={ponentesImg}
          alt="Ponentes Confirmados"
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

        {/* Tickets */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', marginBottom: '2rem', width: '100%', maxWidth: '400px' }}>

          {/* Adquiere tu entrada */}
          <img
            src={adquiereImg}
            alt="Adquiere tu entrada"
            className="reveal"
            data-delay="0"
            style={{ width: '100%', objectFit: 'contain' }}
            loading="lazy"
          />

          {/* Entrada Expoferia + botón */}
          <div
            className="reveal-scale"
            data-delay="0"
            style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}
          >
            <img
              src={entradaExpoferiaImg}
              alt="Entrada Expoferia"
              style={{ width: '100%', objectFit: 'contain' }}
              loading="lazy"
            />
            <a
              href={wa('Hola! Me interesa comprar la Entrada Expoferia para el evento Innova 360 · Expo Congreso Internacional Estética y Bienestar 2026. ¿Me puedes dar más información?')}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--filled"
            >
              COMPRAR EXPOFERIA
            </a>
          </div>

          {/* Entrada VIP + botón */}
          <div
            className="reveal-scale"
            data-delay="80"
            style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}
          >
            <img
              src={entradaVipImg}
              alt="Entrada VIP"
              style={{ width: '100%', objectFit: 'contain' }}
              loading="lazy"
            />
            <a
              href={wa('Hola! Me interesa comprar la Entrada VIP para el evento Innova 360 · Expo Congreso Internacional Estética y Bienestar 2026. ¿Me puedes dar más información?')}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--silver"
            >
              COMPRAR VIP
            </a>
          </div>

          {/* Entrada Diamante + botón */}
          <div
            className="reveal-scale"
            data-delay="160"
            style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}
          >
            <img
              src={entradaDiamanteImg}
              alt="Entrada Diamante"
              style={{ width: '100%', objectFit: 'contain' }}
              loading="lazy"
            />
            <a
              href={wa('Hola! Me interesa comprar la Entrada Diamante para el evento Innova 360 · Expo Congreso Internacional Estética y Bienestar 2026. ¿Me puedes dar más información?')}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--gold"
            >
              COMPRAR DIAMANTE
            </a>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Entradas
