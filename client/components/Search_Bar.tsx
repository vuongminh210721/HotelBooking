import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CITIES = ["Tp Hồ Chí Minh", "Đà Nẵng", "Hà Nội"];

interface SearchBarProps {
  onSearch: (filters: {
    location: string;
    checkIn: string;
    checkOut: string;
    guests: number;
  }) => void;
  initialGuests?: number;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialLocation?: string;
}

export default function SearchBar({
  onSearch,
  initialGuests = 2,
  initialCheckIn = "",
  initialCheckOut = "",
  initialLocation = CITIES[0],
}: SearchBarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  // Read from query params if present
  const params = new URLSearchParams(location.search);
  const guestsParam = parseInt(params.get("guests") || "");
  const checkInParam = params.get("checkIn") || "";
  const checkOutParam = params.get("checkOut") || "";
  const locationParam = params.get("location") || "";

  const [guests, setGuests] = useState(
    !isNaN(guestsParam) ? guestsParam : initialGuests,
  );
  const [checkIn, setCheckIn] = useState(checkInParam || initialCheckIn);
  const [checkOut, setCheckOut] = useState(checkOutParam || initialCheckOut);
  const [selectedLocation, setSelectedLocation] = useState(
    locationParam || initialLocation,
  );
  const [errorMessage, setErrorMessage] = useState("");
  const mounted = useRef(false);

  // Sync guest count to URL so navigating to room details and back preserves selection
  useEffect(() => {
    // Skip initial mount so we don't override any query params present on load
    if (!mounted.current) {
      mounted.current = true;
      return;
    }

    try {
      const params = new URLSearchParams(location.search);
      if (typeof guests !== "undefined" && guests !== null) {
        params.set("guests", String(guests));
      } else {
        params.delete("guests");
      }
      // preserve other params, replace history entry to avoid clutter
      navigate(
        { pathname: location.pathname, search: params.toString() },
        { replace: true },
      );
    } catch (e) {
      // ignore URL update failures
    }
  }, [guests]);

  const handleSearch = () => {
    // Validate dates
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (checkIn) {
      const checkInDate = new Date(checkIn);
      if (checkInDate < today) {
        setErrorMessage("Ngày nhận phòng không hợp lệ");
        return;
      }
    }

    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);
      if (checkOutDate <= checkInDate) {
        setErrorMessage("Ngày trả phòng không hợp lệ");
        return;
      }
    }

    setErrorMessage("");
    onSearch({
      location: selectedLocation,
      checkIn,
      checkOut,
      guests,
    });
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          <div className="flex w-full items-stretch">
            {/* Địa điểm */}
            <div className="flex-1 p-4 flex flex-col justify-between">
              <label className="text-[#2fd680] text-base font-semibold mb-2 block">
                Địa điểm
              </label>
              <select
                className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-black text-base focus:ring-teal-500 focus:border-teal-500 cursor-pointer"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                {CITIES.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Thanh ngăn nhỏ */}
            <div className="hidden sm:flex w-[1px] bg-gray-200 my-6 self-stretch"></div>

            {/* Nhận phòng */}
            <div className="flex-1 p-4 flex flex-col justify-between">
              <label className="text-[#2fd680] text-base font-semibold mb-2 block">
                Nhận phòng
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-black text-base focus:ring-teal-500 focus:border-teal-500 cursor-pointer"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>

            {/* Thanh ngăn nhỏ */}
            <div className="hidden sm:flex w-[1px] bg-gray-200 my-6 self-stretch"></div>

            {/* Trả phòng */}
            <div className="flex-1 p-4 flex flex-col justify-between">
              <label className="text-[#2fd680]   text-base font-semibold mb-2 block">
                Trả phòng
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-black text-base focus:ring-teal-500 focus:border-teal-500 cursor-pointer"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>

            {/* Thanh ngăn nhỏ */}
            <div className="hidden sm:flex w-[1px] bg-gray-200 my-6 self-stretch"></div>

            {/* Khách */}
            <div className="w-[150px] p-4 flex flex-col justify-between">
              <label className="text-[#2fd680] text-base font-semibold mb-2 block">
                Khách
              </label>
              <div className="flex items-center justify-between border border-gray-300 rounded-md px-4 py-2.5">
                <button
                  className="text-gray-400 hover:text-teal-600 text-xl"
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                >
                  −
                </button>
                <span className="text-black text-base font-medium">
                  {guests}
                </span>
                <button
                  className="text-gray-400 hover:text-teal-600 text-xl"
                  onClick={() => setGuests(Math.min(10, guests + 1))}
                >
                  +
                </button>
              </div>
            </div>

            {/* Thanh ngăn nhỏ giữa Khách và Áp dụng */}
            <div className="hidden sm:flex w-[1px] bg-gray-200 my-6 self-stretch"></div>
          </div>

          {/* Nút Áp dụng */}
          <div className="p-4 flex justify-center items-center">
            <button
              onClick={handleSearch}
              className="min-w-[150px] px-6 py-3 rounded-[60px] border border-teal-600 bg-white text-teal-600 text-base font-semibold hover:bg-teal-600 hover:text-white transition-colors"
            >
              Tìm phòng
            </button>
          </div>
        </div>

        {/* Error message */}
        {errorMessage && (
          <div className="mt-4 text-center text-red-600 bg-red-50 border border-red-300 rounded-lg px-4 py-3">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
}
