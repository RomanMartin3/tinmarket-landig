import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const urlSistema = "https://app.tinmarket.com.ar/login";
  const whatsappSoporte = "https://wa.me/5492615876117?text=Hola!%20Quiero%20mis%207%20días%20de%20prueba%20en%20TinMarket";

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-white/90 backdrop-blur-md border-b border-slate-200 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <img src="/logo-icon.png" alt="TinMarket Icono" className="h-10 w-10 object-contain rounded-lg" />
            <span className="font-black text-2xl tracking-tighter text-slate-900">TINMARKET</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#beneficios" className="text-sm font-bold text-slate-600 hover:text-orange-600 transition-colors uppercase tracking-widest">Beneficios</a>
            <a href="#hardware" className="text-sm font-bold text-slate-600 hover:text-orange-600 transition-colors uppercase tracking-widest">Equipamiento</a>
            <a href="#precio" className="text-sm font-bold text-slate-600 hover:text-orange-600 transition-colors uppercase tracking-widest">Plan Único</a>
            <a href={urlSistema} className="text-sm font-black text-slate-900 hover:text-orange-600 transition-colors">INICIAR SESIÓN</a>
            <a href={whatsappSoporte} target="_blank" rel="noreferrer" className="bg-orange-600 text-white px-6 py-2.5 rounded-lg font-black text-sm hover:bg-orange-700 transition-all shadow-lg shadow-orange-500/30 uppercase tracking-widest">
              Probar Gratis
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600 hover:text-orange-600">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white border-t border-slate-100 p-4 space-y-4 shadow-xl"
        >
          <a href="#beneficios" onClick={() => setIsMenuOpen(false)} className="block font-bold text-slate-600">Beneficios</a>
          <a href="#hardware" onClick={() => setIsMenuOpen(false)} className="block font-bold text-slate-600">Hardware</a>
          <a href="#precio" onClick={() => setIsMenuOpen(false)} className="block font-bold text-slate-600">Precio</a>
          <hr className="border-slate-100" />
          <a href={urlSistema} className="block font-black text-slate-900">INICIAR SESIÓN</a>
          <a href={whatsappSoporte} className="block w-full text-center bg-orange-600 text-white px-4 py-3 rounded-lg font-black mt-2">PROBAR GRATIS</a>
        </motion.div>
      )}
    </motion.nav>
  );
};