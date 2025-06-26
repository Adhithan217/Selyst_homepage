import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import PopularServices from "@/components/PopularServices";
import Footer from "@/components/Footer";
import ForProfessionals from "@/components/ForProfessionals";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PopularServices />
      <HowItWorks />
      <Testimonials />
      <ForProfessionals />
      <Footer />
    </main>
  );
}
