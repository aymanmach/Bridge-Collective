import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PeopleSection from "@/components/PeopleSection";
import FounderSection from "@/components/FounderSection";
import CraftSection from "@/components/CraftSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BridgeDivider from "@/components/BridgeDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <section id="people">
          <PeopleSection />
        </section>
        <BridgeDivider label="About the Founder" variant="purple" />
        <section id="founder">
          <FounderSection />
        </section>
        <BridgeDivider label="Our Craft" />
        <section id="craft">
          <CraftSection />
        </section>
        <BridgeDivider label="Say Hello" variant="blue" />
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
