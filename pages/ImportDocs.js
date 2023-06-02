import ImportDocsCalc from "@/components/ImportDocsCalc";
import ValCalc from "@/components/ValCalc";

export default function ImportDocs() {
  return (
    <div
        className="bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(/images/bg-calc.png)` }}
      >
        <div className="flex flex-col min-h-screen px-4">
      <h1 className="flex flex-row justify-center mb-16 text-xl font-semibold uppercase">
        Расчет импорта документов
      </h1>
      <div className="md:flex md:flex-row justify-between mt-5 mx-auto max-w-4xl w-full">
        <ValCalc />
        <ImportDocsCalc />
      </div>
    </div>
      </div>
    
  );
}
