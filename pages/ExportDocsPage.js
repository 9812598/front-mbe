import Link from "next/link";
import ValCalc from "@/components/ValCalc";
import ExportDocs from "@/components/ExportDocs";

export default function ExportDocsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <h1 className="flex flex-row justify-center">Расчет экспорта документов</h1>
      <div
      className={`flex flex-row justify-between mt-5 mx-auto max-w-4xl w-full`}
    >
      <ValCalc />

      <ExportDocs />
     
    </div>
    </div>
    
  );
}
