import '../App.css'
import fondoImg from '../assets/elementos graficos/fondo.png'
import tituloImg from '../assets/entradas/titulo entradas.png'
import caracteristicasImg from '../assets/entradas/caracteristicas iconos.png'
import ponentesImg from '../assets/entradas/ponentes.png'
import adquiereImg from '../assets/entradas/adquiere tu entrada.png'
import entradaExpoferiaImg from '../assets/entradas/Entrada expoferia.png'
import entradaVipImg from '../assets/entradas/Entrada vip.png'
import entradaDiamanteImg from '../assets/entradas/Entrada diamante.png'
import quienParticipa1 from '../assets/entradas/quien participa 1.PNG'
import quienParticipa2 from '../assets/entradas/quien participa 2.PNG'

const WHATSAPP = '+584228638329'

function Entradas() {
  const wa = (msg: string) =>
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`

  const btnText = 'Hola! Me interesa comprar entradas para el evento Innova 360 · Expo Congreso Internacional Estética y Bienestar 2026. ¿Me puedes dar más información?'

  return (
    <div className="page" style={{ backgroundImage: `url(${fondoImg})` }}>
      <div className="page-inner" style={{ minHeight: '100vh', justifyContent: 'center' }}>
        
        {/* Title */}
        <img
          src={tituloImg}
          alt="Compra de Entradas"
          className="titular-img animate-fade-down"
          style={{ marginBottom: '1.5rem', marginTop: '2rem' }}
        />

        {/* Video Embed */}
        <div 
          className="animate-fade-up" 
          style={{ 
            width: '100%', 
            maxWidth: '360px', 
            aspectRatio: '9/16', 
            marginBottom: '2rem',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
            animationDelay: '0.3s'
          }}
        >
          <iframe 
            src="https://drive.google.com/file/d/1H3zHpxZygGmeAWA6jLsHCwYNA2YmAZMb/preview" 
            width="100%" 
            height="100%" 
            allow="autoplay"
            style={{ border: 'none' }}
            title="Video Promocional Innova 360"
          ></iframe>
        </div>

        {/* CTA Button — debajo del video */}
        <div className="buttons-group animate-fade-up" style={{ animationDelay: '0.45s' }}>
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
        <div className="quien-participa-group animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <img
            src={quienParticipa1}
            alt="¿Quién participa? - Parte 1"
            className="quien-participa-img"
          />
          <img
            src={quienParticipa2}
            alt="¿Quién participa? - Parte 2"
            className="quien-participa-img"
          />
        </div>

        {/* Características iconos — debajo del botón */}
        <img
          src={caracteristicasImg}
          alt="Características del evento"
          className="animate-fade-up"
          style={{
            width: '100%',
            maxWidth: '400px',
            height: 'auto',
            display: 'block',
            objectFit: 'contain',
            marginBottom: '2rem',
            animationDelay: '0.55s',
          }}
        />

        {/* Ponentes — debajo de características */}
        <img
          src={ponentesImg}
          alt="Ponentes Confirmados"
          className="animate-fade-up"
          style={{
            width: '100%',
            maxWidth: '400px',
            height: 'auto',
            display: 'block',
            objectFit: 'contain',
            marginBottom: '2rem',
            animationDelay: '0.6s',
          }}
        />

        {/* Tickets */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem', marginBottom: '2rem', width: '100%', maxWidth: '400px' }}>

          {/* Adquiere tu entrada — encima de Expoferia */}
          <img
            src={adquiereImg}
            alt="Adquiere tu entrada"
            className="animate-fade-up"
            style={{ width: '100%', objectFit: 'contain', animationDelay: '0.65s' }}
          />

          {/* Entrada Expoferia + botón */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <img
              src={entradaExpoferiaImg}
              alt="Entrada Expoferia"
              className="animate-fade-up"
              style={{ width: '100%', objectFit: 'contain', animationDelay: '0.7s' }}
            />
            <a
              href={wa('Hola! Me interesa comprar la Entrada Expoferia para el evento Innova 360 · Expo Congreso Internacional Estética y Bienestar 2026. ¿Me puedes dar más información?')}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--filled animate-fade-up"
              style={{ animationDelay: '0.75s' }}
            >
              COMPRAR EXPOFERIA
            </a>
          </div>

          {/* Entrada VIP + botón */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <img
              src={entradaVipImg}
              alt="Entrada VIP"
              className="animate-fade-up"
              style={{ width: '100%', objectFit: 'contain', animationDelay: '0.8s' }}
            />
            <a
              href={wa('Hola! Me interesa comprar la Entrada VIP para el evento Innova 360 · Expo Congreso Internacional Estética y Bienestar 2026. ¿Me puedes dar más información?')}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--filled animate-fade-up"
              style={{ animationDelay: '0.85s' }}
            >
              COMPRAR VIP
            </a>
          </div>

          {/* Entrada Diamante + botón */}
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <img
              src={entradaDiamanteImg}
              alt="Entrada Diamante"
              className="animate-fade-up"
              style={{ width: '100%', objectFit: 'contain', animationDelay: '0.9s' }}
            />
            <a
              href={wa('Hola! Me interesa comprar la Entrada Diamante para el evento Innova 360 · Expo Congreso Internacional Estética y Bienestar 2026. ¿Me puedes dar más información?')}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--filled animate-fade-up"
              style={{ animationDelay: '0.95s' }}
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
