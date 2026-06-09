import { PackageOpen, CheckCircle, MonitorSmartphone } from 'lucide-react';
import { motion } from 'framer-motion';

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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 font-bold text-xs uppercase tracking-widest mb-6 border border-orange-500/30">
            <PackageOpen size={14} /> Tu Ventaja Injusta
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 leading-tight">
            Nosotros ponemos el hardware. <br/><span className="text-orange-500">Tú pones las ventas.</span>
          </h2>
          <p className="text-lg text-slate-300 font-medium mb-8">
            Comprar una lectora y una ticketera hoy es una barrera enorme. Nosotros la eliminamos. Al usar nuestro sistema, el equipamiento físico queda 100% cubierto.
          </p>
          <ul className="space-y-4 font-bold text-slate-200">
            <motion.li whileHover={{ x: 5 }} className="flex items-center gap-3"><CheckCircle className="text-orange-500 shrink-0" /> Lector de códigos de barra de alta velocidad.</motion.li>
            <motion.li whileHover={{ x: 5 }} className="flex items-center gap-3"><CheckCircle className="text-orange-500 shrink-0" /> Impresora térmica para entregar tickets.</motion.li>
            <motion.li whileHover={{ x: 5 }} className="flex items-center gap-3"><CheckCircle className="text-orange-500 shrink-0" /> Recambio inmediato ante cualquier falla técnica.</motion.li>
            <motion.li whileHover={{ x: 5 }} className="flex items-center gap-3"><CheckCircle className="text-orange-500 shrink-0" /> Instalación presencial garantizada en la región.</motion.li>
          </ul>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          {/* Animación flotante para el hardware */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="aspect-square w-full max-w-md bg-gradient-to-tr from-slate-900 to-slate-800 rounded-3xl border border-slate-700 shadow-2xl flex items-center justify-center p-8 relative z-10"
          >
             <MonitorSmartphone size={100} className="text-slate-600 opacity-50" />
             <div className="absolute bottom-10 text-center w-full font-black text-xl tracking-widest text-orange-500 uppercase">Equipamiento Incluido</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};