import Link from "next/link";
import ValCalc from "@/components/ValCalc";
import RussCalc from "@/components/RussCalc";

export default function Russ() {
  return (
    <div
      className={`flex flex-col min-h-screen`}
    >
      <h1 className="flex flex-row justify-center">Расчет доставки по России</h1>
      <div
        className={`flex flex-row justify-between mt-5 mx-auto max-w-4xl w-full `}
      >
        <ValCalc />
        <RussCalc />
      </div>
    </div>
  );
}
