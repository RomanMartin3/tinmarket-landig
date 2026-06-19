import { MapPin, Mail, MessageSquare, ShieldCheck } from 'lucide-react';
import { APP_CONFIG } from '../../config/constants';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <img 
                src="/logo-icon.png" 
                alt="TinMarket Logo" 
                className="h-8 w-8 object-contain brightness-0 invert" 
              />
              <span className="text-2xl font-extrabold text-white tracking-tight">
                Tin<span className="text-orange-600">Market</span>
              </span>
            </a>
            <p className="text-slate-400 font-medium leading-relaxed mb-6">
              El sistema operativo definitivo para kioscos y minimarkets. Diseñado para blindar la rentabilidad de tu comercio local.
            </p>
            <div className="flex gap-4">
              <a href={APP_CONFIG.urls.whatsappSales} target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-orange-600 transition-all" aria-label="Contactar por WhatsApp">
                <MessageSquare size={20} />
              </a>
              <a href={`mailto:${APP_CONFIG.company.supportEmail}`} className="bg-slate-800 p-2.5 rounded-lg text-slate-400 hover:text-white hover:bg-orange-600 transition-all" aria-label="Enviar correo de soporte">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-extrabold tracking-tight mb-6">Plataforma</h4>
            <ul className="space-y-4">
              {/* NUEVO: Enlace directo al software en el Footer */}
              <li><a href={APP_CONFIG.urls.login} className="text-orange-500 hover:text-orange-400 transition-colors font-bold flex items-center gap-2">Ingresar al Sistema</a></li>
              <li><a href="#modulos" className="text-slate-400 hover:text-white transition-colors font-medium">Módulos del Sistema</a></li>
              <li><a href="#beneficios" className="text-slate-400 hover:text-white transition-colors font-medium">Ventajas Operativas</a></li>
              <li><a href="#precio" className="text-slate-400 hover:text-white transition-colors font-medium">Licencia Mensual</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-extrabold tracking-tight mb-6">Atención al Cliente</h4>
            <ul className="space-y-4">
              <li><a href={APP_CONFIG.urls.whatsappSales} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors font-medium">Departamento de Ventas</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors font-medium">Preguntas Frecuentes</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors font-medium">Términos de Servicio</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors font-medium">Políticas de Privacidad</a></li>
            </ul>
          </div>

          {/* CORRECCIÓN: Columna de Operaciones estructurada verticalmente para evitar descuadres */}
          <div>
            <h4 className="text-white font-extrabold tracking-tight mb-6">Operaciones</h4>
            <ul className="space-y-6">
              
              <li className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="text-orange-500" size={18} />
                  <span className="font-bold text-sm tracking-tight">Sede Central</span>
                </div>
                <span className="text-slate-400 font-medium leading-relaxed text-sm">
                  Desarrollo y soporte técnico operando desde Mendoza, Argentina.
                </span>
              </li>
              
              <li className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-white">
                  <ShieldCheck className="text-orange-500" size={18} />
                  <span className="font-bold text-sm tracking-tight">Despliegue Local</span>
                </div>
                <span className="text-slate-400 font-medium leading-relaxed text-sm">
                  Instalación y capacitación presencial garantizada.
                </span>
              </li>

            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm font-medium">
            &copy; {currentYear} TinMarket. Todos los derechos reservados.
          </p>
          
          <div className="flex items-center gap-2 bg-slate-900 px-4 py-2 rounded-full border border-slate-800">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-slate-400 text-sm font-bold tracking-tight">Sistemas operando al 100%</span>
          </div>
        </div>

      </div>
    </footer>
  );
};