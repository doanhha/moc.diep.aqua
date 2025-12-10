import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// import CSS của Swiper
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";

const Producttop = () => {
  const products = [
    { id: 1, name: "Lorem ipsum dolor sit amet.", price: "1.000.000đ", status: "Còn hàng", badge: "Developer", image: "./assets/img/product-1.webp",},
    { id: 2, name: "Lorem ipsum dolor sit amet.", price: "1.000.000đ", status: "Còn hàng", badge: "Developer", image: "./assets/img/product-1.webp",},
    { id: 3, name: "Lorem ipsum dolor sit amet.", price: "1.000.000đ", status: "Còn hàng", badge: "Developer", image: "./assets/img/product-1.webp",},
    { id: 4, name: "Lorem ipsum dolor sit amet.", price: "1.000.000đ", status: "Còn hàng", badge: "Developer", image: "./assets/img/product-1.webp",},
    { id: 5, name: "Lorem ipsum dolor sit amet.", price: "1.000.000đ", status: "Còn hàng", badge: "Developer", image: "./assets/img/product-1.webp",},
    { id: 6, name: "Lorem ipsum dolor sit amet.", price: "1.000.000đ", status: "Còn hàng", badge: "Developer", image: "./assets/img/product-1.webp",},
    { id: 7, name: "Lorem ipsum dolor sit amet.", price: "1.000.000đ", status: "Còn hàng", badge: "Developer", image: "./assets/img/product-1.webp",},
  ];

  return (
    <>
      <div className="container featured-products mt-0">
        {/* Header / Tiêu đề */}
        <div className="block-title">
          <div className="head mt-4 ml-4">
            <span className="icon">
              <img
                src="//bizweb.dktcdn.net/100/533/545/themes/971699/assets/save-icon.png?1758000527031"
                alt="Giờ vàng giảm giá!"
                className="img-flash-sale"
              />
            </span>
            <div className="heading-title span-vip">
              <h2>
                <a href="san-pham-ban-chay" title="Giờ vàng giảm giá!">
                  Giờ vàng giảm giá!
                </a>
              </h2>
            </div>
          </div>
          <div className="timer">
            <div
              className="time"
              data-countdown="countdown"
              data-date="2-13-2026-12-00-00"
            />
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={4}
          pagination={{ clickable: true }}
          // Giữ class để dùng lại css cũ nếu có
          className="card-wrapper mt-4 card-list"
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}>
          {products.map((item) => (
            <SwiperSlide key={item.id} className="card-item">
              <a href="#" className="card-link">
                <img
                  src={item.image}
                  alt={item.name}
                  className="card-image"
                />
                <h2 className="card-title">{item.name}</h2>
                <span className="span-vip">{item.price}</span>
                <p>{item.status}</p>
                <p className="badge">{item.badge}</p>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Producttop;
