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
  const listFilter = [
    { id: 1, name: "Giá dưới 500.000" },
    { id: 2, name: "500.000 - 1.000.000" },
    { id: 3, name: "1.000.000 - 3.000.000" },
    { id: 4, name: "3.000.000 - 5.000.000" },
    { id: 5, name: "5.000.000 - 7.000.000" },
    { id: 6, name: "Trên 7.000.000" },
  ];
  const listFilter2 = [
        { id: 1, name: "Tên A-Z" },
        { id: 2, name: "Tên Z-A" },
        { id: 3, name: "Giá Tăng Dần" },
        { id: 4, name: "Giá Giảm Dần" },
        { id: 5, name: "Mới Nhất" },
        { id: 6, name: "Cũ Nhất" },
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
        <div className="d-flex mb-3">
          <span className='me-2'>Lọc theo giá:</span>
          {listFilter.map((filter) => (
            <button key={filter.id} className="btn btn-outline-primary btn-sm me-2 mb-2">{filter.name}</button>
          ))}
        </div>
        <div className="d-flex mb-3">
          <span className='me-2'>Chọn theo tiêu chí: </span>
          {listFilter2.map((filter) => (
            <button key={filter.id} className="btn btn-outline-primary btn-sm me-2 mb-2">{filter.name}</button>
          ))}
        </div>
        <div className="row mt-2">
          {products.map((product) => (
            <div className="col-md-3 col-6 mb-4" key={product.id}>
              <div className="card h-100">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title span-vsip">{product.name}</h5>
                  <p className="card-text text-danger span-vip">{product.price} ₫</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
