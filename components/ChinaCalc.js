import React, { useEffect, useState } from "react";
import Image from "next/image";
import { chinaMassData } from "./data/ChinaMassData";

export default function ChinaCalc() {
  function handleSubmit(event) {
    event.preventDefault();

    let myChinaData = chinaMassData.find(
      (item) => item.attributes.mass == massa
    );
    setPrice(myChinaData.attributes.price);
  }
  const [price, setPrice] = useState(0);
  const [massa, setMass] = useState(0);

  return (
    <div className="basis-1/2">
      <form
        className="flex flex-col justify-center content-center"
        onSubmit={handleSubmit}
      >
        <label htmlFor="massa">Масса, кг</label>
        <input
          required
          type="number"
          className="mb-3 ml-2"
          name="massa"
          id="massa"
          min="0.5"
          step="0.5"
          max="30"
          valume={massa}
          onChange={(e) => setMass(e.target.value)}
        ></input>
        <button
          type="submit"
          className="mt-2 rounded-md shadow-stone-300 shadow-lg bg-red-600 text-white px-2  py-1 transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        >
          Расчитать
        </button>
      </form>
      <p className="mt-3 text-center">
        Стоимость доставки до двери: <strong>{price}</strong> рублей
      </p>

      <p className="mt-3 text-center">
        Время доставки: <strong>55</strong> дней
      </p>
    </div>
  );
}
