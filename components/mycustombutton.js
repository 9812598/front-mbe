export default function MyCustomButton({ text }) {
  return (
    <button
      href="#contact"
      className="rounded-md shadow-stone-300 shadow-lg bg-red-600 text-white px-8  py-3 font-serif text-xl font-extralight"
      onclick="window.location.href='/#contact"
    >
      {text}
    </button>
  );
}
