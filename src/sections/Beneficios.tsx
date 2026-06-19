import { motion } from 'framer-motion';
import { Calculator, ShieldAlert, PackageCheck, Percent, ArrowRight } from 'lucide-react';
import { APP_CONFIG } from '../config/constants';

export const Beneficios = () => {
  const beneficios = [
    { icon: Calculator, title: "Cierres a prueba de balas", description: "Cruza ventas, cobros de fiados y retiros de efectivo. Si falta un solo peso al final del turno, el sistema te dice exactamente de dónde salió el error." },
    { icon: ShieldAlert, title: "Fiá con seguridad", description: "Digitaliza tu cuaderno. Establece límites de crédito automáticos por cliente y el sistema bloqueará la venta si alguien supera su cupo." },
    { icon: PackageCheck, title: "Unidades o Packs", description: "¿Vendés la bebida suelta y en pack? Escaneá cualquier código. El sistema descontará la cantidad física exacta de tu inventario sin confundirse." },
    { icon: Percent, title: "Promos sin fundirte", description: "Armá combos 3x2. Nuestro motor de precios te protege bloqueando automáticamente cualquier promoción que te haga perder dinero frente a tu costo." }
  ];

  return (
    /* MANDAMIENTO DE DISEÑO (Antiaplanamiento): Cambiamos de bg-white a bg-slate-50 para romper la monotonía de la sección anterior. Eliminamos el pt-64 gigante. */
    <section id="beneficios" className="pt-16 pb-24 bg-slate-50 relative z-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* MANDAMIENTO DE DISEÑO (Estructura 3D / Overlap): Margen negativo (-mt-24) para que este bloque invada el espacio de la sección anterior y cree un efecto de anclaje. */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative -mt-24 bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-slate-100">
          
          {/* MANDAMIENTO DE DISEÑO (Tipografía Premium): font-extrabold y tracking-tight. */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Diseñado para los problemas <br className="hidden md:block"/> 
            {/* MANDAMIENTO DE DISEÑO (Regla 60-30-10): Color de acento reservado. */}
            <span className="text-orange-600">reales del mostrador.</span>
          </h2>
          
          {/* MANDAMIENTO DE DISEÑO (Tipografía Premium): font-medium y leading-relaxed. */}
          <p className="text-xl text-slate-600 font-medium leading-relaxed">
            No somos un anotador digital. Somos el blindaje operativo para que tu comercio no pierda rentabilidad por errores humanos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {beneficios.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1 }}
                /* MANDAMIENTO DE DISEÑO (Estructura 3D): Tarjetas blancas sobre fondo gris para generar relieve corporativo limpio. */
                className="flex flex-col sm:flex-row gap-6 items-start bg-white p-8 rounded-2xl border border-slate-200 hover:border-orange-500/40 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-orange-600">
                  <Icon size={32} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-lg text-slate-600 font-medium leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* MANDAMIENTO DE MARKETING Y COPYWRITING: Llamado a la acción (CTA) post-valor. Cerramos con agresividad comercial. */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <a 
            href={APP_CONFIG.urls.whatsappSales} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center justify-center gap-3 bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition-all shadow-lg hover:-translate-y-0.5"
          >
            Solicitar Instalación
            <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              <ArrowRight size={20} />
            </motion.span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};