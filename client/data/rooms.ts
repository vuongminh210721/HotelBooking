export interface Amenity {
  icon: string;
  label: string;
}

export interface Room {
  id: string;
  name: string;
  city?: string;
  location?: string;
  size?: string;
  bedType?: string;
  guests: string;
  description: string;
  descriptionEn: string;
  amenities: Amenity[];
  price?: string;
  availability?: string;
  availabilityUnderline?: boolean;
  soldOut?: boolean;
  images: string[];
}

export const rooms: Room[] = [
  {
    id: "1",
    name: "SINGLE HAVEN",
    city: "Tp Hồ Chí Minh",
    location: "HOÀNG SA, Quận 3",
    size: "25 m²",
    bedType: "Queen",
    guests: "1 người",
    description:
      "Phòng SINGLE HAVEN là không gian yên tĩnh và ấm cúng được thiết kế đặc biệt dành cho một người. Với diện tích 25m², phòng được bố trí hợp lý với giường Queen size êm ái cùng chăn ga gối đệm cao cấp. Ánh sáng tự nhiên tràn ngập qua khung cửa sổ lớn, tạo không gian thoáng đãng và trong lành. Góc làm việc được trang bị bàn rộng và ghế công thái học, lý tưởng cho cả làm việc và thư giãn. Phòng tắm hiện đại với vòi sen đứng mạ chrome sáng bóng, kèm theo đầy đủ tiện nghi cao cấp. Lựa chọn hoàn hảo cho những chuyến công tác hoặc kỳ nghỉ độc hành thư thái.",
    descriptionEn: "",
    amenities: [
      { icon: "", label: "Cửa sổ" },
      { icon: "", label: "Bàn làm việc" },
      { icon: "", label: "View thành phố" },
      { icon: "", label: "Phòng tắm đứng" },
    ],
    price: "1.050.000",
    availability: "Duy nhất 2 phòng",
    availabilityUnderline: true,
    images: [
      "https://cdn.pixabay.com/photo/2019/09/11/04/45/interior-design-4467771_1280.jpg",
      "https://cdn.pixabay.com/photo/2019/09/11/04/43/interior-design-4467768_1280.jpg",
      "https://cdn.pixabay.com/photo/2019/09/11/04/43/interior-design-4467769_1280.jpg",
      "https://cdn.pixabay.com/photo/2019/09/11/04/45/interior-design-4467770_1280.jpg",
      "https://cdn.pixabay.com/photo/2018/05/25/08/08/living-3428529_1280.jpg",
    ],
  },
  {
    id: "2",
    name: "BALCONY DELUXE",
    city: "Hà Nội",
    location: "36 HOÀN KIẾM",
    size: "28 m²",
    bedType: "Queen",
    guests: "2 người",
    description:
      "Phòng BALCONY DELUXE rộng 28m² là sự kết hợp hoàn hảo giữa không gian sống hiện đại và view thành phố tuyệt đẹp. Điểm nhấn đặc biệt là ban công riêng rộng rãi, nơi bạn có thể thưởng thức tách cà phê sáng, đọc sách, hay đơn giản là ngắm hoàng hôn buông xuống thành phố. Phòng được thiết kế với tông màu trung tính ấm áp, nội thất gỗ cao cấp và ánh sáng tự nhiên tràn ngập. Giường Queen size với nệm memory foam êm ái cùng bộ chăn ga gối đệm cao cấp mang đến giấc ngủ thoải mái cho hai người. Góc làm việc được bố trí khoa học với bàn gỗ solid và ghế công thái học. Phòng tắm sang trọng với thiết bị vệ sinh cao cấp và đầy đủ tiện nghi.",
    descriptionEn: "",
    amenities: [
      { icon: "", label: "Cửa sổ" },
      { icon: "", label: "Ban công" },
      { icon: "", label: "Bàn làm việc" },
      { icon: "", label: "View thành phố" },
    ],
    price: "1.350.000",
    availability: "Phòng cuối",
    availabilityUnderline: true,
    images: [
      "https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_1280.jpg",
      "https://cdn.pixabay.com/photo/2024/12/24/10/04/kitchen-9288111_1280.jpg",
      "https://cdn.pixabay.com/photo/2020/12/16/00/10/home-5835289_1280.jpg",
    ],
  },
  {
    id: "3",
    name: "STANDARD RETREAT",
    city: "Đà Nẵng",
    size: "26 m²",
    bedType: "Queen",
    guests: "2 người",
    description:
      "STANDARD RETREAT là lựa chọn hoàn hảo cho những ai yêu thích phong cách tối giản và không gian yên bình. Căn phòng 26m² được thiết kế thông minh với tông màu ấm áp, tạo cảm giác thư thái như đang ở nhà. Nội thất trong phòng được tuyển chọn kỹ lưỡng, ưu tiên công năng và thẩm mỹ với giường Queen size êm ái, bàn làm việc bằng gỗ tự nhiên và ghế công thái học. Phòng tắm đứng hiện đại được trang bị vòi sen mưa và các thiết bị vệ sinh cao cấp. Hệ thống chiếu sáng thông minh với đèn điều chỉnh độ sáng giúp tạo không gian riêng tư theo ý muốn. Cửa sổ cách âm hai lớp đảm bảo sự yên tĩnh tuyệt đối cho những giấc ngủ ngon.",
    descriptionEn: "",
    amenities: [
      { icon: "", label: "Bàn làm việc" },
      { icon: "", label: "Phòng tắm đứng" },
      { icon: "", label: "Không gian tối giản" },
    ],
    soldOut: true,
    images: [
      "https://cdn.pixabay.com/photo/2018/01/23/06/58/modern-minimalist-bedroom-3100786_1280.jpg",
      "https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg",
      "https://cdn.pixabay.com/photo/2014/07/10/17/17/bedroom-389254_1280.jpg",
      "https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521_640.jpg", 
    ],
  },
  {
    id: "4",
    name: "SUNLIT STUDIO",
    city: "Tp Hồ Chí Minh",
    size: "22 m²",
    bedType: "Queen",
    guests: "1 người",
    description:
      "SUNLIT STUDIO là căn phòng 22m² độc đáo với thiết kế tối ưu ánh sáng tự nhiên. Hai cửa sổ lớn từ sàn đến trần cho phép ánh nắng tràn ngập không gian, tạo cảm giác thoáng đãng và tràn đầy năng lượng. Phòng được trang bị giường Queen size với nệm cao cấp và bộ chăn ga gối đệm 100% cotton ai cập. Góc làm việc được thiết kế riêng biệt với bàn gỗ solid rộng rãi, ghế công thái học và đèn bàn điều chỉnh độ sáng. Phòng tắm sang trọng với thiết bị vệ sinh cao cấp và các tiện nghi cao cấp. Lý tưởng cho người đi công tác hoặc du khách độc hành muốn tận hưởng không gian riêng tư đầy cảm hứng.",
    descriptionEn: "",
    amenities: [
      { icon: "", label: "Cửa sổ lớn" },
      { icon: "", label: "Bàn làm việc" },
      { icon: "", label: "View thành phố" },
      { icon: "", label: "Phòng tắm tiện nghi" },
    ],
    soldOut: true,
    images: [
      "https://cdn.pixabay.com/photo/2014/08/11/21/40/bedroom-416062_1280.jpg",
      "https://cdn.pixabay.com/photo/2018/06/14/21/15/bedroom-3475656_1280.jpg",
    ],
  },
  {
    id: "5",
    name: "SUPERIOR COMFORT",
    city: "Hà Nội",
    size: "30 m²",
    bedType: "Queen",
    guests: "2 người",
    description:
      "SUPERIOR COMFORT là căn phòng 30m² được thiết kế theo phong cách hiện đại sang trọng, mang đến trải nghiệm nghỉ dưỡng đẳng cấp. Không gian phòng được phân chia khoa học với khu vực nghỉ ngơi riêng biệt, featuring giường Queen size với nệm cao cấp và bộ chăn ga 5 sao. Ghế bành êm ái được đặt cạnh cửa sổ lớn, tạo góc thư giãn hoàn hảo với view thành phố. Khu vực làm việc được trang bị bàn gỗ solid rộng rãi và ghế công thái học cao cấp. Hệ thống chiếu sáng thông minh với nhiều chế độ điều chỉnh, phù hợp mọi thời điểm trong ngày. Phòng tắm cao cấp với trang thiết bị nhập khẩu, kèm theo các amenities cao cấp và khăn bông Ai Cập mềm mại.",
    descriptionEn: "",
    amenities: [
      { icon: "", label: "Cửa sổ" },
      { icon: "", label: "Ghế bành" },
      { icon: "", label: "Bàn làm việc" },
    ],
    price: "2.350.000",
    availability: "Còn 3 phòng cuối",
    availabilityUnderline: true,
    images: [
      "https://cdn.pixabay.com/photo/2022/08/15/14/26/baby-7388054_640.jpg",
      "https://cdn.pixabay.com/photo/2021/11/08/00/30/bedroom-6778193_640.jpg",
      "https://cdn.pixabay.com/photo/2018/07/11/00/22/interior-3530017_640.jpg",
      "https://cdn.pixabay.com/photo/2021/10/06/15/05/bathroom-6686057_640.jpg",
      "https://cdn.pixabay.com/photo/2023/12/30/07/31/living-room-8477525_1280.jpg",
    ],
  },
  {
    id: "6",
    name: "DELUXE OPENVIEW",
    city: "Đà Nẵng",
    size: "28 m²",
    bedType: "Queen",
    guests: "2 người",
    description:
      "DELUXE OPENVIEW là căn phòng 28m² nổi bật với thiết kế mở hiện đại. Điểm đặc biệt của phòng là hai khung cửa sổ lớn từ sàn đến trần, mang đến tầm nhìn panorama ấn tượng và đón trọn ánh sáng tự nhiên. Không gian được bài trí với nội thất tối giản cao cấp, giường Queen size với nệm orthopedic và bộ chăn ga cao cấp. Khu vực làm việc được thiết kế rộng rãi với bàn gỗ nguyên khối và ghế công thái học. Phòng tắm sang trọng với thiết bị vệ sinh cao cấp và gương toàn thân. Hệ thống rèm tự động điều khiển từ xa giúp điều chỉnh ánh sáng theo ý muốn.",
    descriptionEn: "",
    amenities: [
      { icon: "", label: "Cửa sổ lớn" },
      { icon: "", label: "Bàn làm việc" },
      { icon: "", label: "Không gian mở" },
    ],
    soldOut: true,
    images: [
      "https://cdn.pixabay.com/photo/2015/08/29/13/26/bed-913051_640.jpg",
      "https://cdn.pixabay.com/photo/2018/03/01/03/52/furniture-3189674_1280.jpg",
      "https://cdn.pixabay.com/photo/2020/06/27/16/40/apartment-5346460_640.jpg",
    ],
  },
  {
    id: "7",
    name: "LUXURY SUITE",
    city: "Tp Hồ Chí Minh",
    size: "24 m²",
    bedType: "King",
    guests: "1 người",
    description:
      "LUXURY SUITE là không gian 24m² được thiết kế theo phong cách luxury minimalist đương đại. Điểm nhấn của phòng là giường King size đặc biệt với nệm cao cấp nhập khẩu và bộ chăn ga tơ tằm cao cấp. Hai cửa sổ lớn được trang bị rèm điện thông minh, cho phép điều chỉnh ánh sáng tự nhiên theo ý muốn. Khu vực làm việc riêng biệt với bàn gỗ nguyên khối và ghế công thái học cao cấp. Hệ thống chiếu sáng được thiết kế tinh tế với nhiều lớp ánh sáng khác nhau, tạo không gian ấm cúng. Phòng tắm sang trọng với thiết bị vệ sinh cao cấp, gương đèn LED thông minh và bộ amenities cao cấp đặc biệt.",
    descriptionEn: "",
    amenities: [
      { icon: "", label: "Cửa sổ" },
      { icon: "", label: "Giường King" },
      { icon: "", label: "Bàn làm việc" },
    ],
    price: "1.220.000",
    availability: "Còn 5 phòng",
    availabilityUnderline: true,
    images: [
      "https://cdn.pixabay.com/photo/2015/08/29/13/26/bed-913051_640.jpg",
      "https://cdn.pixabay.com/photo/2018/03/01/03/52/furniture-3189674_1280.jpg",
      "https://cdn.pixabay.com/photo/2023/04/04/15/06/bathroom-7899557_1280.jpg",
      "https://cdn.pixabay.com/photo/2022/10/04/14/19/plant-7498330_1280.jpg",
      "https://cdn.pixabay.com/photo/2018/08/18/23/02/bathroom-3615667_1280.jpg"
    ],
  },
  {
    id: "8",
    name: "ROYAL SUITE",
    city: "Hà Nội",
    location: "42 Thái Phiên",
    size: "38 m²",
    bedType: "Loose",
    guests: "3 người",
    description:
      "ROYAL SUITE là căn phòng 38m² đẳng cấp mang phong cách hoàng gia hiện đại. Nội thất được chọn lọc kỹ lưỡng với tông màu vàng champagne sang trọng, kết hợp các chi tiết mạ vàng tinh tế. Giường Loose size đặc biệt với nệm cao cấp và bộ chăn ga tơ tằm thượng hạng, đáp ứng tiêu chuẩn nghỉ dưỡng cho 3 người. Ban công riêng rộng rãi được trang bị bàn trà và ghế thư giãn, nơi lý tưởng để ngắm hoàng hôn thành phố. Khu vực tiếp khách riêng biệt với sofa da cao cấp và bàn trà đá cẩm thạch. Phòng tắm sang trọng với bồn tắm độc lập, vòi sen mưa và các thiết bị vệ sinh cao cấp nhập khẩu. Dịch vụ phòng 24/7 và các đặc quyền riêng dành cho khách lưu trú ROYAL SUITE.",
    descriptionEn: "",
    amenities: [
      { icon: "", label: "Cửa sổ" },
      { icon: "", label: "Ban công" },
      { icon: "", label: "Phong cách hoàng gia" },
    ],
    price: "4.950.000",
    availability: "Phòng cuối",
    availabilityUnderline: true,
    images: [
      "https://cdn.pixabay.com/photo/2019/11/02/20/50/camera-4597415_640.jpg",
      "https://cdn.pixabay.com/photo/2022/07/28/13/53/bedroom-7349893_640.jpg",
      "https://cdn.pixabay.com/photo/2016/11/22/23/38/apartment-1851201_640.jpg", 
    ],
  },
  {
    id: "9",
    name: "FAMILY GRAND",
    city: "Đà Nẵng",
    size: "48 m²",
    bedType: "Master",
    guests: "5 người",
    description:
      "FAMILY GRAND là căn phòng rộng rãi 48m² được thiết kế đặc biệt cho gia đình hoặc nhóm bạn đến 5 người. Không gian được phân chia khoa học với khu vực ngủ rộng rãi featuring giường Master size cao cấp và một giường phụ êm ái. Khu vực sinh hoạt chung được trang bị sofa lớn có thể chuyển đổi thành giường, bàn trà và kệ TV thông minh. Góc bếp mini tiện lợi với tủ lạnh, lò vi sóng và dụng cụ pha trà/cà phê. Phòng tắm gia đình rộng rãi với hai bồn rửa, vòi sen đứng và bồn tắm riêng biệt. Cửa sổ lớn mang đến ánh sáng tự nhiên và view thành phố thoáng đãng. Trang bị thêm két an toàn, tủ quần áo lớn và bàn làm việc cho cả gia đình.",
    descriptionEn: "",
    amenities: [
      { icon: "", label: "Cửa sổ" },
      { icon: "", label: "Ghế sofa lớn" },
      { icon: "", label: "Phù hợp cho gia đình" },
    ],
    soldOut: true,
    images: [
      "https://cdn.pixabay.com/photo/2021/12/18/06/00/room-6878004_1280.jpg",
      "https://cdn.pixabay.com/photo/2016/11/19/13/06/bed-1839184_1280.jpg",
      "https://cdn.pixabay.com/photo/2018/01/26/08/15/dining-room-3108037_640.jpg",
      "https://cdn.pixabay.com/photo/2017/10/23/22/01/living-2882718_640.jpg",
    ],
  },
  {
    id: "10",
    name: "PENTHOUSE TRIPLE",
    city: "Tp Hồ Chí Minh",
    location: "35 SÔNG THỊ SÁU",
    size: "36 m²",
    bedType: "Premium",
    guests: "3 người",
    description:
      "PENTHOUSE TRIPLE là căn hộ cao cấp 36m² nằm ở tầng cao nhất của tòa nhà, mang đến trải nghiệm nghỉ dưỡng đẳng cấp cho 3 người. Không gian được thiết kế theo phong cách contemporary luxury với tông màu trắng - xám chủ đạo. Điểm nhấn đặc biệt là ban công riêng rộng rãi với tầm nhìn 180 độ ra toàn cảnh thành phố, được trang bị bàn ăn ngoài trời và ghế thư giãn cao cấp. Giường Premium size đặc biệt với nệm cao cấp và bộ chăn ga Âu chuẩn 5 sao. Khu vực tiếp khách riêng biệt với sofa da Italian và bàn trà thiết kế. Phòng tắm sang trọng với vách kính trong suốt, bồn tắm view thành phố và các thiết bị vệ sinh cao cấp. Dịch vụ quản gia riêng và các đặc quyền VIP dành cho khách PENTHOUSE.",
    descriptionEn: "",
    amenities: [
      { icon: "", label: "Cửa sổ" },
      { icon: "", label: "Ban công" },
      { icon: "", label: "View toàn cảnh" },
    ],
    price: "2.550.000",
    availability: "Phòng cuối",
    availabilityUnderline: true,
    images: [
      "https://cdn.pixabay.com/photo/2014/07/02/13/34/bedroom-382152_640.jpg",
      "https://cdn.pixabay.com/photo/2020/02/20/06/23/bed-4864026_640.jpg",
      "https://cdn.pixabay.com/photo/2018/02/12/10/07/modern-minimalist-bedroom-3147893_640.jpg",
    ],
  },
  {
    id: "11",
    name: "COZY NEST",
    city: "Hà Nội",
    location: "Hoàn Kiếm",
    size: "24 m²",
    bedType: "Queen",
    guests: "1 người",
    description:
      "COZY NEST là căn phòng 24m² ấm cúng với thiết kế tối giản hiện đại. Phòng được bố trí thông minh với giường Queen size êm ái, góc làm việc riêng biệt và khu vực thư giãn nhỏ gọn. Ánh sáng tự nhiên từ cửa sổ lớn tạo không gian thoáng đãng. Phòng tắm hiện đại với đầy đủ tiện nghi. Phù hợp cho khách công tác hoặc du lịch một mình.",
    descriptionEn: "",
    amenities: [
      { icon: "", label: "Cửa sổ" },
      { icon: "", label: "Bàn làm việc" },
      { icon: "", label: "Phòng tắm đứng" },
    ],
    price: "980.000",
    availability: "Còn 4 phòng",
    availabilityUnderline: true,
    images: [],
  },
  {
    id: "12",
    name: "URBAN ESCAPE",
    city: "Đà Nẵng",
    location: "Sơn Trà",
    size: "32 m²",
    bedType: "King",
    guests: "2 người",
    description:
      "URBAN ESCAPE là phòng 32m² với view biển tuyệt đẹp. Không gian rộng rãi với giường King size cao cấp, khu vực sinh hoạt riêng biệt và ban công lớn. Thiết kế hiện đại kết hợp với màu sắc ấm áp tạo cảm giác thư giãn. Phòng tắm sang trọng với bồn tắm và vòi sen riêng biệt. Lựa chọn hoàn hảo cho các cặp đôi.",
    descriptionEn: "",
    amenities: [
      { icon: "", label: "View biển" },
      { icon: "", label: "Ban công" },
      { icon: "", label: "Bồn tắm" },
      { icon: "", label: "Bàn làm việc" },
    ],
    price: "1.750.000",
    availability: "Còn 2 phòng",
    availabilityUnderline: true,
    images: [],
  },
  {
    id: "13",
    name: "EXECUTIVE PLUS",
    city: "Tp Hồ Chí Minh",
    location: "Quận 1",
    size: "35 m²",
    bedType: "King",
    guests: "2 người",
    description:
      "EXECUTIVE PLUS là phòng 35m² được thiết kế dành cho doanh nhân. Không gian làm việc rộng rãi với bàn làm việc lớn, ghế công thái học cao cấp và đèn chiếu sáng chuyên dụng. Giường King size với nệm orthopedic cao cấp đảm bảo giấc ngủ sâu. Khu vực tiếp khách riêng biệt với sofa và bàn trà. Phòng tắm hiện đại với vòi sen mưa và các tiện nghi 5 sao.",
    descriptionEn: "",
    amenities: [
      { icon: "", label: "Bàn làm việc lớn" },
      { icon: "", label: "View thành phố" },
      { icon: "", label: "Cửa sổ lớn" },
      { icon: "", label: "Máy pha cà phê" },
    ],
    price: "2.100.000",
    availability: "Còn 3 phòng",
    availabilityUnderline: true,
    images: [],
  },
  {
    id: "14",
    name: "GARDEN VIEW",
    city: "Hà Nội",
    location: "Ba Đình",
    size: "29 m²",
    bedType: "Queen",
    guests: "2 người",
    description:
      "GARDEN VIEW là phòng 29m² với tầm nhìn ra khu vườn xanh mát. Thiết kế gần gũi với thiên nhiên, nội thất gỗ tự nhiên và tông màu xanh nhẹ nhàng. Giường Queen size êm ái, ban công riêng để thưởng thức không khí trong lành. Phòng tắm hiện đại với thiết bị cao cấp. Không gian lý tưởng cho những ai yêu thích sự yên tĩnh.",
    descriptionEn: "",
    amenities: [
      { icon: "", label: "View vườn" },
      { icon: "", label: "Ban công" },
      { icon: "", label: "Bàn làm việc" },
      { icon: "", label: "Phòng tắm" },
    ],
    price: "1.450.000",
    availability: "Phòng cuối",
    availabilityUnderline: true,
    images: [],
  },
  {
    id: "15",
    name: "SKY HIGH SUITE",
    city: "Đà Nẵng",
    location: "Hải Châu",
    size: "42 m²",
    bedType: "King",
    guests: "3 người",
    description:
      "SKY HIGH SUITE là phòng 42m² tại tầng cao với view toàn cảnh thành phố và biển. Không gian rộng rãi với phòng ngủ riêng biệt, phòng khách sang trọng và ban công lớn. Giường King size cao cấp và sofa bed cho người thứ ba. Phòng tắm luxury với bồn tắm jacuzzi và vòi sen mưa. Dịch vụ room service 24/7.",
    descriptionEn: "",
    amenities: [
      { icon: "", label: "View toàn cảnh" },
      { icon: "", label: "Ban công lớn" },
      { icon: "", label: "Bồn tắm Jacuzzi" },
      { icon: "", label: "Phòng khách riêng" },
    ],
    price: "3.200.000",
    availability: "Còn 2 phòng",
    availabilityUnderline: false,
    images: [],
  },
  {
    id: "16",
    name: "MINIMALIST ZEN",
    city: "Tp Hồ Chí Minh",
    location: "Quận 3",
    size: "26 m²",
    bedType: "Queen",
    guests: "1 người",
    description:
      "MINIMALIST ZEN là phòng 26m² theo phong cách Nhật Bản tối giản. Không gian yên tĩnh với màu sắc trung tính, nội thất gỗ tự nhiên và ánh sáng dịu nhẹ. Giường Queen size thấp kiểu Nhật, góc thiền nhỏ để thư giãn. Phòng tắm phong cách onsen với bồn tắm sâu. Không gian hoàn hảo cho meditation và nghỉ ngơi.",
    descriptionEn: "",
    amenities: [
      { icon: "", label: "Góc thiền" },
      { icon: "", label: "Bồn tắm Nhật" },
      { icon: "", label: "Không gian zen" },
      { icon: "", label: "Bộ pha trà" },
    ],
    price: "1.350.000",
    availability: "Còn 3 phòng",
    availabilityUnderline: true,
    images: [],
  },
  {
    id: "17",
    name: "FAMILY COMFORT",
    city: "Hà Nội",
    location: "Cầu Giấy",
    size: "45 m²",
    bedType: "2 Giường Queen",
    guests: "4 người",
    description:
      "FAMILY COMFORT là phòng 45m² dành riêng cho gia đình. Hai giường Queen size trong phòng ngủ rộng rãi, khu vực sinh hoạt chung với TV lớn và sofa. Góc bếp mini với tủ lạnh, lò vi sóng. Phòng tắm gia đình với hai bồn rửa mặt. Tủ quần áo lớn và két an toàn. Phù hợp cho gia đình có trẻ em.",
    descriptionEn: "",
    amenities: [
      { icon: "", label: "Thân thiện gia đình" },
      { icon: "", label: "Góc bếp mini" },
      { icon: "", label: "TV lớn" },
      { icon: "", label: "Sofa" },
    ],
    price: "2.800.000",
    availability: "Còn 2 phòng",
    availabilityUnderline: true,
    images: [],
  },
  {
    id: "18",
    name: "BEACHFRONT LUXURY",
    city: "Đà Nẵng",
    location: "Mỹ Khê",
    size: "38 m²",
    bedType: "King",
    guests: "2 người",
    description:
      "BEACHFRONT LUXURY là phòng 38m² view trực diện biển Mỹ Khê tuyệt đẹp. Ban công riêng rộng rãi với bàn ghế để ngắm hoàng hôn biển. Giường King size cao cấp, khu vực ngồi thư giãn riêng biệt. Phòng tắm sang trọng với bồn tắm view biển và vòi sen mưa. Minibar đầy đủ và dịch vụ turn-down buổi tối.",
    descriptionEn: "",
    amenities: [
      { icon: "", label: "View biển trực diện" },
      { icon: "", label: "Ban công lớn" },
      { icon: "", label: "Bồn tắm view biển" },
      { icon: "", label: "Minibar" },
    ],
    price: "2.950.000",
    availability: "Phòng cuối",
    availabilityUnderline: true,
    images: [],
  },
  {
    id: "19",
    name: "STUDIO MODERN",
    city: "Tp Hồ Chí Minh",
    location: "Bình Thạnh",
    size: "28 m²",
    bedType: "Queen",
    guests: "2 người",
    description:
      "STUDIO MODERN là phòng 28m² thiết kế kiểu studio hiện đại. Không gian mở với khu vực ngủ, làm việc và sinh hoạt được bố trí thông minh. Giường Queen size có thể gấp lại, bàn làm việc đa năng. Góc bếp nhỏ với đầy đủ thiết bị nấu nướng cơ bản. Phòng tắm hiện đại với vách kính. Phù hợp cho lưu trú dài ngày.",
    descriptionEn: "",
    amenities: [
      { icon: "", label: "Bếp đầy đủ" },
      { icon: "", label: "Bàn làm việc" },
      { icon: "", label: "Cửa sổ lớn" },
      { icon: "", label: "WiFi tốc độ cao" },
    ],
    price: "1.550.000",
    availability: "Còn 5 phòng",
    availabilityUnderline: false,
    images: [],
  },
  {
    id: "20",
    name: "PRESIDENTIAL SUITE",
    city: "Hà Nội",
    location: "Tây Hồ", 
    size: "65 m²",
    bedType: "California King",
    guests: "4 người",
    description:
      "PRESIDENTIAL SUITE là suite cao cấp nhất 65m² với thiết kế sang trọng bậc nhất. Phòng ngủ master với giường California King, phòng khách rộng rãi, phòng ăn riêng và ban công view hồ Tây tuyệt đẹp. Phòng tắm master với bồn tắm massage, vòi sen mưa và sauna mini. Phòng ngủ phụ với giường Queen. Bếp đầy đủ tiện nghi. Dịch vụ butler 24/7, phòng gym riêng và các đặc quyền VIP cao nhất.",
    descriptionEn: "",
    amenities: [
      { icon: "", label: "Suite tổng thống" },
      { icon: "", label: "Hồ bơi riêng" },
      { icon: "", label: "Bồn tắm massage" },
      { icon: "", label: "Phòng ăn riêng" },
      { icon: "", label: "Sauna" },
    ],
    price: "8.500.000",
    availability: "Phòng duy nhất",
    availabilityUnderline: true,
    images: [],
  },
];

export default rooms;
