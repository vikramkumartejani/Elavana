import type { AppProps } from "next/app";
import "../styles/swiper.css";
import '../style/globals.css'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default MyApp;
