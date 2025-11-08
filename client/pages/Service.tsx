// client/pages/Services.tsx
import React, { useState, useEffect } from "react"; // 1. Import thêm useState, useEffect
import { createPortal } from "react-dom"; // 2. Import createPortal
import { useInView } from "react-intersection-observer";

// Định nghĩa kiểu dữ liệu (Giữ nguyên)
interface Service {
  id: number;
  title: string;
  desc: string;
  img: string;
  longDesc: string;
}

// -------------------------------------------------------------------
// Component con 1: ServiceCard (Thẻ dịch vụ trong lưới)
// (Giữ nguyên, chỉ thay đổi prop 'onClick')
// -------------------------------------------------------------------
const ServiceCard = ({
  service,
  index,
  onClick, // 3. Prop onClick vẫn được giữ
}: {
  service: Service;
  index: number;
  onClick: () => void;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animationDelay = {
    transitionDelay: `${index * 150}ms`,
  };

  return (
    <div
      ref={ref}
      onClick={onClick} // 4. Khi click, nó sẽ gọi hàm mở Modal
      className={`
        group relative cursor-pointer overflow-hidden rounded-lg shadow-lg
        transition-all duration-700 ease-out 
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      style={animationDelay}
    >
      {/* (Toàn bộ code hiệu ứng hover của ServiceCard được giữ nguyên) */}
      <img
        src={service.img}
        alt={service.title}
        className="w-full h-56 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full p-4">
        <div className="inline-block bg-[#48dfb2]/70 px-3 py-1 rounded-md transition-transform duration-500 ease-in-out transform group-hover:-translate-y-10">
          <h2 className="text-xl font-semibold text-white">
            {service.title}
          </h2>
        </div>
        <p className="text-sm text-gray-200 mt-2 opacity-0 transition-all duration-500 ease-in-out transform translate-y-4 group-hover:opacity-100 group-hover:-translate-y-10">
          {service.desc}
        </p>
      </div>
    </div>
  );
};

// -------------------------------------------------------------------
// Component con 2: ServiceModal (Popup chi tiết)
// (Đây là component mới thay thế 'ServiceDetailSection')
// -------------------------------------------------------------------
const ServiceModal = ({
  service,
  onClose,
}: {
  service: Service;
  onClose: () => void;
}) => {
  // 5. Thêm state và effect để tạo animation cho modal
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Kích hoạt animation (fade-in, scale-up) ngay khi modal được render
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false); // Kích hoạt animation (fade-out, scale-down)
    setTimeout(onClose, 300); // Chờ animation 300ms rồi mới thực sự đóng
  };

  // 6. Dùng createPortal để render Modal ở cấp cao nhất (document.body)
  // Giúp tránh lỗi z-index và CSS
  return createPortal(
    // Lớp phủ (Overlay)
    <div
      onClick={handleClose} // 7. Click ra ngoài (lớp phủ) để đóng
      className={`
        fixed inset-0 z-50 flex items-center justify-center p-4
        transition-opacity duration-300 ease-out
        ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }} // Nền mờ
    >
      {/* Hộp nội dung (Modal Box) */}
      <div
        onClick={(e) => e.stopPropagation()} // 8. Ngăn click *bên trong* làm đóng modal
        className={`
          bg-white rounded-lg shadow-xl w-full max-w-3xl overflow-hidden
          transition-all duration-300 ease-out
          ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
        `}
      >
        <img
          src={service.img}
          alt={service.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
          <p className="text-gray-600 leading-relaxed">{service.longDesc}</p>
        </div>

        {/* Nút đóng (X) */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-white bg-black/30 rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/50 transition-colors"
        >
          ✕
        </button>
      </div>
    </div>,
    document.body // 9. Render modal vào 'document.body'
  );
};


// -------------------------------------------------------------------
// Component chính: Services (Trang Dịch Vụ)
// -------------------------------------------------------------------
export default function Services() {

  // 10. Dùng 'useState' để quản lý modal nào đang được mở
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Dữ liệu (Giữ nguyên)
  const services: Service[] = [
    {
      id: 1,
      title: "Giặt ủi",
      desc: "Dịch vụ giặt ủi nhanh, sạch sẽ.",
      img: "https://cdn.pixabay.com/photo/2021/02/02/12/38/iron-5973837_1280.jpg",
      longDesc: "Dịch vụ giặt ủi chuyên nghiệp của chúng tôi đảm bảo quần áo của bạn luôn sạch sẽ và thơm tho. Chúng tôi sử dụng công nghệ giặt sấy hiện đại và quy trình kiểm tra chất lượng nghiêm ngặt, sẵn sàng phục vụ 24/7.",
    },
    {
      id: 2,
      title: "Đưa đón sân bay",
      desc: "Xe đưa đón tiện lợi, an toàn.",
      img: "https://cdn.pixabay.com/photo/2018/02/14/15/50/lufthansa-regional-3153209_1280.jpg",
      longDesc: "Bắt đầu kỳ nghỉ của bạn một cách thoải mái nhất với dịch vụ đưa đón sân bay riêng tư. Tài xế chuyên nghiệp của chúng tôi sẽ đợi bạn tại sảnh đến, hỗ trợ hành lý và đưa bạn đến khách sạn một cách an toàn và nhanh chóng.",
    },
    {
      id: 3,
      title: "Ăn sáng Buffet",
      desc: "Buffet sáng phong phú, dinh dưỡng.",
      img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit-crop&w=800&q=60",
      longDesc: "Thưởng thức bữa sáng buffet thịnh soạn với hàng trăm món ăn Á-Âu đa dạng. Từ các món trứng nóng hổi, bánh mì tươi nướng, đến các món ăn truyền thống địa phương, tất cả đều được chuẩn bị từ nguyên liệu tươi ngon nhất.",
    },
    {
      id: 4,
      title: "Hồ bơi Vô cực",
      desc: "Thư giãn và ngắm nhìn toàn cảnh thành phố.",
      img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60",
      longDesc: "Hồ bơi vô cực trên tầng thượng là ốc đảo thư giãn lý tưởng. Đắm mình trong làn nước mát lạnh, nhâm nhi ly cocktail và ngắm nhìn đường chân trời tuyệt đẹp của thành phố, đặc biệt là vào lúc hoàng hôn.",
    },
    {
      id: 5,
      title: "Nhà hàng & Quầy Bar",
      desc: "Trải nghiệm ẩm thực Á-Âu.",
      img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=60",
      longDesc: "Nhà hàng của chúng tôi phục vụ các món ăn tinh tế kết hợp giữa ẩm thực quốc tế và đặc sản địa phương. Vào buổi tối, quầy bar là nơi hoàn hảo để thưởng thức các loại rượu vang và cocktail sáng tạo trong không gian sang trọng.",
    },
    {
      id: 6,
      title: "Spa & Trị liệu",
      desc: "Phục hồi năng lượng cơ thể.",
      img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit-crop&w=800&q=60",
      longDesc: "Tìm lại sự cân bằng cho cơ thể và tâm trí tại spa của chúng tôi. Các chuyên gia trị liệu sẽ tư vấn cho bạn các gói massage, chăm sóc da mặt và xông hơi, giúp bạn xua tan mọi mệt mỏi và căng thẳng.",
    },
  ];

  // 11. Bỏ 'useRef' và 'handleScrollToSection'

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Dịch vụ</h1>
      <p className="mb-6 text-gray-600">
        Các dịch vụ tiện ích mà chúng tôi cung cấp để làm cho kỳ nghỉ của bạn
        thoải mái hơn.
      </p>

      {/* 12. Lưới Dịch Vụ (Menu) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {services.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={index}
            // 13. Khi click, gọi hàm 'setSelectedService'
            onClick={() => setSelectedService(service)}
          />
        ))}
      </div>

      {/* 14. Bỏ phần 'ServiceDetailSection' ở dưới */}

      {/* 15. Render Modal một cách có điều kiện */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)} // Hàm đóng modal
        />
      )}
    </div>
  );
}