import { useState } from 'react'
import '../styles/Faq.css'

interface FaqItem {
  question: string
  answer: string
}

const faqs: FaqItem[] = [
  {
    question: '¿Qué es Innova 360?',
    answer:
      'Innova 360 es un Expo Congreso Internacional de Estética y Bienestar que reúne a los principales profesionales, marcas y emprendedores del sector en un solo lugar. Un evento de dos días lleno de conferencias, talleres, networking y una expo feria con los mejores productos y servicios.',
  },
  {
    question: '¿Cuándo y dónde se realizará el evento?',
    answer:
      'El evento se realizará los días 19 y 20 de noviembre de 2026 en el Centro Comercial Líder. El horario de apertura de puertas y detalles de ubicación se compartirán próximamente.',
  },
  {
    question: '¿Qué incluye cada tipo de entrada?',
    answer:
      'Ofrecemos tres tipos de entrada: Expoferia (acceso a la expo feria), VIP (acceso a la expo feria + conferencias) y Diamante (acceso completo con beneficios premium, asientos preferenciales y kit exclusivo). Puedes ver los detalles completos en la sección de entradas.',
  },
  {
    question: '¿Cómo puedo comprar un stand?',
    answer:
      'Para adquirir un stand, puedes comunicarte directamente con nuestro equipo vía WhatsApp. Te enviaremos la información de los paquetes disponibles, medidas, ubicación en el plano y precios. ¡Los espacios son limitados!',
  },
  {
    question: '¿Qué tamaños de stands están disponibles?',
    answer:
      'Contamos con diferentes opciones de stands que se adaptan a tu marca: desde espacios estándar hasta islas premium con mayor visibilidad. Cada paquete incluye diferentes beneficios de branding y exposición.',
  },
  {
    question: '¿Qué beneficios obtengo como patrocinador?',
    answer:
      'Como patrocinador obtienes visibilidad premium antes, durante y después del evento: logo en materiales promocionales, menciones en redes sociales, espacio destacado en la expo, minutos en tarima para presentar tu marca y mucho más, dependiendo del nivel de patrocinio.',
  },
  {
    question: '¿Puedo pagar en cuotas?',
    answer:
      'Sí, ofrecemos planes de pago flexible tanto para entradas como para stands y patrocinios. Contáctanos por WhatsApp para conocer las opciones de financiamiento disponibles.',
  },
  {
    question: '¿El evento tiene estacionamiento?',
    answer:
      'Sí, el Centro Comercial Líder cuenta con amplio estacionamiento disponible para todos los asistentes del evento.',
  },
]

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="faq-section" id="faq">
      {/* Heading */}
      <div className="faq-heading">
        <span className="faq-badge">FAQ</span>
        <h2 className="faq-title">PREGUNTAS FRECUENTES</h2>
        <p className="faq-subtitle">
          Resolvemos tus dudas sobre el evento, entradas, stands y patrocinios.
        </p>
      </div>

      {/* Accordion */}
      <div className="faq-list">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`faq-item${openIndex === i ? ' faq-item--open' : ''}`}
            style={{ animationDelay: `${i * 0.06}s` }}
          >
            <button
              className="faq-question"
              onClick={() => toggle(i)}
              aria-expanded={openIndex === i}
              aria-controls={`faq-answer-${i}`}
              id={`faq-question-${i}`}
            >
              <span className="faq-question-text">{faq.question}</span>
              <span className="faq-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M5 8L10 13L15 8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
            <div
              className="faq-answer-wrapper"
              id={`faq-answer-${i}`}
              role="region"
              aria-labelledby={`faq-question-${i}`}
            >
              <p className="faq-answer">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Faq
