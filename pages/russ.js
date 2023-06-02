
import ValCalc from "@/components/ValCalc";
import RussCalc from "@/components/RussCalc";
import RussText from "@/components/russtext";

export default function Russ() {
  return (
    <div
        className="bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(/images/bg-calc.png)` }}
      >
        <div className="flex flex-col min-h-screen px-4">
      <h1 className="flex flex-row justify-center mb-16 text-xl font-semibold uppercase">
        Расчет доставки по России
      </h1>
      <div className="md:flex md:flex-row justify-between mt-5 mx-auto max-w-4xl w-full md:items-start">
        <ValCalc />
        <RussCalc />
      </div>
      <RussText />
    </div>
      </div>
    
  );
}
