import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();
  
  // verifica si la ruta esta activa
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">Nocciola,</Link>
          </div>
          
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/products" className={`nav-link ${isActive('/products')}`}>PRODUCTS</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className={`nav-link ${isActive('/about')}`}>ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>CONTACT</Link>
              </li>
              <li className="nav-item">
                <Link to="/where-to-buy" className={`nav-link ${isActive('/where-to-buy')}`}>WHERE TO BUY</Link>
              </li>
              <li className="nav-item">
                <Link to="/recipes" className={`nav-link ${isActive('/recipes')}`}>RECIPES</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
