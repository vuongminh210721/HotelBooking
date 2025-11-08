import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { X, User, Mail, Phone, Calendar, Users, Hotel, CheckCircle, Sparkles } from "lucide-react";
export default function Header() {
  const [showBooking, setShowBooking] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [roomType, setRoomType] = useState("Deluxe");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState<number>(2);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [heroThreshold, setHeroThreshold] = useState(0);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const computeThreshold = () => {
      if (location.pathname !== "/") {
        setHeroThreshold(0);
        setScrolled(true);
        return;
      }
      const hero = document.getElementById("UI_banner");
      const height = hero?.offsetHeight ?? window.innerHeight;
      setHeroThreshold(height);
      // header height ~64px
      const headerH = 64;
      setScrolled(window.scrollY > height - headerH);
    };

    const onScroll = () => {
      const headerH = 64;
      setScrolled(window.scrollY > Math.max(0, heroThreshold - headerH));
    };

    computeThreshold();
    window.addEventListener("resize", computeThreshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", computeThreshold);
      window.removeEventListener("scroll", onScroll);
    };
  }, [location.pathname, heroThreshold]);

  // Listen for global booking open events so other pages/components
  // can trigger the header booking modal without lifting state.
  useEffect(() => {
    const handleOpenBooking = (e: Event) => {
      setShowBooking(true);
    };
    window.addEventListener("openBooking", handleOpenBooking);
    return () => window.removeEventListener("openBooking", handleOpenBooking);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setError(null);
    if (!fullName || !email || !phone || !checkIn || !checkOut) {
      setError("Vui lòng điền đầy đủ thông tin");
      setStatus("error");
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("success");
      setTimeout(() => {
        setShowBooking(false);
        resetForm();
      }, 1500);
    } catch (err) {
      setError("Có lỗi xảy ra. Vui lòng thử lại sau.");
      setStatus("error");
    }
  };

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
  };

  const validateBooking = () => {
    if (!fullName.trim()) return "Vui lòng nhập họ tên.";
    if (!email.trim()) return "Vui lòng nhập email.";
    if (!/^\S+@\S+\.\S+$/.test(email)) return "Email không hợp lệ.";
    if (!phone.trim()) return "Vui lòng nhập số điện thoại.";
    if (!checkIn || !checkOut) return "Vui lòng chọn ngày nhận/trả phòng.";
    if (new Date(checkIn) > new Date(checkOut))
      return "Ngày trả phải sau ngày nhận.";
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
      setTimeout(() => {
        setShowBooking(false);
        resetForm();
      }, 1200);
    } catch (err) {
      setStatus("error");
      setError("Gửi đặt phòng thất bại, vui lòng thử lại.");
    }
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isHomePage
          ? scrolled
            ? "bg-white/60 backdrop-blur-md backdrop-saturate-150 border-b border-white/25 shadow-lg"
            : "bg-gradient-to-b from-black/50 to-transparent"
          : "bg-white/60 backdrop-blur-md backdrop-saturate-150 border-b border-white/25 shadow-lg"
      }`}
    >
      <div className="max-w-[1521px] mx-auto px-4 sm:px-8 lg:px-[125.4px]">
        <div className="flex items-center justify-between h-16 gap-4">
          <Logo
            scrolled={scrolled}
            isHomePage={isHomePage}
            className="py-0 px-[15px] flex-shrink-0"
          />

          <nav className="hidden lg:flex items-center gap-5 flex-1 justify-end px-[15px]">
            <Link
              to="/rooms"
              className={`font-['Be_Vietnam_Pro'] text-sm font-normal leading-6 capitalize transition-colors ${
                isHomePage && !scrolled
                  ? "text-white hover:text-teal-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
                  : "text-gray-900 hover:text-teal-600"
              }`}
            >
              HỆ THỐNG PHÒNG
            </Link>

            <Link
              to="/services"
              className={`font-['Be_Vietnam_Pro'] text-sm font-normal leading-6 capitalize transition-colors ${
                isHomePage && !scrolled
                  ? "text-white hover:text-teal-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
                  : "text-gray-900 hover:text-teal-600"
              }`}
            >
              DỊCH VỤ
            </Link>
            <Link
              to="/food"
              className={`font-['Be_Vietnam_Pro'] text-sm font-normal leading-6 capitalize transition-colors ${
                isHomePage && !scrolled
                  ? "text-white hover:text-teal-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
                  : "text-gray-900 hover:text-teal-600"
              }`}
            >
              ẨM THỰC
            </Link>
            <Link
              to="/locations"
              className={`font-['Be_Vietnam_Pro'] text-sm font-normal leading-6 capitalize transition-colors ${
                isHomePage && !scrolled
                  ? "text-white hover:text-teal-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
                  : "text-gray-900 hover:text-teal-600"
              }`}
            >
              VỊ TRÍ
            </Link>
            <Link
              to="/contact"
              className={`font-['Be_Vietnam_Pro'] text-sm font-normal leading-6 capitalize transition-colors ${
                isHomePage && !scrolled
                  ? "text-white hover:text-teal-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
                  : "text-gray-900 hover:text-teal-600"
              }`}
            >
              LIÊN HỆ
            </Link>
          </nav>
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => setShowBooking(true)}
              className={`flex px-4 py-2 justify-center items-center rounded transition-colors duration-300 whitespace-nowrap font-['Be_Vietnam_Pro'] text-sm font-normal leading-6 ${
                isHomePage && !scrolled
                  ? "text-white border border-white/70 hover:bg-white/10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
                  : "bg-[#48dfb2] text-white hover:bg-[#bff2bc] hover:text-black shadow-sm"
              }`}
            >
              Đặt ngay
            </button>
          </div>
        </div>
      </div>
      {showBooking &&
        createPortal(
    <div className="fixed inset-0 z-[9999] overflow-y-auto">
      <div className="min-h-screen px-4 py-6 flex items-center justify-center">
        {/* Backdrop with blur */}
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={() => {
            setShowBooking(false);
            resetForm();
          }}
        />

        {/* Background decoration */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Modal Panel */}
        <div className="bg-white rounded-3xl shadow-2xl transform transition-all max-w-4xl w-full mx-auto relative z-10 overflow-hidden">
          {/* Header with gradient */}
          <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-8 py-6 relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <Hotel className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    Đặt phòng ngay
                    <Sparkles className="w-5 h-5" />
                  </h3>
                  <p className="text-white/90 text-sm">Trải nghiệm tuyệt vời đang chờ bạn</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setShowBooking(false);
                  resetForm();
                }}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full transition-all duration-300 hover:rotate-90"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {status === "success" ? (
            <div className="p-12 flex flex-col items-center justify-center text-center">
              <div className="bg-gradient-to-br from-green-400 to-emerald-500 p-8 rounded-full mb-6 animate-bounce shadow-xl">
                <CheckCircle className="w-20 h-20 text-white" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                Đặt phòng thành công! 🎉
              </h3>
              <p className="text-gray-600 text-lg mb-2">
                Cảm ơn bạn đã tin tưởng lựa chọn chúng tôi.
              </p>
              <p className="text-gray-500">
                Chúng tôi sẽ gửi email xác nhận trong giây lát.
              </p>
            </div>
          ) : (
            <div className="p-8">
              <div className="space-y-6">
                {error && (
                  <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-2">
                    <span className="text-red-500">⚠️</span>
                    {error}
                  </div>
                )}

                {/* Thông tin cá nhân */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl border-2 border-blue-100">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <User className="w-5 h-5 text-blue-600" />
                    Thông tin cá nhân
                  </h4>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">
                        Họ và tên
                      </label>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                          <User className="w-5 h-5" />
                        </div>
                        <input
                          type="text"
                          placeholder="Nguyễn Văn A"
                          className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 font-medium"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Email
                        </label>
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <Mail className="w-5 h-5" />
                          </div>
                          <input
                            type="email"
                            placeholder="email@example.com"
                            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 font-medium"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Số điện thoại
                        </label>
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <Phone className="w-5 h-5" />
                          </div>
                          <input
                            type="tel"
                            placeholder="0901234567"
                            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 font-medium"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Thông tin đặt phòng */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border-2 border-purple-100">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Hotel className="w-5 h-5 text-purple-600" />
                    Thông tin đặt phòng
                  </h4>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Loại phòng
                        </label>
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <Hotel className="w-5 h-5" />
                          </div>
                          <select
                            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300 font-medium appearance-none bg-white cursor-pointer"
                            value={roomType}
                            onChange={(e) => setRoomType(e.target.value)}
                          >
                            <option>Deluxe</option>
                            <option>Suite</option>
                            <option>Standard</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Số khách
                        </label>
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <Users className="w-5 h-5" />
                          </div>
                          <input
                            type="number"
                            min={1}
                            max={10}
                            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300 font-medium"
                            value={guests}
                            onChange={(e) => setGuests(Number(e.target.value))}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Ngày nhận phòng
                        </label>
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <Calendar className="w-5 h-5" />
                          </div>
                          <input
                            type="date"
                            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300 font-medium"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Ngày trả phòng
                        </label>
                        <div className="relative">
                          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <Calendar className="w-5 h-5" />
                          </div>
                          <input
                            type="date"
                            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300 font-medium"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    onClick={handleBookingSubmit}
                    disabled={status === "sending"}
                    className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold py-5 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3 text-lg"
                  >
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
        )}
    </header>
  );
}
