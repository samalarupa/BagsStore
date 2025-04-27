import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
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
          Contact Us
        </motion.h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-serif text-[#F5E9D9] mb-8">Get in Touch</h2>
            <p className="text-[#B8A38D] mb-6 font-light leading-relaxed">
              Our client relations team is available to assist with inquiries, private appointments, and bespoke consultations.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail size={24} className="text-[#D4A56A]" />
                <a href="mailto:by-appointment@aurum.com" className="text-[#B8A38D] hover:text-[#D4A56A] transition-colors">
                  by-appointment@aurum.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={24} className="text-[#D4A56A]" />
                <a href="tel:+18888888888" className="text-[#B8A38D] hover:text-[#D4A56A] transition-colors">
                  +1 (888) 888-8888
                </a>
              </div>
              <div className="flex items-center gap-4">
                <MapPin size={24} className="text-[#D4A56A]" />
                <p className="text-[#B8A38D]">Ateliers in Milan, Paris, and Mumbai</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="bg-[#3A2D1E] p-8 border border-[#D4A56A]/20"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-serif text-[#F5E9D9] mb-6">Send Us a Message</h3>
            <div className="space-y-6">
              <div>
                <label className="text-sm text-[#D4A56A] mb-2 tracking-wider block">NAME</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-4 py-3 bg-transparent border border-[#D4A56A]/30 text-[#F5E9D9] focus:outline-none focus:border-[#D4A56A] placeholder-[#B8A38D] tracking-wider"
                />
              </div>
              <div>
                <label className="text-sm text-[#D4A56A] mb-2 tracking-wider block">EMAIL</label>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-transparent border border-[#D4A56A]/30 text-[#F5E9D9] focus:outline-none focus:border-[#D4A56A] placeholder-[#B8A38D] tracking-wider"
                />
              </div>
              <div>
                <label className="text-sm text-[#D4A56A] mb-2 tracking-wider block">MESSAGE</label>
                <textarea
                  placeholder="Your message"
                  className="w-full px-4 py-3 bg-transparent border border-[#D4A56A]/30 text-[#F5E9D9] focus:outline-none focus:border-[#D4A56A] placeholder-[#B8A38D] tracking-wider h-32 resize-none"
                ></textarea>
              </div>
              <motion.button
                className="w-full bg-[#D4A56A] text-[#3A2D1E] px-8 py-4 tracking-[0.3em] text-sm font-medium relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
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
                <span className="relative z-10">SEND MESSAGE</span>
                <motion.span 
                  className="absolute inset-0 bg-[#F5E9D9] translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}