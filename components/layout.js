import Footer from "./footer";
import Image from "next/image";

import dynamic from "next/dynamic";

const MyNavbar = dynamic(() => import("@/components/navbar"), {
  ssr: false,
});

export default function Layout({ children }) {
  return (
    <>
      <MyNavbar />

      <main>

        {children}
      </main>
      <Footer />
    </>
  );
}
