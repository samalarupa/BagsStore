import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <div className="w-full bg-[#3A2D1E] font-sans pt-24">
      <section className="container mx-auto px-8 py-24">
        <motion.h1
          className="text-4xl md:text-5xl font-serif text-[#F5E9D9] mb-16 text-center relative after:content-[''] after:absolute after:w-16 after:h-px after:bg-[#D4A56A] after:-bottom-6 after:left-1/2 after:-translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Heritage
        </motion.h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://i.pinimg.com/736x/25/97/be/2597bed8f5e99743cb23f8b61bc834a1.jpg"
              alt="Artisan at work"
              className="w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 w-3/4 h-3/4 border border-[#D4A56A]/20 -z-10 -translate-x-8 translate-y-8"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#D4A56A] tracking-[0.4em] text-sm mb-6 font-light">SINCE 1924</p>
            <h2 className="text-3xl font-serif text-[#F5E9D9] mb-8">A Legacy of Craftsmanship</h2>
            <p className="text-[#F5E9D9]/80 mb-6 font-light leading-relaxed">
              Founded in Milan, AURUM has been synonymous with luxury and artistry for over a century. Our ateliers in Milan, Paris, and Mumbai continue to uphold the traditions of our founders.
            </p>
            <p className="text-[#F5E9D9]/80 mb-10 font-light leading-relaxed">
              Each piece is a testament to the skill and passion of our artisans, who blend time-honored techniques with innovative design to create bags that are both timeless and contemporary.
            </p>
            <motion.button
              className="bg-[#D4A56A] text-[#3A2D1E] px-10 py-4 rounded-none text-sm tracking-[0.3em] font-medium hover:bg-[#F5E9D9] hover:text-[#3A2D1E] transition-colors"
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(212, 165, 106, 0.6)" }}
            >
              MEET OUR ARTISANS
            </motion.button>
          </motion.div>
        </div>
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-[#F5E9D9] mb-16 text-center relative after:content-[''] after:absolute after:w-16 after:h-px after:bg-[#D4A56A] after:-bottom-6 after:left-1/2 after:-translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Commitment
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="p-8 relative"
          >
            <motion.div
              className="absolute inset-0 border border-[#D4A56A]/10"
              whileHover={{ borderColor: "rgba(212, 165, 106, 0.3)" }}
            ></motion.div>
            <CheckCircle size={32} className="text-[#D4A56A] mb-6 mx-auto" />
            <h3 className="font-serif text-2xl text-[#F5E9D9] mb-4">Sustainability</h3>
            <p className="text-[#F5E9D9]/80 font-light tracking-wide leading-relaxed">
              Ethically sourced materials from sustainable tanneries, ensuring minimal environmental impact.
            </p>
          </motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 relative"
          >
            <motion.div
              className="absolute inset-0 border border-[#D4A56A]/10"
              whileHover={{ borderColor: "rgba(212, 165, 106, 0.3)" }}
            ></motion.div>
            <CheckCircle size={32} className="text-[#D4A56A] mb-6 mx-auto" />
            <h3 className="font-serif text-2xl text-[#F5E9D9] mb-4">Excellence</h3>
            <p className="text-[#F5E9D9]/80 font-light tracking-wide leading-relaxed">
              Every piece undergoes rigorous quality checks to ensure perfection in every detail.
            </p>
          </motion.div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 relative"
          >
            <motion.div
              className="absolute inset-0 border border-[#D4A56A]/10"
              whileHover={{ borderColor: "rgba(212, 165, 106, 0.3)" }}
            ></motion.div>
            <CheckCircle size={32} className="text-[#D4A56A] mb-6 mx-auto" />
            <h3 className="font-serif text-2xl text-[#F5E9D9] mb-4">Heritage</h3>
            <p className="text-[#F5E9D9]/80 font-light tracking-wide leading-relaxed">
              Preserving artisanal techniques passed down through generations.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}