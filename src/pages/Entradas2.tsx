import React, { useState, useEffect } from 'react'
import '../App.css'
import '../styles/Entradas2.css'
import logoImg from '../assets/elementos graficos/logo innova 360.webp'
import { useCountUp } from '../hooks/useCountUp'
import { useReveal } from '../hooks/useReveal'
import PastEditionCarouselStands2 from '../components/PastEditionCarouselStands2'
import LogoMarquee from '../components/LogoMarquee'
import WhyExhibit from '../components/WhyExhibit'

/* ──────────────────────────────────────────────────────────────
   STAT ITEM — count-up animation
────────────────────────────────────────────────────────────── */
function StatItem({ prefix, target, label }: { prefix: string; target: number; label: string }) {
  const { count, ref } = useCountUp(target, 1800)
  return (
    <div className="e2-stat-item" ref={ref as React.RefObject<HTMLDivElement>}>
      <span className="e2-stat-number">{prefix}{count}</span>
      <span className="e2-stat-label">{label}</span>
    </div>
  )
}

export default function Entradas2() {
  useReveal()
  
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
          STATS
          ========================================= */}
      <section className="e2-stats e2-plano-section">
        <div className="e2-stats-grid">
          {([
            { prefix: '', num: 2, label: 'Días de encuentro' },
            { prefix: '+', num: 20, label: 'Conferencistas' },
            { prefix: '+', num: 30, label: 'Marcas Aliadas' },
            { prefix: '+', num: 300, label: 'Profesionales' },
          ] as const).map(s => (
            <StatItem key={s.label} prefix={s.prefix} target={s.num} label={s.label} />
          ))}
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
          EDICIÓN PASADA & MARCAS & WHY EXHIBIT
          ========================================= */}
      <section className="e2-section" style={{ width: '100%', background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(6px)' }}>
        <div className="e2-container">
          <div className="e2-reveal" style={{ textAlign: 'center' }}>
            <span className="e2-eyebrow">Lo que ya vivimos juntos</span>
            <h2 className="e2-title e2-title--lg" style={{ marginBottom: '16px' }}>
              Primera Edición <span className="e2-title--gradient-blue">INNOVA 360</span>
            </h2>
            <div className="e2-divider" />
            <p className="e2-body e2-body--center" style={{ maxWidth: '560px', margin: '0 auto' }}>
              El primer encuentro dejó una huella real. Estas son las marcas, los momentos
              y los resultados que construyeron la base de lo que viene.
            </p>
          </div>
          <PastEditionCarouselStands2 />
        </div>
      </section>

      <LogoMarquee />

      <WhyExhibit />

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
          STICKY MOBILE BAR
          ========================================= */}
      <div className="e2-mobile-bar">
        <a href="#entradas" onClick={scrollToTickets} className="e2-btn e2-btn--primary e2-btn--full">Comprar Entrada</a>
      </div>

    </div>
  )
}
