import Link from "next/link";
import ValCalc from "@/components/ValCalc";
import RussCalc from "@/components/RussCalc";
import RussText from "@/components/russtext";

export default function Russ() {
  return (
    <div className="flex flex-col min-h-screen">
      <h1 className="flex flex-row justify-center mb-16">
        Расчет доставки по России
      </h1>
      <div className="flex flex-row justify-between mt-5 mx-auto max-w-4xl w-full items-start">
        <ValCalc />
        <RussCalc />
      </div>
      <RussText />
    </div>
  );
}
