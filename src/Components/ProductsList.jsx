import React from 'react'
import Header from './Header'
import Topbar from '../Layout/Topbar'
import Menu from '../Layout/Menu'
import SearchLogo from '../Layout/SearchLogo'

const ProductsList = () => {
    const imagesBanner = [
        { id: 1, name: 'Banner', image: "./assets/img/product-image-1.webp" }
    ]
    const pruductSale = [
        {id: 1, Name: "Tôm Càng Xanh Sống", origin: "Xuất xứ: Việt Nam", price: "1.000.000"},
        {id: 1, Name: "Tôm Càng Xanh Sống", origin: "Xuất xứ: Việt Nam", price: "1.000.000"},
        {id: 1, Name: "Tôm Càng Xanh Sống", origin: "Xuất xứ: Việt Nam", price: "1.000.000"},
        {id: 1, Name: "Tôm Càng Xanh Sống", origin: "Xuất xứ: Việt Nam", price: "1.000.000"},
        {id: 1, Name: "Tôm Càng Xanh Sống", origin: "Xuất xứ: Việt Nam", price: "1.000.000"},
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
                                    <li className="breadcrumb-item"><a style={{ textDecoration: "none", color: "black" }} href="#">Trang chủ</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Giới thiệu</li>
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
                </div>
            ))}

        </>
    )
}

export default ProductsList
