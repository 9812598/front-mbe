import Link from "next/link";
import ValCalc from "@/components/ValCalc";
import RussCalc from "@/components/RussCalc";

export default function Russ() {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <div
        className={`flex  flex-row items-center  gap-10 justify-between max-w-5xl mx-auto `}
      >
        <ValCalc />
        <RussCalc />
      </div>
    </div>
  );
}
