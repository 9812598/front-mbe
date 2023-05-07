import "@/styles/globals.css";
import Layout from "../components/layout";
import { Roboto } from "next/font/google";
import "tw-elements/dist/css/tw-elements.min.css";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <style jsx global>{`
        html {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </Layout>
  );
}
