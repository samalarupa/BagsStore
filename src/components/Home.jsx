import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle, Star, Quote, ArrowUp, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showQuickView, setShowQuickView] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Luxury hero carousel images
  const heroImages = [
    "https://i.pinimg.com/736x/31/32/88/31328878a23414a4785c0aa47e682005.jpg",
    "https://i.pinimg.com/474x/c0/05/a8/c005a84116e0ebf12e2c1bbf824e4c16.jpg",
    "https://i.pinimg.com/736x/39/2f/32/392f323b2e8f5c4d66a415992eabcfd3.jpg"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const colors = {
    coffeeBrown: '#3A2D1E',
    creamBeige: '#F5E9D9',
    warmCaramel: '#D4A56A',
    softMocha: '#B8A38D',
    oliveGreen: '#6B7D5E',
    campfireOrange: '#FF8C42'
  };

  return (
    <div className="w-full bg-[#3A2D1E] font-sans text-[#F5E9D9]">
      <Navbar />
      
      {/* Improved Hero Section */}
      <section className="mb-24">
        <div className="relative h-screen bg-[#3A2D1E] overflow-hidden">
          {/* Background pattern overlay */}
          <motion.div 
            className="absolute inset-0 opacity-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.01 }}
            transition={{ duration: 1.5 }}
          >
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="luxury-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 20h40M20 0v40" stroke="#D4A56A" strokeWidth="0.5" fill="none" />
                <circle cx="20" cy="20" r="2" fill="#D4A56A" opacity="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#luxury-pattern)" />
            </svg>
          </motion.div>

          {/* Image carousel */}
          <div className="absolute inset-0 flex items-center justify-center mt-25">
            {heroImages.map((img, index) => (
              <motion.div
                key={index}
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, translateX: '20%' }}
                animate={{ 
                  opacity: currentImageIndex === index ? 1 : 0,
                  scale: currentImageIndex === index ? 1 : 1.1,
                  translateX: '20%'
                }}
                transition={{ 
                  opacity: { duration: 1.2, ease: "easeInOut" },
                  scale: { duration: 7, ease: "easeInOut" }
                }}
              >
                <img 
                  src={img} 
                  alt={`Luxury handbag showcase ${index + 1}`} 
                  className="w-full max-w-[800px] h-[80vh] object-contain"
                />
              </motion.div>
            ))}
          </div>

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#3A2D1E]/70 via-[#3A2D1E]/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#3A2D1E]/70 via-transparent to-transparent"></div>

          {/* Gold decorative elements */}
          <motion.div 
            className="absolute right-0 top-1/4 w-1/2 h-px bg-gradient-to-r from-[#D4A56A]/70 to-transparent"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
          <motion.div 
            className="absolute right-0 bottom-1/4 w-1/3 h-px bg-gradient-to-r from-[#D4A56A]/70 to-transparent"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1 }}
          />

          {/* Content */}
          <div className="container mx-auto px-8 h-full flex items-center relative z-10">
            <div className="max-w-3xl">
              {/* Divider */}
              <motion.div
                className="w-16 h-px bg-[#D4A56A] mb-10"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              
              <motion.div
                className="overflow-hidden mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <motion.p 
                  className="text-[#FF8C42] tracking-[0.3em] text-xs mb-4 font-sans font-light"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  CRAFTED EXCELLENCE
                </motion.p>
              </motion.div>
              
              <motion.div className="overflow-hidden mb-6 relative">
                <motion.h1 
                  className="text-5xl md:text-6xl font-sans text-[#F5E9D9] mb-6 leading-tight font-medium tracking-wider"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Artisanal <br />
                  <span className="relative">
                    <span className="text-[#D4A56A]">Luxury</span>
                    <motion.span 
                      className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-[#D4A56A] to-transparent"
                      initial={{ scaleX: 0, originX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: 1.2 }}
                    />
                  </span>
                </motion.h1>
              </motion.div>
              
              <motion.div className="overflow-hidden mb-10 max-w-lg">
                <motion.p 
                  className="text-base text-[#F5E9D9]/90 mb-8 font-sans font-light tracking-wide leading-relaxed"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 0.9 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  Experience handcrafted masterpieces that blend heritage craftsmanship with modern sophistication, redefining luxury.
                </motion.p>
              </motion.div>
              
              <motion.div
                className="flex flex-wrap gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <motion.button
                  className="bg-[#D4A56A] text-[#3A2D1E] px-8 py-3 rounded-none text-xs tracking-[0.2em] font-sans font-medium hover:bg-[#F5E9D9] transition-all relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="relative z-10">SHOP NOW</span>
                  <motion.span 
                    className="absolute inset-0 bg-[#F5E9D9] translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  />
                </motion.button>
                <motion.button
                  className="border border-[#D4A56A] text-[#F5E9D9] px-8 py-3 rounded-none text-xs tracking-[0.2em] font-sans font-medium hover:border-[#F5E9D9] transition-all relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="relative z-10">BOOK CONSULTATION</span>
                  <motion.span 
                    className="absolute inset-0 bg-[#D4A56A]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  />
                </motion.button>
              </motion.div>
            </div>
          </div>

          {/* Circular carousel indicators */}
          <div className="absolute bottom-10 left-8 z-20 flex gap-3">
            {heroImages.map((_, index) => (
              <button 
                key={index} 
                onClick={() => setCurrentImageIndex(index)}
                className="group"
              >
                <motion.div 
                  className={`w-2 h-2 rounded-full ${currentImageIndex === index ? 'bg-[#D4A56A]' : 'bg-[#F5E9D9]/30'} group-hover:bg-[#D4A56A] transition-colors`}
                  whileHover={{ scale: 1.3 }}
                />
              </button>
            ))}
          </div>

          {/* Floating elements */}
          <motion.div 
            className="absolute top-1/4 right-1/4 w-6 h-6 border border-[#D4A56A]/30"
            initial={{ opacity: 0, rotate: 45, y: 15 }}
            animate={{ opacity: 0.4, rotate: 45, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          />
          <motion.div 
            className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-[#FF8C42]/20"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 0.5, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          />
          <motion.div 
            className="absolute top-1/2 right-1/5 w-4 h-4 rounded-full border border-[#F5E9D9]/20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          />

          {/* Subtle scroll indicator */}
          <motion.div 
            className="absolute bottom-8 right-8 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <span className="text-[#F5E9D9]/50 text-[10px] tracking-[0.2em] mb-3 rotate-90">SCROLL</span>
            <motion.div 
              className="w-px h-12 bg-gradient-to-b from-[#F5E9D9]/50 to-transparent"
              animate={{ 
                scaleY: [1, 0.9, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* USP Banner */}
      <section className="py-24 bg-[#3A2D1E] mb-24 border-t border-[#D4A56A]/20">
        <div className="container mx-auto px-8">
          <motion.h2 
            className="text-3xl md:text-4xl font-serif text-[#F5E9D9] mb-16 text-center relative after:content-[''] after:absolute after:w-16 after:h-px after:bg-[#D4A56A] after:-bottom-6 after:left-1/2 after:-translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            The Artistry of Perfection
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="p-8 relative"
            >
              <motion.div 
                className="absolute inset-0 border border-[#D4A56A]/10"
                whileHover={{ borderColor: "rgba(212, 165, 106, 0.3)" }}
              ></motion.div>
              <CheckCircle size={32} className="text-[#D4A56A] mb-6 mx-auto" />
              <h3 className="font-serif text-2xl text-[#F5E9D9] mb-4">Master Artisans</h3>
              <p className="text-[#F5E9D9]/80 font-light tracking-wide leading-relaxed">
                Crafted by masters with three generations of leather expertise.
              </p>
            </motion.div>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-8 relative"
            >
              <motion.div 
                className="absolute inset-0 border border-[#D4A56A]/10"
                whileHover={{ borderColor: "rgba(212, 165, 106, 0.3)" }}
              ></motion.div>
              <CheckCircle size={32} className="text-[#6B7D5E] mb-6 mx-auto" />
              <h3 className="font-serif text-2xl text-[#F5E9D9] mb-4">Rare Materials</h3>
              <p className="text-[#F5E9D9]/80 font-light tracking-wide leading-relaxed">
                Sourced exclusively from the world's finest tanneries.
              </p>
            </motion.div>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-8 relative"
            >
              <motion.div 
                className="absolute inset-0 border border-[#D4A56A]/10"
                whileHover={{ borderColor: "rgba(212, 165, 106, 0.3)" }}
              ></motion.div>
              <CheckCircle size={32} className="text-[#FF8C42] mb-6 mx-auto" />
              <h3 className="font-serif text-2xl text-[#F5E9D9] mb-4">Heritage Assurance</h3>
              <p className="text-[#F5E9D9]/80 font-light tracking-wide leading-relaxed">
                A lifetime guarantee of uncompromising quality.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured In */}
      <section className="py-16 bg-[#3A2D1E] mb-24 border-y border-[#D4A56A]/10">
        <div className="container mx-auto px-8 text-center">
          <motion.p 
            className="text-[#D4A56A] text-sm mb-10 tracking-[0.4em]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            CELEBRATED BY
          </motion.p>
          <div className="flex flex-wrap justify-center gap-16 items-center">
            <motion.img 
              src="https://i.pinimg.com/736x/34/46/bc/3446bcdffe8a233ca3e769adb08b879d.jpg" 
              alt="Vogue" 
              className="h-80 opacity-40" 
              whileHover={{ scale: 1.1, opacity: 0.8 }}
            />
            <motion.img 
              src="https://i.pinimg.com/474x/0f/18/8c/0f188c1e8982813dafd72505f05a44fe.jpg" 
              alt="Elle" 
              className="h-80 opacity-40" 
              whileHover={{ scale: 1.1, opacity: 0.8 }}
            />
            <motion.img 
              src="https://i.pinimg.com/474x/f4/cb/ca/f4cbcaf5531fda41957dab323dc7b458.jpg" 
              alt="Financial Times" 
              className="h-80 opacity-40" 
              whileHover={{ scale: 1.1, opacity: 0.8 }}
            />
            <motion.img 
              src="https://i.pinimg.com/474x/32/d2/fd/32d2fd1ddc6b26468b2105228f4875e8.jpg" 
              alt="Departures" 
              className="h-80 opacity-40 w-64" 
              whileHover={{ scale: 1.1, opacity: 0.8 }}
            />
          </div>
        </div>
      </section>

      {/* Artisan Spotlight */}
      <section className="container mx-auto px-8 mb-24">
        <motion.h2 
          className="text-3xl md:text-4xl font-serif text-[#F5E9D9] mb-16 text-center relative after:content-[''] after:absolute after:w-16 after:h-px after:bg-[#D4A56A] after:-bottom-6 after:left-1/2 after:-translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          The Craftsmanship Legacy
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://i.pinimg.com/736x/25/97/be/2597bed8f5e99743cb23f8b61bc834a1.jpg" 
              alt="Artisan crafting handbag" 
              className="ml-30 w-130 h-170"
            />
            <div className="absolute bottom-0 left-0 w-3/4 h-3/4 border border-[#D4A56A]/20 -z-10 -translate-x-8 translate-y-8"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-[#D4A56A] tracking-[0.4em] text-sm mb-6 mr-5 font-light">OUR PHILOSOPHY</p>
            <h3 className="text-3xl font-serif text-[#F5E9D9] mb-8">Where Tradition Meets Innovation</h3>
            <p className="text-[#F5E9D9]/80 mb-6 font-light leading-relaxed">
              Each AURUM creation manifests generations of expertise, where traditional techniques harmonize with contemporary innovation to produce works of unparalleled excellence.
            </p>
            <p className="text-[#F5E9D9]/80 mb-10 font-light leading-relaxed">
              Our artisans dedicate up to 80 hours to a single piece, ensuring perfection in every detail, from the selection of rare materials to the final hand-finishing.
            </p>
            <motion.button
              className="bg-[#D4A56A] text-[#3A2D1E] px-10 py-4 rounded-none text-sm tracking-[0.3em] font-medium hover:bg-[#F5E9D9] transition-colors"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(212, 165, 106, 0.6)" }}
            >
              DISCOVER THE ATELIER
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="container mx-auto px-8 mb-24">
        <div className="flex flex-wrap justify-between items-end mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-[#FF8C42] tracking-[0.4em] text-sm mb-4 font-light">LATEST CREATIONS</p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#F5E9D9]">New Masterpieces</h2>
          </motion.div>
          <motion.a
            href="/collections/new"
            className="text-[#F5E9D9] hover:text-[#D4A56A] transition-colors font-light text-sm tracking-widest flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ x: 5 }}
          >
            VIEW ALL <ChevronRight size={16} />
          </motion.a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProductCard 
            title="Regale Grande Tote" 
            price="12,499.00" 
            imageUrl="https://images.unsplash.com/photo-1590739225287-bd31519780c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=90" 
            isNew={true}
            accentColor="#FF8C42"
            onQuickView={() => setShowQuickView({ title: "Regale Grande Tote", price: "12,499.00", imageUrl: "https://images.unsplash.com/photo-1590739225287-bd31519780c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90" })}
          />
          <ProductCard 
            title="Eclat Evening Clutch" 
            price="9,299.00" 
            imageUrl="https://i.pinimg.com/736x/10/c8/64/10c864842f17791c99b6fe5c99cbf34c.jpg" 
            isNew={true}
            accentColor="#D4A56A"
            onQuickView={() => setShowQuickView({ title: "Eclat Evening Clutch", price: "9,299.00", imageUrl: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90" })}
          />
          <ProductCard 
            title="Luxe Crossbody" 
            price="8,899.00" 
            imageUrl="https://i.pinimg.com/736x/c2/69/56/c26956843f0ee24ae5ce3f1d08b4bbbd.jpg" 
            isNew={true}
            accentColor="#6B7D5E"
            onQuickView={() => setShowQuickView({ title: "Luxe Crossbody", price: "8,899.00", imageUrl: "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90" })}
          />
          <ProductCard 
            title="Royale Shoulder Bag" 
            price="11,799.00" 
            imageUrl="https://i.pinimg.com/736x/31/32/88/31328878a23414a4785c0aa47e682005.jpg" 
            isNew={true}
            accentColor="#FF8C42"
            onQuickView={() => setShowQuickView({ title: "Royale Shoulder Bag", price: "11,799.00", imageUrl: "https://images.unsplash.com/photo-1575485670541-edf79a9e4d8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90" })}
          />
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container mx-auto px-8 mb-24">
        <motion.h2 
          className="text-3xl md:text-4xl font-serif text-[#F5E9D9] mb-16 text-center relative after:content-[''] after:absolute after:w-16 after:h-px after:bg-[#D4A56A] after:-bottom-6 after:left-1/2 after:-translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Curated Collections
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CategoryCard 
            title="The Heritage" 
            imageUrl="https://i.pinimg.com/736x/a4/c3/8a/a4c38af32efb994b489a795370be33a9.jpg" 
            link="/collections/heritage" 
            accentColor="#D4A56A"
          />
          <CategoryCard 
            title="The Signature" 
            imageUrl="https://i.pinimg.com/736x/ed/26/8c/ed268c44bb1c66c0620f934781553cda.jpg" 
            link="/collections/signature" 
            accentColor="#FF8C42"
          />
          <CategoryCard 
            title="The Bespoke" 
            imageUrl="https://i.pinimg.com/736x/71/bf/10/71bf108c0ed40208046a79226ab6bc12.jpg" 
            link="/collections/bespoke" 
            accentColor="#6B7D5E"
          />
        </div>
      </section>

      {/* Featured Collection */}
      <section className="mb-24 bg-[#B8A38D]/20 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60" alt="Texture" className="w-300 h-full object-cover" />
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-[#FF8C42] tracking-[0.4em] text-sm mb-4 font-light">EXCLUSIVE RELEASE</p>
                <h2 className="text-4xl md:text-5xl font-serif text-[#F5E9D9] mb-8">The Imperial Collection</h2>
                <p className="text-[#F5E9D9]/80 mb-6 font-light leading-relaxed">
                  A celebration of rare exotic materials and meticulous craftsmanship, creating pieces worthy of royalty.
                </p>
                <p className="text-[#F5E9D9]/80 mb-10 font-light leading-relaxed">
                  Limited to 25 editions worldwide, each piece is individually numbered and accompanied by a certificate of authenticity signed by our master artisan.
                </p>
                <motion.button
                  className="bg-[#F5E9D9] text-[#3A2D1E] px-10 py-4 rounded-none text-sm tracking-[0.3em] font-medium hover:bg-[#D4A56A] transition-colors"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(245, 233, 217, 0.3)" }}
                >
                  EXPLORE IMPERIAL
                </motion.button>
              </motion.div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <img src="https://i.pinimg.com/736x/d0/7b/a3/d07ba3ed1f6d68c1a9d1ebe15691496f.jpg" alt="Imperial collection bag 1" className="w-full h-auto" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <img src="https://i.pinimg.com/736x/eb/37/4f/eb374f9769f07eb40d53b37142a7e29b.jpg" alt="Imperial collection bag 2" className="w-full h-auto mt-12" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <img src="https://i.pinimg.com/736x/90/67/fe/9067fe977cbf98a89dabe624f9334e26.jpg" alt="Imperial collection bag 3" className="w-full h-auto" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <img src="https://i.pinimg.com/474x/b4/66/2f/b4662f7eda6f00d24615c9cf52905f27.jpg" alt="Imperial collection bag 4" className="w-full h-auto mt-12" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="container mx-auto px-8 mb-24">
        <div className="flex flex-wrap justify-between items-end mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-[#FF8C42] tracking-[0.4em] text-sm mb-4 font-light">CLIENT FAVORITES</p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#F5E9D9]">Iconic Designs</h2>
          </motion.div>
          <motion.a
            href="/collections/bestsellers"
            className="text-[#F5E9D9] hover:text-[#D4A56A] transition-colors font-light text-sm tracking-widest flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ x: 5 }}
          >
            VIEW ALL <ChevronRight size={16} />
          </motion.a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <ProductCard 
            title="Heritage Tote" 
            price="15,999.00" 
            imageUrl="https://i.pinimg.com/736x/17/ba/6d/17ba6d12d1279668235a50294b924738.jpg" 
            rating={5} 
            accentColor="#FF8C42"
            onQuickView={() => setShowQuickView({ title: "Heritage Tote", price: "15,999.00", imageUrl: "https://images.unsplash.com/photo-1559563458-527698bf5295?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90" })}
          />
          <ProductCard 
            title="Petite Eclat Crossbody" 
            price="9,499.00" 
            imageUrl="https://i.pinimg.com/736x/ac/43/c6/ac43c653a9c422c26b726c9ce912d4d6.jpg" 
            rating={4.9} 
            accentColor="#D4A56A"
            onQuickView={() => setShowQuickView({ title: "Petite Eclat Crossbody", price: "9,499.00", imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90" })}
          />
          <ProductCard 
            title="Sovereign Clutch" 
            price="8,999.00" 
            imageUrl="https://i.pinimg.com/736x/3d/f8/b8/3df8b8dc58257d96f5b69a87e06d7cc3.jpg" 
            rating={4.8} 
            accentColor="#6B7D5E"
            onQuickView={() => setShowQuickView({ title: "Sovereign Clutch", price: "8,999.00", imageUrl: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90" })}
          />
          <ProductCard 
            title="Majestic Shoulder Bag" 
            price="12,299.00" 
            imageUrl="https://i.pinimg.com/736x/56/53/e4/5653e4062a531f07defdce73b99d534e.jpg" 
            rating={5} 
            accentColor="#FF8C42"
            onQuickView={() => setShowQuickView({ title: "Majestic Shoulder Bag", price: "12,299.00", imageUrl: "https://images.unsplash.com/photo-1575485670541-edf79a9e4d8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=90" })}
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#3A2D1E] mb-24 border-y border-[#D4A56A]/10 overflow-hidden">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#D4A56A] tracking-[0.4em] text-sm mb-4 font-light">CLIENT TESTIMONIALS</p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#F5E9D9]">Voices of Distinction</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <TestimonialCard 
              quote="The Imperial Collection exceeds all expectations. The crocodile leather is flawless, and the craftsmanship is simply unparalleled." 
              author="Nita A." 
              location="Mumbai, Philanthropist" 
              rating={5}
              accentColor="#D4A56A"
            />
            <TestimonialCard 
              quote="AURUM's bespoke service created a one-of-a-kind piece that perfectly captures my personal style. True wearable art." 
              author="Isha P." 
              location="New York, Fashion Director" 
              rating={5}
              accentColor="#FF8C42"
            />
            <TestimonialCard 
              quote="My Heritage Tote has become my signature piece. The quality is extraordinary - it looks better with each passing year." 
              author="Natasha B." 
              location="London, Business Executive" 
              rating={5}
              accentColor="#6B7D5E"
            />
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="container mx-auto px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#FF8C42] tracking-[0.4em] text-sm mb-4 font-light">FOLLOW OUR WORLD</p>
          <h2 className="text-3xl md:text-4xl font-serif text-[#F5E9D9]">@AURUMHERITAGE</h2>
        </motion.div>
        <div className="relative overflow-hidden">
          <motion.div 
            className="flex gap-4 touch-pan-x"
            initial={{ x: 0 }}
            animate={{ x: '-50%' }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          >
            <InstaPost imageUrl="https://i.pinimg.com/474x/6b/41/3e/6b413ed8e69b1455af63b28293fe2728.jpg" accentColor="#D4A56A" />
            <InstaPost imageUrl="https://i.pinimg.com/474x/b7/83/65/b78365dd883efc65e1fd476e6346700b.jpg" accentColor="#FF8C42" />
            <InstaPost imageUrl="https://i.pinimg.com/474x/49/71/ca/4971ca33f721eff825c6a0225879b004.jpg" accentColor="#D4A56A" />
            <InstaPost imageUrl="https://i.pinimg.com/474x/9f/1f/4e/9f1f4e564511974e2700dd993c5052d1.jpg" accentColor="#6B7D5E" />
            <InstaPost imageUrl="https://i.pinimg.com/736x/de/6c/74/de6c749534a39e2b5af46d0b29c5e0cb.jpg" accentColor="#FF8C42" />
            <InstaPost imageUrl="https://i.pinimg.com/474x/6a/ea/ba/6aeaba4352e5f580f2ce93ab1c74ec42.jpg" accentColor="#6B7D5E" />
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-[#3A2D1E] border-t border-b border-[#D4A56A]/10 mb-24">
        <div className="container mx-auto px-8 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-[#FF8C42] tracking-[0.4em] text-sm mb-4 font-light">PRIVATE ACCESS</p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#F5E9D9] mb-8">Join Our Exclusive Circle</h2>
            <p className="text-lg text-[#F5E9D9]/80 mb-8 font-light tracking-wide leading-relaxed">
              Receive invitations to private viewings, early access to limited editions, and personalized consultations with our master artisans.
            </p>
            <motion.div 
              className="flex flex-col md:flex-row gap-0 max-w-xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-6 py-4 bg-transparent border border-[#D4A56A]/30 text-[#F5E9D9] focus:outline-none focus:border-[#FF8C42] placeholder-[#F5E9D9]/60 tracking-wider"
              />
              <button 
                className="bg-[#FF8C42] text-[#3A2D1E] px-12 py-4 tracking-[0.3em] font-medium hover:bg-[#D4A56A] transition-colors md:border-l-0 text-sm"
              >
                SUBSCRIBE
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Go to top button */}
      {showScrollTop && (
        <motion.button
          className="fixed bottom-10 right-10 bg-[#D4A56A] text-[#3A2D1E] w-14 h-14 rounded-full flex items-center justify-center shadow-xl z-50"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(212, 165, 106, 0.6)" }}
        >
          <ArrowUp size={24} />
        </motion.button>
      )}

      {/* Quick View Modal */}
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
              className="absolute top-6 right-6 text-[#F5E9D9] hover:text-[#FF8C42] transition-colors"
              onClick={() => setShowQuickView(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="relative">
                <img src={showQuickView.imageUrl} alt={showQuickView.title} className="w-full h-auto" />
                <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 border border-[#D4A56A]/20 -z-10"></div>
              </div>
              <div>
                <h3 className="text-3xl font-serif text-[#F5E9D9] mb-2">{showQuickView.title}</h3>
                <p className="text-[#FF8C42] text-xl mb-6">${showQuickView.price}</p>
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-[#FF8C42] fill-[#FF8C42]" />
                    ))}
                  </div>
                  <span className="text-[#F5E9D9]/60 text-sm">(27 reviews)</span>
                </div>
                <p className="text-[#F5E9D9]/80 mb-8 font-light leading-relaxed">
                  Meticulously handcrafted from the finest Italian calfskin with 24k gold-plated hardware. 
                  Each piece undergoes 78 individual quality checks before leaving our atelier.
                </p>
                <div className="mb-8">
                  <p className="text-sm text-[#D4A56A] mb-2 tracking-wider">MATERIALS</p>
                  <p className="text-[#F5E9D9]/80 font-light">Full-grain Italian leather, 24k gold-plated brass hardware, silk lining</p>
                </div>
                <div className="mb-8">
                  <p className="text-sm text-[#D4A56A] mb-2 tracking-wider">DIMENSIONS</p>
                  <p className="text-[#F5E9D9]/80 font-light">12" W x 8" H x 4" D</p>
                </div>
                <div className="flex flex-col gap-4">
                  <motion.button
                    className="bg-[#FF8C42] text-[#3A2D1E] px-8 py-4 tracking-[0.3em] text-sm font-medium hover:bg-[#D4A56A] transition-colors"
                    whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(255, 140, 66, 0.6)" }}
                  >
                    ADD TO CART
                  </motion.button>
                  <button className="border border-[#D4A56A] text-[#F5E9D9] px-8 py-4 tracking-[0.3em] text-sm font-medium hover:border-[#F5E9D9] transition-colors">
                    BOOK PRIVATE VIEWING
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

// Helper Components
function CategoryCard({ title, imageUrl, link, accentColor }) {
  return (
    <motion.a 
      href={link}
      className="block relative h-[500px] overflow-hidden group"
      whileHover={{ y: -10 }}
    >
      <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#3A2D1E]/70 via-[#3A2D1E]/30 to-transparent flex items-end p-8 transition-opacity group-hover:opacity-100">
        <div className={`border-t border-[${accentColor}]/30 pt-6 w-full group-hover:border-[${accentColor}]/70 transition-colors`}>
          <h3 className="text-[#F5E9D9] text-2xl font-serif tracking-wider">{title}</h3>
          <p className={`text-[${accentColor}] text-sm mt-2 tracking-wider group-hover:translate-x-2 transition-transform`}>
            DISCOVER COLLECTION 
          </p>
        </div>
      </div>
    </motion.a>
  );
}

function ProductCard({ title, price, imageUrl, isNew = false, rating = null, accentColor, onQuickView }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <motion.div 
      className="group relative"
      whileHover={{ y: -10 }}
    >
      <div className="mb-4 relative overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" />
        {isNew && (
          <div className={`absolute top-4 left-4 bg-[${accentColor}] text-[#3A2D1E] text-xs px-3 py-1 tracking-wider`}>
            NEW ARRIVAL
          </div>
        )}
        <div className="absolute inset-0 bg-[#3A2D1E] bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <button 
            className="bg-transparent border border-[#F5E9D9] text-[#F5E9D9] px-8 py-3 tracking-[0.3em] text-xs hover:bg-[#F5E9D9] hover:text-[#3A2D1E] transition-colors"
            onClick={onQuickView}
          >
            QUICK VIEW
          </button>
        </div>
        <button 
          className={`absolute top-4 right-4 text-[#F5E9D9] hover:text-[${accentColor}] transition-colors`}
          onClick={() => setIsWishlisted(!isWishlisted)}
        >
          <Heart size={24} className={isWishlisted ? `fill-[${accentColor}] stroke-[${accentColor}]` : "stroke-1"} />
        </button>
      </div>
      <h3 className="font-serif text-xl text-[#F5E9D9] mb-1">{title}</h3>
      <div className="flex justify-between items-center">
        <p className={`text-[${accentColor}]`}>${price}</p>
        {rating && (
          <div className="flex items-center">
            <Star size={16} className={`text-[${accentColor}] fill-[${accentColor}]`} />
            <span className="ml-1 text-[#F5E9D9]/60 text-sm">{rating}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}

function TestimonialCard({ quote, author, location, rating, accentColor }) {
  return (
    <motion.div 
      className="bg-[#3A2D1E] p-8 border border-[#D4A56A]/10 relative h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="mb-8">
        <Quote size={36} className={`text-[${accentColor}]/10 absolute top-6 left-6`} />
      </div>
      <p className="text-[#F5E9D9]/80 mb-8 italic font-light leading-relaxed">"{quote}"</p>
      <div className={`flex justify-between items-center border-t border-[${accentColor}]/10 pt-6`}>
        <div>
          <p className="font-serif text-[#F5E9D9]">{author}</p>
          <p className="text-sm text-[#F5E9D9]/60">{location}</p>
        </div>
        <div className="flex">
          {[...Array(Math.floor(rating))].map((_, i) => (
            <Star key={i} size={16} className={`text-[${accentColor}] fill-[${accentColor}]`} />
          ))}
          {rating % 1 !== 0 && (
            <Star size={16} className={`text-[${accentColor}] fill-[${accentColor}]`} style={{ clipPath: 'inset(0 50% 0 0)' }} />
          )}
        </div>
      </div>
    </motion.div>
  );
}

function InstaPost({ imageUrl, accentColor }) {
  return (
    <a href="#" className="block overflow-hidden relative group flex-shrink-0 w-72 h-72">
      <img src={imageUrl} alt="Instagram post" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-[#3A2D1E] bg-opacity-0 group-hover:bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className={`border border-[#F5E9D9] text-[#F5E9D9] px-4 py-2 text-xs tracking-widest`}>
          VIEW
        </div>
      </div>
    </a>
  );
}