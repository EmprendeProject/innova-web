import { Activity, Target, Users, Zap } from 'lucide-react'
import '../styles/WhyExhibit.css'

export default function WhyExhibit() {
  const reasons = [
    {
      icon: <Users className="why-icon" />,
      title: 'Audiencia Selecta',
      description: 'Acceso directo a profesionales del sector salud, medicina estética y recuperación postquirúrgica.'
    },
    {
      icon: <Target className="why-icon" />,
      title: 'Posicionamiento',
      description: 'Destaca tu marca en el evento más exclusivo y vanguardista de la industria.'
    },
    {
      icon: <Activity className="why-icon" />,
      title: 'Networking Estratégico',
      description: 'Conecta con líderes de la industria, directores de clínicas especializadas y distribuidores clave.'
    },
    {
      icon: <Zap className="why-icon" />,
      title: 'Innovación y Tecnología',
      description: 'Demuestra tus últimos avances y aparatología ante un público altamente especializado.'
    }
  ]

  return (
    <section className="why-exhibit-container">
      <div className="why-exhibit-bg-glow"></div>
      
      <h2 className="why-exhibit-title reveal">
        ¿POR QUÉ EXPONER TU MARCA EN <span>INNOVA 360</span>?
      </h2>
      
      <div className="why-exhibit-grid">
        {reasons.map((reason, index) => (
          <div 
            key={index} 
            className="why-card reveal-scale"
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="why-card-icon-wrapper">
              {reason.icon}
            </div>
            <h3 className="why-card-title">{reason.title}</h3>
            <p className="why-card-desc">{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
