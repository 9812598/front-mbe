import Link from "next/link";

import ExportDocs from "@/components/ExportDocs";

export default function ExportDocsPage() {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <h2>
        <Link href="/">ссылка - Главная</Link>
      </h2>

      <ExportDocs />
      <h1>Это страница - Экспорт из России</h1>
    </div>
  );
}
