import MainMenu from "@/components/mainMenu";
import Mission from "@/components/mission";
import TernKey from "@/components/ternkey";
import MapAndContact from "@/components/mapandcontact";
import dynamic from "next/dynamic";
import Return from "@/components/return";
import Tracking from "@/components/Tracking";
import Contact from "@/components/contact";

const MyCarousel = dynamic(() => import("@/components/carousel"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="min-h-screen ">
      <MainMenu />
      <Mission />
      <Return />
      <TernKey />
      <Tracking />
      <MyCarousel />
      <Contact />
      <MapAndContact />
    </div>
  );
}
