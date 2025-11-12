import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, User, Mail, Phone, Calendar, Users, Hotel, CheckCircle, Sparkles, CreditCard, QrCode, Banknote, Wallet } from "lucide-react";

export default function Booking_Home() {
   const [showBooking, setShowBooking] = useState(false);
   const [fullName, setFullName] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [roomType, setRoomType] = useState("Deluxe");
   const [checkIn, setCheckIn] = useState("");
   const [checkOut, setCheckOut] = useState("");
   const [guests, setGuests] = useState<number>(2);
   const [status, setStatus] = useState<"idle" | "sending" | "success" | "payment" | "error">("idle");
   const [error, setError] = useState<string | null>(null);
   const [paymentMethod, setPaymentMethod] = useState<"deposit" | "full">("deposit");

   useEffect(() => {
      const handleOpenBooking = (e: any) => {
         try {
            const detail = (e && e.detail) || {};
            if (detail.roomName) setRoomType(String(detail.roomName));
            if (detail.guests) setGuests(Number(detail.guests));
         } catch (err) {
            // ignore
         }
         setShowBooking(true);
      };

      window.addEventListener("openBooking", handleOpenBooking as EventListener);
      return () => window.removeEventListener("openBooking", handleOpenBooking as EventListener);
   }, []);

   const resetForm = () => {
      setFullName("");
      setEmail("");
      setPhone("");
      setRoomType("Deluxe");
      setCheckIn("");
      setCheckOut("");
      setGuests(2);
      setError(null);
      setStatus("idle");
      setPaymentMethod("deposit");
   };

   const validateBooking = () => {
      if (!fullName.trim()) return "Vui lòng nhập họ tên.";
      if (!email.trim()) return "Vui lòng nhập email.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Email không hợp lệ.";
      if (!phone.trim()) return "Vui lòng nhập số điện thoại.";
      if (!checkIn || !checkOut) return "Vui lòng chọn ngày nhận/trả phòng.";
      if (new Date(checkIn) > new Date(checkOut)) return "Ngày trả phải sau ngày nhận.";
      return null;
   };

   const handleBookingSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);
      const v = validateBooking();
      if (v) {
         setError(v);
         return;
      }
      setStatus("sending");
      try {
         await new Promise((res) => setTimeout(res, 800));
         setStatus("success");
         setTimeout(() => setStatus("payment"), 1500);
      } catch (err) {
         setStatus("error");
         setError("Gửi đặt phòng thất bại, vui lòng thử lại.");
      }
   };

   const handleFinalClose = () => {
      setShowBooking(false);
      resetForm();
   };

   if (!showBooking) return null;

   return createPortal(
      <div className="fixed inset-0 z-[9999] overflow-y-auto">
         <div className="min-h-screen px-4 py-6 flex items-center justify-center">
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={handleFinalClose} />

            {/* Decorative blur */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
               <div className="absolute top-20 left-10 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl animate-pulse"></div>
               <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Modal */}
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl transform transition-all max-w-4xl w-full mx-auto relative z-10 overflow-hidden border border-gray-100">
               <div className="bg-gradient-to-r from-teal-500 to-green-500 px-8 py-6 relative">
                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <div className="bg-white/25 backdrop-blur-sm p-3 rounded-xl">
                           <Hotel className="w-6 h-6 text-white" />
                        </div>
                        <div>
                           <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                              {status === "payment" ? "Thanh toán đặt phòng" : "Đặt phòng ngay"}
                              {status !== "payment" && <Sparkles className="w-5 h-5 text-amber-200" />}
                           </h3>
                           <p className="text-white/80 text-sm">
                              {status === "payment" ? "Hoàn tất thanh toán an toàn" : "Trải nghiệm sang trọng đang chờ bạn"}
                           </p>
                        </div>
                     </div>
                     <button onClick={handleFinalClose} className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300 hover:rotate-90">
                        <X className="w-6 h-6" />
                     </button>
                  </div>
               </div>

               {/* SUCCESS */}
               {status === "success" && (
                  <div className="p-12 flex flex-col items-center justify-center text-center">
                     <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-8 rounded-full mb-6 animate-bounce shadow-xl">
                        <CheckCircle className="w-20 h-20 text-white" />
                     </div>
                     <h3 className="text-4xl font-bold text-gray-800 mb-4">Đặt phòng thành công!</h3>
                     <p className="text-gray-600 text-lg mb-2">Cảm ơn quý khách đã tin tưởng.</p>
                     <p className="text-gray-500">Đang chuyển đến bước thanh toán...</p>
                  </div>
               )}

               {/* PAYMENT */}
               {status === "payment" && (
                  <div className="p-8">
                     <div className="space-y-6">
                        <div className="bg-gradient-to-br from-gray-50 to-slate-50 p-6 rounded-2xl border border-gray-200">
                           <h4 className="text-lg font-bold text-gray-800 mb-4">Tóm tắt đặt phòng</h4>
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                              <div><span className="font-medium text-gray-600">Khách:</span> <strong>{fullName}</strong></div>
                              <div><span className="font-medium text-gray-600">Phòng:</span> <strong>{roomType}</strong></div>
                              <div><span className="font-medium text-gray-600">Nhận:</span> <strong>{checkIn ? new Date(checkIn).toLocaleDateString("vi-VN") : ""}</strong></div>
                              <div><span className="font-medium text-gray-600">Trả:</span> <strong>{checkOut ? new Date(checkOut).toLocaleDateString("vi-VN") : ""}</strong></div>
                              <div><span className="font-medium text-gray-600">Khách:</span> <strong>{guests} người</strong></div>
                              <div><span className="font-medium text-gray-600">Tổng:</span> <strong className="text-xl text-slate-700">3.500.000 ₫</strong></div>
                           </div>
                        </div>

                        <div className="bg-gradient-to-br from-slate-50 to-gray-100 p-6 rounded-2xl border border-gray-200">
                           <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2"><Wallet className="w-5 h-5 text-slate-600" /> Hình thức thanh toán</h4>
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <label className="flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all hover:shadow-sm">
                                 <input type="radio" name="pay" value="deposit" checked={paymentMethod === "deposit"} onChange={() => setPaymentMethod("deposit")} className="w-5 h-5 text-slate-600" />
                                 <div className="ml-3">
                                    <p className="font-bold text-gray-800">Đặt cọc 30%</p>
                                    <p className="text-sm text-gray-600">1.050.000 ₫</p>
                                 </div>
                              </label>
                              <label className="flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all hover:shadow-sm">
                                 <input type="radio" name="pay" value="full" checked={paymentMethod === "full"} onChange={() => setPaymentMethod("full")} className="w-5 h-5 text-slate-600" />
                                 <div className="ml-3">
                                    <p className="font-bold text-gray-800">Thanh toán hết</p>
                                    <p className="text-sm text-gray-600">3.500.000 ₫</p>
                                 </div>
                              </label>
                           </div>
                        </div>

                        <div className="space-y-4">
                           <h4 className="text-lg font-bold text-gray-800 flex items-center gap-2"><CreditCard className="w-5 h-5 text-slate-600" /> Phương thức thanh toán</h4>
                           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                              <div className="bg-white p-6 rounded-2xl border border-gray-200 text-center shadow-sm">
                                 <div className="bg-gray-50 p-4 rounded-xl inline-block mb-4"><QrCode className="w-32 h-32 text-slate-600" /></div>
                                 <h5 className="font-bold text-gray-800 mb-2">Quét mã QR</h5>
                                 <p className="text-sm text-gray-600 mb-3">Dùng ứng dụng ngân hàng</p>
                                 <div className="bg-gray-100 p-3 rounded-lg text-xs font-mono text-gray-700">VietQR • TPBank • 0123456789</div>
                                 <p className="text-lg font-bold text-slate-700 mt-3">{paymentMethod === "deposit" ? "1.050.000 ₫" : "3.500.000 ₫"}</p>
                              </div>
                              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                                 <div className="flex items-center gap-3 mb-4"><Banknote className="w-8 h-8 text-slate-600" /><div><h5 className="font-bold text-gray-800">Chuyển khoản</h5><p className="text-xs text-gray-600">Nội dung: {fullName} - {roomType}</p></div></div>
                                 <div className="space-y-2 text-sm">
                                    <div className="flex justify-between"><span className="text-gray-600">Ngân hàng:</span><strong>TPBank</strong></div>
                                    <div className="flex justify-between"><span className="text-gray-600">Chủ TK:</span><strong>CÔNG TY RESORT XYZ</strong></div>
                                    <div className="flex justify-between"><span className="text-gray-600">Số TK:</span><strong>0123456789</strong></div>
                                    <div className="flex justify-between"><span className="text-gray-600">Số tiền:</span><strong className="text-slate-700">{paymentMethod === "deposit" ? "1.050.000 ₫" : "3.500.000 ₫"}</strong></div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="pt-4">
                           <button onClick={() => { alert("Thanh toán thành công! Xác nhận đã gửi qua email."); handleFinalClose(); }} className="w-full bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white font-bold py-5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 text-lg">
                              <CheckCircle className="w-6 h-6" /> Hoàn tất thanh toán
                           </button>
                           <p className="text-center text-sm text-gray-500 mt-3">Chụp biên lai → gửi email: <strong>booking@resort.xyz</strong></p>
                        </div>
                     </div>
                  </div>
               )}

               {/* FORM */}
               {status !== "success" && status !== "payment" && (
                  <div className="p-8">
                     <div className="space-y-6">
                        {error && (
                           <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-2">Warning {error}</div>
                        )}

                        <div className="bg-gradient-to-br from-gray-50 to-slate-50 p-6 rounded-2xl border border-gray-200">
                           <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2"><User className="w-5 h-5 text-slate-600" /> Thông tin cá nhân</h4>
                           <div className="space-y-4">
                              <div>
                                 <label className="block text-sm font-bold text-gray-700 mb-2">Họ và tên</label>
                                 <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><User className="w-5 h-5" /></div>
                                    <input type="text" placeholder="Nguyễn Văn A" className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:border-slate-500 focus:ring-4 focus:ring-slate-100 outline-none transition-all duration-300 font-medium" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                                 </div>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                 <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                                    <div className="relative">
                                       <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><Mail className="w-5 h-5" /></div>
                                       <input type="email" placeholder="email@example.com" className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:border-slate-500 focus:ring-4 focus:ring-slate-100 outline-none transition-all duration-300 font-medium" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                 </div>
                                 <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Số điện thoại</label>
                                    <div className="relative">
                                       <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><Phone className="w-5 h-5" /></div>
                                       <input type="tel" placeholder="0901234567" className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:border-slate-500 focus:ring-4 focus:ring-slate-100 outline-none transition-all duration-300 font-medium" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="bg-gradient-to-br from-slate-50 to-gray-100 p-6 rounded-2xl border border-gray-200">
                           <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2"><Hotel className="w-5 h-5 text-slate-600" /> Thông tin đặt phòng</h4>
                           <div className="space-y-4">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                 <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Loại phòng</label>
                                    <div className="relative">
                                       <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><Hotel className="w-5 h-5" /></div>
                                       <select className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:border-slate-500 focus:ring-4 focus:ring-slate-100 outline-none transition-all duration-300 font-medium appearance-none bg-white cursor-pointer" value={roomType} onChange={(e) => setRoomType(e.target.value)}>
                                          <option>Deluxe</option>
                                          <option>Suite</option>
                                          <option>Standard</option>
                                       </select>
                                    </div>
                                 </div>
                                 <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Số khách</label>
                                    <div className="relative">
                                       <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><Users className="w-5 h-5" /></div>
                                       <input type="number" min={1} max={10} className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:border-slate-500 focus:ring-4 focus:ring-slate-100 outline-none transition-all duration-300 font-medium" value={guests} onChange={(e) => setGuests(Number(e.target.value))} />
                                    </div>
                                 </div>
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                 <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Ngày nhận phòng</label>
                                    <div className="relative">
                                       <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><Calendar className="w-5 h-5" /></div>
                                       <input type="date" className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:border-slate-500 focus:ring-4 focus:ring-slate-100 outline-none transition-all duration-300 font-medium" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
                                    </div>
                                 </div>
                                 <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Ngày trả phòng</label>
                                    <div className="relative">
                                       <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"><Calendar className="w-5 h-5" /></div>
                                       <input type="date" className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:border-slate-500 focus:ring-4 focus:ring-slate-100 outline-none transition-all duration-300 font-medium" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="pt-2">
                           <button onClick={handleBookingSubmit} disabled={status === "sending"} className="w-full bg-gradient-to-r from-teal-500 to-green-500 hover:from-teal-600 hover:to-green-600 text-white font-bold py-5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3 text-lg">
                              {status === "sending" ? (
                                 <>
                                    <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                                    Đang xử lý...
                                 </>
                              ) : (
                                 <>
                                    <CheckCircle className="w-6 h-6" />
                                    Xác nhận đặt phòng
                                 </>
                              )}
                           </button>
                        </div>
                     </div>
                  </div>
               )}
            </div>
         </div>
      </div>,
      document.body
   );
}
