import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import scannerImg from '../assets/scanner-logo.jpg';
import { APP_CONFIG } from '../config/constants';

export const Hardware = () => {
  return (
    /* MANDAMIENTO DE DISEÑO (Antiaplanamiento): Aumentamos el padding para contener la diagonal. */
    <section id="hardware" className="relative pt-40 pb-48 z-10">
      
      {/* MANDAMIENTO DE DISEÑO (Regla 60-30-10 y 3D): 
          Fondo oscuro sesgado (-skew-y-2) que actúa como un bloque sólido.
          Le inyectamos un borde superior e inferior naranja (border-orange-600) hiperfino (2px)
          para destacar la geometría sin inundar de color el fondo ni tapar el CTA. */}
      <div className="absolute inset-0 z-0 bg-slate-900 transform -skew-y-2 origin-center border-t-2 border-b-2 border-orange-600 shadow-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {/* MANDAMIENTO DE DISEÑO (Tipografía Premium): Título compacto y masivo */}
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Nosotros ponemos el equipo. <br/>
            <span className="text-orange-500">Vos ponés las ventas.</span>
          </h2>
          
          {/* MANDAMIENTO DE MARKETING: Enfocado en el dolor B2B (la alta inversión inicial) */}
          <p className="text-xl text-slate-400 font-medium mb-10 leading-relaxed">
            Comprar equipamiento de código de barras de alta velocidad es un costo oculto enorme. Con TinMarket, el hardware profesional va por nuestra cuenta.
          </p>
          
          <ul className="space-y-6 text-lg text-slate-300 mb-12">
            <li className="flex items-start gap-4">
              <div className="bg-slate-800 p-1 rounded-full mt-0.5">
                <CheckCircle2 className="text-orange-500 w-5 h-5 shrink-0" />
              </div>
              <span className="font-medium">Lector omnidireccional de alta velocidad en comodato.</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="bg-slate-800 p-1 rounded-full mt-0.5">
                <CheckCircle2 className="text-orange-500 w-5 h-5 shrink-0" />
              </div>
              <span className="font-medium">Recambio inmediato ante cualquier falla técnica. Cero demoras en tu caja.</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="bg-slate-800 p-1 rounded-full mt-0.5">
                <CheckCircle2 className="text-orange-500 w-5 h-5 shrink-0" />
              </div>
              <span className="font-medium">Instalación presencial y configuración 100% bonificada.</span>
            </li>
          </ul>

          {/* MANDAMIENTO DE MARKETING: CTA orientado a la conversión. 
              Ahora resalta violentamente gracias a que el fondo es oscuro, manteniendo la Regla 60-30-10. */}
          <a 
            href={APP_CONFIG.urls.whatsappSales} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center gap-3 bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition-colors shadow-lg"
          >
            Solicitar Equipo e Instalación
            <ArrowRight size={20} />
          </a>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          /* MANDAMIENTO DE DISEÑO (Cero efectos baratos): Tarjeta blanca limpia inmaculada. */
          className="bg-white p-10 md:p-12 rounded-3xl w-full max-w-lg mx-auto shadow-2xl relative border border-slate-100"
        >
          <img 
            src={scannerImg} 
            alt="Hardware de lectura TinMarket" 
            className="w-full h-auto object-contain drop-shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
};