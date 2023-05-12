import React, { useReducer, useState } from "react";
import { CityData } from "./data/CityData";
import { OptimaData } from "./data/OptimaData";
import { ExpressData } from "./data/ExpressData";
import Select from "react-select";
import CityFromRadio from "./cityfromradio";

// recieve
const massOptions = OptimaData.map((opt) => ({
  label: opt.attributes.mass,
  value: opt.attributes.mass,
}));

const cityOptions = CityData.map((opt) => ({
  label: opt.attributes.title,
  value: opt.id,
}));

export default function RussCalc() {
  const [cargo, setCargo] = useState({
    cityId: "1",
    mass: "1",
    optimaPrice: "0",
    optimaTime: "0",
    expressPrice: "0",
    expressTime: "0",
  });

  function handleSubmit(event) {
    event.preventDefault();
    const filterdCity = CityData.filter((item) => item.id == cargo.cityId);

    const filterdOptima = OptimaData.filter(
      (item) =>
        item["attributes"]["mass"] == cargo.mass &&
        item["attributes"]["city_id"] == cargo.cityId
    );

    const filterdExpress = ExpressData.filter(
      (item) =>
        item["attributes"]["mass"] == cargo.mass &&
        item["attributes"]["city_id"] == cargo.cityId
    );

    setCargo({
      ...cargo,
      expressTime: filterdCity[0]["attributes"]["express_time"],
      optimaTime: filterdCity[0]["attributes"]["optima_time"],
      expressPrice: filterdExpress[0]["attributes"]["price"],
      optimaPrice: filterdOptima[0]["attributes"]["price"],
    });
  }

  const handleChangeCity = (selectedOption) => {
    setCargo({
      ...cargo,
      cityId: selectedOption.value,
    });
  };

  const handleChangeMass = (selectedOption) => {
    setCargo({
      ...cargo,
      mass: selectedOption.value,
    });
  };

  return (
    <div className="basis-1/2">
      <CityFromRadio />
      <form
        className="flex flex-col justify-center content-center mt-3"
        onSubmit={handleSubmit}
      >
        <label htmlFor="city">Куда доставлять</label>
        <Select
          options={cityOptions}
          required
          name="city"
          onChange={handleChangeCity}
        />

        <label htmlFor="massa">Масса</label>
        <Select
          options={massOptions}
          required
          name="mass"
          onChange={handleChangeMass}
        />

        <button
          type="submit"
          className="border-solid rounded border-slate-500 border-2  mt-3"
        >
          Расчитать
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
              Стоимость до двери: <b>{cargo.optimaPrice}</b> рублей
            </p>
            <p>
              Время доставки: <b>{cargo.optimaTime}</b> дней
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
              Стоимость до двери: <b>{cargo.expressPrice}</b> рублей
            </p>
            <p>
              Время доставки: <b>{cargo.expressTime}</b> дней
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
