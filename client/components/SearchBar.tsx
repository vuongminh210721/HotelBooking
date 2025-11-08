import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface SearchBarProps {
  onSearch: (filters: {
    checkIn: string;
    checkOut: string;
    guests: number;
  }) => void;
  initialGuests?: number;
  initialCheckIn?: string;
  initialCheckOut?: string;
}

export default function SearchBar({
  onSearch,
  initialGuests = 2,
  initialCheckIn = "",
  initialCheckOut = "",
}: SearchBarProps) {
  const [guests, setGuests] = useState(initialGuests);
  const [checkIn, setCheckIn] = useState(initialCheckIn);
  const [checkOut, setCheckOut] = useState(initialCheckOut);
  const navigate = useNavigate();
  const location = useLocation();
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
        { replace: true }
      );
    } catch (e) {
      // ignore URL update failures
    }
  }, [guests]);

  const handleSearch = () => {
    onSearch({
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
            <div className="w-[200px] p-4 flex flex-col justify-between">
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
              className="min-w-[130px] px-6 py-3 rounded-[60px] border border-teal-600 bg-white text-teal-600 text-base font-semibold hover:bg-teal-600 hover:text-white transition-colors"
            >
              Áp dụng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
