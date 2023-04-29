import Link from "next/link";
import ValCalc from "@/components/ValCalc";
import ExportDocs from "@/components/ExportDocs";

export default function ExportDocsPage() {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <ValCalc />

      <ExportDocs />
      <h1>Это страница - Экспорт из России</h1>
    </div>
  );
}
