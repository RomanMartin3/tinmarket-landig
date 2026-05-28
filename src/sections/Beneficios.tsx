import { Zap, CreditCard, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

export const Beneficios = () => {
  const cards = [
    {
      icon: <Zap size={32} />,
      title: "Caja Ultrarrápida",
      desc: "Buscá productos en milisegundos, usá atajos de teclado y cobrá sin necesidad de tocar el mouse. No frenes la fila."
    },
    {
      icon: <CreditCard size={32} />,
      title: "Pagos Mixtos y 'Fiado'",
      desc: "Cobrá una parte en efectivo, otra por MercadoPago y mandá el resto a la Cuenta Corriente del cliente. Todo integrado."
    },
    {
      icon: <Tag size={32} />,
      title: "Promociones Inteligentes",
      desc: "Armá combos y descuentos. El sistema detecta los productos y aplica la mejor rebaja de forma automática."
    }
  ];

  return (
    <section id="beneficios" className="py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-black tracking-tighter text-slate-900 mb-4">Diseñado para la velocidad</h2>
          <p className="text-lg text-slate-600">Tu cajero necesita agilidad. Tu negocio necesita control. TinMarket une lo mejor de los dos mundos.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-orange-500 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all">
                {card.icon}
              </div>
              <h3 className="text-xl font-black mb-3 text-slate-900">{card.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};