import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex flex-row items-center justify-between max-w-4xl mx-auto p-5">
      <Image src="/../public/logo.png" width={200} height={200}></Image>
      <div className="font-sans text-sm">
        <p>ООО "МБИ Петровский"</p>
        <p>ИНН/КПП 123456789/987654321</p>
        <p>ОГРН 1234567890876</p>
      </div>
      <p>
        <strong>+7 (812) 332-05-25</strong>
      </p>
    </div>
  );
}
