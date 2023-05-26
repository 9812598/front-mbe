import Troubles from "@/components/troubles";
import More from "@/components/more";
import Difference from "@/components/difference";
import PersonalManager from "@/components/personalmanager";
import Return from "@/components/return";

export default function WhyMbe() {
  return (
    <div className="min-h-screen ">
      <Troubles />
      <More />
      <Difference />
      <PersonalManager />
      <Return />
    </div>
  );
}
