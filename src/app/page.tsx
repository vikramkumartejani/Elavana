import Footer from "@/components/Footer";
import StrategicPatnerships from "@/components/Home/StrategicPatnerships";
import Navbar from "@/components/Navbar";
import LiveChatButton from "@/components/LiveChatButton";
import Faq from "@/components/Home/Faq";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Faq/>
      <StrategicPatnerships />
      <Footer />
      <LiveChatButton />
    </div>
  );
}
