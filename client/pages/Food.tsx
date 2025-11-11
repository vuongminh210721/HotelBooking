// client/pages/Food.tsx
import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useInView } from "react-intersection-observer";

// Định nghĩa kiểu dữ liệu
interface FoodItem {
   id: number;
   title: string;
   desc: string;
   img: string;
   longDesc: string;
   ingredients: string[];
   variations: string[];
}

// -------------------------------------------------------------------
// Component con 1: FoodDetailSection (Khối xen kẽ Ảnh/Chữ)
// -------------------------------------------------------------------
const FoodDetailSection = ({
   item,
   index,
   onOpenModal,
}: {
   item: FoodItem;
   index: number;
   onOpenModal: () => void;
}) => {
   const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.2,
   });

   const isReversed = index % 2 !== 0;

   return (
      <div
         ref={ref}
         className={`
        flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'}
        items-center bg-white rounded-lg shadow-xl overflow-hidden
        transition-all duration-700 ease-out
        ${inView ? 'opacity-100 translate-x-0' : (isReversed ? 'opacity-0 translate-x-10' : 'opacity-0 -translate-x-10')}
      `}
      >
         <img
            src={item.img}
            alt={item.title}
            className="w-full md:w-1/2 h-64 md:h-80 object-cover"
         />

         <div className="w-full md:w-1/2 p-6 md:p-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">{item.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-4">{item.longDesc}</p>

            <button
               onClick={onOpenModal}
               className="text-sm font-semibold text-teal-600 hover:text-teal-800 transition-colors"
            >
               Chi tiết thành phần &raquo;
            </button>
         </div>
      </div>
   );
};

// -------------------------------------------------------------------
// Component con 2: FoodModal (Popup chi tiết thành phần)
// ĐÃ SỬA LỖI CÚ PHÁP
// -------------------------------------------------------------------
const FoodModal = ({
   item,
   onClose,
}: {
   item: FoodItem;
   onClose: () => void;
}) => {
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      setIsVisible(true);
   }, []);

   const handleClose = () => {
      setIsVisible(false);
      setTimeout(onClose, 300);
   };

   return createPortal(
      <div
         onClick={handleClose}
         className={`
        fixed inset-0 z-50 flex items-center justify-center p-4
        transition-opacity duration-300 ease-out
        ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}
         style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
      >
         <div
            onClick={(e) => e.stopPropagation()}
            className={`
          bg-gray-50 rounded-lg shadow-xl w-full max-w-lg overflow-hidden relative
          transition-all duration-300 ease-out
          ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
        `}
         >
            {/* Thêm hình ảnh với chiều cao nhỏ */}
            <img
               src={item.img}
               alt={item.title}
               className="w-full h-48 object-cover"
            />

            <div className="p-6">
               <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>

               <h4 className="text-lg font-semibold text-gray-700 mb-2">Thành phần chính:</h4>
               <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                  {item.ingredients.map((ingredient, index) => (
                     <li key={index}>{ingredient}</li>
                  ))}
               </ul>

               <h4 className="text-lg font-semibold text-gray-700 mb-2">Cách chế biến:</h4>
               <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {/* DÒNG LỖI (CHỮ S) ĐÃ BỊ XÓA BỎ */}
                  {item.variations.map((variation, index) => (
                     <li key={index}>{variation}</li>
                  ))}
               </ul>
            </div>

            <button
               onClick={handleClose}
               className="absolute top-3 right-3 text-white bg-black/30 rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/50 transition-colors text-xl"
            >
               ✕
            </button>
         </div>
      </div>,
      document.body
   );
};

// -------------------------------------------------------------------
// Component chính: Food (Trang Ẩm thực)
// -------------------------------------------------------------------
export default function Food() {

   const [selectedItem, setSelectedItem] = useState<FoodItem | null>(null);

   // MẢNG DỮ LIỆU (Giữ nguyên)
   const items: FoodItem[] = [
      {
         id: 1,
         title: "Phở bò - Bún bò",
         desc: "Phở bò hương vị truyền thống.",
         img: "https://cdn.pixabay.com/photo/2021/10/29/08/08/beef-noodle-soup-6751318_1280.jpg",
         longDesc: "Nước dùng được ninh từ xương ống trong 8 tiếng, kết hợp cùng bánh phở mềm, thịt bò tái và các loại rau thơm tươi ngon nhất.",
         ingredients: ["Bánh phở/Bún", "Thịt bò (nạm, tái, gầu)", "Hành lá, rau mùi", "Giá đỗ, ớt, chanh"],
         variations: ["Truyền thống", "Phở xào - Bún xào", "Phở trộn (chua ngọt)"],
      },
      {
         id: 2,
         title: "Sashimi-Sushi Cao Cấp",
         desc: "Sashimi tươi ngon nhập khẩu.",
         img: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto-format&fit=crop&w=800&q=60",
         longDesc: "Thực đơn sashimi của chúng tôi được chế biến bởi các đầu bếp hàng đầu, sử dụng cá hồi Na-uy, cá ngừ vây xanh và các loại hải sản nhập khẩu trực tiếp trong ngày.",
         ingredients: ["Cá hồi Na-uy", "Cá ngừ vây xanh (Toro)", "Sò điệp Hokkaido", "Trứng cá chuồn (Tobiko)"],
         variations: ["Set Sashimi 5 loại (Đặc biệt)", "Sashimi bụng cá hồi", "Các loại cuộn sushi"],
      },
      {
         id: 3,
         title: "Steak",
         desc: "Bò nhập khẩu từ Úc.",
         img: "https://images.unsplash.com/photo-1551028150-64b9f398f678?auto-format&fit=crop&w=800&q=60",
         longDesc: "Thưởng thức món Steak trứ danh. Miếng thịt bò Úc hảo hạng (Ribeye, Tenderloin) được nướng ở nhiệt độ hoàn hảo, giữ trọn độ mềm và mọng nước. Phục vụ kèm khoai tây nghiền và sốt rượu vang đỏ.",
         ingredients: ["Thịt bò Ribeye/Tenderloin Úc (250g)", "Khoai tây nghiền", "Sốt (rượu vang/tiêu đen)"],
         variations: ["Nướng chảo (Pan-seared)", "Bỏ lò (Oven-roasted)", "Nướng lửa (Flame-grilled)"],
      },
      {
         id: 4,
         title: "Gỏi cuốn",
         desc: "Gỏi cuốn tôm thịt tươi mát.",
         img: "https://plus.unsplash.com/premium_photo-1663850685033-a8557389963e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
         longDesc: "Món gỏi cuốn tôm thịt thanh mát, là món khai vị hoàn hảo. Gồm bún tươi, tôm, thịt ba chỉ luộc, và rau sống, cuốn trong bánh tráng mỏng, chấm cùng sốt tương đậu phộng béo ngậy.",
         ingredients: ["Tôm sú", "Thịt ba chỉ", "Bún tươi", "Rau sống, hẹ"],
         variations: ["Gỏi cuốn tôm thịt", "Gỏi cuốn chay (Đậu hũ)", "Gỏi cuốn cá hồi"],
      },
      {
         id: 5,
         title: "Hải sản",
         desc: "Các món hải sản tươi sống.",
         img: "https://images.unsplash.com/photo-1651323018466-b36b7df1d2b1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
         longDesc: "Đĩa hải sản tổng hợp là lựa chọn hoàn hảo cho các tín đồ biển. Chúng tôi chỉ phục vụ hải sản tươi sống được đánh bắt trong ngày tại vùng biển địa phương.",
         ingredients: ["Tôm hùm", "Cua/Ghẹ", "Mực ống", "Hàu tươi"],
         variations: ["Nướng phô mai", "Hấp (sả/Thái)", "Ăn tươi (kèm mù tạt)"],
      },
   ];

   return (
      <div className="max-w-7xl mx-auto p-6 bg-gray-50">
         <h1 className="text-3xl font-bold mb-4">Ẩm thực</h1>
         <p className="mb-6 text-gray-600">
            Khám phá các món ăn đặc sắc tại nhà hàng của chúng tôi.
         </p>

         {/* Khu vực hiển thị xen kẽ */}
         <div className="space-y-16">
            {items.map((item, index) => (
               <FoodDetailSection
                  key={item.id}
                  item={item}
                  index={index}
                  onOpenModal={() => setSelectedItem(item)}
               />
            ))}
         </div>

         {/* Render Modal */}
         {selectedItem && (
            <FoodModal
               item={selectedItem}
               onClose={() => setSelectedItem(null)}
            />
         )}
      </div>
   );
}