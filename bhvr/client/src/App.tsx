import HeroSection from './components/HeroSection';
import HeroExtensionSection from './components/HeroExtensionSection';
import ProblemImpactSection from './components/ProblemImpactSection';
import HowItWorksSection from './components/HowItWorksSection';
import ValueTrustSection from './components/ValueTrustSection';
import BenefitsSection from './components/BenefitsSection';
import TransparencySection from './components/TransparencySection';
import MetricsImpactSection from './components/MetricsImpactSection';
import CompliancePartnersSection from './components/CompliancePartnersSection';
import GovernanceSection from './components/GovernanceSection';
import InvestmentOptions from './components/InvestmentOptions';
import SimulationSection from './components/SimulationSection';
import RoadmapSection from './components/RoadmapSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HeroExtensionSection />
      <ProblemImpactSection />
      <HowItWorksSection />
      <ValueTrustSection />
      <BenefitsSection />
      <TransparencySection />
      <MetricsImpactSection />
      <CompliancePartnersSection />
      <GovernanceSection />
      <InvestmentOptions />
      <SimulationSection />
      <RoadmapSection />
      <Footer />
    </div>
  );
}

export default App;