import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

interface Amenity {
  icon: string;
  label: string;
}

interface RoomCardProps {
  id: string;
  name: string;
  size?: string;
  bedType?: string;
  guests: string;
  description: string;
  amenities: Amenity[];
  price?: string;
  availability?: string;
  availabilityUnderline?: boolean;
  soldOut?: boolean;
  images: string[];
}

export default function RoomCard({
  id,
  name,
  size,
  bedType,
  guests,
  description,
  amenities,
  price,
  availability,
  availabilityUnderline,
  soldOut,
  images,
}: RoomCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const location = useLocation();

  // Auto-rotate images like a carousel. Pause on hover.
  useEffect(() => {
    if (!images || images.length <= 1) return;
    if (isPaused) return;

    const id = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(id);
  }, [images, isPaused]);

  return (
    <div className="bg-white rounded-2xl shadow-[0_5px_13px_-5px_rgba(16,25,40,0.05)] p-6 flex flex-col gap-4">
      <h3 className="text-[#2fd680] text-lg font-bold leading-[26px] uppercase">
        {name}
      </h3>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
        {/* Ảnh phòng */}
        <div className="w-full lg:w-[290px] flex-shrink-0">
          <div className="relative rounded-2xl border-t border-b border-gray-300 overflow-hidden">
            <div
              className="aspect-[290/216] relative"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
            >
              <img
                src={images[currentImageIndex]}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-[6px] h-[6px] rounded-full ${
                    index === currentImageIndex
                      ? "bg-white opacity-100"
                      : "bg-white/40 opacity-80"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Thông tin phòng */}
        <div className="flex-1 flex flex-col">
          <p className="text-gray-700 text-sm leading-6 pb-6">{description}</p>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 flex-1">
            {/* Nút xem chi tiết */}
            <Link
              to={{ pathname: `/rooms/${id}`, search: location.search }}
              className="text-base font-medium text-[#30a7e3] hover:underline transition-all"
            >
              Xem chi tiết phòng
            </Link>

            {/* Nếu còn phòng */}
            {!soldOut && price && (
              <div className="flex flex-col items-end gap-4 ml-auto">
                <div className="flex flex-col items-end">
                  <div className="flex items-baseline gap-2">
                    <div className="text-red-500 text-xl font-bold leading-7">
                      {price}
                    </div>
                    <div className="text-gray-500 text-xs">đồng/đêm</div>
                  </div>
                  <div className="text-gray-400 text-xs mt-1">
                    Đã bao gồm thuế phí
                  </div>
                </div>

                {availability && (
                  <div className="flex flex-col items-center gap-1">
                    <div
                      className={`text-green-600 text-xs font-medium text-center ${
                        availabilityUnderline ? "underline" : ""
                      }`}
                    >
                      {availability}
                    </div>
                    <Link
                      to={`/booking?room=${id}`}
                      className="min-w-[130px] h-12 px-[18px] py-3 bg-[#30a7e3] text-white text-center text-base leading-6 rounded-[60px] hover:bg-[#a5e618] transition-colors inline-flex items-center justify-center"
                    >
                      Đặt phòng
                    </Link>
                  </div>
                )}
              </div>
            )}

            {/* Nếu hết phòng */}
            {soldOut && (
              <div className="ml-auto">
                <div className="flex items-center gap-2 px-2 py-1 rounded-lg border border-red-400 bg-gray-50">
                  <span className="text-red-500 text-sm font-semibold">
                    Hết phòng
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
