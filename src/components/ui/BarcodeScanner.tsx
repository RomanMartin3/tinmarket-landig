export const BarcodeScanner = () => {
  return (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm w-64 flex flex-col items-center justify-center">
      
      {/* Las barras del código */}
      <div className="flex items-end justify-center gap-[3px] h-20 w-full mb-3">
        <div className="w-1 h-full bg-slate-800 rounded-sm"></div>
        <div className="w-3 h-full bg-slate-800 rounded-sm"></div>
        <div className="w-1 h-full bg-slate-800 rounded-sm"></div>
        <div className="w-2 h-[90%] bg-slate-800 rounded-sm"></div>
        <div className="w-1 h-full bg-slate-800 rounded-sm"></div>
        <div className="w-4 h-full bg-slate-800 rounded-sm"></div>
        <div className="w-1 h-[80%] bg-slate-800 rounded-sm"></div>
        <div className="w-2 h-full bg-slate-800 rounded-sm"></div>
        <div className="w-1 h-full bg-slate-800 rounded-sm"></div>
        <div className="w-3 h-[90%] bg-slate-800 rounded-sm"></div>
        <div className="w-1 h-full bg-slate-800 rounded-sm"></div>
      </div>
      
      {/* Los números abajo del código */}
      <div className="font-mono text-sm tracking-[0.2em] text-slate-600 font-bold">
        779123456789
      </div>
      
    </div>
  );
};