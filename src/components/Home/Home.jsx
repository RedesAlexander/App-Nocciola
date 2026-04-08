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
                Nut butters and Plant-based drink. Anytime, anywhere, enjoy Nocciola, - Natural, nutritious, and
                crazy delicious.!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="images-placeholder">
        <img
          onClick={() => navigate("/products")}
          src="/img/home1.PNG"
          alt="Nocciola Home 1"
          className="home-gallery-img"
        />
        <img
          onClick={() => navigate("/products")}
          src="/img/home2.PNG"
          alt="Nocciola Home 2"
          className="home-gallery-img"
        />
        <img
          onClick={() => navigate("/products")}
          src="/img/home3.PNG"
          alt="Nocciola Home 3"
          className="home-gallery-img"
        />
      </div>

    </section>
  );
}

export default Home;
