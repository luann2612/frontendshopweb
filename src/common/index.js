const backendDomain = "https://api.luannnguyen.id.vn";

const SummaryApi = {
  // Authentication & User
  signUP: {
    url: `${backendDomain}/api/signup`,
    method: "post",
  },
  signIn: {
    url: "/api/signin",
    method: "post",
  },
  current_user: {
    url: `${backendDomain}/api/user-details`,
    method: "get",
  },
  // KHÔNG CÒN API SIGNUP CŨ GÂY LỖI 404

  // ✅ API MỚI CHO QUY TRÌNH ĐĂNG KÝ 1-BƯỚC

  sendOtpToSignUp: {
    url: `\${backendDomain}/api/send-otp-to-signup`,
    //"https://api.luannnguyen.id.vn/api/send-otp-to-signup",
    method: "POST",
  },
  verifyOtp: {
    url: `\${backendDomain}/api/verify-otp`, 
    //"https://api.luannnguyen.id.vn/api/verify-otp",
    method: "POST",
  },
  setPassword: {
    url: `\${backendDomain}/api/set-password`,
    //"https://api.luannnguyen.id.vn/api/set-password",
    method: "POST",
  },
  logout_user: {
    url: `${backendDomain}/api/userLogout`,
    method: "get",
  },
  allUser: {
    url: `${backendDomain}/api/all-user`,
    method: "get",
  },
  updateUser: {
    url: `${backendDomain}/api/update-user`,
    method: "post",
  },
  deleteUser: {
    url: `${backendDomain}/api/delete-user`,
    method: "delete",
  },

  // Product
  uploadProduct: {
    url: `${backendDomain}/api/upload-product`,
    method: "post",
  },
  allProduct: {
    url: `${backendDomain}/api/get-product`,
    method: "get",
  },
  updateProduct: {
    url: `${backendDomain}/api/update-product`,
    method: "post",
  },
  categoryProduct: {
    url: `${backendDomain}/api/get-categoryProduct`,
    method: "get",
  },
  categoryWiseProduct: {
    url: `${backendDomain}/api/category-product`,
    method: "post",
  },
  productDetails: {
    url: `${backendDomain}/api/product-details`,
    method: "post",
  },
  searchProduct: {
    url: `${backendDomain}/api/search`,
    method: "get",
  },
  filterProduct: {
    url: `${backendDomain}/api/filter-product`,
    method: "post",
  },
  deleteProduct: {
    url: `${backendDomain}/api/products`,
    method: "delete",
  },

  // Cart & Orders
  addToCartProduct: {
    url: `${backendDomain}/api/addtocart`,
    method: "post",
  },
  addToCartProductCount: {
    url: `${backendDomain}/api/countAddToCartProduct`,
    method: "get",
  },
  addToCartProductView: {
    url: `${backendDomain}/api/view-card-product`,
    method: "get",
  },
  updateCartProduct: {
    url: `${backendDomain}/api/update-cart-product`,
    method: "post",
  },
  deleteCartProduct: {
    url: `${backendDomain}/api/delete-cart-product`,
    method: "post",
  },
  deleteCart: {
    // Đổi tên từ cleanCart sang deleteCart
    url: `${backendDomain}/api/clean-cart`,
    method: "DELETE",
  },

  processPayment: {
    url: `${backendDomain}/api/payment`,
    method: "POST",
  },
  confirmPayment: {
    url: `${backendDomain}/api/confirm-payment`,
    method: "POST",
  },
  orders: {
    url: `${backendDomain}/api/orders`,
    method: "GET",
  },
  getUserOrders: {
    url: `${backendDomain}/api/user`,
    method: "GET",
  },
  deleteOrder: {
    url: `${backendDomain}/api/orders`,
    method: "DELETE",
  },
  paypalCreateOrder: {
    url: `${backendDomain}/api/paypal_create_order`,
    method: "post",
  },

  // 2. Xác nhận Capture (Frontend gọi -> Backend gọi PayPal)
  paypalCaptureOrder: {
    url: `${backendDomain} /api/paypal_capture_order`,
    method: "post",
  },
  vnpayCreatePaymentUrl: {
    url: `${backendDomain}/api/payment/create_payment_url`,
    method: "POST",
  },
  // Password & Admin
  forgotPassword: {
    url: `${backendDomain}/api/forgot-password`,
    method: "POST",
  },
  resetPassword: {
    url: `${backendDomain}/api/reset-password`,
    method: "POST",
  },
  changePassword: {
    url: `${backendDomain}/api/change-password`,
    method: "POST",
  },
  verifyOTP: {
    url: `${backendDomain}/api/verify-otp`,
    method: "POST",
  },
  twoFA_generate: {
    url: `${backendDomain}/api/2fa/generate`,
    method: "get",
  },
  twoFA_verify: {
    url: `${backendDomain}/api/2fa/verify`,
    method: "post",
  },

  // ✅ FIX LỖI LOCALHOST (ĐÃ THÊM backendDomain)
  updateOrderStatus: (orderId) => ({
    url: `${backendDomain}/api/orders/${orderId}/status`,
    method: "PUT",
  }),
};

export default SummaryApi;
