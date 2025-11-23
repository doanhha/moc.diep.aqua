import React from 'react'
import Topbar from '../Layout/Topbar'
import Menu from '../Layout/Menu'
import SearchLogo from '../Layout/SearchLogo'
import { Swiper, SwiperSlide } from 'swiper/react'
import Footer from "./Footer.jsx";
import 'swiper/css';

const ProductsList = () => {
    const imagesBanner = [
        { id: 1, name: 'Banner', image: "./assets/img/product-image-1.webp" },
    ];
    const productSale = [
        { id: 1, name: "Tôm Càng Xanh Sống", origin: "Xuất xứ: Việt Nam", price: "1.000.000", image: "./assets/img/product-1.webp" },
        { id: 1, name: "Tôm Càng Xanh Sống", origin: "Xuất xứ: Việt Nam", price: "1.000.000", image: "./assets/img/product-2.webp" },
        { id: 1, name: "Tôm Càng Xanh Sống", origin: "Xuất xứ: Việt Nam", price: "1.000.000", image: "./assets/img/product-1.webp" },
        { id: 1, name: "Tôm Càng Xanh Sống", origin: "Xuất xứ: Việt Nam", price: "1.000.000", image: "./assets/img/product-1.webp" },
        { id: 1, name: "Tôm Càng Xanh Sống", origin: "Xuất xứ: Việt Nam", price: "1.000.000", image: "./assets/img/product-1.webp" },
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
    const products = [
        { id: 1, name: "Cá Hồi Xông Khói Vị Truyền Thống", price: "269.000", origin: "Xuất xứ: Việt Nam", image: "./assets/img/pruduct-2.webp", },
        { id: 2, name: "Cá Hồi Cắt Khoanh", price: "1.000.000", origin: "Xuất xứ: Việt Nam", image: "./assets/img/pruduct-2.webp", },
        { id: 3, name: "Cá Hồi Cắt Khoanh", price: "1.000.000", origin: "Xuất xứ: Việt Nam", image: "./assets/img/pruduct-2.webp", },
        { id: 4, name: "Cá Hồi Cắt Khoanh", price: "1.000.000", origin: "Xuất xứ: Việt Nam", image: "./assets/img/pruduct-2.webp", },
        { id: 5, name: "Cá Hồi Cắt Khoanh", price: "1.000.000", origin: "Xuất xứ: Việt Nam", image: "./assets/img/pruduct-2.webp", },
        { id: 6, name: "Cá Hồi Xông Khói Vị Truyền Thống", price: "269.000", origin: "Xuất xứ: Việt Nam", image: "./assets/img/pruduct-2.webp", },
        { id: 7, name: "Cá Hồi Cắt Khoanh", price: "1.000.000", origin: "Xuất xứ: Việt Nam", image: "./assets/img/pruduct-2.webp", },
        { id: 8, name: "Cá Hồi Cắt Khoanh", price: "1.000.000", origin: "Xuất xứ: Việt Nam", image: "./assets/img/pruduct-2.webp", },
        { id: 9, name: "Cá Hồi Cắt Khoanh", price: "1.000.000", origin: "Xuất xứ: Việt Nam", image: "./assets/img/pruduct-2.webp", },
        { id: 10, name: "Cá Hồi Cắt Khoanh", price: "1.000.000", origin: "Xuất xứ: Việt Nam", image: "./assets/img/pruduct-2.webp", },
    ];
    return (
        <>
            <Topbar />
            <SearchLogo />
            <Menu />
            <div style={{ backgroundColor: "#EBF5FF" }} className="bg-home">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8 info-left">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a style={{ textDecoration: "none", color: "black", }} href="#">Trang chủ</a></li>
                                    <li className="breadcrumb-item active span-vip" aria-current="page">Tất cả sản phẩm</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {imagesBanner.map((item =>
                <div className="container">
                    <img src={item.image} alt={item.name} className="img-banner" />
                    <h2 className="sale">Hàng giá tốt</h2>
                    {/* list products */}
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={3}
                    >
                        {productSale.map((productItem) => (
                            <SwiperSlide key={productItem.id}>
                                <div className="product-sale-item">
                                    <img
                                        src={productItem.image}
                                        alt=""
                                        className="product-img-sale"
                                    />

                                    <div className="product-info">
                                        <h4 className="product-name">{productItem.name}</h4>
                                        <p style={{ fontSize: 16, color: "#595959ff" }} className="product-origin">{productItem.origin}</p>
                                        <p style={{ color: "red" }} className="product-price">{productItem.price} VND</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                    <div className="list-filter">
                        <span className="filter-title">Đặc sản vùng miền</span>
                        {listFilter.map(filter => (
                            <span key={filter.id} className="filter-item">{filter.name}đ</span>
                        ))}
                    </div>
                    <div className="list-filter">
                        <span className="filter-title">Chọn theo tiêu chí</span>
                        {listFilter2.map(filter => (
                            <span key={filter.id} className="filter-item">{filter.name}</span>
                        ))}
                    </div>
                    <h1 style={{ fontSize: 25, textTransform: 'uppercase' }} className="text-center mb-5">Tất cả sản phẩm</h1>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {products.map((item) =>
                            <div className="col set-width-product text-center" key={item.id}>
                                <div className="card">
                                    <img src={item.image} className="card-img-top" alt={item.name} title={item.name} />
                                    <div className="card-body p-0">
                                        <h4 className="card-title">{item.name}</h4>
                                        <p className="card-text">{item.origin}</p>
                                        <p className="price-products">{item.price}đ </p>
                                    </div>
                                    <div className="group-action">
                                        <button className="btn-card-shop"><i className="ti ti-shopping-cart" /></button>
                                        <button className="btn-view-product"></button>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            ))}
            <Footer/>
        </>
    )
}

export default ProductsList
