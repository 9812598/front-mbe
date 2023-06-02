import MyCustomButton from "./mycustombutton";

function MoreButton({ title, pic }) {
  return (
    <div
      className="w-96 bg-no-repeat bg-contain flex justify-start h-72 items-center "
      style={{ backgroundImage: `url(/images/more/${pic})` }}
    >
      <div className="w-1/2 pl-12">
        <h4 className="mb-12  ">{title}</h4>
      </div>
    </div>
  );
}

export default function More() {
  return (
    <div className="mt-28 lg:pt-16 flex flex-col items-center justify-center  max-w-5xl mx-auto ">
      <h2 className="text-xl font-semibold  text-center mb-24">
        {
          ' Обращаясь в MBE, вы получаете больше, чем транспортировку из пункта "А" в пункт "Б" '
        }
      </h2>
      <div className="lg:flex justify-between gap-6">
        <MoreButton
          title="ВЫ НЕ ТРАТИТЕ НЕРВЫ И СИЛЫ НА РЕШЕНИЕ ПРОБЛЕМ"
          pic="1.png"
        />
        <MoreButton
          title="НЕ НЕСЕТЕ ДОПОЛНИТЕЛЬНЫХ ФИНАНСОВЫХ ПОТЕРЬ"
          pic="2.png"
        />
      </div>
      <div className="lg:flex justify-between gap-6">
        <MoreButton
          title="НЕ ТЕРЯЕТЕ СВОИХ КЛИЕНТОВ И ХОРОШИЕ ОТНОШЕНИЯ С ПОЛУЧАТЕЛЕМ"
          pic="3.png"
        />
        <MoreButton
          title="НЕ ТЕРЯЕТЕ СВОЕ ВРЕМЯ И ВРЕМЯ СВОИХ СОТРУДНИКОВ"
          pic="4.png"
        />
      </div>
      <MyCustomButton text="Рассчитать стоимость отправки" />
    </div>
  );
}
