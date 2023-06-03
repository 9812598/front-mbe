import { useState } from "react";
import Link from "next/link";
import { sendContactForm } from "@/lib/api";

function ContactButtons() {
  return (
    <div className="flex items-center justify-between mt-6 md:mt-0 flex-wrap">
      <div className="basis-1/2 sm:basis-1/4 flex flex-col items-center justify-center gap-3">
        <Link href="tel: +78123320525" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 hover:stroke-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
        </Link>
        <p className="pb-4">+7 (812) 332-05-25</p>
      </div>

      <div className="basis-1/2 sm:basis-1/4 flex flex-col items-center justify-center gap-3">
        <Link href="mailto: 0008@mbe.spb.ru" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 hover:stroke-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
            />
          </svg>
        </Link>
        <p className="pb-4">0008@mbe.spb.ru</p>
      </div>
      <div className="basis-1/2 sm:basis-1/4 flex flex-col items-center justify-center gap-3">
        <Link
          target="_blank"
          href="https://api.whatsapp.com/send?phone=79958893818&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D1%85%D0%BE%D1%82%D0%B5%D0%BB%20%D0%B1%D1%8B%20%D0%B7%D0%B0%D0%BA%D0%B0%D0%B7%D0%B0%D1%82%D1%8C%20%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D1%83."
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 hover:stroke-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
        </Link>
        <p className="pb-4">Whats Up</p>
      </div>
      <div className="basis-1/2 sm:basis-1/4 flex flex-col items-center justify-center gap-3">
        <Link href="https://t.me/MBE_express" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 hover:stroke-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
            />
          </svg>
        </Link>
        <p className="pb-4">Telegramm</p>
      </div>
    </div>
  );
}

export default function Contact() {
  const [data, setData] = useState({
    phone: "",
    name: "",
  });

  const handleChangeName = (event) => {
    setData({
      ...data,
      name: event.target.value,
    });
  };

  const handleChangePhone = (event) => {
    setData({
      ...data,
      phone: event.target.value,
    });
  };

  const formHandler = async (event) => {
    event.preventDefault();
    await sendContactForm(data);
    alert("Запрос отправлен. Спасибо");
    setData({
      ...data,
      phone: "",
      name: "",
    });
  };

  return (
    <div
      className=" max-w-5xl mx-auto  mt-32 flex flex-col bg-white rounded-lg shadow-lg"
      id="contact"
    >
      <div className="md:flex items-center justify-between ">
        <div className="basis-1/2 flex items-center justify-center">
          <script
            src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
            async
          ></script>
          <lottie-player
            src="https://assets10.lottiefiles.com/packages/lf20_cwb6avsb.json"
            background="transparent"
            speed={1}
            style={{ width: 400, height: 400 }}
            loop=""
            autoPlay=""
            hover=""
          />
        </div>
        <div className="flex flex-col  items-center justify-center basis-1/2 ">
          <h2 className="text-xl font-semibold">СВЯЖИТЕСЬ С НАМИ</h2>
          <form
            className="flex flex-col  items-center justify-center gap-8 mt-12"
            onSubmit={formHandler}
          >
            <input
              required
              placeholder="введите ваш телефон"
              type="tel"
              className="w-64 rounded-md m-1 border-gray-400 border-2 p-2"
              name="tel"
              id="tel"
              value={data.phone}
              onChange={handleChangePhone}
            ></input>
            <input
              required
              placeholder="ваше имя"
              type="text"
              className="w-64 rounded-md m-1 border-gray-400 border-2 p-2"
              name="tel"
              id="tel"
              value={data.name}
              onChange={handleChangeName}
            ></input>
            <button className="w-32 rounded-md m-1 border-gray-400 border-0 p-2 shadow-lg bg-red-600 text-white">
              связаться
            </button>
          </form>
        </div>
      </div>
      <ContactButtons />
    </div>
  );
}
