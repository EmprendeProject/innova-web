import React, { useState, useEffect } from 'react'
import '../App.css'
import '../styles/Entradas2.css'
import logoImg from '../assets/elementos graficos/logo innova 360.webp'

export default function Entradas2() {
  const [activeTab, setActiveTab] = useState('19nov')
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  // Intersection Observer for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('e2-active')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.e2-reveal')
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  const scrollToTickets = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const ticketsSection = document.getElementById('entradas');
    if (ticketsSection) {
      ticketsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="e2-page">
      
      {/* =========================================
          HERO
          ========================================= */}
      <section className="e2-hero">
        <div className="e2-hero-grid" aria-hidden="true"></div>
        <div className="e2-hero-content e2-reveal">
          
          <div className="e2-hero-badge">
            <span className="e2-hero-badge-dot" />
            21 NOV · EXPERIENCIA INNOVA · FACIAL 360
          </div>
          
          <img src={logoImg} alt="INNOVA 360" className="e2-hero-logo" loading="eager" />
          
          <p className="e2-hero-tagline">
            CONGRESO INTERNACIONAL
          </p>
          
          <h1 className="e2-hero-main-title">
            DE POSQUIRÚRGICO,<br/>ESTÉTICA Y BIENESTAR
          </h1>
          
          <p className="e2-hero-subheadline">
            “Tres días para ampliar tu manera de ver el sector.”
          </p>
          
          <div className="e2-hero-dates-clean">
            <div className="e2-date-clean e2-date-clean--full">
              <span className="e2-date-clean__day">19 · 20 Nov 2026</span>
              <span className="e2-date-clean__label">Congreso Internacional</span>
            </div>
            <div className="e2-date-clean-row">
              <div className="e2-date-clean">
                <span className="e2-date-clean__day">21 Nov 2026</span>
                <span className="e2-date-clean__label">Facial 360</span>
              </div>
              <div className="e2-date-clean">
                <span className="e2-date-clean__day">Caracas</span>
                <span className="e2-date-clean__label">Venezuela</span>
              </div>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#entradas" onClick={scrollToTickets} className="e2-btn e2-btn--primary">Elige tu entrada</a>
            <a href="#experiencia" className="e2-btn e2-btn--outline">Conoce la experiencia</a>
          </div>
        </div>
      </section>

      {/* =========================================
          MUCHO MÁS QUE UN CONGRESO
          ========================================= */}
      <section id="experiencia" className="e2-section">
        <div className="e2-container">
          <div className="e2-reveal" style={{ textAlign: 'center' }}>
            <span className="e2-eyebrow">La Experiencia 360°</span>
            <h2 className="e2-title e2-title--lg" style={{ marginBottom: '16px' }}>
              Mucho más que <span className="e2-title--gradient-blue">asistir a un congreso</span>
            </h2>
            <div className="e2-divider" />
            <p className="e2-body e2-body--center" style={{ maxWidth: '600px', margin: '0 auto' }}>
              INNOVA 360 integra diferentes dimensiones para construir una experiencia profesional más completa.
            </p>
          </div>
          
          <div className="e2-exp-grid" style={{ marginTop: '48px' }}>
            {[
              { title: 'Conocimiento', desc: 'Conferencias y contenidos seleccionados alrededor de las necesidades actuales del sector.', icon: '💡' },
              { title: 'Actualización', desc: 'Nuevas perspectivas, tendencias, metodologías y abordajes profesionales.', icon: '🔄' },
              { title: 'Innovación', desc: 'Productos, tecnologías y soluciones presentes en INNOVA Expo.', icon: '🚀' },
              { title: 'Conexión', desc: 'Profesionales, expertos, empresas y aliados reunidos en un mismo escenario.', icon: '🤝' },
              { title: 'Experiencia', desc: 'Momentos diseñados para llevar el aprendizaje y el relacionamiento más allá del auditorio.', icon: '✨' },
            ].map((item, idx) => (
              <div key={idx} className="e2-exp-card e2-reveal" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{item.icon}</div>
                <h3 className="e2-exp-card__name">{item.title}</h3>
                <p className="e2-body" style={{ fontSize: '14px' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          ENTRADAS (TIERS)
          ========================================= */}
      <section id="entradas" className="e2-section" style={{ background: 'rgba(240,245,255,0.85)' }}>
        <div className="e2-container">
          <div className="e2-reveal" style={{ textAlign: 'center' }}>
            <span className="e2-eyebrow">Encuentra tu entrada</span>
            <h2 className="e2-title e2-title--lg" style={{ marginBottom: '16px' }}>
              Compara y elige cómo <span className="e2-title--gradient-diamond">quieres vivir INNOVA 360</span>
            </h2>
            <div className="e2-divider" />
          </div>
          
          <div className="e2-tickets-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginTop: '48px' }}>
            
            {/* INNOVA EXPO */}
            <div className="e2-tier-card e2-tier-card--expo e2-reveal">
              <div className="e2-tier-card__inner">
                <p className="e2-tier-label e2-tier-label--expo">EXPO</p>
                <p className="e2-tier-tagline">Descubre la experiencia comercial de INNOVA 360</p>
                <div className="e2-tier-price">
                  <span className="e2-tier-price__amount"><span className="e2-tier-price__currency">USD</span>20</span>
                </div>
                
                <div style={{ background: 'rgba(0,0,0,0.05)', padding: '8px', borderRadius: '8px', textAlign: 'center', fontSize: '12px', fontWeight: 700, marginBottom: '16px' }}>
                  19 + 20 NOVIEMBRE
                </div>
                
                <div style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444', padding: '12px', borderRadius: '8px', fontSize: '12px', fontWeight: 700, textAlign: 'center', marginBottom: '24px' }}>
                  NO INCLUYE ACCESO AL CONGRESO INTERNACIONAL
                </div>

                <ul className="e2-tier-benefits">
                  {[
                    'Acceso a foto de recuerdo en el backing del evento',
                    'Demostraciones en vivo · Tarima en zona Expo',
                    'Acceso a INNOVA Expo',
                    'Acceso al área de patrocinantes'
                  ].map((b, i) => (
                    <li key={i} className="e2-tier-benefit">
                      <span className="e2-tier-benefit__check e2-tier-benefit__check--expo">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <a href="#" className="e2-btn e2-btn--outline e2-btn--full" style={{ marginTop: 'auto' }}>Comprar INNOVA Expo</a>
              </div>
            </div>

            {/* VIP */}
            <div className="e2-tier-card e2-tier-card--vip e2-reveal" style={{ transitionDelay: '100ms' }}>
              <div className="e2-tier-card__inner">
                <p className="e2-tier-label e2-tier-label--vip">VIP</p>
                <p className="e2-tier-tagline">Vive el Congreso Internacional y amplía tu mirada profesional</p>
                <div className="e2-tier-price">
                  <span className="e2-tier-price__amount"><span className="e2-tier-price__currency">USD</span>350</span>
                </div>
                
                <div style={{ background: 'rgba(100, 116, 139, 0.1)', color: '#475569', padding: '8px', borderRadius: '8px', textAlign: 'center', fontSize: '12px', fontWeight: 700, marginBottom: '24px' }}>
                  19 + 20 NOVIEMBRE
                </div>

                <ul className="e2-tier-benefits">
                  {[
                    'Acceso a charlas y conferencias',
                    'Ubicación en salón · Zona VIP',
                    'Kit de anotaciones y Obsequio de asistencia',
                    'Networking con ponentes y aliados',
                    'Coffee Break y Estación de agua y café',
                    'Participación en sorteos, entrevistas y podcast',
                    'Memorias digitales y Certificado',
                    'Participación en cóctel de cierre',
                    'Todos los beneficios de INNOVA Expo'
                  ].map((b, i) => (
                    <li key={i} className="e2-tier-benefit">
                      <span className="e2-tier-benefit__check e2-tier-benefit__check--vip">✓</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <a href="#" className="e2-btn e2-btn--vip e2-btn--full" style={{ marginTop: 'auto' }}>Comprar VIP</a>
              </div>
            </div>

            {/* DIAMANTE */}
            <div className="e2-tier-card e2-tier-card--diamante e2-reveal" style={{ transitionDelay: '200ms' }}>
              <div className="e2-tier-card__inner">
                <p className="e2-tier-label e2-tier-label--diamante">DIAMANTE</p>
                <p className="e2-tier-tagline">Experiencia más completa. Vive los 3 días de INNOVA 360.</p>
                <div className="e2-tier-price">
                  <span className="e2-tier-price__amount"><span className="e2-tier-price__currency">USD</span>550</span>
                </div>
                
                <div style={{ background: 'rgba(2, 132, 199, 0.1)', color: '#0284c7', padding: '8px', borderRadius: '8px', textAlign: 'center', fontSize: '12px', fontWeight: 700, marginBottom: '16px' }}>
                  19 + 20 + 21 NOVIEMBRE
                </div>
                
                <p style={{ fontSize: '12px', fontWeight: 600, color: 'var(--e2-text-muted)', marginBottom: '16px' }}>
                  INCLUYE TODOS LOS BENEFICIOS DE LA ENTRADA VIP Y ADEMÁS:
                </p>

                <ul className="e2-tier-benefits">
                  {[
                    'Ubicación preferencial · Zona Diamante',
                    'Acceso a Experiencia INNOVA · Facial 360',
                    'Jornada académica exclusiva del 21 de noviembre'
                  ].map((b, i) => (
                    <li key={i} className="e2-tier-benefit">
                      <span className="e2-tier-benefit__check e2-tier-benefit__check--diamante">✓</span>
                      <strong style={{ color: '#0284c7' }}>{b}</strong>
                    </li>
                  ))}
                </ul>
                <a href="#" className="e2-btn e2-btn--diamond e2-btn--full" style={{ marginTop: 'auto' }}>Comprar Diamante</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          COMPARADOR
          ========================================= */}
      <section className="e2-section">
        <div className="e2-container">
          <div className="e2-reveal" style={{ textAlign: 'center' }}>
            <span className="e2-eyebrow">Comparativa</span>
            <h2 className="e2-title e2-title--lg" style={{ marginBottom: '32px' }}>Compara las entradas</h2>
          </div>

          <div className="e2-table-wrapper e2-reveal">
            <table className="e2-table">
              <thead>
                <tr>
                  <th>Beneficio</th>
                  <th>INNOVA EXPO</th>
                  <th>VIP</th>
                  <th className="col-diamante" style={{ color: '#0284c7' }}>DIAMANTE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>INNOVA Expo y Área de Patrocinantes</td>
                  <td><span style={{ color: '#64748b', fontWeight: 'bold' }}>✓</span></td>
                  <td><span style={{ color: '#64748b', fontWeight: 'bold' }}>✓</span></td>
                  <td className="col-diamante"><span style={{ color: '#0284c7', fontWeight: 'bold' }}>✓</span></td>
                </tr>
                <tr>
                  <td>Demostraciones en vivo (Tarima Expo)</td>
                  <td><span style={{ color: '#64748b', fontWeight: 'bold' }}>✓</span></td>
                  <td><span style={{ color: '#64748b', fontWeight: 'bold' }}>✓</span></td>
                  <td className="col-diamante"><span style={{ color: '#0284c7', fontWeight: 'bold' }}>✓</span></td>
                </tr>
                <tr>
                  <td>Congreso Internacional (Charlas y conferencias)</td>
                  <td><span style={{ color: '#cbd5e1' }}>✗</span></td>
                  <td><span style={{ color: '#64748b', fontWeight: 'bold' }}>✓</span></td>
                  <td className="col-diamante"><span style={{ color: '#0284c7', fontWeight: 'bold' }}>✓</span></td>
                </tr>
                <tr>
                  <td>Ubicación en salón</td>
                  <td><span style={{ color: '#cbd5e1' }}>-</span></td>
                  <td style={{ fontWeight: 600 }}>Zona VIP</td>
                  <td className="col-diamante" style={{ fontWeight: 600, color: '#0284c7' }}>Zona Diamante</td>
                </tr>
                <tr>
                  <td>Networking, Coffee Break, Sorteos</td>
                  <td><span style={{ color: '#cbd5e1' }}>✗</span></td>
                  <td><span style={{ color: '#64748b', fontWeight: 'bold' }}>✓</span></td>
                  <td className="col-diamante"><span style={{ color: '#0284c7', fontWeight: 'bold' }}>✓</span></td>
                </tr>
                <tr>
                  <td>Kit, Certificado y Memorias digitales</td>
                  <td><span style={{ color: '#cbd5e1' }}>✗</span></td>
                  <td><span style={{ color: '#64748b', fontWeight: 'bold' }}>✓</span></td>
                  <td className="col-diamante"><span style={{ color: '#0284c7', fontWeight: 'bold' }}>✓</span></td>
                </tr>
                <tr>
                  <td>Participación en cóctel de cierre</td>
                  <td><span style={{ color: '#cbd5e1' }}>✗</span></td>
                  <td><span style={{ color: '#64748b', fontWeight: 'bold' }}>✓</span></td>
                  <td className="col-diamante"><span style={{ color: '#0284c7', fontWeight: 'bold' }}>✓</span></td>
                </tr>
                <tr>
                  <td>Facial 360 (Jornada del 21 de noviembre)</td>
                  <td><span style={{ color: '#cbd5e1' }}>✗</span></td>
                  <td><span style={{ color: '#cbd5e1' }}>✗</span></td>
                  <td className="col-diamante"><span style={{ color: '#0284c7', fontWeight: 'bold' }}>✓</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* =========================================
          FACIAL 360
          ========================================= */}
      <section className="e2-section e2-facial e2-section--dark">
        <div className="e2-container">
          <div className="e2-facial-content e2-reveal">
            <span className="e2-eyebrow" style={{ color: '#38bdf8' }}>21 NOVIEMBRE</span>
            <h2 className="e2-title e2-title--lg" style={{ marginBottom: '16px' }}>
              Experiencia Innova<br/>
              <span className="e2-title--gradient-diamond">Facial 360</span>
            </h2>
            <p className="e2-body" style={{ color: '#cbd5e1', fontSize: '18px' }}>Una experiencia premium más allá del congreso.</p>
            
            <p className="e2-body" style={{ marginTop: '24px', color: '#94a3b8' }}>
              El 21 de noviembre, INNOVA 360 continúa a través de una experiencia académica exclusiva diseñada para llevar el aprendizaje a un formato más cercano, práctico y especializado.
              <br/><br/>
              Una jornada con aforo y acceso diferenciados, dirigida a los asistentes con Entrada Diamante.
            </p>

            <div className="e2-facial-grid">
              <div className="e2-facial-item">Ciencia</div>
              <div className="e2-facial-item">Tecnología</div>
              <div className="e2-facial-item">Experiencia</div>
              <div className="e2-facial-item">Personalización</div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '32px' }}>
              <span style={{ fontSize: '18px', fontWeight: 700 }}>Conocimiento más cerca</span>
              <span style={{ fontSize: '18px', fontWeight: 700 }}>Experiencias más profundas</span>
              <span style={{ fontSize: '18px', fontWeight: 700 }}>Conexiones más valiosas</span>
            </div>

            <a href="#entradas" onClick={scrollToTickets} className="e2-btn e2-btn--diamond">Quiero vivir Facial 360</a>
            <p style={{ marginTop: '16px', fontSize: '12px', color: '#64748b' }}>* Disponible exclusivamente con Entrada Diamante.</p>
          </div>
        </div>
      </section>

      {/* =========================================
          PROGRAMA
          ========================================= */}
      <section className="e2-section">
        <div className="e2-container">
          <div className="e2-reveal" style={{ textAlign: 'center' }}>
            <span className="e2-eyebrow">Programa</span>
            <h2 className="e2-title e2-title--lg">Dos días para <span className="e2-title--gradient-blue">ampliar la mirada</span></h2>
          </div>

          <div className="e2-tabs e2-reveal">
            <button className={`e2-tab-btn ${activeTab === '19nov' ? 'active' : ''}`} onClick={() => setActiveTab('19nov')}>19 NOV</button>
            <button className={`e2-tab-btn ${activeTab === '20nov' ? 'active' : ''}`} onClick={() => setActiveTab('20nov')}>20 NOV</button>
            <button className={`e2-tab-btn ${activeTab === '21nov' ? 'active' : ''}`} onClick={() => setActiveTab('21nov')}>21 NOV · FACIAL 360</button>
          </div>

          <div className="e2-reveal" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {activeTab === '19nov' && (
              <>
                <h3 style={{ textAlign: 'center', marginBottom: '24px', fontFamily: 'Barlow Condensed', fontSize: '24px', fontWeight: 800, textTransform: 'uppercase' }}>RECUPERACIÓN, BIENESTAR Y ABORDAJE INTEGRAL POSQUIRÚRGICO</h3>
                <div className="e2-program-item"><div className="e2-program-time">7:30 – 8:30</div><div className="e2-program-desc">Acreditación</div></div>
                <div className="e2-program-item"><div className="e2-program-time">8:30</div><div className="e2-program-desc">Apertura oficial</div></div>
                <div className="e2-program-item"><div className="e2-program-time">9:00 – 9:30</div><div className="e2-program-desc">La Estética Integral ante la Ley: límites, responsabilidades y consecuencias de una práctica profesional.</div></div>
                <div className="e2-program-item"><div className="e2-program-time">9:30 – 10:30</div><div className="e2-program-desc">La importancia del equipo multidisciplinario en el resultado quirúrgico.</div></div>
                <div className="e2-program-item"><div className="e2-program-time">10:30 – 11:00</div><div className="e2-program-desc">Break</div></div>
                <div className="e2-program-item"><div className="e2-program-time">11:00 – 12:00</div><div className="e2-program-desc">Wellness médico: el nuevo aliado en la recuperación y mantenimiento del paciente estético antes, durante y después de la cirugía.</div></div>
                <div className="e2-program-item"><div className="e2-program-time">12:00 – 1:00</div><div className="e2-program-desc">Nutracéuticos: el ingrediente invisible de la cirugía exitosa.</div></div>
                <div className="e2-program-item"><div className="e2-program-time">1:00 – 2:30</div><div className="e2-program-desc">Almuerzo + visita comercial</div></div>
                <div className="e2-program-item"><div className="e2-program-time">2:30 – 4:00</div><div className="e2-program-desc">Rehabilitación posquirúrgica inteligente y electroestética.</div></div>
                <div className="e2-program-item"><div className="e2-program-time">4:00 – 4:30</div><div className="e2-program-desc">La mente detrás del espejo: cuerpos transformados, emociones acompañadas.</div></div>
                <div className="e2-program-item"><div className="e2-program-time">4:30 – 5:30</div><div className="e2-program-desc">Integración del bienestar en la recuperación del paciente oncológico y reconstructivo.</div></div>
                <div className="e2-program-item"><div className="e2-program-time">5:30 – 6:30</div><div className="e2-program-desc">Prevención de las secuelas pigmentarias de la piel.</div></div>
                <div className="e2-program-item"><div className="e2-program-time">6:30 – 9:00</div><div className="e2-program-desc">Muestra comercial.</div></div>
              </>
            )}

            {activeTab === '20nov' && (
              <>
                <h3 style={{ textAlign: 'center', marginBottom: '24px', fontFamily: 'Barlow Condensed', fontSize: '24px', fontWeight: 800, textTransform: 'uppercase' }}>ESTÉTICA CORPORAL AVANZADA</h3>
                <div className="e2-program-item"><div className="e2-program-time">8:00 – 8:45</div><div className="e2-program-desc">Ingreso de asistentes</div></div>
                <div className="e2-program-item"><div className="e2-program-time">9:00 – 10:00</div><div className="e2-program-desc">Tratamientos no invasivos para reducción y moldeamiento corporal.</div></div>
                <div className="e2-program-item"><div className="e2-program-time">10:00 – 11:00</div><div className="e2-program-desc">Electroestética, músculo y metabolismo: la ciencia detrás del gasto energético.</div></div>
                <div className="e2-program-item"><div className="e2-program-time">11:00 – 11:30</div><div className="e2-program-desc">Coffee Break</div></div>
                <div className="e2-program-item"><div className="e2-program-time">11:30 – 12:30</div><div className="e2-program-desc">El GPS de la terapia manual: dónde, cómo y por qué intervenir.</div></div>
                <div className="e2-program-item"><div className="e2-program-time">12:30 – 2:00</div><div className="e2-program-desc">Almuerzo</div></div>
                <div className="e2-program-item"><div className="e2-program-time">2:00 – 3:00</div><div className="e2-program-desc">De la microlesión a la regeneración: la ciencia actual de las microagujas.</div></div>
                <div className="e2-program-item"><div className="e2-program-time">3:00 – 4:00</div><div className="e2-program-desc">La otra cara de la pérdida de peso: del éxito metabólico al desafío estético.</div></div>
                <div className="e2-program-item"><div className="e2-program-time">4:00 – 5:30</div><div className="e2-program-desc">Maestros Sin Fronteras: 5 naciones y un solo lenguaje, las manos.</div></div>
                <div className="e2-program-item"><div className="e2-program-time">5:30 – 6:30</div><div className="e2-program-desc">Entrega de certificados y brindis final.</div></div>
                <div className="e2-program-item"><div className="e2-program-time">6:30 – 9:00</div><div className="e2-program-desc">Muestra comercial.</div></div>
              </>
            )}

            {activeTab === '21nov' && (
              <>
                <h3 style={{ textAlign: 'center', marginBottom: '24px', fontFamily: 'Barlow Condensed', fontSize: '24px', fontWeight: 800, textTransform: 'uppercase', color: '#0284c7' }}>FACIAL 360 (EXCLUSIVO ENTRADA DIAMANTE)</h3>
                <div className="e2-program-item"><div className="e2-program-time">8:00 – 8:45</div><div className="e2-program-desc">Ingreso de asistentes</div></div>
                <div className="e2-program-item"><div className="e2-program-time">9:00 – 10:00</div><div className="e2-program-desc">Envejecer y rejuvenecer: actualidad en protocolos faciales.</div></div>
                <div className="e2-program-item"><div className="e2-program-time">10:00 – 11:00</div><div className="e2-program-desc">Ecografía en medicina estética: del diagnóstico a los resultados.</div></div>
                <div className="e2-program-item"><div className="e2-program-time">11:00 – 11:30</div><div className="e2-program-desc">Coffee Break</div></div>
                <div className="e2-program-item"><div className="e2-program-time">11:30 – 12:30</div><div className="e2-program-desc">Rellenos con ácido hialurónico: más allá del volumen.</div></div>
                <div className="e2-program-item"><div className="e2-program-time">12:30 – 2:00</div><div className="e2-program-desc">Almuerzo</div></div>
                <div className="e2-program-item"><div className="e2-program-time">2:00 – 3:00</div><div className="e2-program-desc">Toxina botulínica: estrategia completa en tercio superior.</div></div>
                <div className="e2-program-item"><div className="e2-program-time">3:00 – 4:00</div><div className="e2-program-desc">Regeneradores e inductores en medicina estética: nuevas evidencias, mejores resultados.</div></div>
                <div className="e2-program-item"><div className="e2-program-time">4:00 – 5:00</div><div className="e2-program-desc">Bioestimulación combinada: el presente de la calidad de la piel.</div></div>
                <div className="e2-program-item"><div className="e2-program-time">5:00 – 5:30</div><div className="e2-program-desc">Entrega de certificados y brindis final.</div></div>
                <div className="e2-program-item"><div className="e2-program-time">5:30 – 8:00</div><div className="e2-program-desc">Muestra comercial.</div></div>
              </>
            )}
            
            <p className="e2-body e2-body--center" style={{ marginTop: '32px', fontSize: '13px' }}>* Programa sujeto a cambios sin previo aviso.</p>
          </div>
        </div>
      </section>

      {/* =========================================
          INNOVA EXPO SECTION
          ========================================= */}
      <section className="e2-section" style={{ background: 'rgba(255,255,255,0.8)' }}>
        <div className="e2-container" style={{ textAlign: 'center' }}>
          <div className="e2-reveal">
            <span className="e2-eyebrow">INNOVA EXPO</span>
            <h2 className="e2-title e2-title--lg">Donde el conocimiento <span className="e2-title--gradient-blue">se encuentra con las soluciones</span></h2>
            <p className="e2-body" style={{ margin: '24px auto', maxWidth: '800px' }}>
              El componente comercial de INNOVA 360.
            </p>
          </div>
          
          <div className="e2-exp-grid" style={{ marginTop: '32px' }}>
            <div className="e2-exp-card e2-reveal">
              <h3 className="e2-exp-card__name">CONOCER</h3>
              <p className="e2-body" style={{ fontSize: '14px' }}>Explorar tendencias, productos y tecnologías que están transformando el sector.</p>
            </div>
            <div className="e2-exp-card e2-reveal" style={{ transitionDelay: '100ms' }}>
              <h3 className="e2-exp-card__name">DESCUBRIR</h3>
              <p className="e2-body" style={{ fontSize: '14px' }}>Identificar soluciones innovadoras que impulsen el crecimiento profesional y del negocio.</p>
            </div>
            <div className="e2-exp-card e2-reveal" style={{ transitionDelay: '200ms' }}>
              <h3 className="e2-exp-card__name">CONECTAR</h3>
              <p className="e2-body" style={{ fontSize: '14px' }}>Generar relaciones estratégicas y nuevas oportunidades.</p>
            </div>
          </div>

          <div className="e2-reveal" style={{ marginTop: '48px' }}>
            <a href="#entradas" onClick={scrollToTickets} className="e2-btn e2-btn--primary">Quiero vivir Innova Expo (USD 20)</a>
          </div>
        </div>
      </section>

      {/* =========================================
          NETWORKING & RESULTADOS
          ========================================= */}
      <section className="e2-section">
        <div className="e2-container">
          
          {/* Networking */}
          <div className="e2-reveal" style={{ background: 'linear-gradient(to right, rgba(0,26,88,0.8), rgba(0,91,216,0.6)), url("/placeholder-net.jpg") center/cover', borderRadius: '24px', padding: '60px 32px', textAlign: 'center', color: '#fff' }}>
            <h2 className="e2-title e2-title--md" style={{ color: '#fff' }}>Conexiones que abren posibilidades</h2>
            <p style={{ fontSize: '20px', fontStyle: 'italic', fontWeight: 300, margin: '24px 0', opacity: 0.9 }}>“Algunas conexiones duran un momento. Otras pueden cambiar tu camino profesional.”</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginTop: '32px' }}>
              {['CONECTAR', 'INTERCAMBIAR', 'DESCUBRIR', 'AMPLIAR'].map((w, i) => (
                <span key={i} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '12px 24px', borderRadius: '12px', fontWeight: 700, letterSpacing: '1px' }}>{w}</span>
              ))}
            </div>
          </div>

          {/* Resultados */}
          <div className="e2-reveal" style={{ marginTop: '100px', textAlign: 'center' }}>
            <span className="e2-eyebrow">Resultados</span>
            <h2 className="e2-title e2-title--lg">Lo que te llevas <span className="e2-title--gradient-blue">va más allá del evento</span></h2>
          </div>

          <div className="e2-reveal" style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '600px', margin: '48px auto' }}>
            {[
              'ACTUALIZAR TU CONOCIMIENTO',
              'FORTALECER TU CRITERIO',
              'DESCUBRIR NUEVAS POSIBILIDADES',
              'AMPLIAR TU VISIÓN DEL SECTOR',
              'CREAR NUEVAS CONEXIONES'
            ].map((text, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <span style={{ fontFamily: 'Barlow Condensed', fontSize: '32px', fontWeight: 900, color: '#0284c7' }}>0{i+1}</span>
                <span style={{ fontSize: '18px', fontWeight: 700, color: 'var(--e2-text)' }}>{text}</span>
              </div>
            ))}
          </div>

          <p className="e2-reveal" style={{ textAlign: 'center', fontSize: '24px', fontWeight: 800, textTransform: 'uppercase', marginTop: '64px', lineHeight: 1.3 }}>
            No se trata solo de lo que aprendes durante tres días.<br/>
            <span className="e2-title--gradient-blue">Se trata de lo que puedes hacer con ello después.</span>
          </p>

        </div>
      </section>

      {/* =========================================
          PLANES CORPORATIVOS
          ========================================= */}
      <section className="e2-section" style={{ background: 'rgba(240,245,255,0.85)' }}>
        <div className="e2-container">
          <div className="e2-reveal" style={{ textAlign: 'center' }}>
            <span className="e2-eyebrow">¿Vienes con tu equipo?</span>
            <h2 className="e2-title e2-title--lg">Planes Corporativos INNOVA 360</h2>
            <p className="e2-body" style={{ margin: '16px auto', fontWeight: 600 }}>Cuando crece tu equipo, crece tu organización.</p>
          </div>

          <div className="e2-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginTop: '48px' }}>
            <div className="e2-exp-card" style={{ textAlign: 'left' }}>
              <h3 className="e2-exp-card__name" style={{ fontSize: '28px' }}>IMPULSO</h3>
              <p style={{ color: 'var(--e2-blue-light)', fontWeight: 600, marginBottom: '24px' }}>Para equipos de 5 participantes.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['5 entradas al Congreso a escoger', '10 % de descuento del monto total', 'Acreditación preferencial', 'Fotografía profesional del equipo', 'Certificado individual', 'Publicación de reconocimiento como empresa participante', 'Prioridad para futuras actividades'].map((b, i) => (
                  <li key={i} style={{ display: 'flex', gap: '8px', fontSize: '14px', color: 'var(--e2-text-muted)' }}>
                    <span style={{ color: 'var(--e2-blue-light)', fontWeight: 'bold' }}>✓</span> {b}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="e2-exp-card" style={{ textAlign: 'left' }}>
              <h3 className="e2-exp-card__name" style={{ fontSize: '28px' }}>EVOLUCIÓN</h3>
              <p style={{ color: 'var(--e2-blue-light)', fontWeight: 600, marginBottom: '24px' }}>Para grupos de 10 participantes o más.</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['10 entradas o más', '15 % de descuento del monto total', 'Registro preferencial', 'Fotografía corporativa profesional', 'Certificado individual para cada participante', 'Networking preferencial con conferencistas', 'Publicación de reconocimiento en redes sociales', 'Prioridad en futuras jornadas y programas'].map((b, i) => (
                  <li key={i} style={{ display: 'flex', gap: '8px', fontSize: '14px', color: 'var(--e2-text-muted)' }}>
                    <span style={{ color: 'var(--e2-blue-light)', fontWeight: 'bold' }}>✓</span> {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="e2-reveal" style={{ textAlign: 'center', marginTop: '48px' }}>
            <a href="https://wa.me/584228638329?text=Hola,%20quiero%20información%20sobre%20los%20planes%20corporativos%20INNOVA%20360" target="_blank" rel="noopener noreferrer" className="e2-btn e2-btn--primary">Solicitar Plan Corporativo</a>
          </div>
        </div>
      </section>

      {/* =========================================
          AUTORIDAD
          ========================================= */}
      <section className="e2-section">
        <div className="e2-container">
          <div className="e2-reveal" style={{ textAlign: 'center' }}>
            <h2 className="e2-title e2-title--lg">Quiénes están detrás de <span className="e2-title--gradient-blue">INNOVA 360</span></h2>
          </div>

          <div className="e2-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginTop: '48px' }}>
            <div>
              <h3 className="e2-exp-card__name" style={{ fontSize: '28px', marginBottom: '4px' }}>Daniela Caballero</h3>
              <div style={{ color: 'var(--e2-blue-light)', fontWeight: 700, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '1px', marginBottom: '16px' }}>Fundadora y Directora General</div>
              <p className="e2-body">
                Más de diez años de formación continua y trayectoria vinculada al sector de la estética y el bienestar. Fundadora de DC Belleza VIP.<br/><br/>
                Desde la Dirección General lidera la construcción de una plataforma que conecta conocimiento, innovación, talento y oportunidades.
              </p>
            </div>
            
            <div>
              <h3 className="e2-exp-card__name" style={{ fontSize: '28px', marginBottom: '4px' }}>Dra. Andrea Restrepo</h3>
              <div style={{ color: 'var(--e2-blue-light)', fontWeight: 700, textTransform: 'uppercase', fontSize: '12px', letterSpacing: '1px', marginBottom: '16px' }}>Directora Académica</div>
              <p className="e2-body">
                Médica con Maestría en Medicina Estética y Terapias Antiaging.<br/><br/>
                Trayectoria en práctica asistencial, docencia, dirección académica y gestión de proyectos especializados en estética.<br/><br/>
                Su propuesta académica para INNOVA 360 está basada en actualidad, pertinencia, criterio profesional y aplicabilidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          PLANEA TU EXPERIENCIA EN CARACAS
          ========================================= */}
      <section className="e2-section" style={{ background: 'rgba(255,255,255,0.8)' }}>
        <div className="e2-container">
          <div className="e2-reveal" style={{ textAlign: 'center' }}>
            <h2 className="e2-title e2-title--lg">Planea tu experiencia en Caracas</h2>
          </div>

          <div className="e2-reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '40px' }}>
            <div className="e2-exp-card" style={{ textAlign: 'left' }}>
              <h3 style={{ color: 'var(--e2-blue-light)', fontSize: '16px', fontWeight: 800, letterSpacing: '1px', marginBottom: '8px' }}>ALOJAMIENTO</h3>
              <p style={{ fontWeight: 800, fontSize: '20px', marginBottom: '12px' }}>California Hotel Suites</p>
              <p className="e2-body" style={{ marginBottom: '16px' }}>Hotel aliado de INNOVA 360.</p>
              <p style={{ fontWeight: 600, fontSize: '14px' }}>Contacto: Karla García</p>
              <p className="e2-body" style={{ fontSize: '14px' }}>+58 0414-2891837 <br/> +58 0424-2359742</p>
              <a href="https://wa.me/584142891837" target="_blank" rel="noopener noreferrer" className="e2-btn e2-btn--outline" style={{ marginTop: '24px', padding: '10px 20px', fontSize: '14px' }}>Contactar por WhatsApp</a>
            </div>
            
            <div className="e2-exp-card" style={{ textAlign: 'left' }}>
              <h3 style={{ color: 'var(--e2-blue-light)', fontSize: '16px', fontWeight: 800, letterSpacing: '1px', marginBottom: '8px' }}>MOVILIDAD</h3>
              <p style={{ fontWeight: 800, fontSize: '20px', marginBottom: '12px' }}>Grupo Servienvios</p>
              <p className="e2-body" style={{ marginBottom: '16px' }}>Transporte aliado de INNOVA 360.</p>
              <p style={{ fontWeight: 600, fontSize: '14px' }}>Contacto: Luis Escalona</p>
              <p className="e2-body" style={{ fontSize: '14px' }}>+58 0412-3919404 <br/> +58 0412-6167324</p>
              <a href="https://wa.me/584123919404" target="_blank" rel="noopener noreferrer" className="e2-btn e2-btn--outline" style={{ marginTop: '24px', padding: '10px 20px', fontSize: '14px' }}>Contactar por WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          INFORMACIÓN ÚTIL & FAQ
          ========================================= */}
      <section className="e2-section">
        <div className="e2-container">
          <div className="e2-reveal" style={{ textAlign: 'center' }}>
            <h2 className="e2-title e2-title--lg">Preguntas Frecuentes e Información Útil</h2>
          </div>

          <div className="e2-reveal" style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            
            {/* VESTIMENTA */}
            <div className={`e2-accordion-item ${activeFaq === 100 ? 'active' : ''}`}>
              <div className="e2-accordion-header" onClick={() => toggleFaq(100)}>
                <span>Código de Vestimenta (19 y 20 de Noviembre)</span>
                <span>{activeFaq === 100 ? '−' : '+'}</span>
              </div>
              <div className="e2-accordion-content">
                <p><strong>19 NOVIEMBRE:</strong> Azul marino + blanco.</p>
                <p><strong>20 NOVIEMBRE:</strong> Blanco + gris + plateado.</p>
                <p style={{ marginTop: '12px' }}><strong>Concepto:</strong> CÓMODA · PROFESIONAL · MODERNA</p>
                <p><strong>Recomendación:</strong> Telas frescas, cortes cómodos y accesorios sutiles.</p>
              </div>
            </div>

            {/* FAQs */}
            {[
              { q: "¿Dónde se realizará INNOVA 360?", a: "Centro Comercial Líder, Nivel Contemporáneo, Caracas, Venezuela." },
              { q: "¿Cuándo se realizará?", a: "19 y 20 de noviembre de 2026. Facial 360 se realizará el 21 de noviembre." },
              { q: "¿INNOVA EXPO permite entrar al Congreso?", a: "No. La entrada INNOVA EXPO de USD 20 no incluye acceso al Congreso Internacional." },
              { q: "¿Qué días incluye VIP?", a: "19 y 20 de noviembre." },
              { q: "¿Qué días incluye Diamante?", a: "19, 20 y 21 de noviembre." },
              { q: "¿Facial 360 se vende por separado?", a: "Según la oferta actual, Facial 360 forma parte de los beneficios exclusivos de Entrada Diamante." },
              { q: "¿Existe tarifa para grupos?", a: "Sí. Hay planes para equipos de 5 y de 10 participantes o más." },
              { q: "Métodos de pago, política de entradas, transferencia, menores, estacionamiento y facturación", a: "Esta información será publicada próximamente a través de nuestros canales oficiales." }
            ].map((faq, index) => (
              <div key={index} className={`e2-accordion-item ${activeFaq === index ? 'active' : ''}`}>
                <div className="e2-accordion-header" onClick={() => toggleFaq(index)}>
                  <span>{faq.q}</span>
                  <span>{activeFaq === index ? '−' : '+'}</span>
                </div>
                <div className="e2-accordion-content">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================
          FINAL CTA
          ========================================= */}
      <section className="e2-section e2-section--dark" style={{ textAlign: 'center', padding: '120px 24px' }}>
        <div className="e2-container">
          <div className="e2-reveal">
            <h2 className="e2-title" style={{ fontSize: 'clamp(40px, 8vw, 80px)', marginBottom: '16px' }}>Tu lugar en<br/><span className="e2-title--gradient-diamond">INNOVA 360</span><br/>te está esperando</h2>
            
            <p style={{ fontSize: '18px', color: '#94a3b8', marginTop: '24px', fontWeight: 600 }}>
              Tres días.<br/>
              Una experiencia que puede ampliar tu manera de ver el sector.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center', margin: '32px 0 48px' }}>
              <span style={{ background: 'rgba(255,255,255,0.05)', padding: '8px 24px', borderRadius: '50px', fontSize: '14px', letterSpacing: '1px', fontWeight: 600 }}>19 · 20 NOVIEMBRE 2026<br/>CONGRESO INTERNACIONAL + INNOVA EXPO</span>
              <span style={{ background: 'rgba(2,132,199,0.1)', color: '#38bdf8', padding: '8px 24px', borderRadius: '50px', fontSize: '14px', letterSpacing: '1px', fontWeight: 600 }}>21 NOVIEMBRE 2026<br/>EXPERIENCIA INNOVA · FACIAL 360 (Exclusivo Entrada Diamante)</span>
              <span style={{ background: 'rgba(255,255,255,0.05)', padding: '8px 24px', borderRadius: '50px', fontSize: '14px', letterSpacing: '1px', fontWeight: 600 }}>CARACAS · VENEZUELA</span>
            </div>

            <a href="#entradas" onClick={scrollToTickets} className="e2-btn e2-btn--primary" style={{ padding: '24px 48px', fontSize: '20px' }}>Elige tu entrada y sé parte de INNOVA 360</a>
          </div>
        </div>
      </section>

      {/* =========================================
          STICKY MOBILE BAR
          ========================================= */}
      <div className="e2-mobile-bar">
        <a href="#entradas" onClick={scrollToTickets} className="e2-btn e2-btn--primary e2-btn--full">Comprar Entrada</a>
      </div>

    </div>
  )
}
