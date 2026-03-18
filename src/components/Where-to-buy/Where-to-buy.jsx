import './WhereToBuy.css';

function WhereToBuy() {
  return (
    <main className="where-to-buy">
      <div className="where-to-buy-cards">

        {/* Tarjeta 1: Pistachio Cream */}
        <div className="where-to-buy-card">
          <div className="where-to-buy-top bg-pistachio">
            <img
              src="ruta-de-tu-imagen-pistacho.png"
              alt="Pistachio Cream Jar"
              className="where-to-buy-image"
            />
          </div>
          <div className="where-to-buy-bottom">
            <span className="where-to-buy-name">Pistachio Cream</span>
            <button className="where-to-buy-btn">BUY NOW</button>
          </div>
        </div>

        {/* Tarjeta 2: Creamy Almond */}
        <div className="where-to-buy-card">
          <div className="where-to-buy-top bg-almond">
            <img
              src="ruta-de-tu-imagen-almendra.png"
              alt="Creamy Almond Jar"
              className="where-to-buy-image"
            />
          </div>
          <div className="where-to-buy-bottom">
            <span className="where-to-buy-name">Creamy Almond</span>
            <button className="where-to-buy-btn">BUY NOW</button>
          </div>
        </div>

      </div>
    </main>
  );
}