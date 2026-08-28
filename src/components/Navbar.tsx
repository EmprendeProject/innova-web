import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <span className="navbar-brand">INNOVA <span className="navbar-brand-accent">360</span></span>
        <div className="navbar-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `navbar-link${isActive ? ' navbar-link--active' : ''}`}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/entradas"
            className={({ isActive }) => `navbar-link${isActive ? ' navbar-link--active' : ''}`}
          >
            Entradas
          </NavLink>
          <NavLink
            to="/stands2"
            className={({ isActive }) => `navbar-link${isActive ? ' navbar-link--active' : ''}`}
          >
            Stands
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
