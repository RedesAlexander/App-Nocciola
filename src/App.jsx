import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import CreamyAlmond from './components/Products/CreamyAlmond/CreamyAlmond';
import CreamyPistachio from './components/Products/CreamyPistachio/CreamyPistachio';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/contact';
import WhereToBuy from './components/Where-to-buy/Where-to-buy';
import Recipes from './components/Recipes/Recipes';
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions'
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy'

import './App.css';
import ProductInfoSection from './components/Products/ProductInfoSection/ProductInfoSection';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/creamy-almond" element={<CreamyAlmond />} />
          <Route path="/products/creamy-pistachio" element={<CreamyPistachio />} />
          <Route path="/about" element={<About />} />
          <Route path="/where-to-buy" element={<WhereToBuy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/product_info" element={<ProductInfoSection />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;