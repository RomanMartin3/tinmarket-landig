import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Calculator, DollarSign, PackageSearch, Users, Maximize2, X } from 'lucide-react';
import posImg from '../../assets/pos-real.png';
import stockImg from '../../assets/stock.png';
import promosImg from '../../assets/Promos.png';
import ccajaImg from '../../assets/hero.png';
import estadisticasImg from '../../assets/dashboard2.png';

// Tipos para estructurar la información
type TabContent = {
  id: string;
  title: string;
  description: string;      
  icon: any;
  image: string;
};

// Aquí configuras tus pestañas y las rutas a tus capturas de pantalla reales
const tabsData: TabContent[] = [
  {
    id: 'pos',
    title: 'Punto de Venta ',
    description: 'Facturación ágil pensada para el mostrador. Cobra en efectivo, transferencia o tarjetas en la misma transacción sin hacer cálculos manuales.',
    icon: Calculator,
    image: posImg,
  },
  {
    id: 'stock',
    title: 'Control de Inventario',
    description: 'El sistema descuenta el stock automáticamente con cada escaneo. Recibe alertas de stock crítico y actualiza precios masivamente.',
    icon: PackageSearch,
    image: stockImg,
  },
  {
    id: 'promos',
    title: 'Promociones',
    description: 'Crea y gestiona promociones especiales para atraer y retener clientes. Asegúrate de que tus ofertas sean efectivas y rentables.',
    icon: Users,
    image: promosImg,
  },
  {
    id: 'estadisticas',
    title: 'Estadísticas',
    description: 'Obtén insights valiosos sobre el rendimiento de tu negocio con reportes detallados y gráficos intuitivos.',
    icon: BarChart,
    image: estadisticasImg,
  }
];

export const FeaturesTabs = () => {
  const [activeTab, setActiveTab] = useState<string>(tabsData[0].id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentTabData = tabsData.find(tab => tab.id === activeTab);

  // Bloquear el scroll del fondo cuando el modal está abierto
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Limpieza al desmontar el componente
    return () => { document.body.style.overflow = 'unset'; }
  }, [isModalOpen]);

  return (
    <>
      <section id="modulos" className="py-24 bg-white border-t border-slate-200">
        {/* EL TRUCO 1: Cambiamos max-w-7xl por max-w-[1400px] para ensanchar todo el bloque */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Encabezado de la sección */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Todo tu negocio en <span className="text-orange-600">una sola pantalla</span>
            </h2>
            <p className="text-lg text-slate-600">
              Explora los módulos diseñados específicamente para resolver los problemas reales de tu comercio, sin funciones de relleno que nunca vas a usar.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* EL TRUCO 2: Columna Izquierda ahora solo ocupa 3 espacios (lg:col-span-3) */}
            <div className="lg:col-span-3 flex flex-col gap-4">
              {tabsData.map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`text-left p-5 rounded-xl border transition-all duration-300 focus:outline-none ${
                      isActive 
                        ? 'bg-slate-50 border-orange-500 shadow-md' 
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className={`p-2 rounded-lg ${isActive ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-500'}`}>
                        <IconComponent size={24} />
                      </div>
                      <h3 className={`text-lg lg:text-xl font-bold ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>
                        {tab.title}
                      </h3>
                    </div>
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <p className="text-slate-600 mt-2 leading-relaxed text-sm lg:text-base">
                            {tab.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>

            {/* EL TRUCO 3: La imagen ahora ocupa 9 espacios, robándole ancho a los botones (lg:col-span-9) */}
            <div 
              className="lg:col-span-9 relative group cursor-pointer" 
              onClick={() => setIsModalOpen(true)}
            >
              {/* Botón flotante de "Ampliar" */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-slate-900/80 backdrop-blur-sm text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl pointer-events-none">
                <Maximize2 size={20} />
                Click para ampliar
              </div>

              {/* CONTENEDOR DE LA IMAGEN */}
              <div className="relative rounded-xl border border-slate-200 bg-white shadow-lg overflow-hidden transition-transform duration-500 group-hover:scale-[1.01]">
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-full leading-[0]" 
                  >
                    {currentTabData?.image ? (
                      <img
                        src={currentTabData.image}
                        alt={`Captura de ${currentTabData.title}`}
                        className="w-full h-auto block" 
                      />
                    ) : (
                      <div className="w-full aspect-video bg-slate-200 flex items-center justify-center border-dashed">
                        <span className="text-slate-500 font-medium">Captura en camino...</span>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MODAL DE PANTALLA COMPLETA */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4 sm:p-8"
            onClick={() => setIsModalOpen(false)}
          >
            {/* Botón Cerrar */}
            <button 
              className="absolute top-4 right-4 md:top-6 md:right-6 text-slate-400 hover:text-white transition-colors bg-slate-800/50 hover:bg-slate-800 p-2 rounded-full z-50"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={32} />
            </button>

            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={currentTabData?.image}
              alt="Vista ampliada"
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-slate-800"
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};