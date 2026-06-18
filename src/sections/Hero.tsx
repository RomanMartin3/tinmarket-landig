import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { APP_CONFIG } from '../config/constants';
import dashboardImg from '../assets/dashboard.png';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-16">
          
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-6 leading-tight"
          >
            Moderniza tu minimarket <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              sin gastar una fortuna en equipos.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 font-medium mb-10 max-w-2xl mx-auto"
          >
            Controla tu stock, fía con seguridad y cobra en segundos. TinMarket es el software que hace el trabajo pesado por ti.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href={APP_CONFIG.urls.whatsappSales} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-xl font-black text-lg hover:bg-orange-700 hover:scale-105 transition-all shadow-xl shadow-orange-500/30">
              Reservar acceso a la Beta <ArrowRight size={20} />
            </a>
            <a href="#beneficios" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-xl font-black text-lg hover:border-orange-500 hover:text-orange-600 transition-all">
              <Play size={20} /> Quiero ver cómo funciona
            </a>
          </motion.div>

          
        </div>

        {/* Mockup del Sistema Animado */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="absolute inset-0 bg-orange-500 rounded-full blur-[120px] opacity-20 transform -translate-y-10"></div>
          
          {/* Animación flotante suave y continua */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="relative rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden"
          >
            {/* Barra superior del navegador */}
            <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
            </div>
            
            {/* Contenedor de la imagen CORREGIDO */}
            <div className="bg-slate-50 w-full">
              <img 
                src={dashboardImg} 
                alt="Dashboard del sistema TinMarket" 
                className="w-full h-auto block"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};