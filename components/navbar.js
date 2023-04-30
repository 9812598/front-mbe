import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="z-50 ralative w-full">
      <div className="-z-50 w-full absolute h-40">
        <Image
          className="-z-50 object-cover absolute left-0 top-0"
          src="/images/bg-s-dark.png"
          fill
        />
      </div>

      <div className={`flex flex-col items-center justify-between p-12 `}>
        <div className="flex gap-5">
          <Link href="/">
            <Image
              src="/images/MBE_LOGO_WHITE.png"
              width={200}
              height={200}
              alt="MBE logo"
            ></Image>
          </Link>
          <div className="pt-4 flex flex-row items-center justify-between p-12 gap-6 text-white font-semibold">
            <Link href="/russ">по России</Link>
            <Link href="/ExportDocsPage">Экспорт Документов</Link>
            <Link href="/ExportNotDocsPage">Экспорт Грузов</Link>
            <Link href="/china">Импорт из Китая</Link>
            <Link href="/import">Импорт из других стран</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
