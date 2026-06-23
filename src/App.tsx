import { Hero } from './sections/Hero';
import { Beneficios } from './sections/Beneficios';
import { Hardware } from './sections/Hardware';
import { Pricing } from './sections/Pricing';
import { FAQ } from './sections/FAQ';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { FeaturesTabs } from './components/ui/FeaturesTabs';
import { FloatingCTA } from './components/ui/FloatingCTA';
function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-orange-500 selection:text-white overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <FeaturesTabs />
        <Beneficios />
        <Hardware />
        <Pricing />
        <FAQ />
        
      </main>

      <FloatingCTA />
      <Footer />
    </div>
  );
}

export default App;