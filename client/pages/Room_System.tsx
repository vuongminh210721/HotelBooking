import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import SearchBar from "@/components/SearchBar";
import RoomCard from "@/components/RoomCard";
import rooms from "@/data/rooms";

export default function RoomSystem() {
  const navigate = useNavigate();
  const location = useLocation();

  const [filteredRooms, setFilteredRooms] = useState(rooms);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    checkIn: "",
    checkOut: "",
    guests: 2,
  });

  const handleSearch = (searchFilters) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const filtered = rooms.filter((room) => {
        // Parse number of guests from room data, handling different formats
        let roomGuests = 0;
        if (room.guests.includes("👤")) {
          // Single guest (👤 1 người)
          roomGuests = 1;
        } else if (room.guests.includes("👥")) {
          // Multiple guests (👥 2 người, 👥 3 người)
          roomGuests = parseInt(room.guests.split(" ")[1], 10) || 2;
        } else if (room.guests.includes("👨‍👩‍👧‍👦")) {
          // Family room (👨‍👩‍👧‍👦 5 người)
          roomGuests = parseInt(room.guests.split(" ")[1], 10) || 5;
        }

        // Match rooms that can accommodate the requested number of guests
        return roomGuests === searchFilters.guests;
      });
      setFilteredRooms(filtered);
      setLoading(false);
    }, 500);
    // Persist filters to URL so navigating away and back restores state
    try {
      const params = new URLSearchParams(location.search);
      if (searchFilters.checkIn) params.set("checkIn", searchFilters.checkIn);
      else params.delete("checkIn");
      if (searchFilters.checkOut)
        params.set("checkOut", searchFilters.checkOut);
      else params.delete("checkOut");
      if (typeof searchFilters.guests !== "undefined")
        params.set("guests", String(searchFilters.guests));
      else params.delete("guests");

      navigate(
        { pathname: "/rooms", search: params.toString() },
        { replace: false }
      );
    } catch (e) {
      // ignore URL update failures
    }
  };

  useEffect(() => {
    // Initial load
    // If there are query params, use them to initialize filters and run search
    const params = new URLSearchParams(location.search);
    const qCheckIn = params.get("checkIn") || "";
    const qCheckOut = params.get("checkOut") || "";
    const qGuests = parseInt(params.get("guests") || "", 10);

    if (qCheckIn || qCheckOut || !Number.isNaN(qGuests)) {
      const initial = {
        checkIn: qCheckIn,
        checkOut: qCheckOut,
        guests: Number.isNaN(qGuests) || qGuests === 0 ? 2 : qGuests,
      };
      setFilters(initial);
      // run search with parsed params so filteredRooms matches
      handleSearch(initial);
    } else {
      setFilteredRooms(rooms);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-full max-w-[1240px] mx-auto px-4 lg:px-0 py-8">
        <div className="mb-8 pt-8">
          <h1 className="text-gray-dark text-4xl font-medium leading-[44px]">
            Lựa chọn phòng
          </h1>
        </div>

        <div className="mb-12">
          <SearchBar
            onSearch={handleSearch}
            initialGuests={filters.guests}
            initialCheckIn={filters.checkIn}
            initialCheckOut={filters.checkOut}
          />
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-primary"></div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {filteredRooms.map((room) => (
              <RoomCard key={room.id} {...room} />
            ))}
            {filteredRooms.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                Xin lỗi! Chúng tôi không có phòng phù hợp với tiêu chí của bạn
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
