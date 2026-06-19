import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { APP_CONFIG } from '../config/constants';

/* MANDAMIENTO DE MARKETING: Las FAQ no son para informar, son para destruir objeciones de ventas. Copywriting agresivo y empático. */
const faqs = [
  {
    question: "¿El equipamiento en comodato tiene algún costo oculto?",
    answer: "Absolutamente ninguno. Mientras mantengas tu suscripción activa, te entregamos un lector omnidireccional de alta velocidad. Si presenta alguna falla técnica, te lo cambiamos sin cargo. Nuestro negocio es que tu caja cobre más rápido, no venderte hardware."
  },
  {
    question: "¿Qué pasa con el sistema si se me corta el internet en el local?",
    answer: "TinMarket está ultra-optimizado para no dejarte a pie. Si se corta el WiFi de tu local, podés compartir internet desde tu celular. Consume tan pocos datos que no lo notarás en tu plan, y tu mostrador seguirá operando con total normalidad."
  },
  {
    question: "No soy experto en tecnología, ¿es difícil aprender a usarlo?",
    answer: "Si sabés usar WhatsApp, sabés usar TinMarket. Además, para los comercios del Gran Mendoza, la instalación presencial y la capacitación de tus cajeros están 100% bonificadas. No te dejamos solo; dejamos el sistema funcionando y a tu equipo facturando."
  },
  {
    question: "¿Me exigen firmar un contrato de permanencia?",
    answer: "No. Pagás mes a mes. Estamos tan seguros de que nuestro sistema va a eliminar tus descuadres de caja y ordenar tu stock, que no necesitamos atarte con contratos. Si no ves el valor, podés cancelar cuando quieras sin penalidades."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    /* MANDAMIENTO DE DISEÑO (Antiaplanamiento): bg-slate-50 para contrastar con el bg-white de la sección de Precios superior. */
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          {/* MANDAMIENTO DE DISEÑO (Tipografía Premium) */}
          <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-6">
            Respuestas claras. <span className="text-orange-600">Cero sorpresas.</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium">
            Entendemos tus dudas. Aquí respondemos las consultas más frecuentes de los dueños de comercios antes de dar el salto.
          </p>
        </div>
        
        <div className="space-y-4 mb-12">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            
            return (
              /* MANDAMIENTO DE DISEÑO (Estructura 3D): Tarjetas blancas sobre fondo gris. El borde cambia al color de acento cuando está activo. */
              <div 
                key={idx} 
                className={`bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${
                  isOpen ? 'border-orange-500/50 ring-1 ring-orange-500/20' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left px-6 py-6 flex justify-between items-center focus:outline-none"
                >
                  <span className={`font-bold text-lg tracking-tight transition-colors ${isOpen ? 'text-orange-600' : 'text-slate-900'}`}>
                    {faq.question}
                  </span>
                  <div className={`p-1 rounded-full transition-colors ${isOpen ? 'bg-orange-100' : 'bg-slate-100'}`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-orange-600' : 'text-slate-500'}`} />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      {/* MANDAMIENTO DE DISEÑO: Párrafo transpirable (leading-relaxed) */}
                      <div className="px-6 pb-6 text-slate-600 font-medium leading-relaxed border-t border-slate-50 mt-2 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* MANDAMIENTO DE MARKETING: Cierre de la sección con un CTA de baja fricción para consultas no resueltas. */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-sm"
        >
          <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">¿Tenés alguna otra duda?</h3>
          <p className="text-slate-600 font-medium mb-6">
            Escribinos directamente. Un asesor técnico te responderá sin compromisos.
          </p>
          <a 
            href={APP_CONFIG.urls.whatsappSales} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors shadow-md"
          >
            <MessageCircle size={20} /> Chatear por WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  );
};