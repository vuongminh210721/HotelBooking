import { useParams, Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import rooms from "@/data/rooms";

export default function View_Home() {
  const { id } = useParams();
  const room = rooms.find((r) => r.id === id);
  const location = useLocation();
  const navigate = useNavigate();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [id]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!room || !room.images?.length) return;
      if (e.key === "ArrowLeft")
        setCurrentImageIndex(
          (i) => (i - 1 + room.images.length) % room.images.length
        );
      if (e.key === "ArrowRight")
        setCurrentImageIndex((i) => (i + 1) % room.images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [room]);

  if (!room)
    return <div className="text-center py-20">Không tìm thấy phòng</div>;

  const images = room.images || [];

  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="min-h-[60vh] bg-black/50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl max-h-[80vh] bg-white rounded-lg overflow-hidden shadow-2xl flex flex-col lg:flex-row">
        {/* Left side - Image Gallery */}
        <div className="lg:w-[60%] relative bg-neutral-100">
          <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full">
            <img
              src={images[currentImageIndex]}
              alt="Bedroom interior"
              className="w-full h-full object-cover"
            />

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-neutral-800" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-neutral-800" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1.5 rounded-md text-sm font-medium">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-4">
            <div className="flex gap-3 justify-center">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`relative w-20 h-16 rounded overflow-hidden transition-all ${
                    currentImageIndex === idx
                      ? "ring-2 ring-white scale-105"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Details */}
        <div className="lg:w-[40%] flex flex-col relative overflow-hidden">
          {/* Close button */}
          <div className="sticky top-0 z-50 flex justify-end bg-white p-3 border-b border-gray-200">
            <button
              onClick={() => navigate(-1)}
              className="w-9 h-9 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-all shadow-sm"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-neutral-700" />
            </button>
          </div>

          {/* Room Details */}
          <div className="flex-1 overflow-y-auto p-6 lg:p-8">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-neutral-900 mb-4">
                {room.name}
              </h1>

              {/* Brand */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-4xl font-extrabold text-neutral-900">
                  HOTEL
                </span>
                <span className="text-xl font-semibold text-teal-500">HUB</span>
              </div>

              <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                {room.description}
              </p>
              {room.descriptionEn && (
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {room.descriptionEn}
                </p>
              )}
            </div>

            {/* Room Info */}
            <div className="mb-8">
              <h2 className="text-base font-semibold text-neutral-900 mb-3">
                Chi tiết
              </h2>
              <div className="space-y-2.5">
                <div className="flex items-center gap-3">
                  <span className="text-neutral-700 text-2xl">👥</span>
                  <span className="text-sm text-neutral-700">
                    {room.guests.replace(/[👤👥👨‍👩‍👧‍👦]/g, "").trim()}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-neutral-700 text-2xl">🛏️</span>
                  <span className="text-sm text-neutral-700">
                    {(room.bedType || "Giường đôi").replace(/🛏️/g, "").trim()}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-neutral-700 text-2xl">📏</span>
                  <span className="text-sm text-neutral-700">
                    {(room.size || "25").replace(/📐/g, "").trim()}
                  </span>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <h2 className="text-base font-semibold text-neutral-900 mb-3">
                Tiện nghi
              </h2>
              <div className="space-y-2.5">
                {room.amenities?.map((a, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-neutral-700 text-2xl">{a.icon}</span>
                    <span className="text-sm text-neutral-700">{a.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price + Book */}
            <div className="border-t border-neutral-200 pt-6">
              {room.soldOut ? (
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-red-200 bg-red-50">
                    <span className="text-red-600 text-lg font-semibold">
                      Hết phòng
                    </span>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-4 flex items-baseline gap-2">
                    <div className="text-3xl font-bold text-red-500">
                      {room.price || "Liên hệ"}
                    </div>
                    <div className="text-sm text-neutral-600">đồng/đêm</div>
                  </div>

                  <div className="text-xs text-neutral-500 mb-4">
                    Đã bao gồm thuế & phí dịch vụ
                  </div>

                  {/* Availability Badge */}
                  {room.availability &&
                    room.availability.toLowerCase().includes("phòng cuối") && (
                      <div className="flex items-center gap-2 mb-4">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-red-50 rounded">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                          <span className="text-xs font-medium text-red-600">
                            PHÒNG CUỐI
                          </span>
                        </div>
                      </div>
                    )}

                  {/* Book Button */}
                  <Link
                    to={`/booking?room=${room.id}`}
                    className="w-full inline-flex items-center justify-center bg-teal-500 hover:bg-teal-600 text-white font-medium py-3.5 rounded-lg transition-colors shadow-sm"
                  >
                    Chọn phòng
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
