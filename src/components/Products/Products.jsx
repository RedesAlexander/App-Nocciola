import { Link } from 'react-router-dom';
import './Products.css';
import ProductCard from './ProductCard/ProductCard';

function Products() {
  //LISTA DE PRUEBA
  const products = [
  {
    id: 1,
    name: "Creamy Almond 66% - 200g",
     image: "/img/MockupAlmendra.png",
    shortDescription: "Creamy Pistachio vibes only - Natural, nutritious, and crazy delicious!",
    story:
      "Creamy Almond, handcrafted in Jijona, Spain. With 64% Spanish almonds, honey, and sugar. A natural and nutritious food.",
    ingredients:
      "Almond (66%), sugar, honey (10%), glucose-fructose, émulsifiant (monostéarate de glycérine), monostearate), EGG white. ",
    allergens:
      "This product contains almonds, eggs, milk, and soy, and may also include traces of sesame and other tree nuts."
  }, {
    id: 2,
    name: "Creamy Pistachio",
     image: "/img/MockupPistacho.png",
    shortDescription: "Creamy Almonds vibes only - natural, nutritious and delicious.",
    story:
      "Pistachio Spread Artisan product crafted in Valladolid, Spain. Contains 45% roasted Spanish pistachios. Natural and nutritious.",
    ingredients:
      "Roasted pistachios (60%), sugar, extra virgin olive oil, sea salt. ",
    allergens:
      "This product may contain traces of sesame and other tree nuts."
  }
];
  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="products-grid">
            {/* ///////Almond 
          <Link to="/products/creamy-almond" className="product-card">
            <div className="product-image-placeholder">
              <p>IMAGEN CREAMY ALMOND</p>
            </div>
          </Link>

           ///////Pistachio  
          <Link to="/products/creamy-pistachio" className="product-card">
            <div className="product-image-placeholder">
              <p>IMAGEN PISTACHIO CREAM</p>
            </div>
          </Link> */}
           {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    

          
        </div>
      </div>
    </section>
  );
}

export default Products;
