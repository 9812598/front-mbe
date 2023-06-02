const myUrl = "https://mberussia.com/tracking/?invoicecode=";
import { useState } from "react";

export default function Tracking() {
  const [input, setInput] = useState("");

  function fornHandler(event) {
    event.preventDefault();
    console.log(input);
    window.open(myUrl + input);
  }
  return (
    <div
      className="h-20 bg-slate-600 marker:w-full mb-28 flex justify-center items-center mt-20"
      onSubmit={fornHandler}
    >
      <form className="sm:flex sm:gap-10 block">
        <input
          required
          placeholder="Номер отслеживания"
          type="text"
          className="w-64 rounded-md m-1 pl-2"
          name="track"
          id="track"
          valume={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button className="px-6 pb-2 pt-2.5 submit rounded-xl border-2 border-slate-600 text-white bg-slate-500 text-xs uppercase">
          Отследить посылку
        </button>
      </form>
    </div>
  );
}
