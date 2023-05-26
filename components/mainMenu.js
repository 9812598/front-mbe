import Link from "next/link";

function MainMenuButton({ title, text, mylink }) {
  return (
    <>
      <div className="justify-between flex flex-col basis-1/4 h-52 rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {title}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {text}
        </p>
        <div className="">
          <Link href={mylink}>
            <button
              type="button"
              className=" rounded bg-red-600 text-white px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Рассчитать
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default function MainMenu() {
  return (
    <div
      className={`pt-16 z-50 flex flex-row items-center justify-between  max-w-5xl mx-auto gap-6`}
    >
      <MainMenuButton
        title="Доставка по России"
        text="Грузы и документы из Санкт-Петербурга по РФ"
        mylink="/russ"
      />
      <MainMenuButton
        title="Экспорт из России"
        text="Стоимость и сроки в разные страны"
        mylink="/ExportDocsPage"
      />
      <MainMenuButton
        title="Экспорт грузов"
        text="Стоимость и сроки доставки в разные страны"
        mylink="/ExportNotDocsPage"
      />

      <MainMenuButton
        title="Импорт из Китая"
        text="Расчет онлайн без регистраций"
        mylink="/china"
      />
    </div>
  );
}
