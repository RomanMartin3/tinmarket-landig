import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { APP_CONFIG } from '../config/constants';
import dashboardImg from '../assets/dashboard.png';

export const Hero = () => {
  return (
    /* MANDAMIENTO DE DISEÑO (Antiaplanamiento): Mantenemos bg-slate-50 con la textura. 
       Eliminamos el overflow-hidden de contenedores padre si lo hubiera para permitir el overlap. */
    <section className="relative pt-32 lg:pt-40 bg-slate-50 bg-dot-grid pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="max-w-4xl mx-auto mb-16">
          
          {/* MANDAMIENTO DE DISEÑO Y MARKETING: Título masivo (font-extrabold tracking-tight).
              Copy enfocado 100% en el beneficio operativo, no en ser "barato". */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[1.1]"
          >
            El sistema de caja diseñado <br className="hidden md:block" />
            <span className="text-orange-600">para que no falte un peso.</span>
          </motion.h1>
          
          {/* MANDAMIENTO DE DISEÑO: Párrafo transpirable (font-medium leading-relaxed). */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 font-medium mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Factura en segundos, controla tu inventario al milímetro y gestiona los fiados de forma blindada. La herramienta empresarial definitiva para tu comercio local.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* MANDAMIENTO DE MARKETING: Eliminación absoluta de la palabra "Beta". 
                CTA enfocado en el cierre de ventas y la tangibilidad del servicio. */}
            <a 
              href={APP_CONFIG.urls.whatsappSales} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Solicitar Instalación <ArrowRight size={20} strokeWidth={2.5} />
            </a>
            
            <a 
              href="#modulos" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-slate-800 border border-slate-300 px-8 py-4 rounded-xl font-bold text-lg hover:border-slate-400 hover:bg-slate-50 transition-all shadow-sm"
            >
              <Play size={20} className="text-orange-600" /> Ver funcionamiento
            </a>
          </motion.div>
        </div>

        {/* MANDAMIENTO DE DISEÑO (Overlap / Estructura 3D): 
            El margen inferior negativo (-mb-32) hace que la imagen invada la siguiente sección blanca,
            creando profundidad y rompiendo el esquema de bloques apilados planos. */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="relative mx-auto max-w-5xl rounded-2xl border border-slate-200/60 bg-white shadow-2xl overflow-hidden -mb-32 ring-1 ring-slate-900/5"
        >
          {/* Barra superior estilo MacOS/Navegador corporativo */}
          <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
            <div className="w-3 h-3 rounded-full bg-slate-300"></div>
          </div>
          <img 
            src={dashboardImg} 
            alt="Dashboard del sistema TinMarket" 
            className="w-full h-auto block object-cover" 
          />
        </motion.div>

      </div>
    </section>
  );
};