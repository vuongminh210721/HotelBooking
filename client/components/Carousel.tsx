"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Banner_Search_Bar from "@/components/Banner_Search_Bar";
import { useNavigate } from "react-router-dom";

const images = [
  {
    id: 1,
    url: "https://cdn.pixabay.com/photo/2019/04/23/09/04/living-room-4148894_1280.jpg",
  },
  {
    id: 2,
    url: "https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_1280.jpg",
  },
  {
    id: 3,
    url: "https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg",
  },
  {
    id: 4,
    url: "https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_1280.jpg",
  },
  {
    id: 5,
    url: "https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_1280.jpg",
  },
];

export function UI_Carousel() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[550px] md:h-[650px] lg:h-[750px]">
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 w-full">
        <Banner_Search_Bar />
      </div>
      {/* <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={() => navigate("/room-system")}
          className="px-8 py-3 bg-transparent text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition-all duration-300 text-lg font-semibold"
        >
          Khám phá
        </button>
      </div> */}
      <Carousel
        className="h-full w-full"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{
          loop: true,
          align: "center",
        }}
      >
        <CarouselContent className="h-full">
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative h-full w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/30 z-10"></div>
                <img
                  src={image.url}
                  alt={`Modern living space ${index + 1}`}
                  className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
