import 'swiper/css';
import Topbar from '../Layout/Topbar'
import Menu from '../Layout/Menu'
import SearchLogo from '../Layout/SearchLogo'
import { Swiper, SwiperSlide } from 'swiper/react'
import Footer from "./Footer.jsx";
import Allproducts from '../Layout/Allproducts.jsx'
import { useMemo, useState } from 'react';

const ProductsList = () => {
    const listFilter = Allproducts.listFilter;
    const listFilter2 = Allproducts.listFilter2; 
    const rawProducts = Allproducts.products.map(p => ({
        ...p,
        priceNumber: Number(p.price.replace(/\./g, "")),
    }));
    const products = rawProducts.sort((a, b) => a.id - b.id);
    const [selectedPriceFilter, setSelectedPriceFilter] = useState(null);
    const getPriceRange = (id) => {
        switch (id) {
            case 1: return { min: 0, max: 500000 };
            case 2: return { min: 500000, max: 1000000 };
            case 3: return { min: 1000000, max: 3000000 };
            case 4: return { min: 3000000, max: 5000000 };
            case 5: return { min: 5000000, max: 7000000 };
            case 6: return { min: 7000000, max: Infinity };
            default: return null; // không lọc theo giá
        }
    };
    const priceRange = getPriceRange(selectedPriceFilter);
    const PRICE_RANGE = priceRange ? products.filter(item => item.priceNumber >= priceRange.min && item.priceNumber <= priceRange.max) : products;
    const filteredProducts = useMemo(() => {
        let data = [...products];
        const range = getPriceRange(setSelectedPriceFilter);
        if (range) {
            data = data.filter(p => p.priceNumber >= range.min && p.priceNumber <= range.max);
        }
        
    });
    // const filteredProducts = priceRange
    //     ? products.filter(item =>
    //         item.priceNumber >= priceRange.min &&
    //         item.priceNumber <= priceRange.max
    //     ) 
    //     : products;
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
            {Allproducts.imagesBanner.map((item =>
                <div className="container">
                    <img src={item.image} alt={item.name} className="img-banner" />
                    <h2 className="sale">Hàng giá tốt</h2>
                    {/* list products */}
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={3}
                    >
                        {Allproducts.productSale.map((productItem) => (
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
                        <span className="filter-title">Lọc theo khoảng giá</span>
                        {listFilter.map(filter => (
                            <button key={filter.id}
                                className={"filter-item " + (selectedPriceFilter === filter.id ? "filter-item-active" : "")}
                                onClick={() => setSelectedPriceFilter(selectedPriceFilter === filter.id ? null : filter.id)}>
                                {filter.name}
                            </button>
                        ))}
                    </div>
                    <div className="list-filter">
                        <span className="filter-title">Chọn theo tiêu chí</span>
                        {listFilter2.map(filter => (
                            <button key={filter.id} className="filter-item">{filter.name}</button>
                        ))};
                    </div>
                    <h1 style={{ fontSize: 25, textTransform: 'uppercase' }} className="text-center mb-5">Tất cả sản phẩm</h1>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {PRICE_RANGE.map((item) =>
                            <div className="col set-width-product text-center" key={item.id}>
                                <div className="card">
                                    <img src={item.image} className="card-img-top" alt={item.name} title={item.name} />
                                    <div className="card-body p-0">
                                        <h4 className="card-title">{item.name}</h4>
                                        <p className="card-text">{item.origin}</p>
                                        <p className="price-products">{item.price}đ </p>
                                    </div>
                                    <div className="group-action">
                                        <button className="btn-card-shop"><img style={{ width: 30, height: 30 }} src={item.icon} alt="Add to cart" title='Thêm Giỏ Hàng'/></button>
                                        <button className="btn-view-product"><img style={{ width: 30, height: 30 }} src={item.iconView} alt="View product" title='Xem Thêm'/></button>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                    <nav aria-label="Page navigation example">
                        <ul style={{ display: "flex", justifyContent: "center", gap: "5px", marginTop: "20px" }} className="pagination">
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#" aria-label="Next">
                                    <span aria-hidden="true">»</span>
                                </a>
                            </li>

                        </ul>
                    </nav>

                </div>
            ))}
            <Footer />
        </>
    )
}

export default ProductsList
