import Link from "next/link";

export default function ImportEn() {
  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <h2>
        <Link href="/">ссылка - Главная</Link>
      </h2>
      <h2>Все сложно. Пришлите нам данные для расчета</h2>

      <h1>Это страница - Импорт из других стран</h1>
    </div>
  );
}
