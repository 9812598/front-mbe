import ImportFromOtherContriesText from "@/components/importfromothercontriestext";

export default function ImportEn() {
  return (
    <div
        className="bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(/images/bg-calc.png)` }}
      >
        <div className="flex flex-col min-h-screen">
      <div
        className={`flex min-h-screen flex-col items-center justify-between p-4 md:p-24 `}
      >
        <ImportFromOtherContriesText />
      </div>
    </div>
      </div>
    
  );
}
