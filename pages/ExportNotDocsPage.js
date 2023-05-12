import Link from "next/link";
import ExportNotDocs from "@/components/ExportNotDocs";
import ValCalc from "@/components/ValCalc";
import ExportCargoText from "@/components/exportcargotext";

export default function ExportNotDocsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <h1 className="flex flex-row justify-center mb-16">
        Расчет экспорта грузов
      </h1>
      <div className="flex flex-row justify-between mt-5 mx-auto max-w-4xl w-full">
        <ValCalc />
        <ExportNotDocs />
      </div>
      <ExportCargoText />
    </div>
  );
}
