import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  
  return (
    <section id="home" className="home-section">
      <div className="home-hero-container">
        <div className="home-hero-content">
          <div className="home-hero-text">
            <img
              src="/img/nocciolaLogoBlanco.png"
              alt="Nocciola Logo"
              className="home-hero-logo"
            />
            <div className="home-hero-description">
              <p>
                Almonds and Pistachio Creams - Plant-based drink.
                Natural, nutritious and crazy delicious!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="images-placeholder">
        <img 
          onClick={() => navigate("/products")}
          src="/img/Nocciola_Almond_pstachio.png"
          alt="Nocciola Products"
        />
        <img 
          onClick={() => navigate("/products")}
          src="/img/TurronCream6.png"
          alt="Nocciola Turron"
        />
      </div>
    </section>
  );
}

export default Home;