import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/contact'; 
import WhereToBuy from './components/Where-to-buy/Where-to-buy';
import Recipes from './components/Recipes/Recipes';
import './App.css';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/where-to-buy" element={<WhereToBuy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;