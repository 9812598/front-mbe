import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="grid gap-3 sm:flex sm:flex-row items-center justify-between max-w-4xl mx-auto p-5 md:mt-32 mt-20">
      <Image
        src="/images/logo.png"
        width={200}
        height={200}
        alt="MBE logo"
      ></Image>
      <div className="text-xs">
        <p>ООО &quot;МБИ Петровский&quot;</p>
        <p>ИНН/КПП 123456789/987654321</p>
        <p>ОГРН 1234567890876</p>
      </div>
      <p>
        <strong>+7 (812) 332-05-25</strong>
      </p>
    </div>
  );
}
