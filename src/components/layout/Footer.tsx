import { MapPin, Mail, MessageCircle } from 'lucide-react';
import { APP_CONFIG } from '../../config/constants';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid de 4 Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Columna 1: Marca */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <img 
                src="/logo-icon.png" 
                alt="TinMarket Logo" 
                className="h-8 w-8 object-contain brightness-0 invert" 
              />
              <span className="text-2xl font-extrabold text-white tracking-tight">
                Tin<span className="text-orange-500">Market</span>
              </span>
            </a>
            <p className="text-slate-400 font-normal leading-relaxed mb-6">
              El sistema de gestión y punto de venta diseñado para proteger la rentabilidad de los comercios minoristas.
            </p>
            <div className="flex gap-4">
              {/* Cambiamos Instagram por MessageCircle y lo linkeamos a tu WhatsApp */}
              <a href={APP_CONFIG.urls.whatsappSales} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-orange-500 transition-colors" aria-label="Contactar por WhatsApp">
                <MessageCircle size={24} />
              </a>
              <a href={`mailto:${APP_CONFIG.company.supportEmail}`} className="text-slate-400 hover:text-orange-500 transition-colors" aria-label="Enviar correo de soporte">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Columna 2: Producto */}
          <div>
            <h4 className="text-white font-bold tracking-tight mb-6">Producto</h4>
            <ul className="space-y-4">
              <li><a href="#beneficios" className="text-slate-400 hover:text-white transition-colors font-medium">Beneficios</a></li>
              <li><a href="#modulos" className="text-slate-400 hover:text-white transition-colors font-medium">Módulos del Sistema</a></li>
              <li><a href="#hardware" className="text-slate-400 hover:text-white transition-colors font-medium">Equipamiento Hardware</a></li>
              <li><a href="#precio" className="text-slate-400 hover:text-white transition-colors font-medium">Precios</a></li>
            </ul>
          </div>

          {/* Columna 3: Soporte y Legal */}
          <div>
            <h4 className="text-white font-bold tracking-tight mb-6">Soporte</h4>
            <ul className="space-y-4">
              <li><a href={APP_CONFIG.urls.whatsappSales} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors font-medium">Contacto Comercial</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors font-medium">Preguntas Frecuentes</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors font-medium">Términos de Servicio</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors font-medium">Privacidad</a></li>
            </ul>
          </div>

          {/* Columna 4: Contacto Local */}
          <div>
            <h4 className="text-white font-bold tracking-tight mb-6">Estamos Cerca</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-orange-500 shrink-0 mt-1" size={20} />
                <span className="text-slate-400 font-medium leading-relaxed">
                  Desarrollado y operado localmente en Mendoza, Argentina.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-orange-500/10 text-orange-500 text-xs font-bold px-2 py-1 rounded-md mt-1 shrink-0">
                  SOPORTE LOCAL
                </div>
                <span className="text-slate-400 font-medium leading-relaxed">
                  Instalación presencial garantizada para el Gran Mendoza.
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Separador y Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm font-medium">
            &copy; {currentYear} TinMarket. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-400 text-sm font-medium">Sistemas operando normalmente</span>
          </div>
        </div>

      </div>
    </footer>
  );
};