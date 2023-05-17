import { Carousel, initTE } from "tw-elements";
import { useEffect } from "react";
import Image from "next/image";

const AutoCarousel = () => {
  useEffect(() => {
    initTE({ Carousel });
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <div
        id="carouselExampleCrossfade3"
        className="relative"
        data-te-carousel-init=""
        data-te-carousel-slide=""
      >
        {/*Carousel indicators*/}
        <div
          className="absolute inset-x-0 bottom-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
          data-te-carousel-indicators=""
        >
          <button
            type="button"
            data-te-target="#carouselExampleCrossfade3"
            data-te-slide-to={0}
            data-te-carousel-active=""
            className="mx-[3px] box-content h-[3px] w-[20px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-te-target="#carouselExampleCrossfade3"
            data-te-slide-to={1}
            className="mx-[3px] box-content h-[3px] w-[20px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-te-target="#carouselExampleCrossfade3"
            data-te-slide-to={2}
            className="mx-[3px] box-content h-[3px] w-[20px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 3"
          />
          <button
            type="button"
            data-te-target="#carouselExampleCrossfade3"
            data-te-slide-to={3}
            className="mx-[3px] box-content h-[3px] w-[20px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 4"
          />
          <button
            type="button"
            data-te-target="#carouselExampleCrossfade3"
            data-te-slide-to={4}
            className="mx-[3px] box-content h-[3px] w-[20px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
            aria-label="Slide 5"
          />
        </div>
        {/*Carousel items*/}
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          {/*First item*/}
          <div
            className="h-96 relative float-left -mr-[100%] w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-fade=""
            data-te-carousel-item=""
            data-te-carousel-active=""
          >
            <Image
              src="/images/photoscarousel/autocarousel/1.jpg"
              height={400}
              width={400}
              className="mx-auto"
              alt="1"
            />
          </div>
          {/*Second item*/}
          <div
            className="h-96 relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-fade=""
            data-te-carousel-item=""
          >
            <Image
              src="/images/photoscarousel/autocarousel/2.jpg"
              height={400}
              width={400}
              className="mx-auto"
              alt="2"
            />
          </div>
          {/*Third item*/}
          <div
            className="h-96 relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-fade=""
            data-te-carousel-item=""
          >
            <Image
              src="/images/photoscarousel/autocarousel/3.jpg"
              height={400}
              width={400}
              className="mx-auto"
              alt="3"
            />
          </div>

          {/*forth item*/}
          <div
            className="h-96 relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-fade=""
            data-te-carousel-item=""
          >
            <Image
              src="/images/photoscarousel/autocarousel/4.jpg"
              height={400}
              width={400}
              className="mx-auto"
              alt="4"
            />
          </div>
          {/*Fivs item*/}
          <div
            className="h-96 relative float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-fade=""
            data-te-carousel-item=""
          >
            <Image
              src="/images/photoscarousel/autocarousel/5.jpg"
              height={400}
              width={400}
              className="mx-auto"
              alt="5"
            />
          </div>
        </div>

        {/*Carousel controls - prev item*/}
        <button
          className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleCrossfade3"
          data-te-slide="prev"
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>
        {/*Carousel controls - next item*/}
        <button
          className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleCrossfade3"
          data-te-slide="next"
        >
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>
      </div>
    </div>
  );
};

export default AutoCarousel;
