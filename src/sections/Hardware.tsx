import { PackageOpen, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import scannerImg from '../assets/scanner-logo.jpg';

export const Hardware = () => {
  return (
    <section id="hardware" className="py-24 bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600 rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-tight">
            Nosotros ponemos el hardware. <br/><span className="text-orange-500">Tú pones las ventas.</span>
          </h2>
          <p className="text-lg text-slate-300 font-medium mb-8">
            Comprar una lectora y una ticketera hoy es una barrera enorme. Nosotros la eliminamos. Al usar nuestro sistema, el equipamiento físico queda 100% cubierto.
          </p>
          <ul className="space-y-4 font-bold text-slate-200">
            <motion.li whileHover={{ x: 5 }} className="flex items-center gap-3"><CheckCircle className="text-orange-500 shrink-0" /> Lector de códigos de barra de alta velocidad.</motion.li>
            <motion.li whileHover={{ x: 5 }} className="flex items-center gap-3"><CheckCircle className="text-orange-500 shrink-0" /> Recambio inmediato ante cualquier falla técnica.</motion.li>
            <motion.li whileHover={{ x: 5 }} className="flex items-center gap-3"><CheckCircle className="text-orange-500 shrink-0" /> Instalación presencial garantizada en la región.</motion.li>
          </ul>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto w-full max-w-md bg-white p-6 rounded-2xl border border-slate-200 shadow-xl flex items-center justify-center"
        >
          {/* Fondo decorativo sutil detrás del escáner */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-2xl pointer-events-none"></div>

          {/* Imagen del Escáner perfectamente encuadrada */}
          <img 
            src={scannerImg} 
            alt="Escáner de código de barras" 
            className="w-full h-auto max-h-[350px] object-contain block relative z-10"
          />
        </motion.div>
              </div>
            </section>
          );
};