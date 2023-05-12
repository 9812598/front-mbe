import React, { useState } from "react";
import Image from "next/image";

export default function ValCalc() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(1);
  const [h, setH] = useState(1);

  const [vol, setVol] = useState("0");

  function handleSubmit(event) {
    event.preventDefault();
    setVol(Math.ceil((+a * +b * +h) / 5000));
  }

  return (
    <div className="flex flex-col  justify-center justify-items-start ">
      <div className="flex  justify-start content-center">
        <div className="min-w-min">
          <Image
            src="/images/korob.png"
            alt="Picture of the korob"
            width={200}
            height={150}
          />
        </div>
        <div className="ml-5">
          <form
            className="flex flex-col justify-center content-center"
            onSubmit={handleSubmit}
          >
            <label htmlFor="a">Длина (A), см</label>
            <input
              required
              type="number"
              className="mb-3 ml-2"
              name="a"
              id="a"
              min="1"
              valume={a}
              onChange={(e) => setA(e.target.value)}
            ></input>
            <label htmlFor="b">Ширина (B), см</label>
            <input
              required
              type="number"
              className="mb-3 ml-2"
              name="b"
              id="b"
              min="1"
              valume={b}
              onChange={(e) => setB(e.target.value)}
            ></input>
            <label htmlFor="h">Высота (H), см</label>
            <input
              required
              type="number"
              className="mb-3 ml-2"
              name="h"
              id="h"
              min="1"
              valume={h}
              onChange={(e) => setH(e.target.value)}
            ></input>
            <button
              type="submit"
              className="border-solid rounded border-slate-500 border-2"
            >
              Расчитать
            </button>
          </form>
          <p className="mt-3 text-center">
            Объемный вес = <strong>{vol}</strong> cm3
          </p>
        </div>
      </div>
      <p className="mt-4 pr-12">
        Объемный и фактический вес могут не совпадать! Тариф рассчитывается по
        большему значению.
      </p>
    </div>
  );
}
