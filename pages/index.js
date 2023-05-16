import MainMenu from "@/components/mainMenu";
import Mission from "@/components/mission";
import TernKey from "@/components/ternkey";
import MapAndContact from "@/components/mapandcontact";
import dynamic from "next/dynamic";
import Return from "@/components/return";
import Tracking from "@/components/Tracking";
import Contact from "@/components/contact";
import More from "@/components/more";
import HowDoesItWors from "@/components/howdoesitwors";
import PersonalManager from "@/components/personalmanager";
import Difference from "@/components/difference";
import Troubles from "@/components/troubles";

const MyCarousel = dynamic(() => import("@/components/carousel"), {
  ssr: false,
});

const MyPhotos = dynamic(() => import("@/components/photos"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="min-h-screen ">
      <MainMenu />
      <Mission />
      <Return />
      <TernKey />
      <Troubles />
      <Tracking />
      <HowDoesItWors />
      <PersonalManager />
      <Difference />
      <MyCarousel />
      <More />
      <MyPhotos />
      <Contact />
      <MapAndContact />
    </div>
  );
}
