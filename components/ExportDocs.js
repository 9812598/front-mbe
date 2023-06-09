import React, { useReducer, useState } from "react";
import { ContriesData } from "./data/ContriesData";
import { ExportDocsData } from "./data/ExportDocsData";
import Select from "react-select";
import CityFromRadio from "./cityfromradio";

const countryOptions = ContriesData.map((opt) => ({
  label: opt.attributes.title,
  value: opt.id,
}));

const massOption = [
  { label: "0.3", value: "0.3" },
  { label: "0.5", value: "0.5" },
  { label: "1", value: "1" },
  { label: "1.5", value: "1.5" },
  { label: "2", value: "2" },
];

export default function ExportDocs() {
  function handleSubmit(event) {
    event.preventDefault();
    let filterdDocsData = ExportDocsData.filter(
      (item) =>
        item.attributes.mass == massa && item.attributes.country_id == country
    );
    let filterdDCountry = ContriesData.filter((item) => item.id == country);
    setPrise(filterdDocsData[0]["attributes"]["price"]);
    setTime(filterdDCountry[0]["attributes"]["time"]);
  }
  const [country, setCountry] = useState(0);
  const [massa, setMass] = useState(0);
  const [price, setPrise] = useState(0);
  const [time, setTime] = useState(0);

  return (
    <div className="basis-1/2">
      <CityFromRadio />
      <form
        className="flex flex-col justify-center content-center mt-2"
        onSubmit={handleSubmit}
      >
        <label htmlFor="massa">Вес, кг</label>
        <Select
          options={massOption}
          required
          name="massa"
          id="massa"
          onChange={(e) => {
            setMass(e.value);
          }}
        />

        <label htmlFor="country">Выберите страну</label>
        <Select
          options={countryOptions}
          required
          name="country"
          id="country"
          onChange={(e) => {
            setCountry(e.value);
          }}
        />

        <button
          type="submit"
          className="mt-4 rounded-md shadow-stone-300 shadow-lg bg-red-600 text-white px-2  py-1 transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        >
          Рассчитать
        </button>
      </form>
      <div className="mt-4">
        <p>
          Стоимость до двери: <b>{price}</b> рублей
        </p>
        <p>
          Время доставки: <b>{time}</b> дней.
        </p>
      </div>
    </div>
  );
}
