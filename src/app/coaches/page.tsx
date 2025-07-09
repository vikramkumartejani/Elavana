import Footer from "@/components/Footer";
import StrategicPatnerships from "@/components/Home/StrategicPatnerships";
import Navbar from "@/components/Navbar";
import LiveChatButton from "@/components/LiveChatButton";
import Faq from "@/components/Home/Faq";
import TrustedCommunity from "@/components/Home/TrustedCommunity";
import ServiceProvider from "@/components/Home/ServiceProvider";
import CoreFeatures from "@/components/coaches/CoreFeatures";
import Hero from "@/components/coaches/Hero";
import WhyElevana from "@/components/Home/WhyElavana";
import TrustedByCommunity from "@/components/coaches/TrustedByCommunity";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <CoreFeatures />
      <TrustedByCommunity />

      <StrategicPatnerships />
      <Footer />
      <LiveChatButton />
    </div>
  );
}
