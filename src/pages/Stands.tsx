import '../App.css'
import { useReveal } from '../hooks/useReveal'

import fondoImg from '../assets/elementos graficos/fondo.webp'
import queEsInnova from '../assets/stands/que es innova.png'
import caracteristicasIconos from '../assets/entradas/caracteristicas iconos.webp'
import ellosYaConfiaron from '../assets/stands/ellos ya confiaron.png'
import stand1 from '../assets/stands/stand 1.png'
import stand2 from '../assets/stands/stands 2.png'
import stand3 from '../assets/stands/stand 3.png'

function Stands() {
  useReveal()

  return (
    <div className="page" style={{ backgroundImage: `url(${fondoImg})` }}>
      <div className="page-inner" style={{ minHeight: '100vh', justifyContent: 'center' }}>

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

        <img
          src={caracteristicasIconos}
          alt="Características"
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
            marginBottom: '2rem',
          }}
          loading="lazy"
        />

        <img
          src={stand2}
          alt="Stand 2"
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

        <img
          src={stand3}
          alt="Stand 3"
          className="reveal"
          data-delay="160"
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

      </div>
    </div>
  )
}

export default Stands
