import Image from "next/image";
import ValCalc from "@/components/ValCalc";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <div className="flex gap-5">
        <Link href="/">Главная</Link>
        <Link href="/russ">Доставка по России</Link>
        <Link href="/ExportDocsPage">Экспорт из России Доки</Link>
        <Link href="/ExportNotDocsPage">Экспорт из России Грузов</Link>
        <Link href="/china">Импорт из Китая</Link>
        <Link href="/import">Импорт из других стран</Link>
      </div>
      <ValCalc />
      <h1>Это главная страница</h1>
    </main>
  );
}
