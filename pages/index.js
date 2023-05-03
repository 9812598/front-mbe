import MainMenu from "@/components/mainMenu";
import Mission from "@/components/mission";
import TernKey from "@/components/ternkey";

export default function Home() {
  return (
    <div className="min-h-screen z-50">
      <MainMenu />
      <Mission />
      <TernKey />
    </div>
  );
}
