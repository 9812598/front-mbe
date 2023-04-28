import Link from "next/link";
import ChinaCalc from "@/components/ChinaCalc";

export default function China() {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <h2>
        <Link href="/">ссылка - Главная</Link>
      </h2>
      <ChinaCalc />
      <h1>Это страница - Импорт из Китая</h1>
    </div>
  );
}
