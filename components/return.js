import Image from "next/image";
import MyCustomButton from "./mycustombutton";

function MyButton({ name, mar }) {
  return (
    <div
      className={` ralative my-4 ${mar}  rounded-lg bg-white  px-4 py-2  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700`}
    >
      <p className="">{name}</p>
    </div>
  );
}

export default function Return() {
  return (
    <div className="flex flex-col  items-center justify-between  max-w-5xl mx-auto mt-32 ">
      <h2 className="text-xl font-semibold text-center">
        ВЕРНЕМ ПОЛНУЮ СТОИМОСТЬ ОТПРАВЛЕННЫХ ВЕЩЕЙ, В СЛУЧАЕ ИХ УТРАТЫ ИЛИ
        ПОВРЕЖДЕНИЙ
      </h2>
      <h4 className="my-12 text-xl">
        С MBE SafeValue можете не волноваться за свой ценный груз
      </h4>
      <div className="flex">
        <div>
          <div className="relative">
            <Image
              src="/images/return/check.png"
              width={600}
              height={600}
              alt="check"
              className="-z-10"
            />
            <Image
              src="/images/return/medal_text.png"
              width={100}
              height={100}
              alt="check text"
              className=" absolute top-6 right-28 animate-spin-slow"
            />
          </div>
        </div>
        <div className="mt-16 ml-5 flex flex-col items-start">
          <MyButton name="сложные запчасти" mar="ml-2" />
          <MyButton name="хрупкий, ценный груз" mar="-ml-2" />
          <MyButton name="произведения искусства" mar="-ml-8" />
          <MyButton name="предметы высокой моды" mar="-ml-14" />
          <MyButton name="музыкальные инструменты" mar="-ml-20" />
          <MyButton name="бутылки дорого алкоголя" mar="-ml-24" />
        </div>
      </div>
      <div className="mt-24 bg-white w-4/5 h-36 flex justify-between items-center rounded-lg  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
        <p className="basis-1/2 px-8 gap-6">
          Используем всевозможные упаковочные материалы, в том числе и
          пенопакеты, которые повторяют форму предмета, что позволяет
          транспортировать вещи в полной безопасности
        </p>
        <div className="basis-1/2 flex justify-center">
          <MyCustomButton text="Заказать специальную доставку" />
        </div>
      </div>
    </div>
  );
}
