import Footer from "@/components/Footer";
import StrategicPatnerships from "@/components/Home/StrategicPatnerships";
import Navbar from "@/components/Navbar";
import LiveChatButton from "@/components/LiveChatButton";
import Faq from "@/components/Home/Faq";
import TrustedCommunity from "@/components/Home/TrustedCommunity";
import ServiceProvider from "@/components/Home/ServiceProvider";
import CoreFeatures from "@/components/Home/CoreFeatures";

export default function Home() {
  return (
    <div>
      <Navbar />
      <CoreFeatures/>
      <ServiceProvider/>
      <TrustedCommunity/>
      <Faq/>
      <StrategicPatnerships />
      <Footer />
      <LiveChatButton />
    </div>
  );
}
