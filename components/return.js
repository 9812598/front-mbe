import Image from "next/image";

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
      <div className="relative">
        {/* <image src="/images/return/check.png" className="-z-10 w-80 h-80" /> */}
        <Image
          src="/images/return/check.png"
          width={600}
          height={600}
          alt="check"
          className="-z-10 "
        />
        <Image
          src="/images/return/medal_text.png"
          width={100}
          height={100}
          alt="check text"
        />
      </div>
    </div>
  );
}
