import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PeopleSection from "@/components/PeopleSection";
import CraftSection from "@/components/CraftSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <section id="people">
          <PeopleSection />
        </section>
        <section id="craft">
          <CraftSection />
        </section>
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
