import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="w-full bg-[#3A2D1E] font-sans text-[#F5E9D9]">
      <Navbar />
      <section className="container mx-auto px-8 py-24 pt-28 max-w-md">
        <motion.h1
          className="text-4xl md:text-5xl font-serif text-[#F5E9D9] mb-16 text-center relative after:content-[''] after:absolute after:w-16 after:h-px after:bg-[#D4A56A] after:-bottom-6 after:left-1/2 after:-translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {isLogin ? 'Login' : 'Create Account'}
        </motion.h1>
        <motion.div
          className="bg-[#3A2D1E] p-8 border border-[#D4A56A]/20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {isLogin ? (
            <>
              <div className="mb-6">
                <label className="text-sm text-[#D4A56A] mb-2 tracking-wider block">EMAIL</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-transparent border border-[#D4A56A]/30 text-[#F5E9D9] focus:outline-none focus:border-[#D4A56A] placeholder-[#B8A38D] tracking-wider"
                />
              </div>
              <div className="mb-8">
                <label className="text-sm text-[#D4A56A] mb-2 tracking-wider block">PASSWORD</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 bg-transparent border border-[#D4A56A]/30 text-[#F5E9D9] focus:outline-none focus:border-[#D4A56A] placeholder-[#B8A38D] tracking-wider"
                />
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
                <span className="relative z-10">LOGIN</span>
                <motion.span 
                  className="absolute inset-0 bg-[#F5E9D9] translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                />
              </motion.button>
              <p className="text-[#B8A38D] text-sm mt-4 text-center">
                Don't have an account?{' '}
                <button onClick={handleToggle} className="text-[#D4A56A] hover:underline">
                  Sign Up
                </button>
              </p>
            </>
          ) : (
            <>
              <div className="mb-6">
                <label className="text-sm text-[#D4A56A] mb-2 tracking-wider block">FULL NAME</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 bg-transparent border border-[#D4A56A]/30 text-[#F5E9D9] focus:outline-none focus:border-[#D4A56A] placeholder-[#B8A38D] tracking-wider"
                />
              </div>
              <div className="mb-6">
                <label className="text-sm text-[#D4A56A] mb-2 tracking-wider block">EMAIL</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-transparent border border-[#D4A56A]/30 text-[#F5E9D9] focus:outline-none focus:border-[#D4A56A] placeholder-[#B8A38D] tracking-wider"
                />
              </div>
              <div className="mb-8">
                <label className="text-sm text-[#D4A56A] mb-2 tracking-wider block">PASSWORD</label>
                <input
                  type="password"
                  placeholder="Create a password"
                  className="w-full px-4 py-3 bg-transparent border border-[#D4A56A]/30 text-[#F5E9D9] focus:outline-none focus:border-[#D4A56A] placeholder-[#B8A38D] tracking-wider"
                />
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
                <span className="relative z-10">SIGN UP</span>
                <motion.span 
                  className="absolute inset-0 bg-[#F5E9D9] translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                />
              </motion.button>
              <p className="text-[#B8A38D] text-sm mt-4 text-center">
                Already have an account?{' '}
                <button onClick={handleToggle} className="text-[#D4A56A] hover:underline">
                  Login
                </button>
              </p>
            </>
          )}
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}