import Link from "next/link";

function FirstNotStandartButton() {
  return (
    <div
      className="basis-1/3 bg-no-repeat object-cover flex flex-col justify-start h-96 items-start min-w-[295px] "
      style={{ backgroundImage: `url(/images/howdoesitwors/1-icon.png)` }}
    >
      <div className="pt-6 w-1/2 pl-12 ">
        <h2 className="mb-6 lg:text-xl font-semibold  ">1</h2>
        <h5 className="mb-2 lg:text-xl ">ОФОРМЛЕНИЕ ЗАЯВКИ</h5>
      </div>
      <div className="ml-12 mt-16">
        <Link href="/helpful/#contact">
          <button
            href="#contact"
            className=" rounded-md shadow-stone-300 shadow-lg bg-red-600 text-white px-6  py-3 text-xs uppercase  transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            onclick="window.location.href='/#contact"
          >
            Оставить заявку
          </button>
        </Link>
      </div>
    </div>
  );
}

function HowButton({ title, pic, number }) {
  return (
    <div
      className="basis-1/3 bg-no-repeat object-cover flex justify-start h-96 items-start min-w-[295px] "
      style={{ backgroundImage: `url(/images/howdoesitwors/${pic})` }}
    >
      <div className="pt-6 w-1/2 pl-12">
        <h2 className="mb-6 lg:text-xl font-semibold ">{number}</h2>
        <h3 className="mb-2 lg:text-xl">{title}</h3>
      </div>
    </div>
  );
}

export default function HowDoesItWors() {
  return (
    <div className=" mt-20 lg:mt-32 flex flex-col items-center justify-center  max-w-5xl mx-auto ">
      <h2 className="text-center mb-16 lg:text-xl font-semibold ">
        КАК ЭТО РАБОТАЕТ?
      </h2>
      <div className="flex justify-center gap-3 flex-wrap">
        <FirstNotStandartButton />
        <HowButton
          title="ПРИЕЗД КУРЬЕРА В УДОБНОЕ ВРЕМЯ"
          pic="2-icon.png"
          number="2"
        />
        <HowButton
          title="УПАКОВКА ГРУЗА СПЕЦИАЛИСТОМ"
          pic="3-icon.png"
          number="3"
        />
        <HowButton
          title="ОФОРМЛЕНИЕ НЕОБХОДИМЫХ ДОКУМЕНТОВ"
          pic="4-icon.png"
          number="4"
        />
        <HowButton
          title="ВЫБОР ОПТИМАЛЬНОГО ВАРИАНТА ДОСТАВКИ"
          pic="5-icon.png"
          number="5"
        />
        <HowButton
          title="МОНИТОРИНГ ТРАНСПОРТИРОВКИ И ДОСТАВКА ПОЛУЧАТЕЛЮ"
          pic="6-icon.png"
          number="6"
        />
      </div>
      <h2 className="text-xl font-semibold  text-center mb-4 flex-wrap">
        РЕШЕНИЕ ВСЕХ ПРОБЛЕМ
      </h2>
      <p className=" text-center mb-12">
        В MBE нет длинных цепочек передачи информации внутри компании, все
        проблемы и вопросы мы решаем напрямую
      </p>
    </div>
  );
}
