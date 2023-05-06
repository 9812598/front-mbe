import MainMenu from "@/components/mainMenu";
import Mission from "@/components/mission";
import TernKey from "@/components/ternkey";
import MapAndContact from "@/components/mapandcontact";

export default function Home() {
  return (
    <div className="min-h-screen z-50">
      <MainMenu />
      <Mission />
      <TernKey />
      <MapAndContact />
    </div>
  );
}
