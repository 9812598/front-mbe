import React, { useState } from "react";
import { chinaMassData } from "./data/ChinaMassData";

export default function ChinaCalc() {
  function handleSubmit(event) {
    event.preventDefault();

    let myChinaData = chinaMassData.find(
      (item) => item.attributes.mass == massa
    );
    setPriceOptima(myChinaData.attributes.price_optima);
    setPriceExpress(myChinaData.attributes.price_express);
  }
  const [priceOptima, setPriceOptima] = useState(0);
  const [priceExpress, setPriceExpress] = useState(0);
  const [massa, setMass] = useState(0);

  return (
    <div className="basis-1/2">
      <form
        className="flex flex-col justify-center content-center"
        onSubmit={handleSubmit}
      >
        <label htmlFor="massa">Вес, кг</label>
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
          Рассчитать
        </button>
      </form>

      <div className="flex flex-col">
        <div
          className="mt-4 flex flex-row gap-3 justify-center justify-items-center"
          id="OptomaBlock"
        >
          <div> Тариф ОПТИМА</div>
          <div>
            <p>
              Стоимость до двери: <b>{priceOptima}</b> долларов
            </p>
            <p>
              Время доставки: <b>55</b> дней
            </p>
          </div>
        </div>
        <div
          className="mt-4 flex flex-row gap-3 justify-center justify-items-center"
          id="ExpressBlock"
        >
          <div>Тариф ЭКСПРЕСС</div>
          <div>
            <p>
              Стоимость до двери: <b>{priceExpress}</b> долларов
            </p>
            <p>
              Время доставки: <b>40</b> дней
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
