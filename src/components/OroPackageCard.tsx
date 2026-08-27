import { Box, Eye, FileText, Megaphone, Award, User, CheckCircle2 } from 'lucide-react'
import './OroPackageCard.css'
import stand1 from '../assets/stands/stand 1.png'

export default function OroPackageCard() {
  return (
    <div className="oro-package-container reveal">
      {/* HEADER ORO */}
      <div className="oro-header">
        <h2 className="oro-title">ORO</h2>
        <h3 className="oro-subtitle">PRESENCIA QUE ABRE OPORTUNIDADES</h3>
        <p className="oro-description">
          Para marcas que quieren integrarse a <strong>INNOVA 360</strong>, ganar visibilidad y conectar con una audiencia profesional especializada.
        </p>
      </div>

      <div className="oro-grid">
        {/* COLUMNA IZQUIERDA: BENEFICIOS */}
        <div className="oro-benefits-column">
          
          <div className="oro-alianza-box">
            <div className="oro-alianza-header">
              <h4>TU ALIANZA INCLUYE</h4>
            </div>
            <ul className="oro-alianza-list">
              <li>
                <div className="oro-icon-box"><Box size={24} /></div>
                <div className="oro-text-box">
                  <h5>ESPACIO DE MARCA</h5>
                  <p>Stand 2 x 2 m dentro de la zona destinada a patrocinantes.</p>
                </div>
              </li>
              <li>
                <div className="oro-icon-box"><Eye size={24} /></div>
                <div className="oro-text-box">
                  <h5>VISIBILIDAD EN EL EVENTO</h5>
                  <p>Presencia de marca de acuerdo con los espacios establecidos para esta categoría.</p>
                </div>
              </li>
              <li>
                <div className="oro-icon-box"><FileText size={24} /></div>
                <div className="oro-text-box">
                  <h5>MATERIALES OFICIALES</h5>
                  <p>Inclusión de marca en materiales seleccionados de INNOVA 360.</p>
                </div>
              </li>
              <li>
                <div className="oro-icon-box"><Megaphone size={24} /></div>
                <div className="oro-text-box">
                  <h5>PRESENCIA DIGITAL</h5>
                  <p>Difusión a través de los canales digitales contemplados para el patrocinio.</p>
                </div>
              </li>
              <li>
                <div className="oro-icon-box"><Award size={24} /></div>
                <div className="oro-text-box">
                  <h5>RECONOCIMIENTO COMO ALIADO</h5>
                  <p>Inclusión en el listado oficial de marcas aliadas.</p>
                </div>
              </li>
              <li>
                <div className="oro-icon-box"><User size={24} /></div>
                <div className="oro-text-box">
                  <h5>ACCESO VIP</h5>
                  <p>Hasta 2 credenciales VIP.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="oro-prototipo-box">
            <div className="oro-prototipo-header">
              <h4>INCLUYE PROTOTIPO 1</h4>
            </div>
            <div className="oro-prototipo-content">
              <h5>STAND 2x2 MODALIDAD ALQUILER</h5>
              <ul className="oro-prototipo-list">
                <li><CheckCircle2 size={16} className="check-icon" /> Altura de cada pared 2,44 metros.</li>
                <li><CheckCircle2 size={16} className="check-icon" /> Ancho de cada pared 2,00 metros mesa tipo counter.</li>
                <li><CheckCircle2 size={16} className="check-icon" /> Dos sillas.</li>
                <li><CheckCircle2 size={16} className="check-icon" /> 1 Smart TV 43".</li>
                <li><CheckCircle2 size={16} className="check-icon" /> Iluminación LED.</li>
                <li><CheckCircle2 size={16} className="check-icon" /> Toma corriente 110V.</li>
                <li><CheckCircle2 size={16} className="check-icon" /> 2 credenciales para identificación del personal que representa la marca.</li>
                <li><CheckCircle2 size={16} className="check-icon" /> 2 pases de cortesía con previo registro de asistencia.</li>
              </ul>
            </div>
          </div>

        </div>

        {/* COLUMNA DERECHA: VISUAL Y PRECIO */}
        <div className="oro-visual-column">
          <div className="oro-badge-circle">
            <span>ESPACIO</span>
            <strong>2x2 m</strong>
            <small>DENTRO DE LA ZONA DESTINADA A PATROCINANTES</small>
          </div>
          
          <img src={stand1} alt="Render Stand ORO" className="oro-stand-image" loading="lazy" />

          <div className="oro-investment-box">
            <span className="oro-investment-badge">INVERSIÓN</span>
            <h2 className="oro-investment-price">USD 1.500</h2>
          </div>

          <div className="oro-cta-section">
            <div className="oro-cta-text">
              <p>HAZTE PRESENTE.</p>
              <p>CONECTA.</p>
              <p>EMPIEZA A CONSTRUIR POSICIÓN.</p>
            </div>
            <a
              href="https://wa.me/584228638329?text=Hola,%20quiero%20reservar%20el%20Paquete%20ORO%20en%20Innova%20360"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--filled oro-cta-btn"
            >
              RESERVAR PAQUETE ORO
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
