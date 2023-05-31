import Link from "next/link";

function MyTitle() {
  return (
    <div className="flex flex-col  items-center justify-between  max-w-5xl mx-auto mt-32 ">
      <h2 className="text-xl font-semibold  pt-16">
        РЕАЛИЗУЕМ ВАШУ ЗАДАЧУ ПОД КЛЮЧ
      </h2>
      <p className="mt-6">
        Мы являемся профессионалами в области доставки и не ограничиваем свой
        спектр услуг
      </p>
    </div>
  );
}

export default function TernKey() {
  function MyBtn({ title, pic }) {
    return (
      <div
        className="basis-1/3 bg-no-repeat bg-cover flex justify-end"
        style={{ backgroundImage: `url(/images/${pic})` }}
      >
        <div className="pt-6 w-1/2">
          <h4 className="mb-4 text-xl pr-3">{title}</h4>
          <Link href="/helpful/#contact" className="flex">
            <button
              type="button"
              className="bg-red-600 text-white  mb-4 justify-end rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Заказать
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <MyTitle />
      <div className="block">
        <div className="flex justify-between max-w-5xl mx-auto mt-16">
          <MyBtn title="БЕРЕЖНАЯ УПАКОВКА" pic="key1.png" />
          <MyBtn title="ФУЛФИЛМЕНТ И 3PL" pic="key2.png" />
          <MyBtn title="ТАМОЖНЯ И ДОКУМЕНТЫ" pic="key3.png" />
        </div>
        <div className="flex justify-between max-w-5xl mx-auto mt-14">
          <MyBtn title="АБОНЕНТСКИЕ ЯЩИКИ" pic="key4.png" />
          <MyBtn title="ОПЕРАТИВНАЯ ПОЛИГРАФИЯ" pic="key5.png" />
          <MyBtn title="ГРАФИЧЕСКИЙ ДИЗАЙН" pic="key6.png" />
        </div>
      </div>
    </>
  );
}
