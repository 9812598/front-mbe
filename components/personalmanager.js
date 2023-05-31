import MyCustomButton from "./mycustombutton";
import Image from "next/image";

export default function PersonalManager() {
  return (
    <div
      className="w-100% h-[500px] bg-fixed bg-no-repeat bg-cover -z-50"
      style={{ backgroundImage: `url(/images/personalmanager/bg.png)` }}
    >
      <div className=" max-w-5xl h-[500px] mx-auto text-white ralative">
        <Image
          src="/images/personalmanager/girl.png"
          width={500}
          height={512}
          alt="personal manager"
          className="absolute right-8 pb-16"
        />
        <div className="absolute top-0 left-0 z-50 h-44 w-44"></div>

        <div className="flex flex-col justify-between h-[500px] py-12 w-1/2">
          <h2 className="text-xl font-semibold">
            ЛИЧНЫЙ МЕНЕДЖЕР ВСЕГДА НА СВЯЗИ
          </h2>
          <p className="">
            Наша команда — профессионалы с горящими глазами. Все сотрудники
            имеют опыт работы от 3х лет в сфере курьерских услуг или логистики.
          </p>
          <p className="">
            24/7 готовы ответить на любые вопросы, решить проблему доставки и
            уведомить вас о ходе транспортировки.
          </p>
          <p className="">
            Вы будете общаться с живым человеком, а не ботом или колл-центром.
          </p>
          <MyCustomButton text="Свяжитесь со мной" />
        </div>
      </div>
    </div>
  );
}
