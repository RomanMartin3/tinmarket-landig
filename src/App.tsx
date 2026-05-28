import { Hero } from './sections/Hero';
import { Beneficios } from './sections/Beneficios';
import { Hardware } from './sections/Hardware';
import { Pricing } from './sections/Pricing';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-orange-500 selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <Beneficios />
        <Hardware />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}

export default App;