import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const Pricing = () => {
  const whatsappSoporte = "https://wa.me/5492615876117?text=Hola!%20Quiero%20mis%207%20días%20de%20prueba%20en%20TinMarket";

  return (
    <section id="precio" className="py-32 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Tipografía: font-extrabold y tracking-tight */}
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">Un solo plan. Sin letras chicas.</h2>
          <p className="text-xl text-slate-600 font-medium mb-16 leading-relaxed">Creemos en la transparencia. Te damos la herramienta completa desde el primer día.</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl border-4 border-orange-500 overflow-hidden relative mx-auto max-w-2xl"
        >
          <div className="absolute top-0 right-0 bg-orange-500 text-white font-black text-xs uppercase tracking-widest py-1 px-4 rounded-bl-xl">
            Suscripción Mensual
          </div>
          <div className="p-10 md:p-14">
            <h3 className="text-2xl font-black uppercase tracking-widest text-slate-500 mb-2">TinMarket Full</h3>
            <div className="flex justify-center items-start mb-6">
              <span className="text-2xl font-bold text-slate-900 mt-2">$</span>
              <span className="text-7xl font-black tracking-tighter text-slate-900">30</span>
              <span className="text-lg font-bold text-slate-500 self-end mb-2">/mes</span>
            </div>
            
            <div className="mb-10 text-left bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <div className="grid md:grid-cols-2 gap-y-4 gap-x-6">
                <div className="flex items-center gap-3 font-bold text-slate-700"><CheckCircle size={20} className="text-emerald-500 shrink-0" /> Sistema POS sin límites</div>
                <div className="flex items-center gap-3 font-bold text-slate-700"><CheckCircle size={20} className="text-emerald-500 shrink-0" /> Cuentas Corrientes</div>
                <div className="flex items-center gap-3 font-bold text-slate-700"><CheckCircle size={20} className="text-emerald-500 shrink-0" /> Motor de Promos</div>
                <div className="flex items-center gap-3 font-bold text-slate-700"><CheckCircle size={20} className="text-emerald-500 shrink-0" /> Control de Stock</div>
                <div className="flex items-center gap-3 font-bold text-slate-900 bg-orange-100 py-1 px-2 rounded -ml-2"><CheckCircle size={20} className="text-orange-600 shrink-0" /> Lector en comodato</div>
                <div className="flex items-center gap-3 font-bold text-slate-700"><CheckCircle size={20} className="text-emerald-500 shrink-0" /> Panel de estadísticas</div>
              </div>
            </div>

            <a href={whatsappSoporte} target="_blank" rel="noreferrer" className="block w-full bg-orange-600 text-white py-5 rounded-xl font-black text-xl hover:bg-orange-700 transition-colors shadow-xl shadow-orange-500/20 uppercase tracking-widest text-center">
              Reclamar mis 7 Días Gratis
            </a>
            <p className="text-xs text-slate-400 font-medium mt-4">Sin contratos de permanencia. Cancelás cuando quieras.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};