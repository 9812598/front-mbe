import ValCalc from "@/components/ValCalc";
import ExportDocs from "@/components/ExportDocs";
import ExportDocsText from "@/components/exportdocstext";

export default function ExportDocsPage() {
  return (
    <div
        className="bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(/images/bg-calc.png)` }}
      >
        <div className="flex flex-col min-h-screen px-4">
      <h1 className="flex flex-row justify-center mb-16 text-xl font-semibold uppercase">
        Расчет экспорта документов
      </h1>
      <div className="md:flex md:justify-between mt-5 mx-auto max-w-4xl w-full">
        <ValCalc />

        <ExportDocs />
      </div>
      <ExportDocsText />
    </div>
      </div>
    
  );
}
