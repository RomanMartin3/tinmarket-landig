import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import scannerImg from '../assets/scanner-logo.jpg';

export const Hardware = () => {
  return (
    <section id="hardware" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            Nosotros ponemos el hardware. <br/><span className="text-orange-500">Tú pones las ventas.</span>
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Comprar una lectora y una ticketera hoy es una barrera enorme. Nosotros la eliminamos. Al usar nuestro sistema, el equipamiento físico queda 100% cubierto.
          </p>
          
          <ul className="space-y-4 text-slate-200">
            <li className="flex items-center gap-3"><CheckCircle className="text-orange-500 shrink-0" /> Lector de códigos de barra de alta velocidad.</li>
            <li className="flex items-center gap-3"><CheckCircle className="text-orange-500 shrink-0" /> Recambio inmediato ante cualquier falla técnica.</li>
            <li className="flex items-center gap-3"><CheckCircle className="text-orange-500 shrink-0" /> Instalación presencial garantizada en la región.</li>
          </ul>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-full max-w-md bg-white p-8 rounded-xl border border-slate-700 shadow-xl flex items-center justify-center"
        >
          <img 
            src={scannerImg} 
            alt="Escáner de código de barras" 
            className="w-full h-auto max-h-[350px] object-contain block"
          />
        </motion.div>

      </div>
    </section>
  );
};