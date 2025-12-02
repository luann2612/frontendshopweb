import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import SummaryApi from "../common";
import Context from "../context";
import ROLE from "../common/role";
import loginIcons from "../assest/signin.gif";

// Giả sử bạn có một logo khác cho Shop, nếu không bạn có thể dùng loginIcons
import shopLogo from "../assest/shop-logo-placeholder.png"; 

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const user = useSelector((state) => state?.user?.user);
  const { fetchUserDetails, fetchUserAddToCart } = useContext(Context);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(SummaryApi.signIn.url, {
        method: SummaryApi.signIn.method,
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (result.success) {
        toast.success(result.message);
        await fetchUserDetails();
        await fetchUserAddToCart();

        if (user?.role === ROLE.ADMIN) {
          navigate("/admin-panel");
        } else {
          navigate("/");
        }
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Lỗi kết nối máy chủ!");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-white to-red-100 px-4 py-8">
      {/* Container chung cho Logo và Form */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        // Sử dụng grid để tạo bố cục 2 cột, chỉ hiển thị 2 cột từ màn hình md trở lên
        className="w-full max-w-5xl grid md:grid-cols-2 bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl overflow-hidden" 
      >
        {/* Logo Shop - Cột 1 (Bên trái) */}
        <div className="hidden md:flex flex-col justify-center items-center p-12 bg-blue-600 text-white">
            {/* Thay thế shopLogo bằng đường dẫn ảnh logo thật của bạn */}
            <img 
                src={shopLogo} 
                alt="Shop Logo" 
                className="w-40 h-40 object-cover rounded-full shadow-xl border-4 border-white mb-6"
            />
            <h2 className="text-4xl font-extrabold tracking-tight text-center">
                MOBILESHOP
            </h2>
            <p className="text-xl italic mt-2 text-red-100 text-center">
                "Nơi mua sắm tuyệt vời nhất!"
            </p>
            <div className="mt-8">
              <p className="text-sm border border-white rounded-full px-4 py-1">
                Kết nối ngay để nhận ưu đãi!
              </p>
            </div>
        </div>

        {/* Form Đăng nhập - Cột 2 (Bên phải) */}
        <div className="p-8">
            <div className="w-full max-w-sm mx-auto">
                {/* Logo & Title */}
                <div className="text-center mb-6">
                    <img
                        src={loginIcons}
                        alt="Login Icon"
                        className="w-24 h-24 rounded-full mx-auto shadow-lg border border-red-200"
                    />
                    <h1 className="text-3xl font-bold text-blue-600 mt-4">Đăng nhập</h1>
                    <p className="text-gray-500 text-sm mt-1">
                        Chào mừng bạn quay lại 
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Email */}
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Nhập email của bạn..."
                            value={data.email}
                            onChange={handleOnChange}
                            required
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 shadow-sm"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">
                            Mật khẩu
                        </label>
                        <div className="flex items-center px-4 py-2 border rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-red-400">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Nhập mật khẩu..."
                                value={data.password}
                                onChange={handleOnChange}
                                required
                                className="w-full outline-none bg-transparent"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((prev) => !prev)}
                                className="text-gray-600 text-xl ml-2 focus:outline-none"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        <div className="text-right mt-1">
                            <Link
                                to="/forgot-password"
                                className="text-sm text-blue-500 hover:underline hover:text-red-600"
                            >
                                Quên mật khẩu?
                            </Link>
                        </div>
                    </div>

                    {/* Submit */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-pink-500 text-white py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
                    >
                        Đăng nhập
                    </motion.button>
                </form>

                {/* Signup link */}
                <p className="text-center text-sm mt-6 text-gray-700">
                    Bạn chưa có tài khoản?{" "}
                    <Link
                        to="/sign-up"
                        className="text-blue-600 hover:text-red-700 hover:underline font-medium"
                    >
                        Đăng ký ngay
                    </Link>
                </p>
            </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Login;