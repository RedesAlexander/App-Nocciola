import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/contact';
import './App.css'
import Recipes from './components/Recipes/Recipes'

function App() {
  return (
    <>
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App
