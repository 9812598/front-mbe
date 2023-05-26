import dynamic from "next/dynamic";
import Contact from "@/components/contact";
import MapAndContact from "@/components/mapandcontact";

const MyCarousel = dynamic(() => import("@/components/carousel"), {
  ssr: false,
});

const MyPhotos = dynamic(() => import("@/components/photos"), {
  ssr: false,
});

export default function Helpful() {
  return (
    <div className="min-h-screen ">
      <MyPhotos />
      <MyCarousel />
      <Contact />
      <MapAndContact />
    </div>
  );
}
