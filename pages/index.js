import MainMenu from "@/components/mainMenu";
import Tracking from "@/components/Tracking";
import Mission from "@/components/mission";
import TernKey from "@/components/ternkey";
import HowDoesItWors from "@/components/howdoesitwors";

export default function Home() {
  return (
    <div className="min-h-screen ">
      <MainMenu />
      <Tracking />

      <Mission />
      <TernKey />
      <HowDoesItWors />
    </div>
  );
}
