import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MapPin, Maximize2, Home as HomeIcon, Users, CheckCircle, ArrowRight, Image as ImageIcon } from "lucide-react";

interface Amenity {
  icon: string;
  label: string;
}

interface RoomCardProps {
  id: string;
  name: string;
  city?: string;
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
  city,
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
  const [isHovered, setIsHovered] = useState(false);
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
    <div
      className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-teal-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6 flex-wrap gap-3">
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors duration-300">
              {name}
            </h3>
            {city && (
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4 text-teal-500 flex-shrink-0" />
                <span className="text-sm font-medium">{city}</span>
              </div>
            )}
          </div>
          {!soldOut && availability && (
            <span className="px-4 py-1.5 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 text-green-700 text-xs font-semibold rounded-full shadow-sm">
              {availability}
            </span>
          )}
          {soldOut && (
            <span className="px-4 py-1.5 bg-red-50 border border-red-200 text-red-600 text-xs font-bold rounded-full">
              Hết phòng
            </span>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Image Gallery */}
          <div className="w-full lg:w-[320px] xl:w-[360px] flex-shrink-0">
            <div className="relative rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300">
              {images && images.length > 0 ? (
                <>
                  <div
                    className="aspect-[4/3] relative bg-gray-200"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={() => setIsPaused(true)}
                    onTouchEnd={() => setIsPaused(false)}
                  >
                    <img
                      src={images[currentImageIndex]}
                      alt={name}
                      className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'
                        }`}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  {/* Image Indicators */}
                  {images.length > 1 && (
                    <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`transition-all duration-300 rounded-full ${index === currentImageIndex
                            ? "w-8 h-2 bg-white shadow-lg"
                            : "w-2 h-2 bg-white/60 hover:bg-white/80"
                            }`}
                          aria-label={`View image ${index + 1}`}
                        />
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <ImageIcon className="w-16 h-16 text-gray-400" />
                </div>
              )}
            </div>

            {/* Room Info Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {size && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-lg text-xs font-medium text-gray-700 border border-gray-200">
                  <Maximize2 className="w-4 h-4 text-gray-500" />
                  <span>{size.replace(/📐|🏙️/g, '').trim()}</span>
                </div>
              )}
              {bedType && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 rounded-lg text-xs font-medium text-gray-700 border border-gray-200">
                  <HomeIcon className="w-4 h-4 text-gray-500" />
                  <span>{bedType.replace(/🛏️/g, '').trim()}</span>
                </div>
              )}
              {guests && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-teal-50 rounded-lg text-xs font-medium text-teal-700 border border-teal-200">
                  <Users className="w-4 h-4 text-teal-600" />
                  <span>{guests.replace(/👤|👥|👨‍👩‍👧‍👦/g, '').trim()}</span>
                </div>
              )}
            </div>
          </div>

          {/* Room Details */}
          <div className="flex-1 flex flex-col justify-between">
            {/* Description */}
            <div className="space-y-4 mb-6">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed line-clamp-3">
                {description}
              </p>

              {/* Amenities */}
              {amenities && amenities.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {amenities.slice(0, 4).map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1.5 px-3 py-2 bg-gradient-to-r from-teal-50 to-green-50 border border-teal-100 rounded-lg text-xs font-medium text-teal-700 hover:from-teal-100 hover:to-green-100 transition-all"
                      title={amenity.label}
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-teal-600" />
                      <span>{amenity.label}</span>
                    </div>
                  ))}
                  {amenities.length > 4 && (
                    <div className="flex items-center px-3 py-2 text-xs font-semibold text-teal-600">
                      +{amenities.length - 4} tiện ích
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 pt-4 border-t border-gray-100">
              {/* View Details Link */}
              <Link
                to={{ pathname: `/rooms/${id}`, search: location.search }}
                className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold text-sm md:text-base group/link transition-all"
              >
                <span>Xem chi tiết phòng</span>
                <ArrowRight className="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform" />
              </Link>

              {/* Pricing & Booking */}
              {!soldOut && price && (
                <div className="flex flex-col items-end gap-3">
                  <div className="text-right">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                        {price}
                      </span>
                      <span className="text-xs text-gray-500">đồng/đêm</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">Đã bao gồm thuế phí</p>
                  </div>

                  <button
                    onClick={() => {
                      // Dispatch event to open the header booking modal and pass room info
                      try {
                        window.dispatchEvent(
                          new CustomEvent("openBooking", {
                            detail: { roomId: id, roomName: name, price },
                          })
                        );
                      } catch (e) {
                        // fallback for environments that don't support CustomEvent constructor
                        const ev = document.createEvent("CustomEvent");
                        ev.initCustomEvent("openBooking", true, true, {
                          roomId: id,
                          roomName: name,
                          price,
                        });
                        window.dispatchEvent(ev);
                      }
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-teal-500 to-green-500 text-white text-sm md:text-base font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
                  >
                    <span>Đặt phòng ngay</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
