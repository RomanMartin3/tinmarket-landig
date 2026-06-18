import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import scannerImg from '../assets/scanner-logo.jpg';

export const Hardware = () => {
  return (
    // Alternancia estricta: bg-slate-900
    <section id="hardware" className="py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {/* Tipografía: font-extrabold y tracking-tight */}
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Nosotros ponemos el hardware. <br/>
            <span className="text-orange-500">Vos ponés las ventas.</span>
          </h2>
          <p className="text-xl text-slate-400 font-medium mb-10 leading-relaxed">
            Comprar una lectora de alta velocidad es una barrera enorme. Nosotros la eliminamos entregando el equipo en comodato.
          </p>
          
          <ul className="space-y-5 text-lg text-slate-300">
            <li className="flex items-start gap-4">
              <CheckCircle2 className="text-orange-500 w-6 h-6 shrink-0 mt-0.5" /> 
              <span>Lector omnidireccional de alta velocidad incluido.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="text-orange-500 w-6 h-6 shrink-0 mt-0.5" /> 
              <span>Recambio inmediato ante cualquier falla técnica.</span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle2 className="text-orange-500 w-6 h-6 shrink-0 mt-0.5" /> 
              <span>Instalación presencial y capacitación bonificada para comercios en Mendoza.</span>
            </li>
          </ul>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white p-12 rounded-3xl w-full max-w-lg mx-auto"
        >
          <img 
            src={scannerImg} 
            alt="Hardware de lectura" 
            className="w-full h-auto object-contain"
          />
        </motion.div>

      </div>
    </section>
  );
};