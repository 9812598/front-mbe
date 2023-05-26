import { Tab, initTE } from "tw-elements";
import { useEffect } from "react";
import dynamic from "next/dynamic";

const MyCaseCarousel = dynamic(() => import("@/components/casescarousel"), {
  ssr: false,
});

const MyOffficeCarousel = dynamic(
  () => import("@/components/offficecarousel"),
  {
    ssr: false,
  }
);

const MyAutoCarousel = dynamic(() => import("@/components/autocarousel"), {
  ssr: false,
});

const MyPhotos = () => {
  useEffect(() => {
    initTE({ Tab });
  }, []);

  return (
    <div
      id="photos"
      className="flex flex-col items-center justify-center  max-w-6xl mx-auto mt-32 text-center"
    >
      <div className="basis-2/3">
        <h2 className="font-serif text-2xl font-normal mb-16">
          НЕМНОГО О НАШЕЙ КОМПАНИИ В ФОТОГРАФИЯХ
        </h2>

        <div>
          {/*Tabs navigation*/}
          <ul
            className="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0 font-serif text-base font-normal"
            role="tablist"
            data-te-nav-ref=""
          >
            <li role="presentation" className="flex-auto text-center">
              <a
                href="#tabs-home01"
                className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4  leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary "
                data-te-toggle="pill"
                data-te-target="#tabs-home01"
                data-te-nav-active=""
                role="tab"
                aria-controls="tabs-home01"
                aria-selected="true"
              >
                КЕЙСЫ
              </a>
            </li>
            <li role="presentation" className="flex-auto text-center">
              <a
                href="#tabs-profile01"
                className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4  leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary "
                data-te-toggle="pill"
                data-te-target="#tabs-profile01"
                role="tab"
                aria-controls="tabs-profile01"
                aria-selected="false"
              >
                ОФИС
              </a>
            </li>
            <li role="presentation" className="flex-auto text-center">
              <a
                href="#tabs-messages01"
                className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4  leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary "
                data-te-toggle="pill"
                data-te-target="#tabs-messages01"
                role="tab"
                aria-controls="tabs-messages01"
                aria-selected="false"
              >
                АВТОПАРК
              </a>
            </li>
          </ul>
          {/*Tabs content*/}
          <div className="mb-6">
            <div
              className="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
              id="tabs-home01"
              role="tabpanel"
              aria-labelledby="tabs-home-tab01"
              data-te-tab-active=""
            >
              <MyOffficeCarousel />
            </div>
            <div
              className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
              id="tabs-profile01"
              role="tabpanel"
              aria-labelledby="tabs-profile-tab01"
            >
              <MyCaseCarousel />
            </div>
            <div
              className="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
              id="tabs-messages01"
              role="tabpanel"
              aria-labelledby="tabs-profile-tab01"
            >
              <MyAutoCarousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPhotos;
