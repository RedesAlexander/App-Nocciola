import "./ProductInfoSection.css";
import { useLocation } from "react-router-dom";

function ProductInfoSection() {
  const location = useLocation();
  const product = location.state?.product;

  // Protección si se entra sin datos
  if (!product) {
    return (
      <section className="product-info-error">
        <h2>No se encontró información del producto.</h2>
      </section>
    );
  }

  return (
    <section className="product-sheet">
      <div className="cardInfo_container">
        {/* TÍTULO */}
        <h1 className="product-sheet__title">
          {product.name.toUpperCase()}
        </h1>

        {/* CONTENIDO PRINCIPAL */}
        <div className="product-sheet__content">
          
          {/* IZQUIERDA (IMAGEN) */}
          <div className="product-sheet__left">
            <div className="product-sheet__image-box">
              <img
                src={product.image}
                alt={product.name}
                className="product-sheet__image"
              />
            </div>
          </div>

          {/* DERECHA (TEXTO) */}
          <div className="product-sheet__right">
            <p className="product-sheet__description">
              {product.story}
            </p>

            <div className="product-sheet__block">
              <h2>INGREDIENTS:</h2>
              <p>{product.ingredients}</p>
            </div>

            <div className="product-sheet__block">
              <h2>ALLERGENS:</h2>
              <p>{product.allergens}</p>
            </div>
          </div>
        </div>

        {/* FOOTER INFERIOR (ALINEADO) */}
        <div className="product-sheet__bottom">
          <p className="product-sheet__origin-left">MADE IN SPAIN</p>

          <div className="product-sheet__footer">
            <p className="product-sheet__origin-right">Product of Spain</p>
            <img
              src="/img/spain_flag.jpg"
              alt="Spain flag"
              className="product-sheet__flag"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductInfoSection;