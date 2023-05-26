import MainMenu from "@/components/mainMenu";
import Tracking from "@/components/Tracking";
import Mission from "@/components/mission";
import TernKey from "@/components/ternkey";
import HowDoesItWors from "@/components/howdoesitwors";
import dynamic from "next/dynamic";

const MyMyCarousel = dynamic(() => import("@/components/MyNavbar"), {
  ssr: false,
});

const MyCollabse = dynamic(() => import("@/components/collabse"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="min-h-screen ">
      <MainMenu />
      <Tracking />
      <MyCollabse />
      <MyMyCarousel />
      <Mission />
      <TernKey />
      <HowDoesItWors />
    </div>
  );
}
