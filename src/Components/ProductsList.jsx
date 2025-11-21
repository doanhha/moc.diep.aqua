import React from 'react'
import Header from './Header'

const ProductsList = () => {
    return (
        <>
        <Header />
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
        </>
    )
}

export default ProductsList
