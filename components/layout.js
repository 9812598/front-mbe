import Navbar from "./navbar";
import Footer from "./footer";
import Image from "next/image";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        <div className="-z-50 w-full absolute h-full">
          <Image
            className="-z-50 object-cover absolute left-0 top-0"
            src="/images/bg-calc.png"
            fill
          />
        </div>
        {children}
      </main>
      <Footer />
    </>
  );
}
