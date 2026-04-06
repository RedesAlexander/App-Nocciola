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
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;