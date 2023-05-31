import Link from "next/link";

export default function MyCustomButton({ text }) {
  return (
    <Link href="/helpful/#contact" target="_blank">
      <button
        className="rounded-md shadow-stone-300 shadow-lg bg-red-600 text-white px-8  py-3  text-xl transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        onclick="window.location.href='/helpful/#contact"
      >
        {text}
      </button>
    </Link>
  );
}
