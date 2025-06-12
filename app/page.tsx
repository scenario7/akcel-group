import NavBar from "@/components/navbar";
import HeroSection from "@/components/herosection";
import AboutSection from "@/components/aboutsection";
import Abbreviation from "@/components/abbreviation";

export default function Home() {
  return (
    <div className="flex flex-col">
      <NavBar/>
      <HeroSection />
      <AboutSection/>
      <Abbreviation/>
    </div>
  );
}
