import { motion } from 'framer-motion';
import { Calculator, ShieldAlert, PackageCheck, Percent } from 'lucide-react';

export const Beneficios = () => {
  // ... (El array de beneficios se mantiene igual al anterior)
  const beneficios = [
    { icon: Calculator, title: "Cierres a prueba de balas", description: "Cruza ventas, cobros de fiados y retiros de efectivo. Si falta un solo peso al final del turno, el sistema te dice exactamente de dónde salió el error." },
    { icon: ShieldAlert, title: "Fiá con seguridad", description: "Digitaliza tu cuaderno. Establece límites de crédito automáticos por cliente y el sistema bloqueará la venta si alguien supera su cupo." },
    { icon: PackageCheck, title: "Unidades o Packs", description: "¿Vendés la bebida suelta y en pack? Escaneá cualquier código. El sistema descontará la cantidad física exacta de tu inventario sin confundirse." },
    { icon: Percent, title: "Promos sin fundirte", description: "Armá combos 3x2. Nuestro motor de precios te protege bloqueando automáticamente cualquier promoción que te haga perder dinero frente a tu costo." }
  ];

  return (
    // Alternancia de color: bg-white. 
    // pt-56 md:pt-64 es VITAL para recibir la imagen que cae desde el Hero (Overlap)
    <section id="beneficios" className="pt-56 md:pt-64 pb-24 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          {/* Tipografía: font-extrabold y tracking-tight */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Diseñado para los problemas <br/> <span className="text-orange-600">reales del mostrador.</span>
          </h2>
          {/* Tipografía: font-medium y leading-relaxed */}
          <p className="text-xl text-slate-600 font-medium leading-relaxed">
            No somos un anotador digital. Somos el respaldo operativo para que tu comercio no pierda rentabilidad por errores humanos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {beneficios.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center text-slate-800">
                  <Icon size={26} strokeWidth={2} />
                </div>
                <div>
                  {/* Tipografía: font-bold para títulos secundarios */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">{item.title}</h3>
                  {/* Tipografía: font-normal para párrafos de tarjetas */}
                  <p className="text-lg text-slate-600 font-normal leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};