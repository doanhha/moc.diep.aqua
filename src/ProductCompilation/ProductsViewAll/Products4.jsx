import React from 'react'


const Products4 = () => { 
    const products = [
        { id: 1, name: "Cá Hồi Xông Khói Vị Truyền Thống", price: "269.000", origin: "Xuất xứ: Việt Nam", image: "./assets/img/pruduct-2.webp", },
        { id: 2, name: "Cá Hồi Cắt Khoanh", price: "1.000.000", origin: "Xuất xứ: Việt Nam", image: "./assets/img/pruduct-2.webp", },
        { id: 3, name: "Cá Hồi Cắt Khoanh", price: "1.000.000", origin: "Xuất xứ: Việt Nam", image: "./assets/img/pruduct-2.webp", },
        { id: 4, name: "Cá Hồi Cắt Khoanh", price: "1.000.000", origin: "Xuất xứ: Việt Nam", image: "./assets/img/pruduct-2.webp", },
        { id: 5, name: "Cá Hồi Cắt Khoanh", price: "1.000.000", origin: "Xuất xứ: Việt Nam", image: "./assets/img/pruduct-2.webp", },
    ];
    return (
        <>
            <div className="container">
                <h1 style={{fontSize: 25, textTransform: 'uppercase'}} className="text-center mb-5">Hải sản nhập khẩu</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {products.map((item) => 
                    <div className="col set-width-product text-center" key={item.id}>
                        <div className="card">
                            <img src={item.image} className="card-img-top" alt={item.name} title={item.name}/>
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
                <div className="text-center mrt-30 mt-4 mb-4">
                    <a href="san-pham-moi" title="Xem tất cả" className="btn btn-view">Xem tất cả</a>
                </div>
            </div>
        </>
    )
}

export default Products4
