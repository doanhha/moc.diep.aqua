import React from 'react'

export default function Mayloc() {
  const products = [
    { id: 1, name: "Thức ăn cá cảnh Hikari Mix 5 in 1 cao cấp cho cá cảnh tăng màu tăng size", price: "135.000", image: "./assets/img/pruduct-2.webp", icon: "./assets/img/shopping-cart-svgrepo-com.svg", iconView: "./assets/img/eye-svgrepo-com.svg" },
    { id: 2, name: "Đèn Lon thủy sinh KZJ RM4, chiếc đèn chuyên chơi Biotope độc đáo", price: "1.650.000", image: "./assets/img/pruduct-2.webp", icon: "./assets/img/shopping-cart-svgrepo-com.svg", iconView: "./assets/img/eye-svgrepo-com.svg" },
    { id: 3, name: "Đèn KZJ RA3 hệ LED WRGB+UV chuyên dùng cho bể Biotope", price: "1.400.000", image: "./assets/img/pruduct-2.webp", icon: "./assets/img/shopping-cart-svgrepo-com.svg", iconView: "./assets/img/eye-svgrepo-com.svg" },
    { id: 4, name: "Máy Lọc Chìm Sunsun YQP: Giải Pháp Toàn Diện Cho Bể Cá Cảnh Luôn Sạch Trong", price: "145.000", image: "./assets/img/pruduct-2.webp", icon: "./assets/img/shopping-cart-svgrepo-com.svg", iconView: "./assets/img/eye-svgrepo-com.svg" },
    { id: 5, name: "Lọc thác Sunsun Xiaoli EBL 401, 402, 403", price: "105.000", image: "./assets/img/pruduct-2.webp", icon: "./assets/img/shopping-cart-svgrepo-com.svg", iconView: "./assets/img/eye-svgrepo-com.svg" },
    { id: 6, name: "Máy sủi Oxy tích điện bể cá Sunsun YQB cao cấp siêu êm", price: "188.000", image: "./assets/img/pruduct-2.webp", icon: "./assets/img/shopping-cart-svgrepo-com.svg", iconView: "./assets/img/eye-svgrepo-com.svg" },
    { id: 7, name: "Máy thổi luồng SUNSUN JVP – Giải pháp tạo dòng chảy cho bể cá", price: "320.000", image: "./assets/img/pruduct-2.webp", icon: "./assets/img/shopping-cart-svgrepo-com.svg", iconView: "./assets/img/eye-svgrepo-com.svg" },
    { id: 8, name: "Lọc thùng tách phân Sunsun YWY 800 - tích hợp tách phân, xả đáy", price: "1.530.000", image: "./assets/img/pruduct-2.webp", icon: "./assets/img/shopping-cart-svgrepo-com.svg", iconView: "./assets/img/eye-svgrepo-com.svg" },
    { id: 9, name: "Đèn rọi chỉnh tiêu cự HBPRO, 3 chế độ màu cho bể cá", price: "119.000", image: "./assets/img/pruduct-2.webp", icon: "./assets/img/shopping-cart-svgrepo-com.svg", iconView: "./assets/img/eye-svgrepo-com.svg" },
    { id: 10, name: "Detox Koika - Xử lý Clo, kim loại nặng, chống sốc cá và khử độc tố", price: "31.000", image: "./assets/img/pruduct-2.webp", icon: "./assets/img/shopping-cart-svgrepo-com.svg", iconView: "./assets/img/eye-svgrepo-com.svg" },
  ];
  return (
    <>
      <nav aria-label="breadcrumb" className="py-1" style={{ backgroundColor: 'rgb(235, 245, 255)' }}>
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a className='text-dark text-decoration-none' href="#">Trang chủ</a></li>
            <li className="breadcrumb-item"><a className='text-dark text-decoration-none' href="#">Sản Phẩm</a></li>
            <li className="breadcrumb-item active span-vip" aria-current="page">Máy lọc, Vật Liệu Lọc</li>
          </ol>
        </div>
      </nav>
      <div className="container my-4">
        <h3 className='span-vip'>Máy lọc, Vật Liệu Lọc</h3>
        <div className="row">
          <div className="col-md-3 col-6 mb-4">
            <div className="card h-100">
              <img src="https://bizweb.dktcdn.net/100/438/408/products/may-loc-nuoc-ho-ca-koi-atman-at-303-01.jpg?v=1669942636000" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title span-vip">Máy Lọc Nước Hồ Cá Koi Atman AT-303</h5>
                <p className="card-text text-danger span-vip">1,200,000 ₫</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
