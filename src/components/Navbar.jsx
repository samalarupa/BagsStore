import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Collections', href: '/collections' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-95 backdrop-blur-md z-50">
      <div className="container mx-auto px-8 py-6 flex justify-between items-center">
        <Link to="/" className="text-3xl font-serif text-[#F5E9D9] tracking-widest">AURUM</Link>
        <div className="hidden md:flex space-x-12">
          {navItems.map((item) => (
            <motion.div
              key={item.name}
              className="relative group"
              whileHover={{ scale: 1.05 }}
            >
              <Link
                to={item.href}
                className="text-[#F5E9D9] hover:text-[#D4A56A] transition-colors font-light text-sm tracking-widest"
                onClick={(e) => {
                  const ripple = document.createElement('span');
                  ripple.className = 'absolute bg-[#D4A56A]/30 rounded-full w-16 h-16';
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  ripple.style.left = `${x}px`;
                  ripple.style.top = `${y}px`;
                  ripple.style.transform = 'translate(-50%, -50%) scale(0)';
                  ripple.animate(
                    { transform: 'translate(-50%, -50%) scale(3)', opacity: 0 },
                    { duration: 500, fill: 'forwards' }
                  );
                  e.currentTarget.appendChild(ripple);
                  setTimeout(() => ripple.remove(), 500);
                }}
              >
                {item.name.toUpperCase()}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4A56A] transition-all group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </div>
        <button
          className="md:hidden text-[#F5E9D9] hover:text-[#D4A56A] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <motion.div
          className="md:hidden bg-[#3A2D1E] py-4"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-8 flex flex-col space-y-4">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * navItems.indexOf(item) }}
              >
                <Link
                  to={item.href}
                  className="text-[#F5E9D9] hover:text-[#D4A56A] transition-colors font-light text-sm tracking-widest"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name.toUpperCase()}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}