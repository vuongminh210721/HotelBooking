import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const locations = [
  {
    id: 1,
    label: "HÀ NỘI",
    title: "HotelHub Kim Mã",
    description:
      "Nằm tại trung tâm khu vực Kim Mã sầm uất của Hà Nội, HotelHub Kim Mã mang đến không gian nghỉ dưỡng hiện đại và thanh lịch giữa nhịp sống thủ đô. Với thiết kế tinh tế, dịch vụ chu đáo và vị trí thuận tiện kết nối các điểm văn hóa, mua sắm và ẩm thực, đây là lựa chọn hoàn hảo cho những ai muốn trải nghiệm Hà Nội một cách trọn vẹn.",
    image:
      "https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839184_1280.jpg",
  },
  {
    id: 2,
    label: "HỒ CHÍ MINH",
    title: "HotelHub Thảo Điền",
    description:
      "Tọa lạc tại trung tâm Thảo Điền – khu vực sôi động bậc nhất của Thành phố Hồ Chí Minh, HotelHub Thảo Điền mang đến không gian nghỉ dưỡng hiện đại hòa cùng thiên nhiên xanh mát. Với thiết kế tinh tế, tiện nghi sang trọng và vị trí thuận lợi cho cả làm việc lẫn thư giãn, đây là điểm đến lý tưởng cho những ai muốn tận hưởng nhịp sống thành phố theo cách riêng.",
    image:
      "https://cdn.pixabay.com/photo/2020/03/13/18/17/the-living-room-of-a-photographer-4928794_1280.jpg",
  },
  {
    id: 3,
    label: "ĐÀ NẴNG",
    title: "HotelHub Mỹ Khê",
    description:
      "Nằm bên bờ biển Mỹ Khê – một trong những bãi biển đẹp nhất Đà Nẵng, HotelHub Mỹ Khê mang đến không gian nghỉ dưỡng thanh bình cùng tầm nhìn hướng biển tuyệt đẹp. Với thiết kế hiện đại, tiện nghi đẳng cấp và vị trí thuận lợi để khám phá thành phố, đây là nơi lý tưởng để tận hưởng kỳ nghỉ trọn vẹn.",
    image:
      "https://cdn.pixabay.com/photo/2018/03/29/17/00/bathroom-3272780_1280.jpg",
  },
  {
    id: 4,
    label: "PHÚ QUỐC",
    title: "HotelHub Bãi Trường",
    description:
      "Tọa lạc ngay bên bãi biển Bãi Trường tuyệt đẹp, HotelHub Phú Quốc là thiên đường nghỉ dưỡng lý tưởng với làn nước trong xanh và cát trắng mịn màng. Không gian sang trọng kết hợp với thiên nhiên hoang sơ tạo nên trải nghiệm đáng nhớ cho mọi du khách.",
    image:
      "https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839184_1280.jpg",
  },
  {
    id: 5,
    label: "NHA TRANG",
    title: "HotelHub Trần Phú",
    description:
      "Nằm dọc bờ biển Trần Phú nổi tiếng, HotelHub Nha Trang mang đến tầm nhìn panorama tuyệt đẹp ra biển cả. Với thiết kế hiện đại, tiện nghi cao cấp và dịch vụ tận tâm, đây là điểm dừng chân hoàn hảo cho kỳ nghỉ biển.",
    image:
      "https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839184_1280.jpg",
  },
  {
    id: 6,
    label: "ĐÀ LẠT",
    title: "HotelHub Xuân Hương",
    description:
      "Nép mình bên hồ Xuân Hương thơ mộng, HotelHub Đà Lạt là không gian nghỉ dưỡng yên bình giữa thành phố ngàn hoa. Khí hậu mát mẻ quanh năm cùng thiết kế ấm cúng tạo nên nơi trú ẩn lý tưởng khỏi guồng quay cuộc sống.",
    image:
      "https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839184_1280.jpg",
  },
];

const places = [
  {
    id: 1,
    name: "Hanoi",
    desc: "Thủ đô với nhiều điểm tham quan.",
    img: "https://cellphones.com.vn/sforum/wp-content/uploads/2024/01/dia-diem-du-lich-o-ha-noi-1.jpg",
  },
  {
    id: 2,
    name: "Da Nang",
    desc: "Bãi biển đẹp và cầu Rồng.",
    img: "https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA",
  },
  {
    id: 3,
    name: "Ho Chi Minh",
    desc: "Thành phố sôi động, ẩm thực phong phú.",
    img: "https://cdn.thuvienphapluat.vn//uploads/tintuc/2024/05/01/vung-do-thi-thanh-pho-ho-chi-minh.jpg",
  },
];

export default function Locations() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? locations.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === locations.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Ảnh nền */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url(${locations[currentIndex].image})`,
          }}
        />

        {/* Lớp phủ đậm hơn để chữ nổi bật */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        {/* Nội dung */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-12 text-center drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] leading-tight">
            Khám phá điều mới lạ
            <br />
            tại M Village
          </h1>

          <div className="flex items-center gap-6 w-full max-w-6xl">
            <Button
              onClick={handlePrev}
              variant="outline"
              size="icon"
              className="text-white bg-white/20 hover:bg-white/40 border-2 border-white/50 backdrop-blur-md shrink-0 h-14 w-14 rounded-full shadow-xl hover:scale-110 transition-all duration-300"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <div className="flex-1 overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {locations.map((location) => (
                  <div
                    key={location.id}
                    className="min-w-full flex flex-col items-center px-4"
                  >
                    <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 max-w-3xl border border-white/20 shadow-2xl flex flex-col items-center">
                      <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold tracking-wider mb-4 border border-white/30">
                        {location.label}
                      </span>
                      <h2 className="text-4xl font-bold mb-6 drop-shadow-lg text-center">
                        {location.title}
                      </h2>
                      <p className="text-center text-base leading-relaxed mb-8 drop-shadow-md font-medium">
                        {location.description}
                      </p>
                      <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 border-2 border-white/20">
                        Khám phá ngay →
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button
              onClick={handleNext}
              variant="outline"
              size="icon"
              className="text-white bg-white/20 hover:bg-white/40 border-2 border-white/50 backdrop-blur-md shrink-0 h-14 w-14 rounded-full shadow-xl hover:scale-110 transition-all duration-300"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>

          {/* Indicators */}
          <div className="flex gap-3 mt-12 bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            {locations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white w-12 shadow-lg shadow-white/50"
                    : "bg-white/40 w-3 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Divider giữa các section */}
      <div className="h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      {/* Places Section */}
      <div className="relative bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block bg-blue-100 px-6 py-2 rounded-full mb-6 border border-blue-200">
              <span className="text-blue-600 font-bold text-sm tracking-widest">
                ĐIỂM ĐẾN
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Điểm đến phổ biến
            </h2>
            <p className="text-gray-600 text-xl font-medium">
              Khám phá những thành phố hấp dẫn nhất Việt Nam
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {places.map((p, index) => (
              <div
                key={p.id}
                className="group relative bg-white rounded-3xl overflow-hidden border-2 border-gray-200 hover:border-blue-500 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  {/* Overlay hiệu ứng */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Tên thành phố overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-3xl font-bold text-white drop-shadow-2xl mb-2">
                      {p.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 bg-white">
                  <p className="text-gray-700 mb-6 leading-relaxed font-medium">
                    {p.desc}
                  </p>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-6 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                    Xem chi tiết →
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
