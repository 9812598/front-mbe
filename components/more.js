import MyCustomButton from "./mycustombutton";

function MoreButton({ title, pic }) {
  return (
    <div
      className="basis-1/2 bg-no-repeat object-cover flex justify-start h-72 items-center 8"
      style={{ backgroundImage: `url(/images/more/${pic})` }}
    >
      <div className="pt-6 w-1/2 pl-12">
        <h5 className="mb-12 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {title}
        </h5>
      </div>
    </div>
  );
}

export default function More() {
  return (
    <div className="mt-28 pt-16 flex flex-col items-center justify-center  max-w-5xl mx-auto gap-6 mb-48">
      <h2 className="font-serif text-2xl font-normal text-center mb-24">
        {
          ' Обращаясь в MBE, вы получаете больше, чем транспортировку из пункта "А" в пункт "Б" '
        }
      </h2>
      <div className="flex justify-between gap-6">
        <MoreButton
          title="ВЫ НЕ ТРАТИТЕ НЕРВЫ И СИЛЫ НА РЕШЕНИЕ ПРОБЛЕМ"
          pic="1.png"
        />
        <MoreButton
          title="НЕ НЕСЕТЕ ДОПОЛНИТЕЛЬНЫХ ФИНАНСОВЫХ ПОТЕРЬ"
          pic="2.png"
        />
      </div>
      <div className="flex justify-between gap-6">
        <MoreButton
          title="НЕ ТЕРЯЕТЕ СВОИХ КЛИЕНТОВ И ХОРОШИЕ ОТНОШЕНИЯ С ПОЛУЧАТЕЛЕМ"
          pic="3.png"
        />
        <MoreButton
          title="НЕ ТЕРЯЕТЕ СВОЕ ВРЕМЯ И ВРЕМЯ СВОИХ СОТРУДНИКОВ"
          pic="4.png"
        />
      </div>

      <div></div>
      <MyCustomButton text="Рассчитать стоимость отправки" />
    </div>
  );
}
