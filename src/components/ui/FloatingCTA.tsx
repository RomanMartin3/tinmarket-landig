import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { APP_CONFIG } from '../../config/constants';

export const FloatingCTA = () => {
  return (
    <motion.a
      href={APP_CONFIG.urls.whatsappSales}
      target="_blank"
      rel="noopener noreferrer"
      /* MANDAMIENTO DE DISEÑO (Cero efectos baratos): Aparece con una animación fluida y sobria, sin rebotes infinitos. */
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      
      /* MANDAMIENTO DE DISEÑO (Regla 60-30-10 y Antiaplanamiento): Color de acento estricto. Z-index altísimo para que no colisione. Sombra profunda (shadow-2xl) y un anillo translúcido (ring) para dar volumen. */
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] flex items-center justify-center p-4 bg-orange-600 text-white rounded-full shadow-2xl hover:bg-orange-700 hover:scale-110 transition-all duration-300 ring-4 ring-orange-500/20"
      
      aria-label="Contactar a ventas por WhatsApp"
    >
      <MessageCircle size={32} strokeWidth={2} />
    </motion.a>
  );
};