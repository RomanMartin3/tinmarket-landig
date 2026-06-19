import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Calculator, PackageSearch, Users, Maximize2, X } from 'lucide-react';

import posImg from '../../assets/pos-real.png';
import stockImg from '../../assets/stock.png';
import promosImg from '../../assets/Promos.png';
import estadisticasImg from '../../assets/Dashboard2.png';

type TabContent = {
  id: string;
  title: string;
  description: string;
  icon: any;
  image: string;
};

/* MANDAMIENTO DE MARKETING: Características conectadas a beneficios reales. Nombres de autoridad. */
const tabsData: TabContent[] = [
  {
    id: 'pos',
    title: 'Caja Ultrarrápida',
    description: 'Cobra en efectivo, transferencia o múltiples tarjetas al mismo tiempo. Cero cálculos manuales y comprobantes emitidos en segundos.',
    icon: Calculator,
    image: posImg,
  },
  {
    id: 'stock',
    title: 'Stock Blindado',
    description: 'Descuento automático con cada escaneo en el mostrador. Recibe alertas de stock crítico y aplica aumentos masivos de precios con un clic.',
    icon: PackageSearch,
    image: stockImg,
  },
  {
    id: 'promos',
    title: 'Motor de Promociones',
    description: 'Crea combos 3x2 y descuentos especiales. El sistema protege tu margen de ganancia bloqueando ofertas que perforen tu costo.',
    icon: Users,
    image: promosImg,
  },
  {
    id: 'estadisticas',
    title: 'Métricas de Rentabilidad',
    description: 'Olvida las planillas de Excel. Visualiza cierres de caja ciegos, productos más vendidos y ganancia neta real en tiempo real.',
    icon: BarChart,
    image: estadisticasImg,
  }
];

export const FeaturesTabs = () => {
  const [activeTab, setActiveTab] = useState<string>(tabsData[0].id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentTabData = tabsData.find(tab => tab.id === activeTab);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isModalOpen]);

  return (
    <>
      {/* MANDAMIENTO DE DISEÑO (Antiaplanamiento): bg-white para contrastar con el Hero superior. 
          pt-48 MASIVO para dejar caer la imagen del Hero sobre esta sección sin tapar el texto. */}
      <section id="modulos" className="pt-48 pb-24 bg-white border-t border-slate-200 relative z-0">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            {/* MANDAMIENTO DE DISEÑO (Tipografía Premium): Títulos compactos y fuertes */}
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Control total del mostrador, <br className="hidden md:block" />
              <span className="text-orange-600">sin clics innecesarios.</span>
            </h2>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              Módulos diseñados exclusivamente para la dinámica rápida del minimarket. A prueba de errores de cajeros y listos para operar desde el primer día.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* COLUMNA DE PESTAÑAS (lg:col-span-3) */}
            <div className="lg:col-span-3 flex flex-col gap-3">
              {tabsData.map((tab) => {
                const IconComponent = tab.icon;
                const isActive = activeTab === tab.id;
                
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    /* MANDAMIENTO DE DISEÑO (Estructura 3D): Pestaña activa con borde izquierdo fuerte (estilo software corporativo) y fondo diferenciado. */
                    className={`text-left p-5 rounded-r-xl transition-all duration-300 focus:outline-none border-l-4 ${
                      isActive 
                        ? 'bg-slate-50 border-orange-600 shadow-sm' 
                        : 'bg-transparent border-transparent hover:bg-slate-50/50'
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <div className={`p-2 rounded-lg transition-colors ${isActive ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-500'}`}>
                        <IconComponent size={24} strokeWidth={isActive ? 2.5 : 2} />
                      </div>
                      <h3 className={`text-xl font-bold tracking-tight ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>
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
                          <p className="text-slate-600 mt-3 font-medium leading-relaxed text-base">
                            {tab.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>

            {/* COLUMNA DE IMAGEN (lg:col-span-9) - Imagen Gigante */}
            <div 
              className="lg:col-span-9 relative group cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-slate-900/90 backdrop-blur-md text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl pointer-events-none">
                <Maximize2 size={20} />
                Click para ampliar
              </div>

              {/* MANDAMIENTO DE DISEÑO (Cero efectos baratos): Contenedor de imagen nítido, con borde limpio y fondo de tarjeta. */}
              <div className="relative rounded-2xl border border-slate-200 bg-slate-50 p-2 shadow-lg overflow-hidden transition-transform duration-500 group-hover:scale-[1.01]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-full bg-white rounded-xl overflow-hidden border border-slate-200/60"
                  >
                    {currentTabData?.image ? (
                      <img 
                        src={currentTabData.image} 
                        alt={`Módulo: ${currentTabData.title}`} 
                        className="w-full h-auto block object-cover" 
                      />
                    ) : (
                      <div className="w-full aspect-video bg-slate-100 flex items-center justify-center">
                        <span className="text-slate-400 font-medium">Captura de interfaz en proceso...</span>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MODAL DE PANTALLA COMPLETA - Premium y Sobrio */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/95 backdrop-blur-sm p-4 sm:p-8"
            onClick={() => setIsModalOpen(false)}
          >
            <button 
              className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors bg-slate-800/80 hover:bg-slate-700 p-3 rounded-full z-50"
              onClick={() => setIsModalOpen(false)}
            >
              <X size={28} />
            </button>
            <motion.img 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={currentTabData?.image} 
              alt="Vista detallada de la interfaz" 
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl ring-1 ring-white/10"
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};