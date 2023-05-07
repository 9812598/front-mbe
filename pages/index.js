import MainMenu from "@/components/mainMenu";
import Mission from "@/components/mission";
import TernKey from "@/components/ternkey";
import MapAndContact from "@/components/mapandcontact";
import dynamic from "next/dynamic";

const MyCarousel = dynamic(() => import("@/components/carousel"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="min-h-screen ">
      <MainMenu />
      <Mission />
      <TernKey />
      <MyCarousel />
      <MapAndContact />
    </div>
  );
}
