import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { BarcodeScanner } from '../components/ui/BarcodeScanner';// Tu escáner animado

export const Hero = () => {
  const whatsappSoporte = "https://wa.me/549XXXXXXXXX?text=Hola!%20Quiero%20mis%207%20días%20de%20prueba%20en%20TinMarket";

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
        
        {/* Lado Izquierdo: Textos */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-bold text-xs uppercase tracking-widest mb-8 border border-orange-200">
            <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-ping"></span>
            Software + Hardware Todo Incluido
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 mb-6 leading-tight">
            Caja rápida. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">Cero inversión.</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-600 font-medium mb-10 max-w-lg mx-auto md:mx-0">
            Controlá tu stock, aplicá promociones automáticas y manejá cuentas corrientes en una interfaz ultrarrápida. Empezá a cobrar como los grandes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href={whatsappSoporte} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-xl font-black text-lg hover:bg-orange-700 hover:scale-105 transition-all shadow-2xl shadow-orange-500/40">
              Comenzar mis 7 días gratis <ArrowRight size={20} />
            </a>
            <a href="#precio" className="flex items-center justify-center gap-2 bg-white text-slate-700 border-2 border-slate-200 px-8 py-4 rounded-xl font-black text-lg hover:border-orange-500 hover:text-orange-600 transition-all">
              Ver el Plan Único
            </a>
          </div>
        </motion.div>

        {/* Lado Derecho: El escáner animado */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 flex justify-center relative w-full mt-12 md:mt-0"
        >
           <div className="absolute inset-0 bg-orange-500 rounded-full blur-[120px] opacity-20"></div>
           <BarcodeScanner />
        </motion.div>

      </div>
    </section>
  );
};