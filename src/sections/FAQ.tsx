import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "¿Qué incluye el equipamiento en comodato?",
    answer: "Con el plan mensual te entregamos un lector de código de barras de alta velocidad. Mientras mantengas la suscripción, el equipo es tuyo."
  },
  {
    question: "¿Qué pasa si se me corta el internet en el local?",
    answer: "TinMarket está optimizado para funcionar con un consumo mínimo de datos. Puedes conectarlo compartiendo internet desde tu celular y seguirá volando."
  },
  {
    question: "¿Tengo que pagar por la instalación?",
    answer: "La instalación presencial y la capacitación inicial para ti y tus cajeros están 100% bonificadas para comercios en Mendoza y alrededores."
  },
  {
    question: "¿Hay contratos de permanencia?",
    answer: "No. Creemos en la libertad. Pagas mes a mes y puedes cancelar cuando quieras sin penalidades."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-black tracking-tight text-slate-900 mb-12 text-center">
          Preguntas Frecuentes
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
              >
                <span className="font-bold text-slate-900 text-lg">{faq.question}</span>
                <ChevronDown className={`text-orange-500 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-5 text-slate-600 font-medium"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};