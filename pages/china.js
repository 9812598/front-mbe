import Link from "next/link";
import ChinaCalc from "@/components/ChinaCalc";
import ValCalc from "@/components/ValCalc";
import ImportChinaText from "@/components/importchinatext";

export default function China() {
  return (
    <div className="flex flex-col min-h-screen">
      <h1 className="flex flex-row justify-center mb-16">
        Расчет доставки из Китая
      </h1>
      <div className="flex flex-row justify-between mt-5 mx-auto max-w-4xl w-full">
        <ValCalc />
        <ChinaCalc />
      </div>
      <ImportChinaText />
    </div>
  );
}
