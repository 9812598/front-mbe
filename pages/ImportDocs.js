import ImportDocsCalc from "@/components/ImportDocsCalc";
import ValCalc from "@/components/ValCalc";

export default function ImportDocs() {
  return (
    <div className="flex flex-col min-h-screen">
      <h1 className="flex flex-row justify-center mb-16">
        Расчет импорта документов
      </h1>
      <div className="flex flex-row justify-between mt-5 mx-auto max-w-4xl w-full">
        <ValCalc />
        <ImportDocsCalc />
      </div>
    </div>
  );
}
