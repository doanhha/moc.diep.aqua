import React from 'react'
import Topbar from '../Layout/Topbar'
import Menu from '../Layout/Menu'
import SearchLogo from '../Layout/SearchLogo'
import { Swiper, SwiperSlide } from 'swiper/react'

const ProductsList = () => {
    const imagesBanner = [
        { id: 1, name: 'Banner', image: "./assets/img/product-image-1.webp" }
    ]
    const productSale = [
        { id: 1, name: "Tôm Càng Xanh Sống", origin: "Xuất xứ: Việt Nam", price: "1.000.000", image: "./assets/img/product-1.webp" },
        { id: 1, name: "Tôm Càng Xanh Sống", origin: "Xuất xứ: Việt Nam", price: "1.000.000", image: "./assets/img/product-2.webp" },
        { id: 1, name: "Tôm Càng Xanh Sống", origin: "Xuất xứ: Việt Nam", price: "1.000.000", image: "./assets/img/product-1.webp" },
        { id: 1, name: "Tôm Càng Xanh Sống", origin: "Xuất xứ: Việt Nam", price: "1.000.000", image: "./assets/img/product-1.webp" },
        { id: 1, name: "Tôm Càng Xanh Sống", origin: "Xuất xứ: Việt Nam", price: "1.000.000", image: "./assets/img/product-1.webp" },
    ]
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
                                        <p style={{fontSize: 16, color: "#595959ff"}} className="product-origin">{productItem.origin}</p>
                                        <p style={{color: "red"}} className="product-price">{productItem.price} VND</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            ))}

        </>
    )
}

export default ProductsList
