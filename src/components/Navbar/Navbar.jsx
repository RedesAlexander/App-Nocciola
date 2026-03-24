import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
    return () => document.body.classList.remove('no-scroll');
  }, [open]);

  const isActive = (path) => (location.pathname === path ? 'active' : '');

  return (
    <>
      <header className={`header ${open ? 'menu-open' : ''}`}>
        <div className="container">
          <div className="header-content">

            {/* BOTÓN: icono de 3 líneas (hamburger) */}
            <button
              className={`hamburger ${open ? 'is-open' : ''}`}
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <svg className="icon-menu" width="28" height="28" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <g className="menu-lines" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line className="line line1" x1="3" y1="6" x2="21" y2="6" />
                  <line className="line line2" x1="3" y1="12" x2="21" y2="12" />
                  <line className="line line3" x1="3" y1="18" x2="21" y2="18" />
                </g>
              </svg>
            </button>

            {/* NAV IZQUIERDA: 2 primeras palabras */}
            <nav className="nav nav-left" aria-hidden={open}>
              <ul className="nav-list">
                <li className="nav-item">
                  <Link to="/products" className={`nav-link ${isActive('/products')}`}>
                    PRODUCTS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/where-to-buy" className={`nav-link ${isActive('/where-to-buy')}`}>
                    WHERE TO BUY
                  </Link>
                </li>
              </ul>
            </nav>

            {/* LOGO (centrado siempre) */}
            <div className="logo logo-center">
              <Link to="/" onClick={() => setOpen(false)}>
                <img src="/img/LOGO_NOCCIOLA.jpg" alt="Nocciola Logo" />
              </Link>
            </div>

            {/* NAV DERECHA: 3 últimas palabras */}
            <nav className="nav nav-right nav-desktop" aria-hidden={open}>
              <ul className="nav-list">
                <li className="nav-item">
                  <Link to="/about" className={`nav-link ${isActive('/about')}`}>
                    ABOUT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>
                    CONTACT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/lupa" className={`nav-link ${isActive('/lupa')}`}>
                    LUPA
                  </Link>
                </li>
              </ul>
            </nav>

          </div>
        </div>
      </header>

      {/* OVERLAY para cerrar sidebar */}
      <div className={`overlay ${open ? 'visible' : ''}`} onClick={() => setOpen(false)} />

      {/* SIDEBAR móvil (todas las opciones apiladas) */}
      <aside className={`sidebar ${open ? 'open' : ''}`} aria-hidden={!open}>
        <nav>
          <ul className="sidebar-list">
            <li><Link to="/products" onClick={() => setOpen(false)}>PRODUCTS</Link></li>
            <li><Link to="/where-to-buy" onClick={() => setOpen(false)}>WHERE TO BUY</Link></li>
            <li><Link to="/about" onClick={() => setOpen(false)}>ABOUT</Link></li>
            <li><Link to="/contact" onClick={() => setOpen(false)}>CONTACT</Link></li>
            <li><Link to="/lupa" onClick={() => setOpen(false)}>LUPA</Link></li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Navbar;
