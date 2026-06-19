import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { APP_CONFIG } from '../config/constants';

export const Pricing = () => {
  return (
    /* MANDAMIENTO DE DISEÑO (Antiaplanamiento): bg-white para contrastar con el Hardware oscuro de arriba y el FAQ gris de abajo. Eliminamos animaciones baratas. */
    <section id="precio" className="relative py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado del Pricing */}
        <div className="text-center mb-16">
          {/* MANDAMIENTO DE DISEÑO (Tipografía Premium) */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6"
          >
            Un solo plan. <span className="text-orange-600">Sin letras chicas.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 font-medium leading-relaxed"
          >
            Herramientas de nivel empresarial para tu mostrador, por una tarifa plana mensual que recuperas evitando un solo error de caja.
          </motion.p>
        </div>

        {/* Tarjeta de Precio Única */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          /* MANDAMIENTO DE DISEÑO: bg-slate-50 sobre bg-white para dar relieve. Borde sutil, sombra elegante. */
          className="relative bg-slate-50 rounded-3xl border border-slate-200 shadow-xl p-8 md:p-12 max-w-2xl mx-auto"
        >
          
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start justify-between border-b border-slate-200 pb-8 mb-8">
            <div>
              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-2">Licencia Completa</h3>
              <p className="text-slate-600 font-medium text-sm">Todo lo que tu comercio necesita para crecer.</p>
            </div>
            <div className="text-center md:text-right">
              <div className="flex items-start justify-center md:justify-end gap-1">
                <span className="text-2xl font-bold text-slate-900 mt-1">$</span>
                <span className="text-6xl font-extrabold text-slate-900 tracking-tight">40.000</span>
              </div>
              <span className="text-slate-500 font-medium text-sm">/ mes (ARS)</span>
            </div>
          </div>

          {/* Lista de Features conectadas a Beneficios */}
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-10">
            {[
              "Lector omnidireccional en comodato",
              "Punto de venta de alta velocidad",
              "Control de stock anti-mermas",
              "Gestión de fiados (Cuentas Corrientes)",
              "Instalación y capacitación presencial",
              "Soporte técnico prioritario por WhatsApp"
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-700 flex items-center justify-center mt-0.5">
                  <Check className="w-3.5 h-3.5 text-white stroke-[2]" />
                </div>
                <span className="text-slate-700 font-medium leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>

          {/* MANDAMIENTO DE MARKETING: CTA orientado a la venta consultiva de alta probabilidad. */}
          <a 
            href={APP_CONFIG.urls.whatsappSales} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-center w-full gap-3 bg-orange-600 text-white px-8 py-5 rounded-xl font-bold text-lg hover:bg-orange-700 transition-colors duration-300 shadow-md"
          >
            Solicitar Instalación Ahora
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowRight size={20} />
            </motion.span>
          </a>
          <p className="text-center text-slate-500 text-sm font-medium mt-4">
            Sin contratos de permanencia. Prueba la velocidad real en tu mostrador.
          </p>
        </motion.div>

      </div>
    </section>
  );
};