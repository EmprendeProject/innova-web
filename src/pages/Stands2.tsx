import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import '../App.css'
import '../styles/Stands2.css'

import logoImg from '../assets/elementos graficos/logo innova 360.webp'
import fondoImg from '../assets/elementos graficos/fondos/1.png'
import tablaComparativaImg from '../assets/stands/tabla comparativa.png'
import experiencia1Img from '../assets/stands/experiencia 1.png'

import PastEditionCarouselStands2 from '../components/PastEditionCarouselStands2'
import WhyExhibit from '../components/WhyExhibit'
import PlanoViewer from '../components/PlanoViewer'
import LogoMarquee from '../components/LogoMarquee'
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
   COMPONENT
────────────────────────────────────────────────────────────── */
export default function Stands2() {
  useReveal()
  const [activeTier, setActiveTier] = useState<'oro' | 'platino' | 'diamante'>('oro')

  const WA_BASE = 'https://wa.me/584228638329?text='
  const WA_ORO = WA_BASE + encodeURIComponent('Hola, quiero información sobre la Alianza ORO en INNOVA 360')
  const WA_PLATINO = WA_BASE + encodeURIComponent('Hola, quiero información sobre la Alianza PLATINO en INNOVA 360')
  const WA_DIAMANTE = WA_BASE + encodeURIComponent('Hola, quiero información sobre la Alianza DIAMANTE en INNOVA 360')
  const WA_GENERAL = WA_BASE + encodeURIComponent('Hola, quiero información sobre las Alianzas Estratégicas en INNOVA 360')

  return (
    <div
      className="s2-page"
      style={{
        backgroundImage: `url(${fondoImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll',
      }}
    >

      {/* ═══════════════════════════════════
          HERO
      ═══════════════════════════════════ */}
      <section className="s2-hero">
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

          <h1 className="s2-title s2-title--xl s2-title--gradient-gold animate-fade-up" style={{ animationDelay: '160ms' }}>
            ¿Qué lugar quieres<br />que ocupe tu marca?
          </h1>

          <p className="s2-hero-subheadline animate-fade-up" style={{ animationDelay: '200ms' }}>
            Una plataforma para marcas que quieren conectar, posicionarse y liderar.
          </p>

          <div className="s2-hero-dates animate-fade-up" style={{ animationDelay: '240ms' }}>
            <div className="s2-date-badge">
              <span className="s2-date-badge__day">19 · 20 Nov 2026</span>
              <span className="s2-date-badge__label">Encuentro Internacional</span>
            </div>
            <div className="s2-date-badge">
              <span className="s2-date-badge__day">21 Nov 2026</span>
              <span className="s2-date-badge__label">Experiencia INNOVA</span>
            </div>
            <div className="s2-date-badge">
              <span className="s2-date-badge__day">Caracas</span>
              <span className="s2-date-badge__label">Venezuela</span>
            </div>
          </div>

          <div className="s2-hero-cta-group animate-fade-up" style={{ animationDelay: '280ms' }}>
            <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer" className="s2-btn s2-btn--primary s2-btn--lg">
              Quiero ser Aliado
            </a>
            <a href="#alianzas" className="s2-btn s2-btn--ghost s2-btn--lg">
              Ver Opciones
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          STATS
      ═══════════════════════════════════ */}
      <section className="s2-stats">
        <div className="s2-stats-grid">
          {[
            { num: '2',   label: 'Días de encuentro' },
            { num: '+20', label: 'Conferencistas' },
            { num: '+30', label: 'Marcas Aliadas' },
            { num: '+300',label: 'Profesionales' },
          ].map(s => (
            <div key={s.label} className="s2-stat-item reveal">
              <span className="s2-stat-number">{s.num}</span>
              <span className="s2-stat-label">{s.label}</span>
            </div>
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

      {/* ═══════════════════════════════════
          PILLARS / BENEFICIOS
      ═══════════════════════════════════ */}
      <section className="s2-section" style={{ width: '100%', background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(6px)' }}>
        <div className="s2-container">
          <div className="s2-section-header reveal">
            <span className="s2-eyebrow">Los 4 pilares para las marcas</span>
            <h2 className="s2-title s2-title--lg s2-mb-16">
              Más que visibilidad.<br />
              <span className="s2-title--gradient-gold">Una posición estratégica.</span>
            </h2>
            <div className="s2-divider s2-divider--gold" />
          </div>

          <div className="s2-pillars-grid">
            {[
              { n: '01', name: 'Posicionamiento', desc: 'Fortalece la presencia de tu marca frente a una audiencia especializada.' },
              { n: '02', name: 'Visibilidad', desc: 'Multiplica los puntos de contacto dentro de INNOVA 360.' },
              { n: '03', name: 'Conexión', desc: 'Acércate a profesionales, empresas, referentes y potenciales aliados.' },
              { n: '04', name: 'Oportunidades', desc: 'Genera conversaciones y nuevas posibilidades comerciales.' },
            ].map(p => (
              <div key={p.n} className="s2-pillar reveal-scale">
                <span className="s2-pillar__number">{p.n}</span>
                <p className="s2-pillar__name">{p.name}</p>
                <p className="s2-pillar__desc">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ textAlign: 'center', marginTop: '56px' }}>
            <p className="s2-accent-phrase s2-mb-8" style={{ color: 'var(--s2-text-muted)' }}>
              ESTAR ES VISIBILIDAD.
            </p>
            <p className="s2-accent-phrase" style={{ color: 'var(--s2-gold-dark)', fontStyle: 'italic' }}>
              OCUPAR UN LUGAR ES POSICIONAMIENTO.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          EXPERIENCE 360
      ═══════════════════════════════════ */}
      <section className="s2-section" style={{ width: '100%', background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(6px)' }}>
        <div className="s2-container">
          <div className="s2-section-header reveal">
            <span className="s2-eyebrow">Experiencia 360°</span>
            <h2 className="s2-title s2-title--lg s2-mb-16">
              Tu marca dentro de<br />
              <span className="s2-title--gradient-diamond">una experiencia 360°</span>
            </h2>
            <div className="s2-divider" />
            <p className="s2-body s2-body--center" style={{ maxWidth: '560px', margin: '0 auto' }}>
              Diferentes espacios. Diferentes momentos. Múltiples oportunidades de conexión.
            </p>
          </div>

          <div className="s2-exp-grid">
            {[
              { icon: '🎓', name: 'Formación', sub: 'Conocimiento y autoridad' },
              { icon: '🤝', name: 'Networking', sub: 'Relaciones y oportunidades' },
              { icon: '🎙️', name: 'Podcast + Medios', sub: 'Contenido y amplificación' },
              { icon: '✨', name: 'Experiencias', sub: 'Interacción y recordación' },
              { icon: '📱', name: 'Digital', sub: 'Visibilidad antes, durante y después' },
              { icon: '🏪', name: 'Zona Expo', sub: 'Exhibición e interacción comercial' },
            ].map(e => (
              <div key={e.name} className="s2-exp-card reveal-scale">
                <span className="s2-exp-card__icon">{e.icon}</span>
                <p className="s2-exp-card__name">{e.name}</p>
                <p className="s2-exp-card__sub">{e.sub}</p>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ textAlign: 'center', marginTop: '48px' }}>
            <p className="s2-accent-phrase s2-mb-8" style={{ color: 'var(--s2-text)' }}>UNA MARCA.</p>
            <p className="s2-accent-phrase" style={{ color: 'var(--s2-diamond)' }}>MÚLTIPLES PUNTOS DE CONTACTO.</p>
          </div>
        </div>
      </section>

      <section className="s2-section" style={{ width: '100%', backgroundColor: '#050B14', padding: '80px 0' }}>
        <h2 className="why-exhibit-title reveal" style={{ marginBottom: '2rem', width: '100%', textAlign: 'center', color: '#ffffff' }}>
          PLANO DEL EVENTO
        </h2>
        <PlanoViewer />
      </section>

      {/* ═══════════════════════════════════
          ALIANZAS — SELECTOR + CARDS
      ═══════════════════════════════════ */}
      <section id="alianzas" className="s2-section" style={{ width: '100%', background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(6px)' }}>
        <div className="s2-container">
          <div className="s2-section-header reveal">
            <span className="s2-eyebrow">Tipos de Alianzas Estratégicas</span>
            <h2 className="s2-title s2-title--lg s2-mb-16">
              Elige la posición que<br />
              <span className="s2-title--gradient-gold">quieres ocupar</span>
            </h2>
            <div className="s2-divider s2-divider--gold" />
          </div>



          {/* Selector tabs */}
          <div className="s2-tiers-selector">
            <button
              className={`s2-tier-tab s2-tier-tab--oro ${activeTier === 'oro' ? 'active' : ''}`}
              onClick={() => setActiveTier('oro')}
            >
              🟡 ORO
            </button>
            <button
              className={`s2-tier-tab s2-tier-tab--platino ${activeTier === 'platino' ? 'active' : ''}`}
              onClick={() => setActiveTier('platino')}
            >
              ⚪ PLATINO
            </button>
            <button
              className={`s2-tier-tab s2-tier-tab--diamante ${activeTier === 'diamante' ? 'active' : ''}`}
              onClick={() => setActiveTier('diamante')}
            >
              🔵 DIAMANTE
            </button>
          </div>

          {/* ── ORO ── */}
          <div className={`s2-tier-panel ${activeTier === 'oro' ? 'active' : ''}`}>
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
                <div className="s2-tier-card__visual">
                  <div className="s2-tier-stand-visual">
                    <span className="s2-tier-stand-visual__dims">2×2 m</span>
                    <span className="s2-tier-stand-visual__label">Espacio de stand</span>
                    <div className="s2-stand-diagram s2-stand-diagram--oro">TU MARCA</div>
                  </div>
                  <div className="s2-tier-vip">
                    <span className="s2-tier-vip__count">2</span>
                    <span className="s2-tier-vip__label">Credenciales VIP</span>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <span className="s2-eyebrow" style={{ fontSize: '11px' }}>Zona</span>
                    <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, color: 'var(--s2-gold-dark)', fontSize: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      Patrocinante
                    </p>
                  </div>
                </div>
              </div>
              <p className="s2-tier-message">
                HAZTE PRESENTE. CONECTA. EMPIEZA A CONSTRUIR POSICIÓN.
              </p>
            </div>
          </div>

          {/* ── PLATINO ── */}
          <div className={`s2-tier-panel ${activeTier === 'platino' ? 'active' : ''}`}>
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
                <div className="s2-tier-card__visual">
                  <div className="s2-tier-stand-visual">
                    <span className="s2-tier-stand-visual__dims">3×2 m</span>
                    <span className="s2-tier-stand-visual__label">Espacio de stand</span>
                    <div className="s2-stand-diagram s2-stand-diagram--platino">TU MARCA</div>
                  </div>
                  <div className="s2-tier-vip">
                    <span className="s2-tier-vip__count">4</span>
                    <span className="s2-tier-vip__label">Credenciales VIP</span>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <span className="s2-eyebrow" style={{ fontSize: '11px' }}>Zona</span>
                    <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, color: 'var(--s2-silver)', fontSize: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      Preferencial Platino
                    </p>
                  </div>
                </div>
              </div>
              <p className="s2-tier-message">
                CUANDO TU MARCA ESTÁ PRESENTE EN MÁS MOMENTOS, AUMENTA SU CAPACIDAD DE SER RECORDADA.
              </p>
            </div>
          </div>

          {/* ── DIAMANTE ── */}
          <div className={`s2-tier-panel ${activeTier === 'diamante' ? 'active' : ''}`}>
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
                <div className="s2-tier-card__visual">
                  <div className="s2-tier-stand-visual">
                    <span className="s2-tier-stand-visual__dims">4×2 m</span>
                    <span className="s2-tier-stand-visual__label">Stand Premium</span>
                    <div className="s2-stand-diagram s2-stand-diagram--diamante">TU MARCA</div>
                  </div>
                  <div className="s2-tier-vip">
                    <span className="s2-tier-vip__count">6</span>
                    <span className="s2-tier-vip__label">Credenciales VIP</span>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <span className="s2-eyebrow" style={{ fontSize: '11px' }}>Zona</span>
                    <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, color: 'var(--s2-diamond)', fontSize: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      Premium Diamante
                    </p>
                  </div>
                </div>
              </div>
              <p className="s2-tier-message">
                NO SOLO ESTAR PRESENTE. OCUPAR LA POSICIÓN MÁS ALTA.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════
          COMPARISON TABLE
      ═══════════════════════════════════ */}
      <section className="s2-section" style={{ width: '100%', background: 'rgba(240,245,255,0.82)', backdropFilter: 'blur(6px)' }}>
        <div className="s2-container">
          <div className="s2-section-header reveal">
            <span className="s2-eyebrow">Comparación completa</span>
            <h2 className="s2-title s2-title--lg s2-mb-16">Beneficio por beneficio</h2>
            <div className="s2-divider" />
          </div>

          <div className="s2-table-wrap reveal">
            <table className="s2-table">
              <thead>
                <tr>
                  <th>Beneficio</th>
                  <th className="col-oro">🟡 ORO</th>
                  <th className="col-platino">⚪ PLATINO</th>
                  <th className="col-diamante">🔵 DIAMANTE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Inversión</td>
                  <td><span className="s2-td-highlight s2-td-oro">USD 1.500</span></td>
                  <td><span className="s2-td-highlight s2-td-platino">USD 2.500</span></td>
                  <td><span className="s2-td-highlight s2-td-diamante">USD 3.500</span></td>
                </tr>
                <tr>
                  <td>Espacio de stand</td>
                  <td className="s2-td-oro">2×2 m</td>
                  <td className="s2-td-platino">3×2 m</td>
                  <td className="s2-td-diamante">4×2 m Premium</td>
                </tr>
                <tr>
                  <td>Visibilidad de marca</td>
                  <td>Incluida</td>
                  <td>Ampliada</td>
                  <td className="s2-td-diamante">Máxima</td>
                </tr>
                <tr>
                  <td>Materiales institucionales</td>
                  <td>Seleccionados</td>
                  <td>Incluidos</td>
                  <td className="s2-td-diamante">Destacada</td>
                </tr>
                <tr>
                  <td>Presencia digital</td>
                  <td><span className="s2-check-yes">✓</span></td>
                  <td><span className="s2-check-yes">✓</span></td>
                  <td><span className="s2-check-yes">✓</span></td>
                </tr>
                <tr>
                  <td>Campañas digitales</td>
                  <td><span className="s2-check-no">—</span></td>
                  <td><span className="s2-check-yes">✓</span></td>
                  <td><span className="s2-check-yes">✓</span></td>
                </tr>
                <tr>
                  <td>Actividades complementarias</td>
                  <td><span className="s2-check-no">—</span></td>
                  <td><span className="s2-check-yes">✓</span></td>
                  <td><span className="s2-check-yes">✓</span></td>
                </tr>
                <tr>
                  <td>Networking exclusivo</td>
                  <td><span className="s2-check-no">—</span></td>
                  <td><span className="s2-check-no">—</span></td>
                  <td><span className="s2-check-yes">✓</span></td>
                </tr>
                <tr>
                  <td>Entrevistas / Podcast</td>
                  <td><span className="s2-check-no">—</span></td>
                  <td><span className="s2-check-no">—</span></td>
                  <td><span className="s2-check-yes">✓</span></td>
                </tr>
                <tr>
                  <td>Lanzamiento comercial</td>
                  <td><span className="s2-check-no">—</span></td>
                  <td><span className="s2-check-no">—</span></td>
                  <td><span className="s2-check-yes">✓</span></td>
                </tr>
                <tr>
                  <td>Reels / videos oficiales</td>
                  <td><span className="s2-check-no">—</span></td>
                  <td><span className="s2-check-no">—</span></td>
                  <td><span className="s2-check-yes">✓</span></td>
                </tr>
                <tr>
                  <td>Pantalla LED + elementos destacados</td>
                  <td><span className="s2-check-no">—</span></td>
                  <td><span className="s2-check-no">—</span></td>
                  <td><span className="s2-check-yes">✓</span></td>
                </tr>
                <tr>
                  <td>Mención precongreso Unión Radio</td>
                  <td><span className="s2-check-no">—</span></td>
                  <td><span className="s2-check-no">—</span></td>
                  <td><span className="s2-check-yes">✓</span></td>
                </tr>
                <tr>
                  <td>Credenciales VIP</td>
                  <td className="s2-td-oro">Hasta 2</td>
                  <td className="s2-td-platino">Hasta 4</td>
                  <td className="s2-td-diamante">Hasta 6</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="reveal" style={{ textAlign: 'center', marginTop: '40px' }}>
            <p className="s2-accent-phrase s2-mb-8" style={{ color: 'var(--s2-text-muted)' }}>EL NIVEL CAMBIA.</p>
            <p className="s2-accent-phrase" style={{ color: 'var(--s2-gold-dark)' }}>
              EL OBJETIVO ES EL MISMO: HACER QUE TU MARCA OCUPE UN LUGAR.
            </p>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════
          EXPERIENCIAS DE MARCA
      ═══════════════════════════════════ */}
      <section className="s2-section" style={{ width: '100%', background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(6px)' }}>
        <div className="s2-container">
          <div className="s2-section-header reveal">
            <span className="s2-eyebrow">Experiencias de Marca</span>
            <h2 className="s2-title s2-title--lg s2-mb-16">
              Aprópiate de un<br />
              <span className="s2-title--gradient-blue">momento específico</span>
            </h2>
            <div className="s2-divider" />
            <p className="s2-body s2-body--center" style={{ maxWidth: '560px', margin: '0 auto' }}>
              Hay marcas que buscan presencia en todo el evento. Otras quieren apropiarse de un momento de alto valor.
            </p>
          </div>

          <div className="s2-exp-brand-grid">
            <div className="s2-exp-brand-card reveal-left">
              <span className="s2-exp-brand-card__icon">🎤</span>
              <h3 className="s2-exp-brand-card__name">Experiencia Académica</h3>
              <p style={{ color: 'var(--s2-text-muted)', fontSize: '14px', marginBottom: '12px' }}>
                Patrocinio de Conferencista
              </p>
              <span className="s2-exp-brand-card__price">USD 1.500</span>
              <ul className="s2-exp-brand-list">
                <li>Asociación de la marca con conocimiento y autoridad</li>
                <li>Mención antes y después de la conferencia</li>
                <li>Logo en pantalla principal durante la presentación</li>
                <li>Presencia en la agenda oficial del evento</li>
                <li>Publicación en redes sociales del evento</li>
                <li>Credenciales VIP incluidas</li>
                <li>Material promocional durante la conferencia</li>
              </ul>
              <a href={WA_BASE + encodeURIComponent('Hola, quiero información sobre el Patrocinio de Conferencista en INNOVA 360')} target="_blank" rel="noopener noreferrer" className="s2-btn s2-btn--primary s2-btn--full">
                Quiero este Patrocinio
              </a>
            </div>

            <div className="s2-exp-brand-card reveal-right">
              <span className="s2-exp-brand-card__icon">🥂</span>
              <h3 className="s2-exp-brand-card__name">Experiencia de Clausura</h3>
              <p style={{ color: 'var(--s2-text-muted)', fontSize: '14px', marginBottom: '12px' }}>
                Patrocinio de Cierre
              </p>
              <span className="s2-exp-brand-card__price">USD 1.500</span>
              <ul className="s2-exp-brand-list">
                <li>Exclusividad como patrocinador oficial del brindis de clausura</li>
                <li>Presencia de marca en el área del brindis</li>
                <li>Mención especial durante la ceremonia de cierre</li>
                <li>Logo en pantalla LED durante el brindis</li>
                <li>Presencia en material relacionado con la clausura</li>
                <li>Publicación de agradecimiento en redes sociales</li>
              </ul>
              <a href={WA_BASE + encodeURIComponent('Hola, quiero información sobre el Patrocinio de Clausura en INNOVA 360')} target="_blank" rel="noopener noreferrer" className="s2-btn s2-btn--primary s2-btn--full">
                Quiero este Patrocinio
              </a>
            </div>
          </div>

          <div className="reveal" style={{ textAlign: 'center', marginTop: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
            <img 
              src={experiencia1Img} 
              alt="Experiencia de Marca" 
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px' }} 
              loading="lazy" 
            />
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
          <div className="reveal">
            <span className="s2-eyebrow">Llamado final</span>
            <h2 className="s2-title s2-title--lg s2-mb-16">
              Haz parte de<br />
              <span className="s2-title--gradient-gold">INNOVA 360</span>
            </h2>
            <div className="s2-divider s2-divider--gold" />
          </div>

          <div className="reveal s2-mb-48" style={{ marginTop: '32px' }}>
            <p style={{ color: '#94a3b8', fontSize: '18px', lineHeight: '1.7', maxWidth: '600px', margin: '0 auto 24px', textAlign: 'center' }}>
              19 y 20 de noviembre · Encuentro Internacional de Estética y Bienestar.<br />
              21 de noviembre · Experiencia INNOVA.<br />
              <strong style={{ color: '#fff' }}>Caracas · Venezuela</strong>
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center', marginTop: '32px' }}>
              <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer" className="s2-btn s2-btn--whatsapp s2-btn--lg">
                📲 Contactar por WhatsApp
              </a>
              <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer" className="s2-btn s2-btn--primary s2-btn--lg">
                Quiero información sobre las Alianzas
              </a>
            </div>
          </div>

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
