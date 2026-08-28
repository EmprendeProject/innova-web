import React from 'react';
import '../styles/FloatingWhatsApp.css';
import whatsappLogo from '../assets/elementos graficos/logo whatsapp.png';

const FloatingWhatsApp: React.FC = () => {
  // Número de WhatsApp al que redirigirá (puedes cambiarlo aquí)
  const phoneNumber = '584120000000'; // Formato internacional sin +
  const message = 'Hola, quiero información sobre INNOVA 360';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      className="floating-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <img src={whatsappLogo} alt="WhatsApp" className="floating-whatsapp-img" />
    </a>
  );
};

export default FloatingWhatsApp;
