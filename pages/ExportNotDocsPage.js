import Link from "next/link";
import ExportNotDocs from "@/components/ExportNotDocs";
import ValCalc from "@/components/ValCalc";
import ExportCargoText from "@/components/exportcargotext";

export default function ExportNotDocsPage() {
  return (
    <div
        className="bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(/images/bg-calc.png)` }}
      >
        <div className="flex flex-col min-h-screen px-4">
      <h1 className="flex flex-row justify-center mb-16 text-xl font-semibold uppercase">
        Расчет экспорта грузов
      </h1>
      <div className="md:flex md:flex-row md:justify-between mt-5 mx-auto max-w-4xl w-full">
        <ValCalc />
        <ExportNotDocs />
      </div>
      <ExportCargoText />
    </div>
      </div>
    
  );
}
