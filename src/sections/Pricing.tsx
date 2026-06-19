import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { APP_CONFIG } from '../config/constants';

export const Pricing = () => {
  return (
    // bg-slate-50 para mantener la alternancia y relative para posicionar la línea animada
    <section id="precio" className="relative py-32 bg-slate-50 overflow-hidden">
      
      {/* DIVISOR ANIMADO Y SOBRIO (Reemplaza al zig-zag) */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-slate-200">
        <motion.div
          className="w-1/3 h-full bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-70"
          animate={{ x: ['-100%', '300%'] }}
          transition={{ 
            repeat: Infinity, 
            duration: 4, 
            ease: "linear" 
          }}
        />
      </div>

      {/* Fondo decorativo sutil (Glow) para que la tarjeta no flote en la nada */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-500/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado del Pricing */}
        <div className="text-center mb-16">
          
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6"
          >
            Un solo plan. <span className="text-orange-600">Sin letras chicas.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 font-medium leading-relaxed"
          >
            Creemos en que tengas la herramienta completa desde el primer día. <br className="hidden md:block"/> 
            Únete a nuestra etapa de desarrollo y congela tu beneficio.
          </motion.p>
        </div>

        {/* Tarjeta de Precio Única */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative bg-white rounded-3xl border border-slate-200 shadow-2xl p-8 md:p-12 max-w-2xl mx-auto"
        >
          {/* Cinta de Beta */}
          <div className="absolute top-0 right-0 bg-orange-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-3xl uppercase tracking-wider">
            Cupos Beta Limitados
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start justify-between border-b border-slate-100 pb-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">Plan Pionero</h3>
              <p className="text-slate-500 font-medium text-sm">Ideal para comercios listos para modernizarse.</p>
            </div>
            <div className="text-center md:text-right">
              <div className="flex items-start justify-center md:justify-end gap-1">
                <span className="text-2xl font-bold text-slate-900 mt-1">$</span>
                {/* Cambia este número por tu precio real cuando lo definas */}
                <span className="text-6xl font-extrabold text-slate-900 tracking-tighter">30</span>
              </div>
              <span className="text-slate-500 font-medium text-sm">/ por mes</span>
            </div>
          </div>

          {/* Lista de Features */}
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-10">
            {[
              "Todos los módulos del software",
              "Lector de código de barras en comodato",
              "Actualizaciones de por vida incluidas",
              "Cuentas corrientes sin límite de clientes",
              "Soporte e instalación presencial (Mendoza)",
              "Respaldo en la nube automático"
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                </div>
                <span className="text-slate-700 font-medium leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <a 
            href={APP_CONFIG.urls.whatsappSales} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-full gap-3 bg-slate-900 text-white px-8 py-5 rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors duration-300 shadow-md"
          >
            Postularse para la Beta
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowRight size={20} />
            </motion.span>
          </a>
          <p className="text-center text-slate-400 text-xs font-medium mt-4">
            Sin contratos de permanencia. Cancela cuando quieras.
          </p>

        </motion.div>

      </div>
    </section>
  );
};