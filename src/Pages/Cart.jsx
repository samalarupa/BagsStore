import { motion } from 'framer-motion';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cartItems, updateQuantity, removeItem } = useCart();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="w-full bg-[#3A2D1E] font-sans text-[#F5E9D9]">
      <Navbar />
      <section className="container mx-auto px-8 py-24 pt-28">
        <motion.h1
          className="text-4xl md:text-5xl font-serif text-[#F5E9D9] mb-16 text-center relative after:content-[''] after:absolute after:w-16 after:h-px after:bg-[#D4A56A] after:-bottom-6 after:left-1/2 after:-translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Your Cart
        </motion.h1>
        {cartItems.length === 0 ? (
          <motion.p
            className="text-[#B8A38D] text-center text-lg font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Your cart is empty. <Link to="/collections" className="text-[#D4A56A] hover:underline">Explore our collections</Link>.
          </motion.p>
        ) : (
          <div className="grid grid-cols-1 gap-8">
            {cartItems.map(item => (
              <motion.div
                key={item.id}
                className="flex items-center border border-[#D4A56A]/20 p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className={item.imageUrl.includes('pinterest') ? 'w-32 h-32 object-contain bg-[#3A2D1E] p-2 border border-[#D4A56A]/30' : 'w-32 h-32 object-cover'} 
                />
                <div className="flex-grow ml-6">
                  <h3 className="font-serif text-xl text-[#F5E9D9] mb-2">{item.title}</h3>
                  <p className="text-[#D4A56A] mb-4">${item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-4">
                    <motion.button
                      className="text-[#F5E9D9] hover:text-[#D4A56A]"
                      onClick={() => updateQuantity(item.id, -1)}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Minus size={20} />
                    </motion.button>
                    <span className="text-[#F5E9D9]">{item.quantity}</span>
                    <motion.button
                      className="text-[#F5E9D9] hover:text-[#D4A56A]"
                      onClick={() => updateQuantity(item.id, 1)}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Plus size={20} />
                    </motion.button>
                  </div>
                </div>
                <motion.button
                  className="text-[#F5E9D9] hover:text-[#D4A56A] ml-6"
                  onClick={() => removeItem(item.id)}
                  whileHover={{ scale: 1.1 }}
                >
                  <Trash2 size={24} />
                </motion.button>
              </motion.div>
            ))}
            <div className="flex justify-end mt-12">
              <div className="text-right">
                <p className="text-xl text-[#F5E9D9] font-serif mb-4">Subtotal: <span className="text-[#D4A56A]">${subtotal}</span></p>
                <motion.button
                  className="bg-[#D4A56A] text-[#3A2D1E] px-12 py-4 text-sm tracking-[0.3em] font-medium relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  onClick={(e) => {
                    const ripple = document.createElement('span');
                    ripple.className = 'absolute bg-[#F5E9D9]/30 rounded-full w-24 h-24';
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    ripple.style.left = `${x}px`;
                    ripple.style.top = `${y}px`;
                    ripple.style.transform = 'translate(-50%, -50%) scale(0)';
                    ripple.animate(
                      { transform: 'translate(-50%, -50%) scale(4)', opacity: 0 },
                      { duration: 600, fill: 'forwards' }
                    );
                    e.currentTarget.appendChild(ripple);
                    setTimeout(() => ripple.remove(), 600);
                  }}
                >
                  <span className="relative z-10">PROCEED TO CHECKOUT</span>
                  <motion.span 
                    className="absolute inset-0 bg-[#F5E9D9] translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  />
                </motion.button>
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}