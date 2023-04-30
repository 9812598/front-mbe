import Link from "next/link";
import ChinaCalc from "@/components/ChinaCalc";
import ValCalc from "@/components/ValCalc";

export default function China() {
  return (
    <div
      className={`z-50 flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <ValCalc />
      <ChinaCalc />
      <h1>Это страница - Импорт из Китая</h1>
    </div>
  );
}
