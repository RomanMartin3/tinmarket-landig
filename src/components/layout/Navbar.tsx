import { useState, useEffect } from 'react';
import { Menu, X} from 'lucide-react';
import { motion } from 'framer-motion';
import { APP_CONFIG } from '../../config/constants';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/60 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* LOGO UNIFICADO (Igual al Footer) */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <img 
              src="/logo-icon.png" 
              alt="TinMarket" 
              className="h-9 w-9 object-contain transition-transform group-hover:scale-105" 
            />
            <span className="text-2xl font-bold text-slate-900 tracking-tight">
              Tin<span className="text-orange-600">Market</span>
            </span>
          </div>

          {/* Enlaces Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#caracteristicas" className="text-sm font-bold text-slate-600 hover:text-orange-600 transition-colors">Características</a>
            <a href="#beneficios" className="text-sm font-bold text-slate-600 hover:text-orange-600 transition-colors">Beneficios</a>
            <a href="#hardware" className="text-sm font-bold text-slate-600 hover:text-orange-600 transition-colors">Equipos</a>
            <a 
              href={APP_CONFIG.urls.whatsappSales} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-black hover:bg-orange-600 transition-all shadow-lg shadow-slate-900/10 hover:shadow-orange-600/20 hover:-translate-y-0.5 transform"
            >
              Acceso Anticipado
            </a>
          </div>

          {/* Botón Móvil */}
          <button 
            className="md:hidden text-slate-900 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Menú Móvil */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl py-4 px-4 flex flex-col gap-2"
        >
          <a href="#Módulos" onClick={() => setMobileMenuOpen(false)} className="font-bold text-slate-600 p-3 rounded-lg hover:bg-slate-50">Módulos</a>
          <a href="#beneficios" onClick={() => setMobileMenuOpen(false)} className="font-bold text-slate-600 p-3 rounded-lg hover:bg-slate-50">Beneficios</a>
          <a href="#hardware" onClick={() => setMobileMenuOpen(false)} className="font-bold text-slate-600 p-3 rounded-lg hover:bg-slate-50">Equipos</a>
          <a 
            href={APP_CONFIG.urls.whatsappSales}
            className="bg-orange-600 text-white text-center px-5 py-3 rounded-xl font-black w-full mt-2 block shadow-lg shadow-orange-600/20"
          >
            Solicitar Acceso Anticipado
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};