import Link from "next/link";
import Image from "next/image";

export default function MapAndContact() {
  return (
    <>
      <div className="mt-32 relative ">
        <div className="px-6 absolute left-20 top-16 w-96 h-96 bg-white rounded-lg shadow-lg text-center flex flex-col justify-between p-5">
          <h2 className="m-4  font-semibold  ">КОНТАКТЫ</h2>

          <div className="flex">
            <div className="basis-1/4">
              <Image
                src="./images/svg/address.svg"
                width={40}
                height={40}
                alt="Picture of the map"
              />
            </div>

            <p className="text-left pl-8 mb-2">
              Финляндский проспект 4а, БЦ Петровский форт, офис 32/1 (1ый этаж
              атриума, слева от фонтана)
            </p>
          </div>
          <Link
            target="_blank"
            type="button"
            className="rounded-md shadow-stone-300 shadow-lg bg-red-600 text-white px-8  py-3 font-serif font-extralight transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            // className="mb-4 justify-end rounded bg-slate-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init
            data-te-ripple-color="light"
            href="https://yandex.ru/maps/2/saint-petersburg/?ll=30.315635%2C59.938951&mode=routes&rtext=~59.957850%2C30.342232&rtt=mt&ruri=~&z=11"
          >
            Построить маршрут
          </Link>

          <div className="flex">
            <div className="basis-1/4">
              <Image
                src="./images/svg/contact.svg"
                width={40}
                height={40}
                alt="Picture of the map"
              />
            </div>
            <div className="text-left pl-8 mb-2">
              <p>+7 (812) 332-05-25</p>
              <p>0008@mbe.spb.ru</p>
            </div>
          </div>

          <div className="flex">
            <div className="basis-1/4">
              <Image
                src="./images/svg/clock.svg"
                width={40}
                height={40}
                alt="Picture of the map"
              />
            </div>
            <div className="text-left pl-8 mb-2">
              <p>Время работы офиса:</p>
              <p>ПН – ПТ 09:00 – 18:30</p>
            </div>
          </div>
        </div>
      </div>

      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A1401864644ecc6a1cd28b3430cd1e7b5616032213e9701984130144340089466&amp;source=constructor"
        width="100%"
        height="550"
        frameborder="0"
      ></iframe>
    </>
  );
}
