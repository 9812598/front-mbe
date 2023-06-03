import MyCustomButton from "./mycustombutton";

function DifferentButton({ text, number }) {
  return (
    <div className="sm:bg-no-repeat sm:bg-contain h-36 relative w-11/12 sm:w-[500px] sm:bg-[url('/images/difference.png')]">
      <p className="pb-3 text-lg sm:text-base pl-14 sm:pl-20 pr-8 sm:pr-18 lg:pl-14 lg:pr-14 pt-8">
        {text}
      </p>
      <h3 className="sm:text-white absolute left-6 top-10 text-lg font-semibold">
        {number}
      </h3>
    </div>
  );
}

export default function Difference() {
  return (
    <div className="mt-28 lg:pt-16 flex flex-col items-center justify-center  max-w-5xl mx-auto gap-6 mb-36">
      <h2 className="text-xl font-semibold text-center mb-4">
        ЧЕМ МЫ ОТЛИЧАЕМСЯ ОТ КОНКУРЕНТОВ?
      </h2>
      <h4 className="text-xl text-center mb-12 place-content-center place-items-center">
        Отсутствие отрицательных отзывов в интернете говорит само за себя
      </h4>
      <div className="grid lg:grid-cols-2 lg:grid-rows-3 gap-x-8 gap-y-4 ">
        <DifferentButton
          text="Сделаем все за вас: упакуем, заполним документы, доставим и уведомим"
          number="1"
        />
        <DifferentButton
          text="Не переносим сроки доставки, жалуясь на загруженность"
          number="2"
        />
        <DifferentButton
          text="Курьер подъедет ровно во столько, во сколько надо, и доставит точно в
          срок"
          number="3"
        />
        <DifferentButton
          text="За вами закрепляется личный менеджер, который всегда окажет поддержку"
          number="4"
        />
        <DifferentButton
          text="Не ссылаемся на регламент отправлений, а подстраиваемся под клиента"
          number="5"
        />
        <DifferentButton
          text="Всегда идем на диалог и решаем все проблемы напрямую"
          number="6"
        />
      </div>
      <h4 className="text-xl text-center mb-12">
        Большой поток отправлений позволяет нам оказывать качественный сервис и
        не брать за это дополнительную плату, в отличие от других курьерских
        служб
      </h4>
      <MyCustomButton text="Расчитать стоимость" />
    </div>
  );
}
