import Link from "next/link";
import ExportNotDocs from "@/components/ExportNotDocs";
import ValCalc from "@/components/ValCalc";

export default function ExportNotDocsPage() {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <ValCalc />
      <ExportNotDocs />

      <h1>Это страница - Экспорт из России</h1>
    </div>
  );
}
