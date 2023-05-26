import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div
      className="relative overflow-hidden w-full bg-cover bg-no-repeat h-full"
      style={{ backgroundImage: `url(/images/bg-s-dark.png)` }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Main navigation container */}
        <nav
          className="flex-no-wrap relative flex w-full h-full items-center justify-between lg:flex-wrap lg:justify-start lg:py-4"
          data-te-navbar-ref=""
        >
          <div className="flex w-full flex-wrap items-center justify-between px-3">
            {/* Hamburger button for mobile view */}
            <button
              className="block border-0 bg-transparent px-2 text-white hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
              type="button"
              data-te-collapse-init=""
              data-te-target="#navbarSupportedContent1"
              aria-controls="navbarSupportedContent1"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {/* Hamburger icon */}
              <span className="[&>svg]:w-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-7 w-7"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
            {/* Collapsible navigation container */}
            <div
              className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
              id="navbarSupportedContent1"
              data-te-collapse-item=""
            >
              {/* Logo */}
              <Link href="/" className="hidden lg:block">
                <Image
                  src="/images/MBE_LOGO_WHITE.png"
                  width={150}
                  height={150}
                  alt="MBE logo"
                ></Image>
              </Link>
              {/* Left navigation links */}
              <ul
                className="ml-6 list-style-none mr-auto flex flex-col pl-0 lg:flex-row text-white"
                data-te-navbar-nav-ref=""
              >
                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref="">
                  {/* Dashboard link */}
                  <a
                    className=" hover:text-slate-300 focus:text-slate-200  lg:px-2"
                    href="#"
                    data-te-nav-link-ref=""
                  >
                    Рассчитать стоимость
                  </a>
                </li>
                {/* Team link */}
                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref="">
                  <a
                    className="hover:text-slate-300 focus:text-slate-200  lg:px-2"
                    href="#"
                    data-te-nav-link-ref=""
                  >
                    О компании
                  </a>
                </li>
                {/* Projects link */}
                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref="">
                  <a
                    className="hover:text-slate-300 focus:text-slate-200  lg:px-2"
                    href="#"
                    data-te-nav-link-ref=""
                  >
                    Почему MBE?
                  </a>
                </li>

                <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref="">
                  <a
                    className="hover:text-slate-300 focus:text-slate-200  lg:px-2"
                    href="#"
                    data-te-nav-link-ref=""
                  >
                    Полезная информация
                  </a>
                </li>
              </ul>
            </div>
            {/* Right elements */}
            <div className="relative flex flex-col justify-between text-white items-center ">
              <p className="p-3  ">+7 (812) 332-05-25</p>
              <p lassName="p-3  ">0008@mbe.spb.ru</p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

{
  /* <div className={`flex flex-col items-center justify-between p-12 `}>
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
            <Link href="/ImportDocs">Импорт Документов</Link>
            <Link href="/ExportNotDocsPage">Экспорт Грузов</Link>
            <Link href="/china">Импорт из Китая</Link>
            <Link href="/import">Импорт из других стран</Link>
          </div>
        </div>
      </div> */
}
