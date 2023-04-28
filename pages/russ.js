import Link from "next/link";

import RussCalc from "@/components/RussCalc";

export default function Russ() {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <h2>
        <Link href="/">ссылка - Главная</Link>
      </h2>
      <div className="flex gap-10">
        <RussCalc />
      </div>

      <h1>Это страница - Доставка по России</h1>
    </div>
  );
}
