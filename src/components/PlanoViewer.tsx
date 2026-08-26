import { useState } from 'react'
import planoImg from '../assets/elementos graficos/plano.png'
import '../styles/PlanoViewer.css'

function PlanoViewer() {
  const [isOpen, setIsOpen] = useState(false)

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation()
    const link = document.createElement('a')
    link.href = planoImg
    link.download = 'plano-innova-360.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      {/* Thumbnail */}
      <div className="plano-container reveal" data-delay="80">
        <img
          src={planoImg}
          alt="Plano del evento (Click para ampliar)"
          className="plano-thumbnail"
          onClick={() => setIsOpen(true)}
          loading="lazy"
        />
        <div className="plano-hint">Haz click para ampliar el plano</div>
        <button className="plano-download-btn-small" onClick={handleDownload}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Descargar Plano
        </button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="plano-modal" onClick={() => setIsOpen(false)}>
          <button className="plano-close-btn" onClick={() => setIsOpen(false)}>
            &times;
          </button>
          
          <div className="plano-modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={planoImg} alt="Plano Ampliado" className="plano-fullscreen-img" />
            
            <button className="plano-download-btn-large" onClick={handleDownload}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Descargar Imagen
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default PlanoViewer
