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
      className="h-20 bg-slate-600 marker:w-full my-28 flex justify-center items-center "
      onSubmit={fornHandler}
    >
      <form className="flex gap-10">
        <input
          required
          placeholder="Номер отслеживания"
          type="text"
          className="w-64 rounded-md m-1"
          name="track"
          id="track"
          valume={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button className="submit rounded-xl border-2 border-slate-600 p-2 text-white bg-slate-500 ">
          Отследить посылку
        </button>
      </form>
    </div>
  );
}