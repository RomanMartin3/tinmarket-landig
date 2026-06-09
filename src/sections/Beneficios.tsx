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
      color: "from-emerald-500/10 to-teal-500/5",
      iconColor: "text-emerald-600"
    },
    {
      icon: Zap,
      title: "Filas que avanzan rápido",
      description: "El punto de venta procesa lecturas de códigos de barra y cobros mixtos en milisegundos, evitando demoras en horas pico.",
      color: "from-orange-500/10 to-amber-500/5",
      iconColor: "text-orange-600"
    },
    {
      icon: BookOpen,
      title: "Control total de fiados",
      description: "Sustituye el cuaderno tradicional por perfiles digitales de clientes con límites de crédito automáticos y alertas de saldo.",
      color: "from-blue-500/10 to-indigo-500/5",
      iconColor: "text-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Precios inteligentes",
      description: "Actualiza los márgenes de ganancia masivamente frente a variaciones de costos, protegiendo la rentabilidad de tu negocio.",
      color: "from-purple-500/10 to-pink-500/5",
      iconColor: "text-purple-600"
    }
  ];

  return (
    <section id="beneficios" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Detalles estéticos de fondo estilo Softland/Fudo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none -translate-y-20 translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none translate-y-20 -translate-x-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado de Sección */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-slate-200/60 text-slate-800 font-bold text-xs uppercase tracking-wider rounded-full mb-4"
          >
            ¿Por qué elegirnos?
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight"
          >
            Diseñado para la realidad de tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">mostrador.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 font-medium"
          >
            Olvídate de las planillas complicadas. TinMarket te da el control operativo absoluto con una curva de aprendizaje de apenas minutos.
          </motion.p>
        </div>

        {/* Grilla de Tarjetas Animadas */}
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
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl border border-slate-200/60 p-8 shadow-sm hover:shadow-xl hover:border-orange-500/20 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Icono con fondo degradado dinámico */}
                  <div className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center ${benefit.iconColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={28} strokeWidth={2.2} />
                  </div>
                  
                  {/* Título */}
                  <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {benefit.title}
                  </h3>
                  
                  {/* Descripción */}
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {benefit.description}
                  </p>
                </div>
                
                {/* Indicador estético inferior */}
                <div className="w-8 h-1 bg-slate-100 rounded-full mt-6 group-hover:w-16 group-hover:bg-orange-500 transition-all duration-300"></div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};