import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UI_Carousel } from "@/components/Carousel";

export default function Index() {
  const [selectedCity, setSelectedCity] = useState("Tp Hồ Chí Minh");
  const [showBooking, setShowBooking] = useState(false);
  const cities = ["Tp Hồ Chí Minh", "Hà Nội", "Đà Nẵng"];

  useEffect(() => {
    const openHandler = () => setShowBooking(true);
    window.addEventListener("openBooking", openHandler);
    return () => window.removeEventListener("openBooking", openHandler);
  }, []);

  useEffect(() => {
    const closeHandler = () => setShowBooking(false);
    window.addEventListener("closeBooking", closeHandler);
    return () => window.removeEventListener("closeBooking", closeHandler);
  }, []);

  const propertiesByCity = {
    "Tp Hồ Chí Minh": [
      {
        id: 1,
        name: "EXPRESS BY HOTELHUB",
        location: "HOÀNG SA, Quận 3",
        image:
          "https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_1280.jpg",
      },
      {
        id: 2,
        name: "EXPRESS BY HOTELHUB",
        location: "46 THẢO ĐIỀN, Quận 2",
        image:
          "https://cdn.pixabay.com/photo/2016/09/19/17/20/home-1680800_640.jpg",
      },
      {
        id: 3,
        name: "SIGNATURE BY HOTELHUB",
        location: "THI SÁCH, Quận 1",
        image:
          "https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_640.jpg",
      },
      {
        id: 10,
        name: "SIGNATURE BY HOTELHUB",
        location: "TÔN ĐỨC THẮNG, Quận 1",
        image:
          "https://cdn.pixabay.com/photo/2023/09/18/11/57/living-room-8260362_640.jpg",
      },
      {
        id: 11,
        name: "RIVER VIEW BY HOTELHUB",
        location: "BẾN BẠCH ĐẰNG, Quận 1",
        image:
          "https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_1280.jpg",
      },
      {
        id: 12,
        name: "URBAN LOFT BY HOTELHUB",
        location: "LÊ LAI, Quận 1",
        image:
          "https://cdn.pixabay.com/photo/2017/01/07/17/48/interior-1961070_1280.jpg",
      },
    ],
    "Hà Nội": [
      {
        id: 4,
        name: "SIGNATURE BY HOTELHUB",
        location: "36 HOÀN KIẾM",
        image:
          "https://cdn.pixabay.com/photo/2023/09/18/11/57/living-room-8260362_640.jpg",
      },
      {
        id: 5,
        name: "EXPRESS BY HOTELHUB",
        location: "PHAN ĐÌNH PHÙNG, BA ĐÌNH",
        image:
          "https://cdn.pixabay.com/photo/2019/04/23/09/04/indoor-4148894_1280.jpg",
      },
      {
        id: 6,
        name: "EXPRESS BY HOTELHUB",
        location: "TRUNG HÒA, CẦU GIẤY",
        image:
          "https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_1280.jpg",
      },
      {
        id: 13,
        name: "RIVERSIDE STAY",
        location: "TÂY HỒ, Hà Nội",
        image:
          "https://cdn.pixabay.com/photo/2016/04/18/08/50/kitchen-1336160_1280.jpg",
      },
      {
        id: 14,
        name: "CITY CENTER BY HOTELHUB",
        location: "HOÀNG MAI, Hà Nội",
        image:
          "https://cdn.pixabay.com/photo/2017/01/07/17/48/interior-1961070_1280.jpg",
      },
    ],
    "Đà Nẵng": [
      {
        id: 7,
        name: "SIGNATURE BY HOTELHUB",
        location: "BÃI BẮC, NGŨ HÀNH SƠN",
        image:
          "https://cdn.pixabay.com/photo/2016/04/18/08/50/kitchen-1336160_1280.jpg",
      },
      {
        id: 8,
        name: "EXPRESS BY HOTELHUB",
        location: "MỸ KHÊ, SƠN TRÀ",
        image:
          "https://cdn.pixabay.com/photo/2017/01/07/17/48/interior-1961070_1280.jpg",
      },
      {
        id: 9,
        name: "SIGNATURE BY HOTELHUB",
        location: "BẠCH ĐẰNG, HẢI CHÂU",
        image:
          "https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_1280.jpg",
      },
    ],
  };

  const bannerImage = {
    src: "https://cdn.pixabay.com/photo/2023/03/29/10/27/hotel-7885138_1280.jpg",
    alt: "Hero banner",
  };

  const legacyBanner = (
    <section className="w-full py-12 bg-transparent relative z-0">
      <div className="max-w-[1300px] mx-auto px-4 md:px-10 text-center">
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={bannerImage.src}
            alt={bannerImage.alt}
            className="w-full h-[360px] md:h-[480px] lg:h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center text-white px-6">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4">
                Trải nghiệm không gian hiện đại
              </h1>
              <p className="text-base max-w-[800px] mx-auto">
                HotelHub mang đến cho bạn nơi nghỉ dưỡng, làm việc và tận hưởng
                cuộc sống trong những không gian sang trọng, tiện nghi và đầy
                cảm hứng.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white">
      <section className="relative isolate overflow-hidden mb-12 md:mb-16 lg:mb-20">
        <UI_Carousel />
        <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="max-w-[1400px] w-full px-4 md:px-10 text-center">
            <div className="pointer-events-auto">
              <button className="bg-teal-500 text-white font-bold text-sm md:text-base px-6 md:px-8 py-2.5 md:py-3 rounded-full uppercase tracking-wide hover:bg-teal-600 transition-colors shadow-md">
                Khám phá
              </button>
            </div>
          </div>
        </div>
      </section>

      {legacyBanner}

      {/* Features Section */}
      <section className="py-12 md:py-20 px-4 md:px-20">
        <div className="max-w-[1270px] mx-auto space-y-8 md:space-y-10">
          {/* Feature 1 */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="w-full md:w-1/2">
              <img
                src="https://cdn.pixabay.com/photo/2021/12/11/07/59/hotel-6862159_1280.jpg"
                alt="Không gian riêng tư tiện nghi"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-12 space-y-6">
              <h2 className="text-3xl md:text-5xl font-medium leading-tight">
                Không gian riêng tư, tiện nghi cho mỗi người
              </h2>
              <p className="text-base font-light leading-relaxed">
                HotelHub được xây dựng với sứ mệnh mang đến những nơi lưu trú
                hiện đại, tối giản và ấm cúng. Từng căn phòng đều được thiết kế
                để bạn tận hưởng trọn vẹn sự thoải mái và cảm giác như ở nhà —
                dù là công tác, du lịch hay nghỉ dưỡng.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-12">
            <div className="w-full md:w-1/2">
              <img
                src="https://cdn.pixabay.com/photo/2021/08/27/01/33/bedroom-6577523_1280.jpg"
                alt="Cộng đồng năng động và thân thiện"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="w-full md:w-1/2 md:pr-12 space-y-6">
              <h2 className="text-3xl md:text-5xl font-medium leading-tight">
                Cộng đồng kết nối và phát triển
              </h2>
              <p className="text-base font-light leading-relaxed">
                HotelHub hướng đến việc tạo ra cộng đồng những người trẻ hiện
                đại — nơi bạn có thể gặp gỡ, chia sẻ và phát triển cùng nhau.
                Không gian HotelHub không chỉ là nơi nghỉ dưỡng, mà còn là nơi
                khơi dậy cảm hứng, giúp bạn kết nối và tìm thấy giá trị mới
                trong hành trình sống và làm việc.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="w-full md:w-1/2">
              <img
                src="https://cdn.pixabay.com/photo/2015/09/28/18/30/hotel-del-coronado-962458_1280.jpg"
                alt="Hành trình HotelHub tại Việt Nam"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-12 space-y-6">
              <h2 className="text-3xl md:text-5xl font-medium leading-tight">
                Hành trình HotelHub tại Việt Nam
              </h2>
              <p className="text-base font-light leading-relaxed">
                HotelHub được sáng lập bởi những người trẻ với khát vọng mang
                lại trải nghiệm lưu trú tốt nhất cho khách hàng. Bắt đầu từ
                những căn hộ đầu tiên tại trung tâm TP. Hồ Chí Minh, HotelHub
                nay đã có mặt tại nhiều thành phố lớn, mang đến trải nghiệm lưu
                trú kết hợp tiện ích công nghệ và dịch vụ hiện đại.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 px-4 md:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto flex flex-col items-center">
          <h2 className="text-3xl md:text-[39px] font-medium text-grey-7 text-center mb-8">
            ĐIỂM ĐẾN HẤP DẪN
          </h2>
          <div className="flex justify-center items-center mb-10">
            <div className="inline-flex items-center rounded-full border border-grey-91 bg-white p-0.5">
              {cities.map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(city)}
                  className={`px-6 py-2 rounded-full text-base md:text-lg font-medium transition-colors ${
                    selectedCity === city
                      ? "bg-black text-white"
                      : "bg-transparent text-black"
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center max-w-[1300px] w-full">
              {propertiesByCity[selectedCity].map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  showBooking={showBooking}
                  onBook={() =>
                    window.dispatchEvent(new CustomEvent("openBooking"))
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_1280.jpg"
          alt="Hotel background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-medium text-white">
            Bạn đang cần một nơi nghỉ dưỡng hiện đại, tiện nghi?
          </h2>
          <Link
            to="/contact"
            className="px-6 py-2 border border-white text-white rounded-full text-base font-medium hover:bg-green-400 transition-colors inline-block text-center"
          >
            Liên hệ ngay
          </Link>
        </div>
      </section>
    </div>
  );
}

function PropertyCard({
  property,
  onBook,
  showBooking,
}: {
  property: any;
  onBook?: () => void;
  showBooking?: boolean;
}) {
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    if (!showBooking) setBooked(false);
  }, [showBooking]);

  useEffect(() => {
    const resetBooking = () => setBooked(false);
    window.addEventListener("closeBooking", resetBooking);
    return () => window.removeEventListener("closeBooking", resetBooking);
  }, []);

  return (
    <div className="border border-[rgb(190,211,189)] rounded-2xl overflow-hidden hover:shadow-xl transition-shadow w-full max-w-[380px]">
      <div className="relative h-[250px]">
        <img
          src={property.image}
          alt={`${property.name} ${property.location}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent"></div>
      </div>

      <div className="p-4 space-y-4 text-center md:text-left">
        <div>
          <h3 className="text-lg font-semibold text-grey-7 leading-tight">
            {property.name}
          </h3>
          <h4 className="text-base text-grey-6">{property.location}</h4>
        </div>

        <button
          onClick={() => {
            setBooked(true);
            onBook?.();
          }}
          className={`flex items-center justify-center md:justify-start gap-2 font-medium transition-all py-1 px-2 rounded-md ${
            booked
              ? "text-[#41de8d] hover:opacity-90"
              : "text-[#41de8d] hover:gap-3 hover:underline"
          }`}
        >
          <span>{booked ? "Đang đặt..." : "Đặt ngay"}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className={`${booked ? "opacity-90" : ""}`}
          >
            <path
              d="M4 12L12 4"
              stroke={booked ? "#fff" : "#FF9C00"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.5 4H12V10.5"
              stroke={booked ? "#fff" : "#FF9C00"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
