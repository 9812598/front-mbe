import Link from "next/link";

function MainMenuButton({ title, text, mylink }) {
  return (
    <>
      <div className="justify-between flex flex-col basis-1/3 md:basis-1/5 h-52 rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <h3 className="mb-2 font-semibold ">{title}</h3>
        <p className="mb-4  ">{text}</p>
        <div className="">
          <Link href={mylink}>
            <button
              type="button"
              className=" rounded bg-red-600 text-white px-6 pb-2 pt-2.5 text-xs  uppercase   shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
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
    <div className="pt-16 flex items-center justify-center max-w-5xl mx-auto gap-8 flex-wrap">
      <MainMenuButton
        title="Доставка по России"
        text="Грузы и документы по РФ"
        mylink="/russ"
      />
      <MainMenuButton
        title="Экспорт документов и грузов"
        text="Стоимость и сроки "
        mylink="/ExportDocsPage"
      />
      <MainMenuButton
        title="Импорт документов и грузов"
        text="Онлайн калькулятор"
        mylink="/ImportDocs"
      />

      <MainMenuButton
        title="Импорт из Китая"
        text="Расчет онлайн без регистраций"
        mylink="/china"
      />
    </div>
  );
}
