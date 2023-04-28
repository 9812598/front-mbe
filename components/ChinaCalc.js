import React, { useEffect, useState } from "react";

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
    <div>
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
          className="border-solid rounded border-slate-500 border-2"
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
