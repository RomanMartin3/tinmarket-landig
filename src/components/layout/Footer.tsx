export const Footer = () => {
  const urlSistema = "https://app.tinmarket.com.ar/login";

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo-icon.png" alt="TinMarket" className="h-8 w-8 grayscale opacity-50" />
            <span className="font-black text-xl tracking-tighter text-white">TINMARKET</span>
          </div>
          <p className="text-sm font-medium">El sistema operativo para el comercio moderno.</p>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="#beneficios" className="hover:text-orange-500 font-bold transition-colors">Beneficios</a>
          <a href="#hardware" className="hover:text-orange-500 font-bold transition-colors">Hardware</a>
          <a href={urlSistema} className="hover:text-orange-500 font-bold transition-colors">Ingresar</a>
        </div>
        <div className="text-sm font-medium md:text-right">
          &copy; {new Date().getFullYear()} TinMarket. <br />Desarrollado en Mendoza, Argentina.
        </div>
      </div>
    </footer>
  );
};