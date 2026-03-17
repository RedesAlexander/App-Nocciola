import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder">
              <p>FALTA FOTO</p>
            </div>
          </div>

          <div className="about-text">
            <h2 className="about-title">Nocciola,</h2>
            <div className="about-description">
              <p>
                Almonds and Pistachio Creams - Plant-based drink.
                Natural, nutritious, and crazy delicious.!
              </p>
              <p className="about-origin">Products of Spain</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
