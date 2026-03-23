import { useState } from "react";
import "./Where-to-buy.css";

// "Diccionario" URLs
const productLinks = {
  pistachio: {
    EU: "https://super-market-gourmet.com/Supermercado_Practica/public/producto.php?id=68dbb2128bf6a37edb769eb2&categoria=NOCCIOLA",
    USA: "https://super-market-gourmet.com/Supermercado_Practica/public/producto.php?id=68dbb2128bf6a37edb769eb2&categoria=NOCCIOLA",
    UK: "https://super-market-gourmet.com/Supermercado_Practica/public/producto.php?id=68dbb2128bf6a37edb769eb2&categoria=NOCCIOLA"
  },
  almond: {
    EU: "https://super-market-gourmet.com/Supermercado_Practica/public/producto.php?id=6899d44325d53643ce0e513d&categoria=NOCCIOLA",
    USA: "https://super-market-gourmet.com/Supermercado_Practica/public/producto.php?id=6899d58025d53643ce0e513e&categoria=NOCCIOLA",
    UK: "https://super-market-gourmet.com/Supermercado_Practica/public/producto.php?id=6899d58025d53643ce0e513e&categoria=NOCCIOLA"
  }
};

function WhereToBuy() {
  // Estado para guardar la región seleccionada (por defecto 'EU')
  const [region, setRegion] = useState("EU");

  // Función manejadora para los botones
  const handleBuyClick = (productKey) => {
    const url = productLinks[productKey][region];
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="where-to-buy">

      {/* Selector de Región */}
      <div className="region-selector-container">
        <label htmlFor="region-select">Region: </label>
        <select
          id="region-select"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="region-dropdown"
        >
          <option value="EU">EU</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>
      </div>

      <div className="where-to-buy-cards">

        {/* Tarjeta 1: Pistachio Cream */}
        <div className="where-to-buy-card">
          <div className="where-to-buy-top bg-pistachio">
            <img
              src="/img/MockupPistacho.png"
              alt="Pistachio Cream Jar"
              className="where-to-buy-image"
            />
          </div>
          <div className="where-to-buy-bottom">
            <span className="where-to-buy-name">Pistachio Cream</span>
            <button
              className="where-to-buy-btn"
              onClick={() => handleBuyClick('pistachio')}
            >
              BUY NOW
            </button>
          </div>
        </div>

        {/* Tarjeta 2: Creamy Almond */}
        <div className="where-to-buy-card">
          <div className="where-to-buy-top bg-almond">
            <img
              src="/img/MockupAlmendra.png"
              alt="Creamy Almond Jar"
              className="where-to-buy-image"
            />
          </div>
          <div className="where-to-buy-bottom">
            <span className="where-to-buy-name">Creamy Almond</span>
            <button
              className="where-to-buy-btn"
              onClick={() => handleBuyClick('almond')}
            >
              BUY NOW
            </button>
          </div>
        </div>

      </div>
    </main>
  );
}

export default WhereToBuy;