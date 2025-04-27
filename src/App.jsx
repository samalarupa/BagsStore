import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Home from './components/Home';
import Auth from './Pages/Auth';
import Contact from './Pages/Contact';
import Collection from './Pages/Collection';
import Cart from './Pages/Cart';
import About from './components/About';


export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/collections" element={<Collection />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}