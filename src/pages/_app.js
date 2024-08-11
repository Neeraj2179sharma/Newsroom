// import "@/styles/globals.css";
import '../styles/globals.css'
import Layout from "./main_layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

export default function App({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>;
}
