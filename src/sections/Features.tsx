import { motion } from 'framer-motion';
import { CheckCircle2, BarChart3, Smartphone, Zap } from 'lucide-react';
import dashboardImg from '../assets/dashboard.png';

const FeatureRow = ({ title, description, items, icon: Icon, reversed = false }: any) => {
  return (
    <div className={`flex flex-col gap-12 lg:gap-24 items-center py-16 ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
      {/* Texto de la característica */}
      <motion.div 
        initial={{ opacity: 0, x: reversed ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full lg:w-1/2 space-y-6"
      >
        <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6">
          <Icon size={24} strokeWidth={2.5} />
        </div>
        <h3 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
          {title}
        </h3>
        <p className="text-lg text-slate-600 leading-relaxed">
          {description}
        </p>
        <ul className="space-y-4 pt-4">
          {items.map((item: string, index: number) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Imagen o Mockup */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full lg:w-1/2"
      >
        <div className="relative rounded-2xl bg-white p-2 sm:p-4 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-slate-100">
          {/* Fondo sutil detrás de la imagen */}
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-50 to-slate-50 rounded-2xl -z-10 transform scale-[1.02]"></div>
          <img 
            src={dashboardImg} 
            alt={title} 
            className="w-full h-auto rounded-xl border border-slate-100 block"
          />
        </div>
      </motion.div>
    </div>
  );
};

export const Features = () => {
  return (
    <section id="caracteristicas" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Todo lo que necesitas para operar, <span className="text-orange-600">en una sola pantalla.</span>
          </h2>
          <p className="text-xl text-slate-600">
            Estamos construyendo la herramienta definitiva. Únete a la fase de acceso anticipado y descubre un sistema diseñado para no fallar en el mostrador.
          </p>
        </div>

        <FeatureRow 
          title="Facturación ágil y cobros mixtos"
          description="Diseñado para la velocidad del minimarket. Cobra en efectivo, transferencia o tarjetas en la misma transacción sin hacer cálculos manuales."
          icon={Zap}
          items={[
            "Cálculo automático de vueltos y recargos.",
            "División de pagos (Ej: Mitad efectivo, mitad Mercado Pago).",
            "Emisión de comprobantes en segundos."
          ]}
        />

        <FeatureRow 
          title="Control de inventario en tiempo real"
          description="Olvídate de contar productos a mano. El sistema descuenta el stock automáticamente con cada escaneo en el mostrador."
          icon={BarChart3}
          reversed={true}
          items={[
            "Alertas de stock crítico para que nunca te quedes sin mercadería.",
            "Actualización masiva de precios con un clic.",
            "Historial de movimientos y mermas."
          ]}
        />

        <FeatureRow 
          title="Gestión de Cuentas Corrientes (Fiados)"
          description="Digitaliza tu libreta de fiados. Mantén un registro seguro e inalterable de quién te debe, cuánto y desde cuándo."
          icon={Smartphone}
          items={[
            "Límites de crédito personalizados por cliente.",
            "Saldos actualizados al instante en la caja.",
            "Envío de recordatorios de pago por WhatsApp (Próximamente)."
          ]}
        />

      </div>
    </section>
  );
};