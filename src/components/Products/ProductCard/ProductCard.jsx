import "./ProductCard.css";

function ProductCard({ image, name }) {
  return (
    <div className="product-card">
      <div className="product-card__image-wrapper">
        <img src={image} alt={name} className="product-card__image" />
      </div>
      <h3 className="product-card__title">{name}</h3>
    </div>
  );
}

export default ProductCard;