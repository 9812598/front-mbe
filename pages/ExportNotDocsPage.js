import Link from "next/link";
import ExportNotDocs from "@/components/ExportNotDocs";
import ValCalc from "@/components/ValCalc";

export default function ExportNotDocsPage() {
  return (
      <div className="flex flex-col min-h-screen">
        <h1 className="flex flex-row justify-center">Расчет экспорта грузов</h1>
        <div
        className={`flex flex-row justify-between mt-5 mx-auto max-w-4xl w-full `}
        >
          <ValCalc />
          <ExportNotDocs />
      </div>
    </div>
    
  );
}
