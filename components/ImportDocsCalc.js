import React, { useState } from "react";
import { ImportData } from "./data/ImportData";

import Select from "react-select";
import CityFromRadio from "./cityfromradio";

// recieve

const countryOptions = ImportData.map((opt) => ({
  label: opt.attributes.country_name,
  value: opt.id,
}));

export default function ImportDocsCalc() {
  const [price, setPrice] = useState(0);
  const [time, setTime] = useState(0);
  const [countryId, setCountryId] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    const filterdCountry = ImportData.filter((item) => item.id == countryId);
    setPrice(filterdCountry[0].attributes.price_delivery);
    setTime(filterdCountry[0].attributes.delivery_time_day);
  }

  return (
    <div className="basis-1/2">
      <CityFromRadio text="Выберите город доставки:" />
      <form
        className="flex flex-col justify-center content-center mt-3"
        onSubmit={handleSubmit}
      >
        <label htmlFor="city">Откуда доставить</label>
        <Select
          options={countryOptions}
          required
          name="country"
          onChange={(e) => {
            setCountryId(e.value);
          }}
        />

        <button
          type="submit"
          className="mt-4 rounded-md shadow-stone-300 shadow-lg bg-red-600 text-white px-2  py-1 transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        >
          Рассчитать
        </button>
      </form>

      <div className="flex flex-col">
        <div
          className="mt-4 flex flex-row gap-3 justify-center justify-items-center"
          id="ExpressBlock"
        >
          <div>
            <p>
              Стоимость до двери: <b>{price}</b> долларов
            </p>
            <p>
              Время доставки: <b>{time}</b> дней
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
