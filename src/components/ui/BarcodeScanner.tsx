export const BarcodeScanner = () => {
  return (
    <div className="relative bg-white p-6 rounded-xl border border-slate-200 shadow-xl w-64 flex flex-col items-center justify-center overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
      
      {/* Estilos para la animación del láser */}
      <style>
        {`
          @keyframes scan {
            0%, 100% { top: 10%; opacity: 0; }
            10%, 90% { opacity: 1; }
            50% { top: 85%; }
          }
          .animate-laser {
            animation: scan 2.5s ease-in-out infinite;
          }
        `}
      </style>

      {/* Las barras del código */}
      <div className="flex items-end justify-center gap-[3px] h-20 w-full mb-2">
        <div className="w-1 h-full bg-slate-900 rounded-sm"></div>
        <div className="w-3 h-full bg-slate-900 rounded-sm"></div>
        <div className="w-1 h-full bg-slate-900 rounded-sm"></div>
        <div className="w-2 h-[90%] bg-slate-900 rounded-sm"></div>
        <div className="w-1 h-full bg-slate-900 rounded-sm"></div>
        <div className="w-4 h-full bg-slate-900 rounded-sm"></div>
        <div className="w-1 h-[80%] bg-slate-900 rounded-sm"></div>
        <div className="w-2 h-full bg-slate-900 rounded-sm"></div>
        <div className="w-1 h-full bg-slate-900 rounded-sm"></div>
        <div className="w-3 h-[90%] bg-slate-900 rounded-sm"></div>
        <div className="w-1 h-full bg-slate-900 rounded-sm"></div>
      </div>
      
      {/* Los números abajo del código */}
      <div className="font-mono text-xs tracking-[0.3em] text-slate-500 font-bold">
        779123456789
      </div>

      {/* EL LÁSER ROJO */}
      <div className="absolute left-0 w-full h-[3px] bg-red-500 shadow-[0_0_15px_rgba(239,68,68,1)] animate-laser z-10"></div>
      
      {/* Efecto de destello verde (cuando "lee" el código) */}
      <div className="absolute inset-0 bg-green-400 opacity-0 animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite] mix-blend-overlay" style={{ animationDelay: '1.25s' }}></div>

    </div>
  );
};