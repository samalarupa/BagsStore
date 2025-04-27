import { motion } from 'framer-motion';
import { ChevronRight, Star, Heart } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

export default function Collection() {
  const [showQuickView, setShowQuickView] = useState(null);
  const [selectedCollection, setSelectedCollection] = useState('All');
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const collections = ['All', 'Heritage', 'Signature', 'Imperial', 'Bespoke'];
  const products = [
    {
      id: 1,
      title: "Regale Grande Tote",
      price: 12499.00,
      imageUrl: "https://images.unsplash.com/photo-1590739225287-bd31519780c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=90",
      collection: "Heritage",
      isNew: true,
    },
    {
      id: 2,
      title: "Eclat Evening Clutch",
      price: 9299.00,
      imageUrl: "https://i.pinimg.com/736x/10/c8/64/10c864842f17791c99b6fe5c99cbf34c.jpg",
      collection: "Signature",
      isNew: true,
    },
    {
      id: 3,
      title: "Heritage Tote",
      price: 15999.00,
      imageUrl: "https://i.pinimg.com/736x/17/ba/6d/17ba6d12d1279668235a50294b924738.jpg",
      collection: "Heritage",
      rating: 5,
    },
    {
      id: 4,
      title: "Majestic Shoulder Bag",
      price: 12299.00,
      imageUrl: "https://i.pinimg.com/736x/56/53/e4/5653e4062a531f07defdce73b99d534e.jpg",
      collection: "Imperial",
      rating: 5,
    },
    {
      id: 5,
      title: "Opulence Crossbody",
      price: 8799.00,
      imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=90",
      collection: "Signature",
      isNew: true,
    },
    {
      id: 6,
      title: "Imperial Satchel",
      price: 13999.00,
      imageUrl: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=90",
      collection: "Imperial",
      rating: 4,
    },
    {
      id: 7,
      title: "Bespoke Mini Bag",
      price: 10999.00,
      imageUrl: "https://i.pinimg.com/474x/8b/ff/74/8bff74ad9a9567497b139b990160d72d.jpg",
      collection: "Bespoke",
      isNew: true,
    },
    {
      id: 8,
      title: "Sovereign Hobo Bag",
      price: 11999.00,
      imageUrl: "https://images.unsplash.com/photo-1615390681832-135e3cd51f03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=90",
      collection: "Bespoke",
      rating: 5,
    }
  ];

  const filteredProducts = selectedCollection === 'All'
    ? products
    : products.filter(product => product.collection === selectedCollection);

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
          Our Collections
        </motion.h1>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {collections.map(collection => (
            <motion.button
              key={collection}
              className={`px-6 py-2 text-sm tracking-widest font-light transition-colors ${
                selectedCollection === collection
                  ? 'bg-[#D4A56A] text-[#3A2D1E]'
                  : 'border border-[#D4A56A]/30 text-[#F5E9D9] hover:border-[#D4A56A]'
              } relative overflow-hidden group`}
              onClick={() => setSelectedCollection(collection)}
              whileHover={{ scale: 1.02 }}
            >
              <span className="relative z-10">{collection.toUpperCase()}</span>
              <motion.span 
                className="absolute inset-0 bg-[#F5E9D9]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              />
            </motion.button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              {...product}
              onQuickView={() => setShowQuickView(product)}
              onAddToCart={() => {
                addToCart(product);
                navigate('/cart');
              }}
            />
          ))}
        </div>
      </section>
      <Footer />
      {showQuickView && (
        <motion.div
          className="fixed inset-0 bg-[#3A2D1E] bg-opacity-90 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[#3A2D1E] p-8 max-w-5xl w-full relative border border-[#D4A56A]/20"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <button
              className="absolute top-6 right-6 text-[#F5E9D9] hover:text-[#D4A56A] transition-colors"
              onClick={() => setShowQuickView(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="relative">
                <img 
                  src={showQuickView.imageUrl} 
                  alt={showQuickView.title} 
                  className={showQuickView.imageUrl.includes('pinterest') ? 'max-w-[474px] max-h-[474px] object-contain m-auto' : 'w-full h-auto object-cover'} 
                />
                <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 border border-[#D4A56A]/20 -z-10"></div>
              </div>
              <div>
                <h3 className="text-3xl font-serif text-[#F5E9D9] mb-2">{showQuickView.title}</h3>
                <p className="text-[#D4A56A] text-xl mb-6">${showQuickView.price.toFixed(2)}</p>
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-[#D4A56A] fill-[#D4A56A]" />
                    ))}
                  </div>
                  <span className="text-[#B8A38D] text-sm">(27 reviews)</span>
                </div>
                <p className="text-[#B8A38D] mb-8 font-light leading-relaxed">
                  Meticulously handcrafted from the finest Italian calfskin with 24k gold-plated hardware.
                  Each piece undergoes 78 individual quality checks before leaving our atelier.
                </p>
                <div className="mb-8">
                  <p className="text-sm text-[#D4A56A] mb-2 tracking-wider">MATERIALS</p>
                  <p className="text-[#B8A38D] font-light">Full-grain Italian leather, 24k gold-plated brass hardware, silk lining</p>
                </div>
                <div className="mb-8">
                  <p className="text-sm text-[#D4A56A] mb-2 tracking-wider">DIMENSIONS</p>
                  <p className="text-[#B8A38D] font-light">12" W x 8" H x 4" D</p>
                </div>
                <div className="flex flex-col gap-4">
                  <motion.button
                    className="bg-[#D4A56A] text-[#3A2D1E] px-8 py-4 tracking-[0.3em] text-sm font-medium relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => {
                      addToCart(showQuickView);
                      navigate('/cart');
                    }}
                  >
                    <span className="relative z-10">ADD TO CART</span>
                    <motion.span 
                      className="absolute inset-0 bg-[#F5E9D9] translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                    />
                  </motion.button>
                  <motion.button
                    className="border border-[#D4A56A] text-[#F5E9D9] px-8 py-4 tracking-[0.3em] text-sm font-medium relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="relative z-10">BOOK PRIVATE VIEWING</span>
                    <motion.span 
                      className="absolute inset-0 bg-[#D4A56A]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                    />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );

  function ProductCard({ id, title, price, imageUrl, isNew = false, rating = null, onQuickView, onAddToCart }) {
    const [isWishlisted, setIsWishlisted] = useState(false);

    return (
      <motion.div
        className="group relative"
        whileHover={{ y: -10 }}
      >
        <div className="mb-4 relative overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className={imageUrl.includes('pinterest') ? 'w-full h-[500px] object-contain bg-[#3A2D1E]' : 'w-full h-[500px] object-cover'} 
            style={imageUrl.includes('pinterest') ? { padding: '10px', border: '1px solid #D4A56A' } : {}}
          />
          {isNew && (
            <div className="absolute top-4 left-4 bg-[#D4A56A] text-[#3A2D1E] text-xs px-3 py-1 tracking-wider">
              NEW ARRIVAL
            </div>
          )}
          <div className="absolute inset-0 bg-[#3A2D1E] bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
            <motion.button
              className="bg-transparent border border-[#F5E9D9] text-[#F5E9D9] px-6 py-2 tracking-[0.3em] text-xs relative overflow-hidden group-inner"
              onClick={onQuickView}
              whileHover={{ scale: 1.05 }}
            >
              <span className="relative z-10">QUICK VIEW</span>
              <motion.span 
                className="absolute inset-0 bg-[#D4A56A]/20 translate-y-full group-inner-hover:translate-y-0 transition-transform duration-300"
              />
            </motion.button>
            <motion.button
              className="bg-[#D4A56A] text-[#3A2D1E] px-6 py-2 tracking-[0.3em] text-xs relative overflow-hidden group-inner"
              onClick={onAddToCart}
              whileHover={{ scale: 1.05 }}
            >
              <span className="relative z-10">ADD TO CART</span>
              <motion.span 
                className="absolute inset-0 bg-[#F5E9D9] translate-y-full group-inner-hover:translate-y-0 transition-transform duration-300"
              />
            </motion.button>
          </div>
          <motion.button
            className="absolute top-4 right-4 text-[#F5E9D9] hover:text-[#D4A56A] transition-colors"
            onClick={() => setIsWishlisted(!isWishlisted)}
            whileHover={{ scale: 1.1 }}
          >
            <Heart size={24} className={isWishlisted ? "fill-[#D4A56A] stroke-[#D4A56A]" : "stroke-1"} />
          </motion.button>
        </div>
        <h3 className="font-serif text-xl text-[#F5E9D9] mb-1">{title}</h3>
        <div className="flex justify-between items-center">
          <p className="text-[#D4A56A]">${price.toFixed(2)}</p>
          {rating && (
            <div className="flex items-center">
              <Star size={16} className="text-[#D4A56A] fill-[#D4A56A]" />
              <span className="ml-1 text-[#B8A38D] text-sm">{rating}</span>
            </div>
          )}
        </div>
      </motion.div>
    );
  }
}