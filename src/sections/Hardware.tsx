import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import scannerImg from '../assets/scanner-logo.jpg';

export const Hardware = () => {
  return (
    // Ampliamos el padding (pt-40 pb-48) para darle espacio a los cortes diagonales
    <section id="hardware" className="relative pt-40 pb-48 z-10">
      
      {/* FONDO CON CORTE DIAGONAL (El cambio estructural fuerte) */}
      <div 
        className="absolute inset-0 bg-slate-900 -z-10"
        style={{
          // Corta el fondo en diagonal. 
          // Arriba: baja de izquierda a derecha. Abajo: sube de derecha a izquierda.
          clipPath: 'polygon(0 6vw, 100% 0, 100% calc(100% - 6vw), 0 100%)'
        }}
      >
        {/* Foco de luz interno para darle volumen al bloque oscuro */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center relative">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
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
              <span>Instalación presencial y capacitación bonificada para comercios.</span>
            </li>
          </ul>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          // Hicimos que la tarjeta sobresalga un poco visualmente para contrastar con la diagonal
          className="bg-white p-10 md:p-12 rounded-3xl w-full max-w-lg mx-auto shadow-2xl relative transform hover:-translate-y-2 transition-transform duration-500"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent rounded-3xl -z-10"></div>
          <img 
            src={scannerImg} 
            alt="Hardware de lectura" 
            className="w-full h-auto object-contain drop-shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
};