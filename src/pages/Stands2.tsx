import React from 'react'
import { useReveal } from '../hooks/useReveal'
import { useCountUp } from '../hooks/useCountUp'
import '../App.css'
import '../styles/Stands2.css'

import logoImg from '../assets/elementos graficos/logo innova 360.webp'
import fondoChicaImg from '../assets/elementos graficos/fondos/fondo chica.png'
import tablaComparativaImg from '../assets/stands/tabla comparativa.png'
import experiencia1Img from '../assets/stands/experiencia 1.png'
import experiencia2Img from '../assets/stands/experiencia 2.png'

// Logos de empresas aliadas (eliminados por no usarse)
import prototipo1Img from '../assets/stands/prototipo 1.png'
import prototipo2Img from '../assets/stands/prorotipo 2.png'
import prototipo3Img from '../assets/stands/prototipo 3.png'

import PastEditionCarouselStands2 from '../components/PastEditionCarouselStands2'
import WhyExhibit from '../components/WhyExhibit'
import PlanoViewer from '../components/PlanoViewer'
import LogoMarquee from '../components/LogoMarquee'
import PrototiposCarousel from '../components/PrototiposCarousel'
import InversionComercial from '../components/InversionComercial'
/* ──────────────────────────────────────────────────────────────
   DATA
────────────────────────────────────────────────────────────── */
const ORO_BENEFITS = [
  { label: 'Stand 2×2 m en zona de patrocinantes' },
  { label: 'Visibilidad de marca en espacios de la categoría' },
  { label: 'Inclusión en materiales seleccionados de INNOVA 360' },
  { label: 'Difusión en canales digitales del patrocinio' },
  { label: 'Reconocimiento oficial como marca aliada' },
  { label: 'Hasta 2 credenciales VIP' },
]

const PLATINO_BENEFITS = [
  { label: 'Stand 3×2 m en zona preferencial Platino' },
  { label: 'Mayor presencia de marca en todos los espacios' },
  { label: 'Inclusión en materiales oficiales del evento' },
  { label: 'Presencia en web y redes sociales' },
  { label: 'Integración en campañas digitales de comunicación' },
  { label: 'Actividades complementarias de la categoría' },
  { label: 'Hasta 4 credenciales VIP' },
]

const DIAMANTE_BENEFITS = [
  { label: 'Stand 4×2 m en zona premium preferencial' },
  { label: 'Máxima visibilidad de marca en todo el evento' },
  { label: 'Entrevistas + Podcast dentro del patrocinio' },
  { label: 'Oportunidad de lanzamiento comercial' },
  { label: 'Networking en espacios exclusivos Diamante' },
  { label: 'Campañas, reels y videos oficiales' },
  { label: 'Presencia en pantalla LED, certificados y credenciales' },
  { label: 'Mención precongreso en Circuito Unión Radio' },
  { label: 'Hasta 6 credenciales VIP' },
]

/* ──────────────────────────────────────────────────────────────
   STAT ITEM — count-up animation
────────────────────────────────────────────────────────────── */
function StatItem({ prefix, target, label }: { prefix: string; target: number; label: string }) {
  const { count, ref } = useCountUp(target, 1800)
  return (
    <div className="s2-stat-item" ref={ref as React.RefObject<HTMLDivElement>}>
      <span className="s2-stat-number">{prefix}{count}</span>
      <span className="s2-stat-label">{label}</span>
    </div>
  )
}

/* ──────────────────────────────────────────────────────────────
   COMPONENT
────────────────────────────────────────────────────────────── */
export default function Stands2() {
  useReveal()


  const WA_BASE = 'https://wa.me/584228638329?text='
  const WA_ORO = WA_BASE + encodeURIComponent('Hola, quiero información sobre la Alianza ORO en INNOVA 360')
  const WA_PLATINO = WA_BASE + encodeURIComponent('Hola, quiero información sobre la Alianza PLATINO en INNOVA 360')
  const WA_DIAMANTE = WA_BASE + encodeURIComponent('Hola, quiero información sobre la Alianza DIAMANTE en INNOVA 360')
  const WA_GENERAL = WA_BASE + encodeURIComponent('Hola, quiero información sobre las Alianzas Estratégicas en INNOVA 360')

  return (
    <div
      className="s2-page"
      style={{
        background: 'radial-gradient(circle at top, #ffffff 0%, #f0f7ff 50%, #e0f2fe 100%)',
        minHeight: '100vh',
      }}
    >

      {/* ═══════════════════════════════════
          HERO
      ═══════════════════════════════════ */}
      <section className="s2-hero s2-hero--light" style={{ backgroundImage: `url(${fondoChicaImg})`, backgroundSize: 'cover', backgroundPosition: 'center top', backgroundRepeat: 'no-repeat', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.75) 60%, rgba(255,255,255,1) 100%)', zIndex: 0 }} />
        <div className="s2-hero-grid" aria-hidden="true" />
        <div className="s2-hero-content">
          <div className="s2-hero-badge animate-fade-down">
            <span className="s2-hero-badge-dot" />
            Estética · Bienestar · Innovación
          </div>

          <img
            src={logoImg}
            alt="INNOVA 360"
            className="s2-hero-logo animate-fade-down"
            style={{ animationDelay: '80ms' }}
            loading="eager"
          />

          <p className="s2-hero-tagline animate-fade-up" style={{ animationDelay: '120ms' }}>
            Alianzas Estratégicas
          </p>

          <h1 className="s2-hero-main-title animate-fade-up" style={{ animationDelay: '160ms' }}>
            se aliado estrategico<br />DE INNOVA 360 2026
          </h1>

          <p className="s2-hero-subheadline animate-fade-up" style={{ animationDelay: '200ms' }}>
            Una plataforma para marcas que quieren conectar,<br />posicionarse y liderar.
          </p>

          <div className="s2-hero-dates-clean animate-fade-up" style={{ animationDelay: '240ms' }}>
            <div className="s2-date-clean s2-date-clean--full">
              <span className="s2-date-clean__day">19 · 20 Nov 2026</span>
              <span className="s2-date-clean__label">Encuentro Internacional</span>
            </div>
            <div className="s2-date-clean-row">
              <div className="s2-date-clean">
                <span className="s2-date-clean__day">21 Nov 2026</span>
                <span className="s2-date-clean__label">Experiencia INNOVA</span>
              </div>
              <div className="s2-date-clean">
                <span className="s2-date-clean__day">Caracas</span>
                <span className="s2-date-clean__label">Venezuela</span>
              </div>
            </div>
          </div>

          <div className="s2-hero-cta-single animate-fade-up" style={{ animationDelay: '280ms' }}>
            <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer" className="s2-btn s2-btn--hero">
              QUIERO SER ALIADO
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '12px' }}>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          STATS
      ═══════════════════════════════════ */}
      <section className="s2-stats s2-plano-section" style={{ background: 'rgba(5,8,25,0.97)' }}>
        <div className="s2-stats-grid">
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

      {/* ═══════════════════════════════════
          EDICIÓN PASADA
      ═══════════════════════════════════ */}
      <section className="s2-section" style={{ width: '100%', background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(6px)' }}>
        <div className="s2-container">
          <div className="s2-section-header reveal">
            <span className="s2-eyebrow">Lo que ya vivimos juntos</span>
            <h2 className="s2-title s2-title--lg s2-mb-16">
              Primera Edición <span className="s2-title--gradient-blue">INNOVA 360</span>
            </h2>
            <div className="s2-divider" />
            <p className="s2-body s2-body--center" style={{ maxWidth: '560px', margin: '0 auto' }}>
              El primer encuentro dejó una huella real. Estas son las marcas, los momentos
              y los resultados que construyeron la base de lo que viene.
            </p>
          </div>

          <PastEditionCarouselStands2 />

        </div>
      </section>

      <LogoMarquee />


      {/* ═══════════════════════════════════
          CONCEPT
      ═══════════════════════════════════ */}
      <section className="s2-section" style={{ display: 'none', background: 'rgba(255,255,255,0.78)', backdropFilter: 'blur(6px)', width: '100%' }}>
        <div className="s2-container">
          <div className="s2-section-header reveal">
            <span className="s2-eyebrow">El concepto central</span>
            <h2 className="s2-title s2-title--lg s2-mb-24">
              No se trata solo de estar.
            </h2>
            <div className="s2-divider" />
          </div>

          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto' }}>
            <p className="s2-body s2-body--lg s2-body--center reveal s2-mb-48">
              INNOVA 360 reúne conocimiento, innovación, industria y oportunidades de conexión en un mismo escenario.
              Cuando una marca se integra de manera estratégica, deja de ser solamente visible.
            </p>

            <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '48px' }}>
              {['TU MARCA SE VUELVE RECONOCIDA, RECORDADA Y ASOCIADA CON LA EVOLUCIÓN DEL SECTOR.'].map((t, i) => (
                <div
                  key={t}
                  className="s2-accent-phrase"
                  style={{
                    background: 'linear-gradient(135deg, #1e3a8a, #2563eb)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animationDelay: `${i * 100}ms`,
                  }}
                >
                  {t}
                </div>
              ))}
            </div>

            <p className="s2-body s2-body--center reveal">
              INNOVA 360 conecta conocimiento, industria y oportunidades en una plataforma que reúne
              profesionales, empresas, marcas y referentes nacionales e internacionales —
              todos alrededor de tres grandes áreas: <strong style={{ color: 'var(--s2-blue-dark)' }}>Estética · Bienestar · Innovación</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          WHY EXHIBIT
      ═══════════════════════════════════ */}
      <WhyExhibit />


      {/* ═══════════════════════════════════
          AUDIENCE
      ═══════════════════════════════════ */}
      <section className="s2-section" style={{ width: '100%', background: 'rgba(240,245,255,0.82)', backdropFilter: 'blur(6px)' }}>
        <div className="s2-container">
          <div className="s2-section-header reveal">
            <span className="s2-eyebrow">¿Con quién conecta tu marca?</span>
            <h2 className="s2-title s2-title--lg s2-mb-16">
              Conecta con quienes <span className="s2-title--gradient-blue">mueven el sector</span>
            </h2>
            <div className="s2-divider" />
            <p className="s2-body s2-body--center" style={{ maxWidth: '560px', margin: '0 auto' }}>
              Una audiencia profesional, empresarial y especializada, reunida dentro de un mismo ecosistema.
            </p>
          </div>

          <div className="s2-audience-grid">
            {[
              {
                icon: '👩‍⚕️',
                title: 'Profesionales',
                items: ['Médicos y Enfermeros', 'Fisioterapeutas', 'Esteticistas y Cosmetólogos', 'Masoterapeutas', 'Especialistas postquirúrgicos', 'Terapeutas del bienestar', 'Estudiantes y futuros profesionales'],
              },
              {
                icon: '🏢',
                title: 'Negocios',
                items: ['Clínicas y Consultorios', 'Centros estéticos', 'Spas y centros de bienestar', 'Academias e instituciones de formación', 'Distribuidores e importadores'],
              },
              {
                icon: '🏭',
                title: 'Industria',
                items: ['Marcas de cosmética profesional', 'Laboratorios y dermocosmética', 'Nutricosmética', 'Fabricantes e importadores de equipos', 'Aparatología', 'Tecnología aplicada a estética'],
              },
            ].map(g => (
              <div key={g.title} className="s2-audience-card reveal-scale">
                <span className="s2-audience-icon">{g.icon}</span>
                <h3 className="s2-audience-card__title">{g.title}</h3>
                <ul className="s2-audience-list">
                  {g.items.map(i => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>


        </div>
      </section>





      <section className="s2-section s2-plano-section" style={{ width: '100%', padding: '80px 0' }}>
        <h2 className="why-exhibit-title reveal" style={{ marginBottom: '2rem', width: '100%', textAlign: 'center', color: '#ffffff' }}>
          PLANO DEL EVENTO
        </h2>
        <PlanoViewer />
        <p style={{ color: 'rgba(255, 255, 255, 0.9)', textAlign: 'center', marginTop: '3rem', padding: '0 1rem', fontSize: '18px', fontWeight: 500, marginBottom: '60px' }}>
          Visualiza la zona de stands y luego selecciona la ubicación ideal para tu stand.
        </p>

        <PrototiposCarousel />
      </section>

      <InversionComercial />

      {/* ═══════════════════════════════════
          ALIANZAS — SELECTOR + CARDS
      ═══════════════════════════════════ */}
      <section id="alianzas" className="s2-section" style={{ width: '100%', background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(6px)', paddingBottom: '40px' }}>
        <div className="s2-container">
          <div className="s2-section-header reveal">
            <span className="s2-eyebrow">Tipos de Alianzas Estratégicas</span>
            <h2 className="s2-title s2-title--lg s2-mb-16">
              Elige la posición que<br />
              <span className="s2-title--gradient-gold">quieres ocupar</span>
            </h2>
            <div className="s2-divider s2-divider--gold" />
          </div>



          <div className="s2-tiers-list" style={{ display: 'flex', flexDirection: 'column', gap: '48px', marginTop: '40px' }}>
            {/* ── ORO ── */}
            <div className="s2-tier-card s2-tier-card--oro">
              <div className="s2-tier-card__inner">
                <div className="s2-tier-card__info">
                  <p className="s2-tier-label s2-tier-label--oro">ORO</p>
                  <p className="s2-tier-tagline">Presencia que abre oportunidades</p>
                  <div className="s2-tier-price">
                    <span className="s2-tier-price__amount">
                      <span className="s2-tier-price__currency">USD</span>1.500
                    </span>
                    <span className="s2-tier-price__label">Inversión única</span>
                  </div>
                  <ul className="s2-tier-benefits">
                    {ORO_BENEFITS.map(b => (
                      <li key={b.label} className="s2-tier-benefit">
                        <span className="s2-tier-benefit__check s2-tier-benefit__check--oro">✓</span>
                        {b.label}
                      </li>
                    ))}
                  </ul>
                  <a href={WA_ORO} target="_blank" rel="noopener noreferrer" className="s2-btn s2-btn--gold s2-btn--full">
                    Quiero la Alianza Oro
                  </a>
                </div>
                <div className="s2-tier-card__visual" style={{ padding: 0, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={prototipo1Img} alt="Stand Oro" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                </div>
              </div>
              <p className="s2-tier-message">
                Este paquete incluye este Stand en modalidad de alquiler
              </p>
            </div>
            {/* ── PLATINO ── */}
            <div className="s2-tier-card s2-tier-card--platino">
              <div className="s2-tier-card__inner">
                <div className="s2-tier-card__info">
                  <p className="s2-tier-label s2-tier-label--platino">PLATINO</p>
                  <p className="s2-tier-tagline">Más visibilidad. Más puntos de conexión.</p>
                  <div className="s2-tier-price">
                    <span className="s2-tier-price__amount">
                      <span className="s2-tier-price__currency">USD</span>2.500
                    </span>
                    <span className="s2-tier-price__label">Inversión única</span>
                  </div>
                  <ul className="s2-tier-benefits">
                    {PLATINO_BENEFITS.map(b => (
                      <li key={b.label} className="s2-tier-benefit">
                        <span className="s2-tier-benefit__check s2-tier-benefit__check--platino">✓</span>
                        {b.label}
                      </li>
                    ))}
                  </ul>
                  <a href={WA_PLATINO} target="_blank" rel="noopener noreferrer" className="s2-btn s2-btn--silver s2-btn--full">
                    Quiero la Alianza Platino
                  </a>
                </div>
                <div className="s2-tier-card__visual" style={{ padding: 0, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={prototipo2Img} alt="Stand Platino" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                </div>
              </div>
              <p className="s2-tier-message">
                Este paquete incluye este Stand en modalidad de alquiler
              </p>
            </div>
            {/* ── DIAMANTE ── */}
            <div className="s2-tier-card s2-tier-card--diamante">
              <div className="s2-tier-card__inner">
                <div className="s2-tier-card__info">
                  <p className="s2-tier-label s2-tier-label--diamante">DIAMANTE</p>
                  <p className="s2-tier-tagline">Máxima categoría · Posición de Liderazgo</p>
                  <div className="s2-tier-price">
                    <span className="s2-tier-price__amount">
                      <span className="s2-tier-price__currency">USD</span>3.500
                    </span>
                    <span className="s2-tier-price__label">Inversión única</span>
                  </div>
                  <ul className="s2-tier-benefits">
                    {DIAMANTE_BENEFITS.map(b => (
                      <li key={b.label} className="s2-tier-benefit">
                        <span className="s2-tier-benefit__check s2-tier-benefit__check--diamante">✓</span>
                        {b.label}
                      </li>
                    ))}
                  </ul>
                  <a href={WA_DIAMANTE} target="_blank" rel="noopener noreferrer" className="s2-btn s2-btn--diamond s2-btn--full">
                    Quiero la Alianza Diamante
                  </a>
                </div>
                <div className="s2-tier-card__visual" style={{ padding: 0, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={prototipo3Img} alt="Stand Diamante" style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                </div>
              </div>
              <p className="s2-tier-message">
                Este paquete incluye este Stand en modalidad de alquiler
              </p>
            </div>
          </div>

        </div>
      </section>






      {/* ═══════════════════════════════════
          PATROCINIOS ESPECIALES
      ═══════════════════════════════════ */}
      <section id="patrocinios-especiales" className="s2-section" style={{ width: '100%', background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(6px)', paddingTop: '40px' }}>
        <div className="s2-container">
          <div className="s2-section-header reveal">
            <h2 className="s2-title s2-title--lg s2-mb-16">
              PATROCINIOS ESPECIALES
            </h2>
            <div className="s2-divider s2-divider--gold" />
          </div>

          <div className="reveal" style={{ textAlign: 'center', marginTop: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', width: '100%' }}>
              <img
                src={experiencia1Img}
                alt="Experiencia de Marca 1"
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px' }}
                loading="lazy"
              />
              <button className="s2-btn s2-btn--primary" style={{ padding: '16px 40px', fontSize: '18px' }}>
                Adquirir patrocinio
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', width: '100%' }}>
              <img
                src={experiencia2Img}
                alt="Experiencia de Marca 2"
                style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px' }}
                loading="lazy"
              />
              <button className="s2-btn s2-btn--primary" style={{ padding: '16px 40px', fontSize: '18px' }}>
                Adquirir patrocinio
              </button>
            </div>
            <img
              src={tablaComparativaImg}
              alt="Tabla Comparativa de Stands"
              style={{ maxWidth: '100%', height: 'auto' }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          GOAL SELECTOR
      ═══════════════════════════════════ */}
      <section className="s2-section" style={{ display: 'none', width: '100%', background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(6px)' }}>
        <div className="s2-container">
          <div className="s2-section-header reveal">
            <span className="s2-eyebrow">¿Cuál es tu objetivo?</span>
            <h2 className="s2-title s2-title--lg s2-mb-16">
              Diferentes objetivos.<br />
              <span className="s2-title--gradient-blue">Diferentes formas de estar.</span>
            </h2>
            <div className="s2-divider" />
          </div>

          <div className="s2-goal-grid">
            {[
              {
                want: 'Quiero →',
                goal: 'Tener presencia e integrarme al evento',
                rec: '🟡 ORO · USD 1.500',
                recClass: 's2-goal-card__rec--oro',
                href: WA_ORO,
              },
              {
                want: 'Quiero →',
                goal: 'Ampliar mi posicionamiento y exposición',
                rec: '⚪ PLATINO · USD 2.500',
                recClass: 's2-goal-card__rec--platino',
                href: WA_PLATINO,
              },
              {
                want: 'Quiero →',
                goal: 'Ocupar una posición protagónica de liderazgo',
                rec: '🔵 DIAMANTE · USD 3.500',
                recClass: 's2-goal-card__rec--diamante',
                href: WA_DIAMANTE,
              },
              {
                want: 'Quiero →',
                goal: 'Asociar mi marca a un momento específico',
                rec: '✨ EXPERIENCIAS · USD 1.500',
                recClass: 's2-goal-card__rec--exp',
                href: WA_GENERAL,
              },
            ].map(g => (
              <a
                key={g.goal}
                href={g.href}
                target="_blank"
                rel="noopener noreferrer"
                className="s2-goal-card reveal-scale"
              >
                <span className="s2-goal-card__want">{g.want}</span>
                <p className="s2-goal-card__goal">{g.goal}</p>
                <span className={`s2-goal-card__rec ${g.recClass}`}>{g.rec} →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════ */}
      <section className="s2-final-cta" style={{ width: '100%' }}>
        <div className="s2-final-cta__content">


          <div className="s2-contact-grid reveal">
            <div className="s2-contact-group">
              <span className="s2-contact-group__title">Líneas de Atención</span>
              <a href="https://wa.me/584241393067" target="_blank" rel="noopener noreferrer" className="s2-contact-item">
                <span className="s2-contact-item__icon">📞</span>
                <span className="s2-contact-item__label">0424-139 3067</span>
              </a>
              <a href="https://wa.me/584127271018" target="_blank" rel="noopener noreferrer" className="s2-contact-item">
                <span className="s2-contact-item__icon">📞</span>
                <span className="s2-contact-item__label">0412-727 1018</span>
              </a>
              <a href="https://wa.me/584228638329" target="_blank" rel="noopener noreferrer" className="s2-contact-item">
                <span className="s2-contact-item__icon">📞</span>
                <span className="s2-contact-item__label">0422-863 8329</span>
              </a>
            </div>

            <div className="s2-contact-group">
              <span className="s2-contact-group__title">Más Información</span>
              <a href="mailto:eventoinnova360@gmail.com" className="s2-contact-item">
                <span className="s2-contact-item__icon">✉️</span>
                <span className="s2-contact-item__label">eventoinnova360@gmail.com</span>
              </a>
              <a href="https://innova360ve.com" target="_blank" rel="noopener noreferrer" className="s2-contact-item">
                <span className="s2-contact-item__icon">🌐</span>
                <span className="s2-contact-item__label">innova360ve.com</span>
              </a>
              <a href="https://instagram.com/innova360ve" target="_blank" rel="noopener noreferrer" className="s2-contact-item">
                <span className="s2-contact-item__icon">📸</span>
                <span className="s2-contact-item__label">@innova360ve</span>
              </a>
            </div>
          </div>

          <div className="reveal" style={{ marginTop: '64px' }}>
            <p className="s2-accent-phrase s2-mb-8" style={{ color: '#94a3b8' }}>
              CONOCIMIENTO QUE CONECTA.
            </p>
            <p className="s2-accent-phrase" style={{ color: 'var(--s2-gold-light)' }}>
              INNOVACIÓN QUE IMPULSA.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}
