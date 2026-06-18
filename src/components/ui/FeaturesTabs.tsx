import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, PackageSearch, Users } from 'lucide-react';

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
    image: '/capturas/pos-real.png', // Reemplazar con tu ruta real
  },
  {
    id: 'stock',
    title: 'Control de Inventario',
    description: 'El sistema descuenta el stock automáticamente con cada escaneo. Recibe alertas de stock crítico y actualiza precios masivamente.',
    icon: PackageSearch,
    image: '/capturas/stock-real.png', // Reemplazar con tu ruta real
  },
  {
    id: 'ctacte',
    title: 'Cuentas Corrientes',
    description: 'Digitaliza tu libreta de fiados. Mantén un registro seguro de quién te debe, con límites de crédito personalizados y alertas de saldo.',
    icon: Users,
    image: '/capturas/ctacte-real.png', // Reemplazar con tu ruta real
  }
];

export const FeaturesTabs = () => {
  const [activeTab, setActiveTab] = useState<string>(tabsData[0].id);

  const currentTabData = tabsData.find(tab => tab.id === activeTab);

  return (
    <section id="modulos" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Todo tu negocio en <span className="text-orange-600">una sola pantalla</span>
          </h2>
          <p className="text-lg text-slate-600">
            Explora los módulos diseñados específicamente para resolver los problemas reales de tu comercio, sin funciones de relleno que nunca vas a usar.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Columna Izquierda: Botones de Pestañas */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {tabsData.map((tab) => {
              const IconComponent = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-left p-6 rounded-xl border transition-all duration-300 focus:outline-none ${
                    isActive 
                      ? 'bg-slate-50 border-orange-500 shadow-md' 
                      : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`p-2 rounded-lg ${isActive ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-500'}`}>
                      <IconComponent size={24} />
                    </div>
                    <h3 className={`text-xl font-bold ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>
                      {tab.title}
                    </h3>
                  </div>
                  {/* Solo mostramos la descripción en la pestaña activa para no saturar visualmente */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="text-slate-600 mt-2 leading-relaxed">
                          {tab.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>

          {/* Columna Derecha: Captura de Pantalla Activa */}
          <div className="lg:col-span-8">
            <div className="relative rounded-xl border border-slate-200 bg-slate-50 p-2 sm:p-4 shadow-lg overflow-hidden min-h-[300px] lg:min-h-[500px] flex items-center justify-center">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-full"
                >
                  {/* Fallback visual en caso de que la imagen aún no exista */}
                  {currentTabData?.image ? (
                    <img
                      src={currentTabData.image}
                      alt={`Captura de ${currentTabData.title}`}
                      className="w-full h-auto rounded-lg shadow-sm border border-slate-200"
                    />
                  ) : (
                    <div className="w-full aspect-video bg-slate-200 rounded-lg flex items-center justify-center border border-slate-300 border-dashed">
                      <span className="text-slate-500 font-medium">Captura de {currentTabData?.title} en camino...</span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};