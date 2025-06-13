import NavBar from "@/components/navbar";
import HeroSection from "@/components/herosection";
import AboutSection from "@/components/aboutsection";
import Companies from "@/components/companies";
import CustomFooter from "@/components/customfooter";

export default function Home() {
  return (
    <div className="flex flex-col">
      <NavBar/>
      <HeroSection />
      <AboutSection/>
      <Companies/>
      <CustomFooter/>
    </div>
  );
}
