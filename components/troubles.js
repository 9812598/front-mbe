import Image from "next/image";

function MyTroubleButton({ image, text }) {
  return (
    <div className="col-start-2 w-64 flex flex-col justify-center items-center px-2 text-center">
      <Image
        src={`/images/troubles/${image}`}
        width={125}
        height={125}
        alt={text}
      />
      <p>{text}</p>
    </div>
  );
}

export default function Troubles() {
  return (
    <div className="bg-white  py-32">
      <div className="flex flex-col  items-center justify-between  max-w-5xl mx-auto ">
        <h2 className="text-xl font-semibold  text-center">
          С какими проблемами вы столкнетесь, при попытке отправить посылку
          самостоятельно или обращаясь в другую курьерскую службу
        </h2>
        <div className="grid grid-cols-4 grid-rows-3 w-100% gap-8 mt-16  justify-center justify-items-center place-content-center">
          <div className="col-start-2 row-start-1 ">
            <MyTroubleButton
              image="1.png"
              text="Курьер приезжает, когда удобно ему, а не вам"
            />
          </div>
          <div className="col-start-3 row-start-1 ">
            <MyTroubleButton
              image="2.png"
              text="Посылка портится из-за халатности при упаковке и транспортировке"
            />
          </div>
          <div className="col-start-1 row-start-2">
            <MyTroubleButton
              image="3.png"
              text="Не знаете какие документы нужны и как их заполнить"
            />
          </div>
          <div className="col-start-4 row-start-2">
            <MyTroubleButton
              image="4.png"
              text="Доставка задерживается, ваши потребности игнорируются"
            />
          </div>
          <div className="col-start-1 row-start-3">
            <MyTroubleButton
              image="5.png"
              text="Вы сами ищете как лучше всего доставить посылку"
            />
          </div>
          <div className="row-start-2 row-end-4 col-start-2 col-end-4">
            <Image
              src="/images/troubles/6.png"
              alt="delivery"
              width={700}
              height={500}
            />
          </div>
          <div className="col-start-4 row-start-3">
            <MyTroubleButton
              image="7.png"
              text="Ваш клиент нервничает и требует товар"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
