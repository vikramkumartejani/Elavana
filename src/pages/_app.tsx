import type { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/swiper.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
