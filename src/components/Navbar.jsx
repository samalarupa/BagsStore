import { motion } from 'framer-motion';
  import { useState } from 'react';
  import { Menu, X } from 'lucide-react';
  import { Link } from 'react-router-dom';
  import Home from './Home';

  export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
      { name: 'Home', href: '/Home' },
      { name: 'Collections', href: '/collections' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },

    ];

    return (
      <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-95 backdrop-blur-md z-50">
        <div className="container mx-auto px-8 py-6 flex justify-between items-center">
          <Link to="/" className="text-3xl font-serif text-white tracking-widest">AURUM</Link>
          <div className="hidden md:flex space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-white hover:text-gold-400 transition-colors font-light text-sm tracking-widest relative group"
              >
                {item.name.toUpperCase()}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-400 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isOpen && (
          <motion.div
            className="md:hidden bg-black py-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="container mx-auto px-8 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-white hover:text-gold-400 transition-colors font-light text-sm tracking-widest"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name.toUpperCase()}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    );
  }