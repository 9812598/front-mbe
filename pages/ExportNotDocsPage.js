import Link from "next/link";
import ExportNotDocs from "@/components/ExportNotDocs";

export default function ExportNotDocsPage() {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <h2>
        <Link href="/">ссылка - Главная</Link>
      </h2>
      <ExportNotDocs />

      <h1>Это страница - Экспорт из России</h1>
    </div>
  );
}
