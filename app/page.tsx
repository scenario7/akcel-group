import NavBar from "@/components/navbar";
import HeroSection from "@/components/herosection";
import CustomFooter from "@/components/customfooter";
import Businesses from "@/components/businesses";
import Leadership from "@/components/leadership";
import MediaSection from "@/components/media";
import Podcasts from "@/components/podcasts";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Full-screen section */}
      <div className="flex flex-col h-screen">
        <NavBar />
        <HeroSection />
      </div>

      {/* The rest of the page */}
      {/* <AboutSection /> */}
      <Leadership/>
      <Businesses />
      <MediaSection/>
      <Podcasts/>
      <CustomFooter />
    </div>
  );
}

