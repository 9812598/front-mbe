import Link from "next/link";

function FirstNotStandartButton() {
  return (
    <div
      className="basis-1/3 bg-no-repeat object-cover flex flex-col justify-start h-96 items-start w-276px"
      style={{ backgroundImage: `url(/images/howdoesitwors/1-icon.png)` }}
    >
      <div className="pt-6 w-1/2 pl-12 ">
        <h5 className="mb-6 text-2xl font-semibold leading-tight text-neutral-800 dark:text-neutral-50">
          1
        </h5>
        <h5 className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          ОФОРМЛЕНИЕ ЗАЯВКИ
        </h5>
      </div>
      <div className="ml-12 mt-16">
        <Link href="/#contact">
          <button
            href="#contact"
            className=" rounded-md shadow-stone-300 shadow-lg bg-red-600 text-white px-6  py-3 font-serif text-xl font-extralight transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
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
      className="basis-1/3 bg-no-repeat object-cover flex justify-start h-96 items-start w-276px"
      style={{ backgroundImage: `url(/images/howdoesitwors/${pic})` }}
    >
      <div className="pt-6 w-1/2 pl-12">
        <h5 className="mb-6 text-2xl font-semibold leading-tight text-neutral-800 dark:text-neutral-50">
          {number}
        </h5>
        <h5 className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {title}
        </h5>
      </div>
    </div>
  );
}

export default function HowDoesItWors() {
  return (
    <div className="mt-22 pt-16 flex flex-col items-center justify-center  max-w-5xl mx-auto gap-6 mb-36">
      <h2 className="font-serif text-2xl font-normal text-center mb-24">
        КАК ЭТО РАБОТАЕТ?
      </h2>
      <div className="flex justify-between gap-3">
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
      </div>
      <div className="flex justify-between gap-6 mb-12">
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
      <h2 className="font-serif text-2xl font-normal text-center mb-4">
        РЕШЕНИЕ ВСЕХ ПРОБЛЕМ
      </h2>
      <p className="font-serif text-xl font-normal text-center mb-12">
        В MBE нет длинных цепочек передачи информации внутри компании, все
        проблемы и вопросы мы решаем напрямую
      </p>
    </div>
  );
}
