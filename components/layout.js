import Footer from "./footer";
import Image from "next/image";

import dynamic from "next/dynamic";

const MyNavbar = dynamic(() => import("@/components/navbar"), {
  ssr: false,
});

const MyNavbar2 = dynamic(() => import("@/components/navbar2"), {
  ssr: false,
});

export default function Layout({ children }) {
  return (
    <>
      <MyNavbar />
      <MyNavbar2 />
      <main>
        <div className="-z-50 w-full absolute h-full ">
          <Image
            className="-z-50 object-cover absolute left-0 top-0"
            src="/images/bg-calc.png"
            alt="background"
            fill
          />
        </div>
        {children}
      </main>
      <Footer />
    </>
  );
}
