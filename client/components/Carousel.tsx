"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Banner_Search_Bar from "@/components/Banner_Search_Bar";
import { rooms as roomData } from "@/data/rooms";

// Build a daily-rotating list of unique image URLs, excluding Home's images
const images = (() => {
  // Images used on Home: banner (room 0 img 0) + features (rooms 1,6,9 img 0)
  const exclude = new Set<string>();
  const homePick = (idx: number) => roomData[idx]?.images?.[0];
  [0, 1, 6, 9].forEach((i) => {
    const u = homePick(i);
    if (u) exclude.add(u);
  });

  // Collect unique pool excluding Home images
  const pool: string[] = [];
  const seen = new Set<string>();
  for (const r of roomData) {
    for (const url of r.images ?? []) {
      if (!url) continue;
      if (exclude.has(url)) continue;
      if (seen.has(url)) continue;
      seen.add(url);
      pool.push(url);
    }
  }

  // Seeded shuffle by current date (changes daily)
  const dateKey = Number(new Date().toISOString().slice(0, 10).replace(/-/g, ""));
  let seed = dateKey || 1;
  const rand = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  // Limit for performance
  const limit = 10;
  return pool.slice(0, limit).map((url, idx) => ({ id: idx + 1, url }));
})();

export function UI_Carousel() {
  return (
    <div className="relative w-full h-[550px] md:h-[650px] lg:h-[750px]">
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 w-full">
        <Banner_Search_Bar />
      </div>
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
