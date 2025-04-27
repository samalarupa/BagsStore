export default function Footer() {
  return (
    <footer className="bg-[#3A2D1E] py-16 border-t border-[#D4A56A]/10">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-serif text-[#F5E9D9] mb-4 tracking-widest">AURUM</h2>
            <p className="text-[#F5E9D9]/60 font-light text-sm tracking-wide max-w-xs">
              Crafting timeless luxury since 1924. Ateliers in Milan, Paris, and Mumbai.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-sm text-[#D4A56A] mb-4 tracking-widest">COLLECTIONS</h3>
              <ul className="space-y-2">
                <li><a href="/collections/heritage" className="text-[#F5E9D9]/60 hover:text-[#F5E9D9] text-sm font-light tracking-wider">Heritage</a></li>
                <li><a href="/collections/signature" className="text-[#F5E9D9]/60 hover:text-[#F5E9D9] text-sm font-light tracking-wider">Signature</a></li>
                <li><a href="/collections/imperial" className="text-[#F5E9D9]/60 hover:text-[#F5E9D9] text-sm font-light tracking-wider">Imperial</a></li>
                <li><a href="/collections/bespoke" className="text-[#F5E9D9]/60 hover:text-[#F5E9D9] text-sm font-light tracking-wider">Bespoke</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm text-[#D4A56A] mb-4 tracking-widest">ABOUT</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-[#F5E9D9]/60 hover:text-[#F5E9D9] text-sm font-light tracking-wider">Our Story</a></li>
                <li><a href="/about#artisans" className="text-[#F5E9D9]/60 hover:text-[#F5E9D9] text-sm font-light tracking-wider">Artisans</a></li>
                <li><a href="/about#materials" className="text-[#F5E9D9]/60 hover:text-[#F5E9D9] text-sm font-light tracking-wider">Materials</a></li>
                <li><a href="/about#ateliers" className="text-[#F5E9D9]/60 hover:text-[#F5E9D9] text-sm font-light tracking-wider">Ateliers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm text-[#D4A56A] mb-4 tracking-widest">CLIENT SERVICES</h3>
              <ul className="space-y-2">
                <li><a href="/contact" className="text-[#F5E9D9]/60 hover:text-[#F5E9D9] text-sm font-light tracking-wider">Private Appointments</a></li>
                <li><a href="/contact" className="text-[#F5E9D9]/60 hover:text-[#F5E9D9] text-sm font-light tracking-wider">Bespoke Consultations</a></li>
                <li><a href="/contact" className="text-[#F5E9D9]/60 hover:text-[#F5E9D9] text-sm font-light tracking-wider">Care & Restoration</a></li>
                <li><a href="/contact" className="text-[#F5E9D9]/60 hover:text-[#F5E9D9] text-sm font-light tracking-wider">Worldwide Delivery</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm text-[#D4A56A] mb-4 tracking-widest">CONTACT</h3>
              <ul className="space-y-2">
                <li><a href="/contact" className="text-[#F5E9D9]/60 hover:text-[#F5E9D9] text-sm font-light tracking-wider">Client Relations</a></li>
                <li><a href="tel:+18888888888" className="text-[#F5E9D9]/60 hover:text-[#F5E9D9] text-sm font-light tracking-wider">+1 (888) 888-8888</a></li>
                <li><a href="mailto:by-appointment@aurum.com" className="text-[#F5E9D9]/60 hover:text-[#F5E9D9] text-sm font-light tracking-wider">by-appointment@aurum.com</a></li>
              </ul>
            </div>
            </div>
          </div>
        <div className="pt-8 border-t border-[#D4A56A]/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#F5E9D9]/40 text-xs tracking-wider mb-4 md:mb-0">
            © {new Date().getFullYear()} AURUM. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-[#F5E9D9]/40 hover:text-[#F5E9D9] transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="text-[#F5E9D9]/40 hover:text-[#F5E9D9] transition-colors">
              <span className="sr-only">Pinterest</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}