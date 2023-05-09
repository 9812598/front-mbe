import Image from "next/image";

function MyButton({ name, mar }) {
  return (
    <div
      className={` ralative my-4 ${mar}  rounded-lg bg-white  px-4 py-2  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700`}
    >
      <h5 className="text-sm font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        {name}
      </h5>
    </div>
  );
}

export default function Return() {
  return (
    <div className="flex flex-col  items-center justify-between  max-w-5xl mx-auto mt-32">
      <h2 className="font-serif text-2xl font-normal text-center">
        ВЕРНЕМ ПОЛНУЮ СТОИМОСТЬ ОТПРАВЛЕННЫХ ВЕЩЕЙ, В СЛУЧАЕ ИХ УТРАТЫ ИЛИ
        ПОВРЕЖДЕНИЙ
      </h2>
      <h3 className="mt-6 font-serif text-base font-normal">
        С MBE SafeValue можете не волноваться за свой ценный груз
      </h3>
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
          <MyButton name="предметы высокой моды" mar="-ml-12" />
          <MyButton name="музыкальные инструменты" mar="-ml-16" />
          <MyButton name="бутылки дорого алкоголя" mar="-ml-20" />
        </div>
      </div>
    </div>
  );
}
