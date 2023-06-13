import Link from "next/link";

const text1 = [
  { nameList: "Доставка от двери до двери", id: 1 },
  { nameList: "Эконом и Экспресс доставка", id: 2 },
  { nameList: "Фиксированный тариф с НДС", id: 3 },
];

const text2 = [
  { nameList: "Авиадоставка документов", id: 1 },
  { nameList: "Посылки до 50 кг", id: 2 },
  { nameList: "Гибкая логистика", id: 3 },
];

const text3 = [
  { nameList: "Доставка документов из любой страны", id: 1 },
  { nameList: "Образцы и некоммерческие грузы", id: 2 },
  { nameList: "Гибкая логистика", id: 3 },
];

const text4 = [
  { nameList: "Доставка посылок под ключ", id: 1 },
  { nameList: "Без дополнительных сборов", id: 2 },
  { nameList: "От двери до двери", id: 3 },
];

function MainMenuButton({ title, texts, mylink }) {
  const textList = texts.map((text) => (
    <li key={text.id} className="py-2">
      {text.nameList}
    </li>
  ));

  return (
    <>
      <div className="justify-between flex flex-col basis-1/3 md:basis-1/5 h-[350px]  p-6 text-white mb-12 sm:mb-0 min-w-[250px]">
        <h3 className="mb-2 font-semibold ">{title}</h3>
        <div className="mb-4 ">
          <ul className="list-image-[url(/images/mainmenubtns/airplane.png)] list-inside">
            {textList}
          </ul>
        </div>
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
    <div
      className="bg-no-repeat bg-cover "
      style={{ backgroundImage: `url(/images/bg-s.png)` }}
    >
      <div className="flex flex-col  justify-center items-center max-w-6xl mx-auto gap-8 text-white ">
        <p className="mt-16 px-3 lg:px-0">
          Курьерская служба экспресс-доставки Mail Boxes Etc.
        </p>
        <h2 className="text-xl font-semibold uppercase px-3 lg:px-0">
          ЗАБЕРЕМ ПОСЫЛКУ В УДОБНОЕ ДЛЯ ВАС ВРЕМЯ, ДОСТАВИМ В ЛЮБУЮ ТОЧКУ МИРА
          ТОЧНО В СРОК.
        </h2>
        <p className="px-3 lg:px-0">
          Занимайтесь своими делами, все проблемы с доставкой мы берем на себя
        </p>
        <div className="lg:flex flex-wrap justify-center ">
          <div
            className="bg-no-repeat bg-contain bg-center basis-1/4 min-w-[280px]  min-h-[120px] flex justify-end"
            style={{ backgroundImage: `url(/images/mainmenubtns/1.png)` }}
          >
            <p className=" text-xs text-black basis-2/3 pr-10 pt-7">
              Осуществляем логистику любой сложности
            </p>
          </div>
          <div
            className="bg-no-repeat bg-contain bg-center basis-1/4 min-w-[280px]  min-h-[120px] -mt-2 flex justify-end"
            style={{ backgroundImage: `url(/images/mainmenubtns/2.png)` }}
          >
            <p className=" text-xs text-black basis-2/3 pr-10 pt-9">
              Доставка в любую точку земного шара
            </p>
          </div>
          <div
            className="bg-no-repeat bg-contain bg-center basis-1/4 min-w-[280px] min-h-[120px] flex justify-end"
            style={{ backgroundImage: `url(/images/mainmenubtns/3.png)` }}
          >
            <p className=" text-xs text-black basis-2/3 pr-10 pt-7">
              Подстраиваемся под потребности клиента
            </p>
          </div>
        </div>
        <div className="pb-18 lg:pb-14 flex items-center justify-center max-w-6xl mx-auto gap-3 lg:gap-6 flex-wrap">
          <MainMenuButton
            title="Доставка по России"
            texts={text1}
            mylink="/russ"
          />
          <MainMenuButton
            title="Экспорт документов и грузов"
            texts={text2}
            mylink="/ExportDocsPage"
          />
          <MainMenuButton
            title="Импорт документов и грузов"
            texts={text3}
            mylink="/ImportDocs"
          />

          <MainMenuButton
            title="Импорт из Китая"
            texts={text4}
            mylink="/china"
          />
        </div>
      </div>
    </div>
  );
}
