import Footer from "@/components/Footer";
import StrategicPatnerships from "@/components/Home/StrategicPatnerships";
import Navbar from "@/components/Navbar";
import LiveChatButton from "@/components/LiveChatButton";

export default function Home() {
  return (
    <div>
      <Navbar />
      <StrategicPatnerships />
      <Footer />
      <LiveChatButton />
    </div>
  );
}
