import NavBar from "@/components/navbar";
import HeroSection from "@/components/herosection";
import AboutSection from "@/components/aboutsection";
import Companies from "@/components/companies";
import CustomFooter from "@/components/customfooter";
import Businesses from "@/components/businesses";

export default function Home() {
  return (
    <div className="flex flex-col">
      <NavBar/>
      <HeroSection />
      <AboutSection/>
      <Businesses/>
      <Companies/>
      <CustomFooter/>
    </div>
  );
}
