import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { APP_CONFIG } from '../config/constants';
import dashboardImg from '../assets/dashboard.png';

export const Hero = () => {
  return (
    // Aplicamos el bg-slate-50 y nuestra nueva textura bg-dot-grid
    // IMPORTANTE: Quitamos overflow-hidden para que la imagen pueda "sobresalir" hacia abajo
    <section className="relative pt-32 lg:pt-40 bg-slate-50 bg-dot-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100 text-orange-700 font-semibold text-sm mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
            </span>
            Acceso Beta Abierto
          </motion.div>

          {/* Tipografía: Cambiamos font-black por font-extrabold y agregamos tracking-tight */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]"
          >
            Moderniza tu minimarket <br />
            <span className="text-orange-600">sin gastar fortunas.</span>
          </motion.h1>
          
          {/* Tipografía: Párrafo con font-medium y leading-relaxed */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 font-medium mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Controla tu stock, fía con seguridad y cobra en segundos. El software de mostrador diseñado para que los números siempre cuadren.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href={APP_CONFIG.urls.whatsappSales} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Reservar acceso a la Beta <ArrowRight size={20} />
            </a>
            <a href="#modulos" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-800 border border-slate-300 px-8 py-4 rounded-xl font-bold text-lg hover:border-slate-400 hover:bg-slate-50 transition-all">
              <Play size={20} /> Ver módulos
            </a>
          </motion.div>
        </div>

        {/* TRUCO DE SUPERPOSICIÓN (OVERLAP) */}
        {/* Usamos -mb-32 (md:-mb-48) para empujar la imagen hacia la sección de abajo y z-20 para que quede por encima */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="relative mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden -mb-32 md:-mb-48 z-20"
        >
          <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
          </div>
          <img src={dashboardImg} alt="Dashboard del sistema TinMarket" className="w-full h-auto block" />
        </motion.div>

      </div>
    </section>
  );
};