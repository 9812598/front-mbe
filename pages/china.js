import Link from "next/link";
import ChinaCalc from "@/components/ChinaCalc";
import ValCalc from "@/components/ValCalc";
import ImportChinaText from "@/components/importchinatext";

export default function China() {
  return (
    <div
        className="bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(/images/bg-calc.png)` }}
      >
        <div className="flex flex-col min-h-screen px-4">
      <h1 className="flex flex-row justify-center mb-16 text-xl font-semibold uppercase">
        Расчет доставки из Китая
      </h1>
      <div className="md:flex md:flex-row justify-between mt-5 mx-auto max-w-4xl w-full">
        <ValCalc />
        <ChinaCalc />
      </div>
      <ImportChinaText />
    </div>
      </div>
    
  );
}
