import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/elementos graficos/logo innova 360.webp';
import ccliderImg from '../assets/elementos graficos/cclider.png';
import '../styles/Homepage.css';

const Homepage: React.FC = () => {
  return (
    <div className="hp-page">
      <div className="hp-bg-glow"></div>
      
      <div className="hp-container">
        
        <img 
          src={logoImg} 
          alt="Innova 360 Logo" 
          className="hp-logo hp-fade-in-up" 
          style={{ animationDelay: '0.1s' }}
        />
        
        <h2 className="hp-subtitle hp-fade-in-up" style={{ animationDelay: '0.15s' }}>
          Congreso Internacional de Postquirúrgico, Estética y Bienestar
        </h2>
        
        <div className="hp-buttons">
          <Link 
            to="/entradas" 
            className="hp-btn hp-btn--primary hp-fade-in-up" 
            style={{ animationDelay: '0.5s' }}
          >
            Adquirir Entradas
          </Link>
          <Link 
            to="/stands" 
            className="hp-btn hp-btn--secondary hp-fade-in-up" 
            style={{ animationDelay: '0.6s' }}
          >
            Información de Stands
          </Link>
        </div>
        
        <div className="hp-event-card hp-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <div className="hp-event-card__dates">
            <div className="hp-event-date">
              <span className="hp-event-date__day">19 · 20</span>
              <span className="hp-event-date__month">Nov 2026</span>
              <span className="hp-event-date__label">Experiencia INNOVA</span>
            </div>
            <div className="hp-event-date__divider"></div>
            <div className="hp-event-date">
              <span className="hp-event-date__day">21</span>
              <span className="hp-event-date__month">Nov 2026</span>
              <span className="hp-event-date__label">Masterclass</span>
            </div>
          </div>
          
          <div className="hp-event-card__location">
            <img src={ccliderImg} alt="CC Líder" className="hp-event-card__bg" />
            <div className="hp-event-card__overlay">
              <div className="hp-event-card__city">CC Líder - Caracas</div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Homepage;
