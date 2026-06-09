import { BookX, PackageMinus, Wallet } from 'lucide-react';
// Añadimos 'type' justo antes de Variants
import { motion, type Variants } from 'framer-motion'; 

export const Beneficios = () => {
  const cards = [
    {
      icon: <BookX size={32} />,
      title: "Tira el cuaderno de fiados a la basura",
      desc: "Lleva las cuentas corrientes de tus clientes de forma automática y cobra con efectivo, tarjetas o Mercado Pago en el mismo ticket."
    },
    {
      icon: <PackageMinus size={32} />,
      title: "Evita quedarte sin mercadería",
      desc: "El sistema detecta tus ventas y te alerta cuando te estás quedando sin productos clave. Nunca más pierdas una venta de fin de semana por falta de stock."
    },
    {
      icon: <Wallet size={32} />,
      title: "Cierres de caja sin dolores de cabeza",
      desc: "Conoce exactamente cuánta plata entró y salió al final del día. Cálculos automáticos y sin errores para que cierres el local e irte a casa tranquilo."
    }
  ];

  // Tipamos explícitamente la constante con : Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  // Tipamos explícitamente la constante con : Variants
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="beneficios" className="py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-black tracking-tighter text-slate-900 mb-4">Problemas reales. Soluciones reales.</h2>
          <p className="text-lg text-slate-600">Tu tiempo vale plata. TinMarket elimina las tareas manuales que te roban horas de vida.</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-orange-500 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-xl font-black mb-3 text-slate-900 leading-tight">{card.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};