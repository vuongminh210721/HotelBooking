import { useState } from "react";
import { HeroCarousel } from "@/components/HeroCarousel";
import Logo from "@/components/Logo";

export default function Index() {
  const [selectedCity, setSelectedCity] = useState("Tp Hồ Chí Minh");
  const [selectedDistrict, setSelectedDistrict] = useState("Tất cả");

  const cities = ["Tp Hồ Chí Minh", "Hà Nội", "Đà Nẵng"];
  // const districts = {
  //   "Tp Hồ Chí Minh": [
  //     "Tất cả",
  //     "Quận 1",
  //     "Quận 2",
  //     "Quận 3",
  //     "Tân Bình",
  //     "Bình Thạnh",
  //     "Phú Nhuận",
  //   ],
  //   "Hà Nội": ["Tất cả", "Hoàn Kiếm", "Ba Đình", "Đống Đa", "Cầu Giấy"],
  //   "Đà Nẵng": ["Tất cả", "Hải Châu", "Sơn Trà", "Ngũ Hành Sơn", "Thanh Khê"],
  // };

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
        name: "SIGNATURE BY HOTELHUB",
        location: "TRẦN HƯNG ĐẠO, ĐỐNG ĐA",
        image:
          "https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_1280.jpg",
      },
      {
        id: 7,
        name: "EXPRESS BY HOTELHUB",
        location: "TRUNG HÒA, CẦU GIẤY",
        image:
          "https://cdn.pixabay.com/photo/2017/07/09/03/19/home-2486092_1280.jpg",
      },
    ],
    "Đà Nẵng": [
      {
        id: 8,
        name: "SIGNATURE BY HOTELHUB",
        location: "BÃI BẮC, NGŨ HÀNH SƠN",
        image:
          "https://cdn.pixabay.com/photo/2016/04/18/08/50/kitchen-1336160_1280.jpg",
      },
      {
        id: 9,
        name: "EXPRESS BY HOTELHUB",
        location: "MỸ KHÊ, SƠN TRÀ",
        image:
          "https://cdn.pixabay.com/photo/2017/01/07/17/48/interior-1961070_1280.jpg",
      },
      {
        id: 10,
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

  const [currentSlide, setCurrentSlide] = useState(0);
  const goToSlide = (index: number) => setCurrentSlide(index);

  const properties = [
    {
      id: 1,
      // brand: "express",
      name: "EXPRESS BY HOTELHUB",
      location: "HOÀNG SA",
      image:
        "https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_1280.jpg",
      // logo: "https://api.builder.io/api/v1/image/assets/TEMP/1db369b662b094851b3960d31a2578b9616bee05?width=184",
    },
    {
      id: 2,
      // brand: "express",
      name: "EXPRESS BY HOTELHUB",
      location: "46 THẢO ĐIỀN",
      image:
        "https://cdn.pixabay.com/photo/2016/09/19/17/20/home-1680800_640.jpg",
      // logo: "https://api.builder.io/api/v1/image/assets/TEMP/1db369b662b094851b3960d31a2578b9616bee05?width=184",
    },
    {
      id: 3,
      // brand: "hotel",
      name: "EXPRESS BY HOTELHUB",
      location: "THI SÁCH",
      image:
        "https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_640.jpg",
      // logo: "hotel",
    },
    {
      id: 4,
      // brand: "express",
      name: "EXPRESS BY HOTELHUB",
      location: "GLOBAL CITY",
      image:
        "https://cdn.pixabay.com/photo/2021/12/25/13/08/real-estate-6893060_640.jpg",
      //   logo: "https://api.builder.io/api/v1/image/assets/TEMP/1db369b662b094851b3960d31a2578b9616bee05?width=184",
    },
    {
      id: 5,
      // brand: "express",
      name: "EXPRESS BY HOTELHUB",
      location: "NGUYỄN THẾ LỘC",
      image:
        "https://cdn.pixabay.com/photo/2018/02/24/17/17/window-3178666_640.jpg",
      // logo: "https://api.builder.io/api/v1/image/assets/TEMP/1db369b662b094851b3960d31a2578b9616bee05?width=184",
    },
    {
      id: 6,
      // brand: "signature",
      name: "EXPRESS BY HOTELHUB",
      location: "LÊ THÁNH TÔN",
      image:
        "https://cdn.pixabay.com/photo/2020/06/27/16/40/apartment-5346460_640.jpg",
      // logo: "signature",
    },
  ];

  const legacyBanner = (
    // add responsive top margin so legacy banner sits lower and won't visually
    // overlap the hero carousel (keeps existing padding and layout intact)
    <section className="w-full py-12 bg-transparent mt-12 md:mt-16 lg:mt-20">
      <div className="max-w-[1270px] mx-auto px-4 md:px-10 text-center">
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={bannerImage.src}
            alt={bannerImage.alt}
            className="w-full h-[360px] md:h-[480px] lg:h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center text-white px-6">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-4">
                Không gian sống hiện đại
              </h1>
              <p className="text-base max-w-[800px] mx-auto">
                Chúng tôi tin rằng mỗi người trong chúng ta vẫn luôn mưu cầu một
                nơi chốn của riêng mình - một không gian, một chốn cư trú, một
                mái ấm, một ngôi nhà.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        {/* Banner ảnh chạy tự động */}
        <HeroCarousel />

        {/* Lớp phủ màu đen mờ để chữ dễ đọc (đặt z-index giữa carousel và nội dung).
      Bump z-index high so it sits above carousel slides (some carousels use transforms
      which create stacking contexts). We don't change overlay size. */}
        {/* <div className="absolute inset-0 bg-black/30 pointer-events-none z-40"></div> */}

        {/* Nội dung chữ và nút trên banner (đặt z-index cao hơn lớp phủ) */}
        <div className="absolute inset-0 z-50 flex items-center justify-center">
          <div className="max-w-[1270px] w-full px-4 md:px-10 text-center">
            <div className="mt-6 pointer-events-auto">
              <button className="bg-black text-white font-bold text-sm md:text-base px-6 md:px-8 py-2.5 md:py-3 rounded-full uppercase tracking-wide hover:bg-gray-900 transition-colors">
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
                alt="Chốn riêng cho mỗi chúng ta"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-12 space-y-6">
              <h2 className="text-3xl md:text-5xl font-medium leading-tight">
                Chốn riêng cho mỗi chúng ta
              </h2>
              <p className="text-base font-light leading-relaxed">
                M Village là không gian sống được xây dựng dựa trên ý tưởng:
                những cư dân hiện đại cùng chia sẻ không gian sống & làm việc,
                nghỉ ngơi trong những ngôi nhà tối giản đan xen giữa không gian
                cộng đồng, mang đến trải nghiệm khai phóng, kết nối và sáng tạo
                nhất.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-6 md:gap-12">
            <div className="w-full md:w-1/2">
              <img
                src="https://cdn.pixabay.com/photo/2021/08/27/01/33/bedroom-6577523_1280.jpg"
                alt="Cộng đồng thúc đẩy sự phát triển"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="w-full md:w-1/2 md:pr-12 space-y-6">
              <h2 className="text-3xl md:text-5xl font-medium leading-tight">
                Cộng đồng thúc đẩy sự phát triển
              </h2>
              <p className="text-base font-light leading-relaxed">
                M Village hướng đến xây dựng một cộng đồng cho những người trẻ
                cùng chung tư duy và hệ chí hướng phát triển. Một cộng đồng để
                cuộc sống của bạn không chỉ gói gọn trong một căn phòng. Không
                có phán xét, không có phiền nhiễu, chỉ có đó sự lắng đọng, chân
                thành và cảm hứng mỗi ngày khiến bạn hoàn toàn kết nối ở hiện
                tại, vào niềm đam mê bạn đang có, vào những cơ hội bạn khám phá
                ở trong chính bản thân mình. M Village, nơi chúng ta cùng thuộc
                về.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <div className="w-full md:w-1/2">
              <img
                src="https://cdn.pixabay.com/photo/2015/09/28/18/30/hotel-del-coronado-962458_1280.jpg"
                alt="Hành trình bắt đầu tại trung tâm thành phố"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-12 space-y-6">
              <h2 className="text-3xl md:text-5xl font-medium leading-tight">
                Hành trình bắt đầu tại trung tâm thành phố
              </h2>
              <p className="text-base font-light leading-relaxed">
                M Village được sáng lập bởi đội ngũ trẻ và nhiệt huyết. Bắt đầu
                hành trình với không gian đầu tiên tại một con hẻm yên bình tại
                trung tâm thành phố Hồ Chí Minh. Nơi đây đã chào đón hàng trăm
                cư dân thành thị là những công dân cấp tiến trẻ sống tại Sài
                Gòn, và chúng tôi sẽ tiếp tục hành trình xây dựng cộng đồng rộng
                khắp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-12 md:py-16 px-4 md:px-12 bg-white">
        <div className="max-w-[1440px] mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 mb-6">
            <Logo className="mb-4 md:mb-0" />
            <h2 className="text-3xl md:text-[41px] font-medium text-grey-7 text-center md:text-left w-full md:w-[324px]">
              Điểm đến
            </h2>

            {/* City Tabs */}
            <div className="flex-1 w-full">
              <div className="flex justify-center items-center mb-4">
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
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="w-full md:w-[324px] space-y-6">
              <div className="border border-orange-54 rounded-lg p-6 text-center">
                <h3 className="text-lg font-medium text-grey-7">
                  Các vị trí khách sạn
                </h3>
              </div>

              {/* <div className="space-y-3">
                <BrandCard
                  logo={<SignatureLogo />}
                  description="Bộ sưu tập Không gian nghỉ dưỡng tại các vị trí đắc địa bậc nhất, đặc trưng bởi câu chuyện bản địa trong từng thiết kế."
                />
                <BrandCard
                  logo={<HotelLogo />}
                  description="Bộ sưu tập Khách sạn Thế hệ mới với thiết kế 'be spoke' và các tiện ích tự do như cafe, co-working, bếp chung cho bạn tối đa trải nghiệm."
                />
                <BrandCard
                  logo={<LivingLogo />}
                  description="Không gian sống đặc trưng bởi mảng xanh, cà phê và không gian cộng đồng để bạn dễ dàng kết nối với bản thân và mọi người."
                />
                <BrandCard
                  logo={<ExpressLogo />}
                  description="Lựa chọn khách sạn tiện nghi tại các vị trí trung tâm để bạn dễ dàng hoà mình vào nhịp sống thành phố."
                />
              </div>

              <button className="w-full md:w-auto mx-auto md:mx-0 block px-8 py-3 border border-grey-25 rounded-full text-sm font-medium text-grey-25 hover:bg-grey-25 hover:text-white transition-colors">
                Xem tất cả
              </button> */}
            </div>

            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {propertiesByCity[selectedCity].map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>

              <div className="flex justify-center items-center gap-2 mt-8">
                <button className="w-9 h-9 rounded-full border border-grey-91 flex items-center justify-center opacity-50">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path
                      opacity="0.6"
                      d="M13.691 27.0968C21.2523 27.0968 27.382 21.031 27.382 13.5484C27.382 6.06582 21.2523 0 13.691 0C6.12967 0 0 6.06582 0 13.5484C0 21.031 6.12967 27.0968 13.691 27.0968Z"
                      fill="white"
                    />
                    <path
                      d="M15.4066 18.9676C15.2897 18.968 15.1742 18.9446 15.0686 18.8992C14.963 18.8537 14.8699 18.7874 14.7963 18.7052L11.0169 14.4474C10.9018 14.3204 10.8389 14.1612 10.8389 13.9968C10.8389 13.8325 10.9018 13.6732 11.0169 13.5463L14.9293 9.28858C15.0621 9.1437 15.2529 9.05257 15.4599 9.03522C15.6668 9.01794 15.8728 9.07587 16.0326 9.19636C16.1924 9.31676 16.2929 9.48991 16.312 9.67751C16.331 9.86511 16.2672 10.052 16.1343 10.1969L12.6366 14.0004L16.017 17.8039C16.1126 17.9081 16.1734 18.0349 16.1921 18.1695C16.2108 18.3039 16.1866 18.4405 16.1224 18.5629C16.0582 18.6853 15.9566 18.7885 15.8298 18.8602C15.7029 18.932 15.5561 18.9693 15.4066 18.9676Z"
                      fill="#131313"
                    />
                  </svg>
                </button>

                <button className="w-9 h-9 rounded-full border border-grey-91 bg-white flex items-center justify-center">
                  <span className="text-sm font-semibold text-grey-7">1</span>
                </button>
                <button className="w-9 h-9 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-grey-7">2</span>
                </button>
                <button className="w-9 h-9 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-grey-7">3</span>
                </button>
                <div className="w-9 h-9 flex items-center justify-center">
                  <span className="text-sm text-grey-77">...</span>
                </div>
                <button className="w-9 h-9 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-grey-7">7</span>
                </button>

                <button className="w-9 h-9 rounded-full border border-grey-91 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path
                      opacity="0.6"
                      d="M13.691 27.0968C21.2523 27.0968 27.382 21.031 27.382 13.5484C27.382 6.06582 21.2523 0 13.691 0C6.12967 0 0 6.06582 0 13.5484C0 21.031 6.12967 27.0968 13.691 27.0968Z"
                      fill="white"
                    />
                    <path
                      d="M12.6503 9.03228C12.7673 9.03187 12.8828 9.05531 12.9884 9.10074C13.094 9.14617 13.187 9.21247 13.2607 9.29475L17.0401 13.5525C17.1551 13.6795 17.2181 13.8387 17.2181 14.0031C17.2181 14.1674 17.1551 14.3267 17.0401 14.4536L13.1277 18.7113C12.9949 18.8562 12.804 18.9473 12.5971 18.9647C12.3902 18.9819 12.1842 18.924 12.0244 18.8036C11.8646 18.6832 11.7641 18.51 11.745 18.3224C11.7259 18.1348 11.7898 17.9479 11.9227 17.8031L15.4203 13.9995L12.04 10.196C11.9443 10.0919 11.8836 9.96504 11.8649 9.83046C11.8462 9.69597 11.8704 9.5594 11.9346 9.43701C11.9988 9.31463 12.1003 9.21139 12.2271 9.13967C12.3541 9.06796 12.5009 9.03065 12.6503 9.03228Z"
                      fill="#131313"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://acihome.com.vn/uploads/15/thiet-ke-khach-san-thap-tang-voi-phong-cach-nghi-duong-5-sao-3.jpg')",
        }}
      >
        {/* <div className="absolute inset-0 bg-black/30 pointer-events-none z-40"></div> */}
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative z-10 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-medium text-white">
            Bạn đang cần một nơi thư giãn thoải mái, hiện đại?
          </h2>
          <button className="px-6 py-2 border border-white text-white rounded-full text-base font-medium hover:bg-green-400 transition-colors">
            Liên hệ ngay
          </button>
        </div>
      </section>
    </div>
  );
}

function PropertyCard({ property }: { property: any }) {
  return (
    <div className="border border-[#F0EEED] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-44">
        <img
          src={property.image}
          alt={`${property.name} ${property.location}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          {property.brand === "express" && (
            <img src={property.logo} alt="Express" className="h-7" />
          )}
          {property.brand === "hotel" && <HotelLogoWhite />}
          {property.brand === "signature" && <SignatureLogoWhite />}
        </div>
      </div>
      <div className="p-4 space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-grey-7 leading-tight">
            {property.name}
          </h3>
          <h4 className="text-lg font-semibold text-grey-7">
            {property.location}
          </h4>
        </div>
        <button className="flex items-center gap-1 text-orange-54 font-medium hover:gap-2 transition-all">
          <span>Đặt ngay</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M4 12L12 4"
              stroke="#FF9C00"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.5 4H12V10.5"
              stroke="#FF9C00"
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

function BrandCard({
  logo,
  description,
}: {
  logo: React.ReactNode;
  description: string;
}) {
  return (
    <div className="border border-grey-91 rounded-lg p-6 space-y-3">
      <div className="flex justify-center h-9">{logo}</div>
      <p className="text-sm text-grey-27 leading-relaxed">{description}</p>
    </div>
  );
}

function SignatureLogo() {
  return (
    <svg
      width="150"
      height="33"
      viewBox="0 0 150 33"
      fill="none"
      className="h-9 w-auto"
    >
      <path
        d="M5.89055 21.3269C4.26862 21.3269 2.93482 20.9353 1.89032 20.1523C0.845823 19.3692 0.216103 18.2631 0 16.8363H2.67341C2.84768 17.5044 3.21599 18.0284 3.78064 18.4072C4.3453 18.7871 5.04822 18.9765 5.89055 18.9765C6.93505 18.9765 7.71233 18.7882 8.2247 18.4118C8.73591 18.0365 8.99268 17.5102 8.99268 16.8352C8.99268 16.3972 8.83351 16.0347 8.51749 15.7489C8.2003 15.463 7.79714 15.2458 7.30568 15.0959C6.81422 14.9472 6.27048 14.8101 5.67097 14.6893C5.07262 14.5673 4.46962 14.4151 3.8643 14.2303C3.25897 14.0456 2.71058 13.8109 2.22029 13.5251C1.72883 13.2393 1.32683 12.8152 1.01429 12.2517C0.701754 11.687 0.544905 11.0085 0.544905 10.215C0.544905 8.89281 1.02823 7.84831 1.99605 7.08266C2.96387 6.317 4.26165 5.93359 5.89172 5.93359C7.52178 5.93359 8.77425 6.29377 9.71419 7.01411C10.6541 7.73445 11.2316 8.72899 11.4477 9.9954H8.77425C8.43267 8.85331 7.47182 8.28284 5.89172 8.28284C5.02149 8.28284 4.35808 8.46293 3.90264 8.82078C3.44603 9.17979 3.21831 9.64453 3.21831 10.215C3.21831 10.8412 3.5111 11.3257 4.0955 11.6673C4.67991 12.0077 5.39212 12.268 6.23097 12.4457C7.06983 12.6223 7.911 12.8338 8.75334 13.0778C9.59568 13.3218 10.309 13.754 10.8946 14.3732C11.479 14.9925 11.7718 15.8139 11.7718 16.8375C11.7718 18.119 11.2443 19.1868 10.1894 20.0442C9.13442 20.9005 7.70187 21.328 5.89172 21.328L5.89055 21.3269Z"
        fill="#231F20"
      />
      <path d="M18.3965 21.1177V0H21.0699V21.1177H18.3965Z" fill="#231F20" />
      <path
        d="M34.8611 21.3269C32.7372 21.3269 31.0479 20.6623 29.7908 19.332C28.5336 18.0028 27.9062 16.1032 27.9062 13.6355C27.9062 11.1677 28.5348 9.26693 29.7908 7.93313C31.0467 6.60049 32.7372 5.93359 34.8611 5.93359C36.5178 5.93359 37.8726 6.33908 38.9229 7.15005C39.9743 7.96101 40.7226 9.088 41.1675 10.5287H38.3896C37.7076 9.03107 36.5306 8.28284 34.8599 8.28284C33.5505 8.28284 32.5106 8.74294 31.7369 9.66195C30.9642 10.581 30.5773 11.9032 30.5773 13.6297C30.5773 15.3562 30.9619 16.6795 31.731 17.5985C32.5002 18.5164 33.5424 18.9765 34.8587 18.9765C36.0287 18.9765 36.9512 18.6268 37.6262 17.9273C38.3013 17.2279 38.6986 16.4007 38.8171 15.4468H34.6403V13.2021H41.4905V14.2571C41.4905 16.4076 40.8992 18.1237 39.7152 19.4052C38.5313 20.6855 36.9129 21.3257 34.8587 21.3257L34.8611 21.3269Z"
        fill="#231F20"
      />
      <path
        d="M48.3281 21.1176V6.14258H51.8578L58.27 17.3788H58.3746V6.14258H61.048V21.1176H57.5183L51.1061 9.89185H51.0015V21.1176H48.3281Z"
        fill="#231F20"
      />
      <path
        d="M66.8176 21.1176L72.2689 6.14258H75.579L81.0409 21.1176H78.2524L77.1034 17.9109H70.7539L69.5944 21.1176H66.8164H66.8176ZM71.58 15.5628H76.2692L73.9815 9.14014H73.8769L71.58 15.5628Z"
        fill="#231F20"
      />
      <path
        d="M96.0127 6.14258H84.1387V8.50345H88.7338L88.7384 32.9858H91.4118V8.50345H96.0127V6.14258Z"
        fill="#231F20"
      />
      <path
        d="M108.299 21.3267C106.407 21.3267 104.916 20.7586 103.831 19.62C102.744 18.4814 102.201 16.8722 102.201 14.7902V6.14258H104.874V14.7902C104.874 16.1124 105.185 17.1418 105.808 17.8761C106.431 18.6103 107.262 18.9775 108.298 18.9775C109.334 18.9775 110.148 18.6103 110.779 17.8761C111.408 17.1418 111.723 16.1124 111.723 14.7902V6.14258H114.397V14.7902C114.397 16.8571 113.849 18.4639 112.756 19.6095C111.663 20.7551 110.176 21.3267 108.297 21.3267H108.299Z"
        fill="#231F20"
      />
      <path
        d="M121.776 21.1176V6.14258H127.979C129.434 6.14258 130.618 6.5713 131.53 7.42758C132.442 8.28386 132.899 9.42595 132.899 10.8527C132.899 11.5777 132.78 12.2318 132.543 12.8162C132.306 13.4006 131.991 13.8654 131.599 14.2093C131.205 14.5543 130.827 14.8227 130.466 15.0133C130.103 15.205 129.738 15.349 129.369 15.4466L133.327 21.1176H130.33L126.476 15.5617H124.45V21.1176H121.776ZM124.45 13.2019H127.781C128.519 13.2019 129.111 12.9951 129.556 12.5804C130.002 12.1656 130.224 11.5881 130.224 10.8469C130.224 10.1056 130.003 9.52936 129.561 9.11806C129.119 8.70793 128.519 8.50229 127.76 8.50229H124.45V13.2019Z"
        fill="#231F20"
      />
      <path
        d="M139.954 21.1176V6.14258H149.791V8.50345H142.627V12.4607H149.363V14.7065H142.627V18.7683H150V21.1188H139.954V21.1176Z"
        fill="#231F20"
      />
      <path
        d="M96.5143 28.7463C96.6839 28.9102 96.7687 29.1216 96.7687 29.3807C96.7687 29.7339 96.6514 30.0104 96.4167 30.2091C96.182 30.4078 95.8532 30.5065 95.4303 30.5065H93.5771V26.626H95.3745C95.7428 26.626 96.0391 26.712 96.2657 26.8851C96.4922 27.0582 96.6049 27.2998 96.6049 27.6089C96.6049 27.8378 96.5329 28.0272 96.3888 28.1747C96.2447 28.3223 96.06 28.4141 95.8335 28.4512C96.1181 28.4838 96.3447 28.5825 96.5143 28.7463ZM94.3265 27.2441V28.2282H95.256C95.4489 28.2282 95.5976 28.1852 95.701 28.0992C95.8044 28.0132 95.8567 27.8889 95.8567 27.7251C95.8567 27.5613 95.8044 27.4486 95.701 27.3672C95.5976 27.2847 95.4489 27.2441 95.256 27.2441H94.3265ZM95.8311 29.7386C95.9496 29.6456 96.0089 29.5085 96.0089 29.3261C96.0089 29.1437 95.9485 29.0078 95.8253 28.916C95.7033 28.8253 95.5349 28.7789 95.3199 28.7789H94.3254V29.8768H95.3362C95.5476 29.8768 95.7126 29.8303 95.83 29.7374L95.8311 29.7386Z"
        fill="#231F20"
      />
      <path
        d="M98.6276 26.6271L99.5675 28.3432L100.518 26.6271H101.31L99.9335 28.9985V30.5065H99.1853V28.9868L97.8306 26.626H98.6288L98.6276 26.6271Z"
        fill="#231F20"
      />
      <path
        d="M115.056 23.7564H116.104V23.4346H113.738L110.205 31.0935H109.978L106.958 23.452L106.95 23.4346H104.17V23.7564H105.192L105.432 23.9981V32.4191L105.192 32.6608H104.17V32.9826H107.065V32.6608H106.042L105.802 32.4191V25.2935H106.065L109.105 32.9826H109.66L113.203 25.4318H113.468V32.4191L113.229 32.6608H112.18V32.9826H116.104V32.6608H115.056L114.817 32.4191V23.9981L115.056 23.7564Z"
        fill="#F16A24"
      />
      <path d="M150 23.4346H117.264V32.9861H150V23.4346Z" fill="#F16A24" />
      <path
        d="M123.485 25.5664L121.852 30H121.822L120.191 25.5664H119.42L121.429 30.9074H122.201L124.21 25.5664H123.485Z"
        fill="white"
      />
      <path d="M125.472 25.5664H124.784V30.854H125.472V25.5664Z" fill="white" />
      <path
        d="M129.43 30.854V30.2196H126.975V25.5664H126.287V30.854H129.43Z"
        fill="white"
      />
      <path
        d="M133.267 30.854V30.2196H130.812V25.5664H130.125V30.854H133.267Z"
        fill="white"
      />
      <path
        d="M134.605 30.8537L135.156 29.3352H137.363L137.915 30.8537H138.663L136.653 25.5127H135.883L133.873 30.8537H134.606H134.605ZM135.383 28.7078L136.252 26.3051H136.282L137.158 28.7078H135.383Z"
        fill="white"
      />
      <path
        d="M138.655 28.2094C138.655 29.8488 139.75 30.9665 141.246 30.9665C142.741 30.9665 143.58 29.9243 143.625 28.3674V28.1176H141.276V28.752H142.877C142.801 29.6129 142.28 30.3158 141.246 30.3158C140.12 30.3158 139.365 29.4317 139.365 28.2082C139.365 26.9848 140.135 26.1006 141.239 26.1006C142.047 26.1006 142.576 26.6072 142.772 27.1579L143.437 26.9163C143.081 25.9868 142.274 25.4512 141.224 25.4512C139.759 25.4512 138.655 26.5689 138.655 28.2082V28.2094Z"
        fill="white"
      />
      <path
        d="M147.78 30.854V30.2196H145.015V28.4966H147.78V27.8622H145.015V26.2008H147.78V25.5664H144.328V30.854H147.78Z"
        fill="white"
      />
    </svg>
  );
}

function HotelLogo() {
  return (
    <svg
      width="150"
      height="36"
      viewBox="0 0 150 36"
      fill="none"
      className="h-9 w-auto"
    >
      <path
        d="M57.6077 -5.36337H63.1555V-7.05078H50.632L31.9351 33.1145H30.738L14.7553 -6.95845L14.7108 -7.05078H0V-5.36337H5.41087L6.67802 -4.09621V40.0647L5.41087 41.3334H0V43.0193H15.3204V41.3334H9.9064L8.63765 40.0647V2.69642H10.0258L26.1151 43.0193H29.049L47.8016 3.42233H49.2025V40.0647L47.9337 41.3334H42.3875V43.0193H63.1555V41.3334H57.6077L56.3405 40.0647V-4.09621L57.6077 -5.36337Z"
        fill="#231F20"
      />
      <path
        d="M63.1553 -7.05078V43.0193H76.1929V-7.05078H63.1553Z"
        fill="#F16A24"
      />
      <path
        d="M101.592 27.5333L101.493 35.1314L101.592 42.5529C101.592 42.7009 101.522 42.7741 101.382 42.7741H99.6703C99.5223 42.7741 99.449 42.7009 99.449 42.5529L99.527 35.496V35.2524H91.2762V35.496L91.3654 42.5529C91.3654 42.7009 91.2953 42.7741 91.1552 42.7741H89.4439C89.2959 42.7741 89.2227 42.7009 89.2227 42.5529L89.3214 35.1314L89.2227 27.5333C89.2227 27.3868 89.2959 27.312 89.4439 27.312H91.1552C91.2953 27.312 91.3654 27.3852 91.3654 27.5333L91.2874 33.6955H99.5159L99.449 27.5333C99.449 27.3868 99.5223 27.312 99.6703 27.312H101.382C101.522 27.312 101.592 27.3852 101.592 27.5333Z"
        fill="#231F20"
      />
      <path
        d="M110.449 43.0513C108.969 43.0513 107.678 42.7201 106.573 42.0579C105.468 41.3957 104.608 40.466 103.994 39.2689C103.38 38.0718 103.072 36.6677 103.072 35.0552C103.072 33.4426 103.378 31.9907 103.989 30.7857C104.6 29.5822 105.46 28.6557 106.568 28.0078C107.676 27.3599 108.973 27.0352 110.462 27.0352C111.95 27.0352 113.246 27.3599 114.356 28.0078C115.464 28.6557 116.325 29.5806 116.941 30.7793C117.555 31.9796 117.863 33.4075 117.863 35.0647C117.863 36.7219 117.555 38.0814 116.941 39.2785C116.326 40.4756 115.462 41.4021 114.351 42.0611C113.24 42.7202 111.939 43.0497 110.452 43.0497L110.449 43.0513ZM110.46 41.4387C111.557 41.4387 112.498 41.1824 113.283 40.6714C114.068 40.1604 114.671 39.4281 115.094 38.4793C115.518 37.529 115.729 36.3923 115.729 35.0663C115.729 33.7402 115.519 32.5973 115.101 31.6373C114.68 30.6758 114.077 29.9388 113.289 29.423C112.501 28.9072 111.556 28.6493 110.451 28.6493C109.346 28.6493 108.413 28.9056 107.628 29.4166C106.843 29.9292 106.243 30.6647 105.828 31.6262C105.412 32.5877 105.204 33.7339 105.204 35.0663C105.204 36.3987 105.416 37.5194 105.839 38.473C106.262 39.4265 106.866 40.1588 107.651 40.6714C108.435 41.184 109.371 41.4387 110.462 41.4387H110.46Z"
        fill="#231F20"
      />
      <path
        d="M123.703 42.7757H121.947C121.799 42.7757 121.726 42.7025 121.726 42.5545L121.847 35.1219L121.748 28.8928H117.496C117.348 28.8928 117.275 28.8195 117.275 28.6715V27.5333C117.275 27.3868 117.348 27.312 117.496 27.312H128.154C128.294 27.312 128.364 27.3852 128.364 27.5333V28.6715C128.364 28.8195 128.294 28.8928 128.154 28.8928H123.891L123.792 35.1219L123.913 42.5545C123.921 42.7025 123.851 42.7757 123.703 42.7757Z"
        fill="#231F20"
      />
      <path
        d="M139.132 42.7761H129.633C129.485 42.7761 129.412 42.7029 129.412 42.5548L129.51 34.7688L129.412 27.5352C129.412 27.3888 129.485 27.314 129.633 27.314H138.955C139.095 27.314 139.165 27.3872 139.165 27.5352V28.6623C139.165 28.8104 139.095 28.8836 138.955 28.8836H131.545L131.456 33.7437H138.425C138.565 33.7437 138.635 33.8169 138.635 33.9649V35.0808C138.635 35.2289 138.565 35.3021 138.425 35.3021H131.456L131.545 41.2113H139.132C139.272 41.2113 139.342 41.2845 139.342 41.4325V42.5596C139.342 42.7076 139.272 42.7809 139.132 42.7809V42.7761Z"
        fill="#231F20"
      />
      <path
        d="M149.779 42.7757H141.053C140.921 42.7757 140.854 42.7025 140.854 42.5545L140.953 34.6459L140.854 27.5333C140.854 27.3868 140.921 27.312 141.053 27.312H142.765C142.911 27.312 142.986 27.3852 142.986 27.5333L142.887 34.5583L142.986 41.2077H149.779C149.925 41.2077 150 41.2809 150 41.429V42.556C150 42.7041 149.927 42.7773 149.779 42.7773V42.7757Z"
        fill="#231F20"
      />
    </svg>
  );
}

function LivingLogo() {
  return (
    <svg
      width="150"
      height="36"
      viewBox="0 0 150 36"
      fill="none"
      className="h-9 w-auto"
    >
      <path
        d="M57.0381 -5.27361H62.531V-6.94434H50.1313L31.6193 32.8238H30.4341L14.6094 -6.85292L14.5653 -6.94434H0V-5.27361H5.35737L6.61199 -4.01898V39.7053L5.35737 40.9615H0V42.6306H15.169V40.9615H9.80844L8.55224 39.7053V2.70649H9.92666L25.8569 42.6306H28.7618L47.3289 3.42522H48.716V39.7053L47.4598 40.9615H41.9684V42.6306H62.531V40.9615H57.0381L55.7835 39.7053V-4.01898L57.0381 -5.27361Z"
        fill="#231F20"
      />
      <path
        d="M62.5308 -6.94434V42.6306H75.4395V-6.94434H62.5308Z"
        fill="#F16A24"
      />
      <path
        d="M97.5171 42.6655H88.6891C88.5551 42.6655 88.4873 42.5914 88.4873 42.4417L88.5882 34.4411L88.4873 27.2443C88.4873 27.0962 88.5551 27.0205 88.6891 27.0205H90.4213C90.5694 27.0205 90.6451 27.0946 90.6451 27.2443L90.5442 34.3512L90.6451 41.0783H97.5171C97.6653 41.0783 97.7409 41.1524 97.7409 41.3021V42.4417C97.7409 42.5914 97.6669 42.6655 97.5171 42.6655Z"
        fill="#231F20"
      />
      <path
        d="M100.991 42.6655H99.2696C99.1357 42.6655 99.0679 42.5914 99.0679 42.4417L99.1687 34.687L99.0679 27.2443C99.0679 27.0962 99.1357 27.0205 99.2696 27.0205H100.991C101.139 27.0205 101.215 27.0946 101.215 27.2443L101.103 34.687L101.215 42.4417C101.215 42.5914 101.141 42.6655 100.991 42.6655Z"
        fill="#231F20"
      />
      <path
        d="M107.797 42.4858L102.477 27.2774C102.41 27.1056 102.466 27.0205 102.645 27.0205H104.522C104.648 27.0205 104.727 27.0804 104.757 27.1986L109.304 41.0215L113.818 27.1986C113.848 27.0788 113.925 27.0205 114.053 27.0205H115.662C115.848 27.0205 115.908 27.1056 115.84 27.2774L110.577 42.4858C110.547 42.6056 110.469 42.6639 110.342 42.6639H108.029C107.909 42.6639 107.832 42.604 107.794 42.4858H107.797Z"
        fill="#231F20"
      />
      <path
        d="M119.049 42.6655H117.328C117.194 42.6655 117.126 42.5914 117.126 42.4417L117.227 34.687L117.126 27.2443C117.126 27.0962 117.194 27.0205 117.328 27.0205H119.049C119.197 27.0205 119.273 27.0946 119.273 27.2443L119.161 34.687L119.273 42.4417C119.273 42.5914 119.199 42.6655 119.049 42.6655Z"
        fill="#231F20"
      />
      <path
        d="M123.361 42.6655H121.785C121.636 42.6655 121.562 42.5914 121.562 42.4417L121.651 34.709L121.573 27.2443C121.573 27.0962 121.647 27.0205 121.796 27.0205H123.852C123.971 27.0205 124.057 27.0694 124.109 27.1655L132.287 39.893L132.232 34.0596L132.21 27.2443C132.21 27.0962 132.284 27.0205 132.434 27.0205H134.01C134.152 27.0205 134.223 27.0946 134.223 27.2443L134.133 34.709L134.212 42.4417C134.212 42.5914 134.141 42.6655 133.999 42.6655H131.821C131.701 42.6655 131.613 42.6166 131.553 42.5205L123.486 29.949L123.554 35.7367L123.576 42.4417C123.576 42.5914 123.505 42.6655 123.363 42.6655H123.361Z"
        fill="#231F20"
      />
      <path
        d="M143.084 42.9445C141.683 42.9445 140.442 42.6119 139.362 41.9452C138.283 41.2785 137.436 40.336 136.826 39.1176C136.215 37.8992 135.911 36.4712 135.911 34.832C135.911 33.1928 136.216 31.7443 136.826 30.5307C137.438 29.317 138.276 28.3824 139.347 27.7267C140.415 27.071 141.646 26.7432 143.04 26.7432C144.791 26.7432 146.231 27.1735 147.365 28.034C148.496 28.8946 149.253 30.1398 149.633 31.7711C149.671 31.9272 149.603 32.006 149.431 32.006H147.732C147.598 32.006 147.516 31.9429 147.486 31.8152C147.232 30.6678 146.722 29.8041 145.956 29.2225C145.188 28.6409 144.22 28.3508 143.051 28.3508C142.045 28.3508 141.17 28.6093 140.425 29.1279C139.679 29.6465 139.101 30.3904 138.688 31.3629C138.275 32.3354 138.068 33.5033 138.068 34.8651C138.068 36.2269 138.281 37.3476 138.705 38.3122C139.129 39.2768 139.722 40.0223 140.482 40.5472C141.241 41.072 142.127 41.3353 143.14 41.3353C144.154 41.3353 144.994 41.1225 145.683 40.6985C146.372 40.2745 146.895 39.6708 147.253 38.8891C147.61 38.1073 147.796 37.1836 147.811 36.1182H143.14C142.991 36.1182 142.917 36.0441 142.917 35.8944V34.7989C142.917 34.6508 142.991 34.5751 143.14 34.5751H149.789C149.931 34.5751 150.002 34.6602 150.002 34.832C150.016 36.5831 149.759 38.0631 149.231 39.2736C148.701 40.4841 147.921 41.3983 146.89 42.0162C145.858 42.634 144.591 42.9429 143.085 42.9429L143.084 42.9445Z"
        fill="#231F20"
      />
    </svg>
  );
}

function ExpressLogo() {
  return (
    <img
      src="https://api.builder.io/api/v1/image/assets/TEMP/b4b7125c13fc19fb88964afc4b1ea8286b42f207?width=300"
      alt="Express"
      className="h-9 w-auto"
    />
  );
}

function HotelLogoWhite() {
  return (
    <svg
      width="92"
      height="31"
      viewBox="0 0 92 31"
      fill="none"
      className="h-7 w-auto"
    >
      <path
        d="M35.3327 0.670201H38.7354V-0.364746H31.0543L19.5869 24.2699H18.8526L9.04993 -0.308117L9.02259 -0.364746H0V0.670201H3.31867L4.09585 1.44739V28.5327L3.31867 29.3109H0V30.3449H9.39654V29.3109H6.07592L5.29776 28.5327V5.61354H6.14915L16.0173 30.3449H17.8167L29.3183 6.05876H30.1775V28.5327L29.3993 29.3109H25.9977V30.3449H38.7354V29.3109H35.3327L34.5555 28.5327V1.44739L35.3327 0.670201Z"
        fill="white"
      />
      <path
        d="M38.7354 -0.364746V30.3449H46.7318V-0.364746H38.7354Z"
        fill="white"
      />
      <path
        d="M62.3095 20.8467L62.249 25.5068L62.3095 30.0587C62.3095 30.1495 62.2665 30.1944 62.1806 30.1944H61.131C61.0402 30.1944 60.9953 30.1495 60.9953 30.0587L61.0432 25.7304V25.581H55.9827V25.7304L56.0373 30.0587C56.0373 30.1495 55.9944 30.1944 55.9085 30.1944H54.8589C54.7681 30.1944 54.7231 30.1495 54.7231 30.0587L54.7837 25.5068L54.7231 20.8467C54.7231 20.7568 54.7681 20.7109 54.8589 20.7109H55.9085C55.9944 20.7109 56.0373 20.7559 56.0373 20.8467L55.9895 24.6262H61.0363L60.9953 20.8467C60.9953 20.7568 61.0402 20.7109 61.131 20.7109H62.1806C62.2665 20.7109 62.3095 20.7559 62.3095 20.8467Z"
        fill="white"
      />
      <path
        d="M67.7418 30.3642C66.8337 30.3642 66.0419 30.1611 65.3643 29.755C64.6867 29.3488 64.1595 28.7786 63.7826 28.0444C63.4057 27.3102 63.2173 26.449 63.2173 25.4599C63.2173 24.4709 63.4047 23.5804 63.7797 22.8413C64.1546 22.1032 64.6818 21.535 65.3614 21.1376C66.0409 20.7402 66.8367 20.541 67.7496 20.541C68.6625 20.541 69.4572 20.7402 70.1378 21.1376C70.8173 21.535 71.3455 22.1022 71.7234 22.8374C72.1003 23.5736 72.2887 24.4494 72.2887 25.4658C72.2887 26.4822 72.1003 27.316 71.7234 28.0502C71.3465 28.7845 70.8163 29.3527 70.1348 29.7569C69.4533 30.1611 68.6556 30.3633 67.7437 30.3633L67.7418 30.3642ZM67.7486 29.3752C68.4213 29.3752 68.9983 29.218 69.4797 28.9046C69.961 28.5912 70.3311 28.142 70.5908 27.5601C70.8505 26.9772 70.9804 26.2801 70.9804 25.4668C70.9804 24.6535 70.8515 23.9524 70.5947 23.3637C70.3369 22.774 69.9669 22.3219 69.4836 22.0056C69.0003 21.6892 68.4203 21.5311 67.7427 21.5311C67.0651 21.5311 66.493 21.6882 66.0116 22.0017C65.5303 22.316 65.1622 22.7671 64.9074 23.3569C64.6525 23.9466 64.5246 24.6496 64.5246 25.4668C64.5246 26.284 64.6545 26.9714 64.9142 27.5562C65.1739 28.141 65.544 28.5902 66.0253 28.9046C66.5067 29.219 67.0808 29.3752 67.7496 29.3752H67.7486Z"
        fill="white"
      />
      <path
        d="M75.8713 30.1954H74.7943C74.7035 30.1954 74.6586 30.1504 74.6586 30.0596L74.7328 25.501L74.6723 21.6805H72.0644C71.9736 21.6805 71.9287 21.6356 71.9287 21.5448V20.8467C71.9287 20.7568 71.9736 20.7109 72.0644 20.7109H78.6012C78.6871 20.7109 78.7301 20.7559 78.7301 20.8467V21.5448C78.7301 21.6356 78.6871 21.6805 78.6012 21.6805H75.9865L75.926 25.501L76.0002 30.0596C76.005 30.1504 75.9621 30.1954 75.8713 30.1954Z"
        fill="white"
      />
      <path
        d="M85.3342 30.1954H79.5083C79.4175 30.1954 79.3726 30.1504 79.3726 30.0596L79.4331 25.2842L79.3726 20.8476C79.3726 20.7578 79.4175 20.7119 79.5083 20.7119H85.2259C85.3118 20.7119 85.3548 20.7568 85.3548 20.8476V21.5389C85.3548 21.6297 85.3118 21.6746 85.2259 21.6746H80.6809L80.6262 24.6555H84.9007C84.9867 24.6555 85.0296 24.7004 85.0296 24.7912V25.4756C85.0296 25.5664 84.9867 25.6113 84.9007 25.6113H80.6262L80.6809 29.2356H85.3342C85.4202 29.2356 85.4631 29.2805 85.4631 29.3713V30.0626C85.4631 30.1534 85.4202 30.1983 85.3342 30.1983V30.1954Z"
        fill="white"
      />
      <path
        d="M91.8641 30.1954H86.5127C86.4316 30.1954 86.3906 30.1504 86.3906 30.0596L86.4512 25.2091L86.3906 20.8467C86.3906 20.7568 86.4316 20.7109 86.5127 20.7109H87.5623C87.6521 20.7109 87.698 20.7559 87.698 20.8467L87.6374 25.1554L87.698 29.2336H91.8641C91.954 29.2336 91.9998 29.2785 91.9998 29.3693V30.0606C91.9998 30.1514 91.9549 30.1963 91.8641 30.1963V30.1954Z"
        fill="white"
      />
    </svg>
  );
}

function SignatureLogoWhite() {
  return (
    <svg
      width="92"
      height="21"
      viewBox="0 0 92 21"
      fill="none"
      className="h-7 w-auto"
    >
      <path
        d="M5.36729 8.02044C4.85066 7.87151 4.33474 7.74181 3.82024 7.63279C3.30574 7.52376 2.86892 7.36485 2.51048 7.15534C2.15205 6.94655 1.97247 6.6494 1.97247 6.2646C1.97247 5.91471 2.11214 5.62967 2.39219 5.40948C2.67153 5.19 3.07842 5.07955 3.61216 5.07955C4.58129 5.07955 5.17061 5.43014 5.38012 6.12992H7.01981C6.88726 5.35247 6.5331 4.7432 5.95661 4.30139C5.38012 3.85958 4.5984 3.63867 3.61216 3.63867C2.62592 3.63867 1.81641 3.87383 1.22282 4.34343C0.629224 4.81303 0.332783 5.45366 0.332783 6.2646C0.332783 6.7513 0.428984 7.16746 0.620673 7.51378C0.813075 7.8601 1.05963 8.1202 1.36035 8.29479C1.66107 8.47009 1.99741 8.61403 2.36868 8.72734C2.73994 8.84064 3.10978 8.9347 3.47677 9.00881C3.84376 9.08364 4.17796 9.16701 4.47939 9.25822C4.78082 9.35015 5.02809 9.4834 5.22263 9.6587C5.41646 9.834 5.51409 10.0556 5.51409 10.325C5.51409 10.739 5.35731 11.0618 5.04306 11.292C4.72951 11.5229 4.25207 11.6383 3.61145 11.6383C3.09481 11.6383 2.66369 11.5221 2.31737 11.2891C1.97176 11.0568 1.74515 10.7354 1.63826 10.3257H0C0.132543 11.2008 0.518772 11.8792 1.1594 12.3594C1.80002 12.8397 2.61737 13.0799 3.61287 13.0799C4.7231 13.0799 5.60174 12.8177 6.24877 12.2925C6.89581 11.7673 7.21933 11.1117 7.21933 10.3257C7.21933 9.69789 7.03976 9.19409 6.68132 8.81427C6.32288 8.43446 5.88464 8.16937 5.368 8.01973L5.36729 8.02044Z"
        fill="white"
      />
      <path d="M12.9229 0H11.2832V12.9522H12.9229V0Z" fill="white" />
      <path
        d="M21.2469 9.47489H23.8087C23.736 10.0599 23.4923 10.5673 23.0783 10.9963C22.6643 11.4253 22.0985 11.6398 21.3809 11.6398C20.5735 11.6398 19.9343 11.3576 19.4626 10.7946C18.9908 10.231 18.755 9.42002 18.755 8.36039C18.755 7.30075 18.9923 6.49053 19.4661 5.92686C19.94 5.3632 20.5785 5.08101 21.3816 5.08101C22.4063 5.08101 23.1282 5.53992 23.5465 6.45846H25.2503C24.9774 5.57484 24.5177 4.88362 23.8736 4.38623C23.2287 3.88883 22.3985 3.64014 21.3823 3.64014C20.0797 3.64014 19.0436 4.04917 18.2725 4.86652C17.5015 5.68458 17.1167 6.85039 17.1167 8.36395C17.1167 9.87751 17.5022 11.0426 18.2725 11.8578C19.0429 12.6737 20.0797 13.0814 21.3823 13.0814C22.6849 13.0814 23.6348 12.6887 24.361 11.9034C25.0871 11.1174 25.4498 10.0649 25.4498 8.7459V8.09886H21.2483V9.4756L21.2469 9.47489Z"
        fill="white"
      />
      <path
        d="M35.803 10.6591H35.7388L31.806 3.76758H29.6411V12.9523H31.2808V6.06713H31.3449L35.2771 12.9523H37.4426V3.76758H35.803V10.6591Z"
        fill="white"
      />
      <path
        d="M44.325 3.76758L40.9814 12.9523H42.6853L43.3964 10.9855H47.2908L47.9956 12.9523H49.7058L46.3559 3.76758H44.3257H44.325ZM43.9024 9.54532L45.3112 5.60608H45.3753L46.7784 9.54532H43.9024Z"
        fill="white"
      />
      <path
        d="M58.8877 3.76758H51.605V5.21558H54.4233L54.4262 20.2314H56.0658V5.21558H58.8877V3.76758Z"
        fill="white"
      />
      <path
        d="M69.1585 12.0266C69.8291 11.3247 70.1647 10.3392 70.1647 9.07073V3.76758H68.525V9.07145C68.525 9.88238 68.3312 10.5137 67.9457 10.9641C67.5587 11.4145 67.0521 11.6397 66.4243 11.6397C65.7965 11.6397 65.2791 11.4145 64.8972 10.9641C64.5152 10.5137 64.3243 9.88238 64.3243 9.07145V3.76758H62.6846V9.07145C62.6846 10.3477 63.0174 11.3354 63.6843 12.0337C64.3499 12.7321 65.2642 13.0805 66.425 13.0805C67.5858 13.0805 68.4894 12.7299 69.16 12.0273L69.1585 12.0266Z"
        fill="white"
      />
      <path
        d="M76.3291 9.5451H77.5719L79.9356 12.9527H81.7741L79.3463 9.47455C79.5729 9.4147 79.7966 9.32633 80.019 9.20875C80.2406 9.09117 80.4722 8.92728 80.7138 8.71564C80.9546 8.50471 81.1484 8.21896 81.2931 7.86123C81.4385 7.50279 81.5112 7.10089 81.5112 6.65694C81.5112 5.78187 81.2318 5.08138 80.6717 4.5562C80.1123 4.03101 79.3869 3.76807 78.494 3.76807H74.6895V12.9527H76.3291V9.5451ZM76.3291 5.21535H78.3593C78.8247 5.21535 79.1931 5.34148 79.4639 5.59303C79.7354 5.84529 79.8708 6.19874 79.8708 6.65338C79.8708 7.10801 79.7339 7.46289 79.461 7.71657C79.1881 7.97097 78.8247 8.09781 78.3722 8.09781H76.3291V5.21535Z"
        fill="white"
      />
      <path
        d="M87.4781 11.5114V9.02014H91.6097V7.64269H87.4781V5.21558H91.872V3.76758H85.8384V12.9523H92.0002V11.5114H87.4781Z"
        fill="white"
      />
      <path
        d="M58.7789 17.451C58.9171 17.4289 59.0304 17.3726 59.1195 17.2814C59.2079 17.1909 59.2521 17.0755 59.2521 16.9344C59.2521 16.7441 59.1829 16.5966 59.044 16.4905C58.9057 16.3843 58.7233 16.3315 58.4974 16.3315H57.395V18.7116H58.5316C58.791 18.7116 58.9927 18.651 59.1366 18.5292C59.2806 18.4073 59.3525 18.2385 59.3525 18.0211C59.3525 17.8622 59.3005 17.7325 59.1965 17.632C59.0924 17.5316 58.9535 17.471 58.7789 17.451ZM57.8539 16.7099H58.424C58.5423 16.7099 58.6335 16.7349 58.6969 16.7855C58.7604 16.8361 58.7924 16.9087 58.7924 17.0049C58.7924 17.1011 58.7604 17.1824 58.6969 17.2344C58.6335 17.2871 58.5423 17.3128 58.424 17.3128H57.8539V16.7092V16.7099ZM58.7767 18.2399C58.7041 18.2969 58.6029 18.3254 58.4739 18.3254H57.8539V17.652H58.4639C58.5957 17.652 58.6991 17.6798 58.7739 17.7361C58.8487 17.7917 58.8865 17.8757 58.8865 17.9876C58.8865 18.0995 58.8501 18.1836 58.7775 18.2406L58.7767 18.2399Z"
        fill="white"
      />
      <path
        d="M61.068 17.3841L60.4915 16.3315H60.002L60.8328 17.7795V18.7109H61.2925V17.786L62.1369 16.3315H61.6509L61.068 17.3841Z"
        fill="white"
      />
      <path
        d="M67.5919 19.0705H67.4529L65.6009 14.3837L65.5959 14.373H63.8906V14.5704H64.5177L64.6645 14.7187V19.8836L64.5177 20.0318H63.8906V20.2292H65.6664V20.0318H65.0386L64.8918 19.8836V15.5132H65.0529L66.9177 20.2292H67.2577L69.4311 15.598H69.5935V19.8836L69.4468 20.0318H68.8033V20.2292H71.2104V20.0318H70.5677L70.4209 19.8836V14.7187L70.5677 14.5704H71.2104V14.373H69.7589L67.5919 19.0705Z"
        fill="white"
      />
      <path
        d="M83.5862 16.1348H83.5677L83.0347 17.6077H84.1235L83.5862 16.1348Z"
        fill="white"
      />
      <path
        d="M71.9219 20.2313H92V14.373H71.9219V20.2313ZM88.5211 15.6807H90.6383V16.0697H88.9423V17.0888H90.6383V17.4778H88.9423V18.5339H90.6383V18.923H88.5211V15.68V15.6807ZM86.6164 15.6108C87.2606 15.6108 87.7558 15.9401 87.9739 16.5094L87.5663 16.6576C87.4458 16.3192 87.1216 16.0092 86.6256 16.0092C85.9494 16.0092 85.4762 16.5515 85.4762 17.3018C85.4762 18.0522 85.9394 18.5945 86.6299 18.5945C87.2648 18.5945 87.5841 18.1634 87.6304 17.6353H86.6484V17.2462H88.0893V17.3995C88.0615 18.3536 87.51 18.9935 86.6299 18.9935C85.7498 18.9935 85.0408 18.308 85.0408 17.3025C85.0408 16.2971 85.7171 15.6115 86.6164 15.6115V15.6108ZM83.3406 15.6479H83.813L85.0458 18.9237H84.5869L84.2484 17.9923H82.8952L82.5567 18.9237H82.107L83.3398 15.6479H83.3406ZM79.8096 15.6807H80.2315V18.5346H81.7372V18.9237H79.8096V15.6807ZM77.4559 15.6807H77.8778V18.5346H79.3835V18.9237H77.4559V15.6807ZM76.5338 15.6807H76.9557V18.9237H76.5338V15.6807ZM73.7169 15.6807L74.7174 18.4007H74.7359L75.7364 15.6807H76.1811L74.9483 18.9565H74.4758L73.243 15.6807H73.7155H73.7169Z"
        fill="white"
      />
    </svg>
  );
}
