export default function CityFromRadio({ text }) {
  return (
    <fieldset className="flex gap-6">
      <legend className="mb-2">{text}</legend>
      <div>
        <input
          className="mr-2"
          type="radio"
          id="spb"
          name="cityfrom"
          value="spb"
          checked
        />
        <label for="huey">Санкт-Петербург</label>
      </div>

      <div>
        <input
          className="mr-2"
          type="radio"
          id="msk"
          name="cityfrom"
          value="msk"
        />
        <label for="dewey">Москва</label>
      </div>
    </fieldset>
  );
}
