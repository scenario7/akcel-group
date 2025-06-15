import NavBar from "@/components/navbar";
import HeroSection from "@/components/herosection";
import AboutSection from "@/components/aboutsection";
import CustomFooter from "@/components/customfooter";
import Businesses from "@/components/businesses";
import Leadership from "@/components/leadership";
import Locations from "@/components/locations";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Full-screen section */}
      <div className="flex flex-col h-screen">
        <NavBar />
        <HeroSection />
      </div>

      {/* The rest of the page */}
      <AboutSection />
      <Leadership/>
      <Businesses />
      <Locations/>
      <CustomFooter />
    </div>
  );
}

