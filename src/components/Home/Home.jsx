import "./Home.css";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <section id="home" className="home-section">
      <div className="home-video-container">
        <div className="video-placeholder">
          <img 
            src="/img/EstampadoLogoNocciola.jpg"
            alt="Hero Nocciola"
          />
        </div>
        <div className="images-placeholder">
        <img onClick={() => navigate("/products")}
            src="/img/Nocciola_Almond_pstachio.png"
            alt="Hero Nocciola"
          />
           <img onClick={() => navigate("/products")}
            src="/img/TurronCream6.png"
            alt="Hero Nocciola"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
