import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">

          {/* IZQUIERDA */}
          <nav className="nav nav-left">
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

          {/* CENTRO - LOGO */}
          <div className="logo">
            <Link to="/">NOCCIOLA</Link>
          </div>

          {/* DERECHA */}
          <nav className="nav nav-right">
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
  );
}

export default Navbar;