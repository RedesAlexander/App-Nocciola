import "./Where-to-buy.css";

function WhereToBuy() {
  return (
    <main className="where-to-buy">
      <div className="where-to-buy-cards">

        {/* Tarjeta 1: Pistachio Cream */}
        <div className="where-to-buy-card">
          <div className="where-to-buy-top bg-pistachio">
            <img
              src="public/img/pistachocream.jpg"
              alt="Pistachio Cream Jar"
              className="where-to-buy-image"
            />
          </div>
          <div className="where-to-buy-bottom">
            <span className="where-to-buy-name">Pistachio Cream</span>
            <button
            className="where-to-buy-btn"
            onClick={() => window.open("https://super-market-gourmet.com/Supermercado_Practica/public/producto.php?id=68dbb2128bf6a37edb769eb2&categoria=NOCCIOLA",
                "_blank", "noopener,noreferrer")}>BUY NOW</button>
          </div>
        </div>

        {/* Tarjeta 2: Creamy Almond */}
        <div className="where-to-buy-card">
          <div className="where-to-buy-top bg-almond">
            <img
              src="public/img/turroncream.png"
              alt="Creamy Almond Jar"
              className="where-to-buy-image"
            />
          </div>
          <div className="where-to-buy-bottom">
            <span className="where-to-buy-name">Creamy Almond</span>
            <button
            className="where-to-buy-btn"
            onClick={() => window.open("https://super-market-gourmet.com/Supermercado_Practica/public/producto.php?id=6899d44325d53643ce0e513d&categoria=NOCCIOLA",
                "_blank", "noopener,noreferrer")}>BUY NOW</button>
          </div>
        </div>

      </div>
    </main>
  );
}
export default WhereToBuy;