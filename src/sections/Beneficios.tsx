import { motion, type Variants } from 'framer-motion';
import { ShieldCheck, Zap, BookOpen, TrendingUp } from 'lucide-react';

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export const Beneficios = () => {
  const items = [
    {
      icon: ShieldCheck,
      title: "Cero pérdidas ocultas",
      description: "Detecta mermas, productos vencidos y descuadres de caja al instante. Cada centavo queda registrado de forma transparente.",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600"
    },
    {
      icon: Zap,
      title: "Filas que avanzan rápido",
      description: "El punto de venta procesa lecturas de códigos de barra y cobros mixtos en milisegundos, evitando demoras en horas pico.",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      icon: BookOpen,
      title: "Control total de fiados",
      description: "Sustituye el cuaderno tradicional por perfiles digitales de clientes con límites de crédito automáticos y alertas de saldo.",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Precios inteligentes",
      description: "Actualiza los márgenes de ganancia masivamente frente a variaciones de costos, protegiendo la rentabilidad de tu negocio.",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <section id="beneficios" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider rounded-full mb-4"
          >
            ¿Por qué elegirnos?
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight"
          >
            Diseñado para la realidad de tu <span className="text-orange-600">mostrador.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600"
          >
            Olvídate de las planillas complicadas. TinMarket te da el control operativo absoluto con una curva de aprendizaje de apenas minutos.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {items.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm hover:shadow-md hover:border-orange-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-14 h-14 ${benefit.bgColor} rounded-xl flex items-center justify-center ${benefit.iconColor} mb-6`}>
                    <IconComponent size={28} strokeWidth={2.2} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};