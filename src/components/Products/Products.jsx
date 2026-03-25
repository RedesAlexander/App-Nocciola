import { Link } from 'react-router-dom';
import './Products.css';
import ProductCard from './ProductCard/ProductCard';

function Products() {
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
          <ProductCard
       image="img/MockupAlmendra.png"
        name="MockupAlmendra"
      />
          <ProductCard
       image="img/MockupPistacho.png"
        name="MockupPistacho"
      />
          <ProductCard
       image="img/MockupPistacho.png"
        name="MockupPistacho"
      />
          <ProductCard
       image="img/MockupPistacho.png"
        name="MockupPistacho"
      />
    

          
        </div>
      </div>
    </section>
  );
}

export default Products;
