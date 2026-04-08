import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <img
              src="/img/nocciolaLogoBlanco.png"
              alt="Nocciola Logo"
              className="about-logo"
            />
            <div className="about-description">
              <p>
                Nut butters and Plant-based drink. Anytime, anywhere, enjoy Nocciola, - Natural, nutritious, and
                crazy delicious.!
              </p>
            </div>
            <div className="about-gallery">
              <img
                src="/img/About1.png"
                alt="Nocciola Lifestyle 1"
                className="about-gallery-image"
              />
              <img
                src="/img/About2.png"
                alt="Nocciola Lifestyle 2"
                className="about-gallery-image"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;