import { motion } from 'framer-motion';
import { Zap, CreditCard, PackageCheck } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      title: "Facturación en milisegundos",
      description: "No frenes la fila. Tu cajero puede usar atajos de teclado (F10, F12) y el lector de código de barras para procesar ventas sin siquiera tocar el mouse.",
      icon: <Zap className="text-orange-500" size={24} />,
      imageText: "[ IMAGEN DEL PUNTO DE VENTA (POS) ]",
      reverse: false,
    },
    {
      title: "Pagos Mixtos y Cuenta Corriente",
      description: "¿Te pagan la mitad en efectivo y la mitad por Mercado Pago? No hay problema. Además, fía con confianza registrando la deuda automáticamente en la Cuenta Corriente del cliente.",
      icon: <CreditCard className="text-orange-500" size={24} />,
      imageText: "[ IMAGEN DEL MODAL DE COBRO MIXTO ]",
      reverse: true,
    },
    {
      title: "Control de Stock Inteligente",
      description: "El sistema te avisa cuando te estás quedando sin mercadería clave. Olvídate de los faltantes y de perder ventas porque no sabías que no quedaba stock.",
      icon: <PackageCheck className="text-orange-500" size={24} />,
      imageText: "[ IMAGEN DEL PANEL DE INVENTARIO / ALERTAS ]",
      reverse: false,
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-black tracking-tight text-slate-900 mb-4">
            Diseñado para la velocidad del mostrador
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Entendemos que en un minimarket el tiempo es dinero. Cada módulo de TinMarket está optimizado para reducir clics y errores.
          </p>
        </div>

        <div className="space-y-32">
          {features.map((feat, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row items-center gap-12 ${feat.reverse ? 'md:flex-row-reverse' : ''}`}>
              
              <motion.div 
                initial={{ opacity: 0, x: feat.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex-1 space-y-6"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center shadow-inner">
                  {feat.icon}
                </div>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">{feat.title}</h3>
                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                  {feat.description}
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex-1 w-full"
              >
                <div className="bg-slate-100 border border-slate-200 rounded-2xl aspect-video flex items-center justify-center text-slate-400 font-bold shadow-xl">
                  {feat.imageText}
                </div>
              </motion.div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};