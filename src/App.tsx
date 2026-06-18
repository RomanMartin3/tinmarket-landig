import { Hero } from './sections/Hero';
import { Beneficios } from './sections/Beneficios';
import { Hardware } from './sections/Hardware';
import { Pricing } from './sections/Pricing';
import { FAQ } from './sections/FAQ';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { FeaturesTabs } from './components/ui/FeaturesTabs';
function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-orange-500 selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <Beneficios />
        <FeaturesTabs />
        <Hardware />
        <Pricing />
        <FAQ />
        
      </main>

      <Footer />
    </div>
  );
}

export default App;