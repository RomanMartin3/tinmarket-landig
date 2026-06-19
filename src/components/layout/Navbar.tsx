import { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, LogIn } from 'lucide-react';
import { APP_CONFIG } from '../../config/constants';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Módulos', href: '#modulos' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Hardware', href: '#hardware' },
    { name: 'Precio', href: '#precio' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src="/logo-icon.png" 
              alt="TinMarket Logo" 
              className="h-9 w-9 object-contain transition-transform group-hover:scale-105" 
            />
            <span className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Tin<span className="text-orange-600">Market</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-sm font-bold text-slate-600 hover:text-orange-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            {/* NUEVO: Contenedor de acciones con Login integrado */}
            <div className="flex items-center gap-6 border-l border-slate-200 pl-6">
              {/* Enlace de Login: Sobrio, de utilidad, transmite que el software es real */}
              <a 
                href={APP_CONFIG.urls.login} 
                className="flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors"
              >
                <LogIn size={16} /> Ingresar
              </a>
              
              <a 
                href={APP_CONFIG.urls.whatsappSales} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 bg-orange-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-orange-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <PhoneCall size={16} /> Contactar a Ventas
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-slate-900 hover:text-orange-600 transition-colors focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)} 
              className="text-lg font-bold text-slate-700 hover:text-orange-600 px-2 py-1"
            >
              {link.name}
            </a>
          ))}
          
          <div className="w-full h-px bg-slate-100 my-2"></div>
          
          {/* NUEVO: Login en móvil */}
          <a 
            href={APP_CONFIG.urls.login} 
            className="flex items-center gap-2 text-lg font-bold text-slate-600 hover:text-slate-900 px-2"
          >
            <LogIn size={20} /> Ingresar al Sistema
          </a>

          <a 
            href={APP_CONFIG.urls.whatsappSales} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-2 flex items-center justify-center gap-2 bg-orange-600 text-white px-5 py-4 rounded-xl font-bold text-lg hover:bg-orange-700 w-full shadow-md"
          >
            <PhoneCall size={20} /> Contactar a Ventas
          </a>
        </div>
      )}
    </nav>
  );
};