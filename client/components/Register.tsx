import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
   const [fullName, setFullName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirm, setConfirm] = useState("");
   const [error, setError] = useState<string | null>(null);
   const navigate = useNavigate();

   const validate = () => {
      if (!fullName.trim()) return "Vui lòng nhập họ tên.";
      if (!email.trim()) return "Vui lòng nhập email.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Email không hợp lệ.";
      if (password.length < 6) return "Mật khẩu phải có ít nhất 6 ký tự.";
      if (password !== confirm) return "Mật khẩu nhập lại không khớp.";
      return null;
   };

   const submit = (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);
      const v = validate();
      if (v) return setError(v);

      // Placeholder: create account locally, then navigate to login
      // In a real app you would call backend API here
      alert("Tạo tài khoản thành công. Vui lòng đăng nhập.");
      navigate("/login");
   };

   return (
      <div className="max-w-xl mx-auto py-20 px-4">
         <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-4">Đăng ký</h2>
            {error && <div className="mb-4 text-sm text-red-600">{error}</div>}
            <form onSubmit={submit}>
               <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Họ và tên</label>
                  <input value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full border px-3 py-2 rounded-md" />
               </div>
               <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border px-3 py-2 rounded-md" />
               </div>
               <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                     <label className="block text-sm font-medium mb-2">Mật khẩu</label>
                     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border px-3 py-2 rounded-md" />
                  </div>
                  <div>
                     <label className="block text-sm font-medium mb-2">Nhập lại mật khẩu</label>
                     <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} className="w-full border px-3 py-2 rounded-md" />
                  </div>
               </div>

               <div className="flex items-center justify-between gap-4">
                  <button className="bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600">Tạo tài khoản</button>
                  <Link to="/login" className="text-sm text-gray-600 hover:underline">Đã có tài khoản? Đăng nhập</Link>
               </div>
            </form>
         </div>
      </div>
   );
}
