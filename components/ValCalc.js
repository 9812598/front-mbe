import React, { useReducer, useState } from "react";
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
    <div className="flex flex-row  justify-center content-center">
      <div className="min-w-min">
        <Image
          src="/../public/korob.png"
          alt="Picture of the author"
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
          Vol= <strong>{vol}</strong> cm3
        </p>
      </div>
    </div>
  );
}
