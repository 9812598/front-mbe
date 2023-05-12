import Link from "next/link";
import ValCalc from "@/components/ValCalc";
import ExportDocs from "@/components/ExportDocs";
import ExportDocsText from "@/components/exportdocstext";

export default function ExportDocsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <h1 className="flex flex-row justify-center mb-16">
        Расчет экспорта документов
      </h1>
      <div className="flex  justify-between mt-5 mx-auto max-w-4xl w-full">
        <ValCalc />

        <ExportDocs />
      </div>
      <ExportDocsText />
    </div>
  );
}
