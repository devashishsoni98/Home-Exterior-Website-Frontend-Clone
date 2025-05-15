import BeforeAfter from "./components/BeforeAfter";
import BlackBoxSection from "./components/BlackBoxSection";
import CustomerReviews from "./components/CustomerReviews";
import CustomRemodelingSection from "./components/CustomRemodelingSection";
import FaqAccordion from "./components/FaqAccordion";
import FinancingOptions from "./components/FinancingOptions";
import Footer from "./components/Footer";
import Header from "./components/Home/Header";
import Hero from "./components/Home/Hero";
import InspirationGallery from "./components/InspirationGallery";
import PartnerLogos from "./components/PartnerLogos";
import RemodelerHero from "./components/RemodelerHero";
import ServiceCategories from "./components/ServiceCategories";
import WhyChooseTimberland from "./components/WhyChooseTimberland";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <BlackBoxSection text="IMAGINE WHAT WE CAN BUILD TOGETHER" />
      <CustomRemodelingSection/>
      <ServiceCategories/>
      <RemodelerHero/>
      <WhyChooseTimberland/>
      <CustomerReviews/>
      <FinancingOptions/>
      <BeforeAfter/>
      <InspirationGallery/>
      <FaqAccordion/>
      <PartnerLogos/>
      <Footer/>
    </div>
  );
}

export default App;
