import React from 'react'

const Products = () => {
    const catalogProduct = [
        { id: 1, image: "./assets/img/fridge.webp", title: "Đèn Thủy Sinh" },
        { id: 2, image: "./assets/img/fridge.webp", title: "Phụ Kiện Thủy Sinh" },
        { id: 3, image: "./assets/img/fridge.webp", title: "Lọc - Vật Liệu lọc" },
        { id: 4, image: "./assets/img/fridge.webp", title: "Vi Sinh Thủy Sinh" },
        { id: 6, image: "./assets/img/fridge.webp", title: "Thức Ăn Cá Cảnh" },
        { id: 7, image: "./assets/img/fridge.webp", title: "Sưởi Bể Cá Thủy Sinh" },
        { id: 8, image: "./assets/img/fridge.webp", title: "Máy sủi Oxy" },
        { id: 9, image: "./assets/img/fridge.webp", title: "Phụ Kiện Trang Trí - Cây Thủy Sinh" },
        { id: 10, image: "./assets/img/fridge.webp", title: "Phân Nền - Cốt Nền - Phân Nước" },
        { id: 12, image: "./assets/img/fridge.webp", title: "Bể Kính" },
        { id: 13, image: "./assets/img/fridge.webp", title: "CO2 Thủy Sinh" },
        { id: 14, image: "./assets/img/fridge.webp", title: "Tẩy Cặn Canxi" },
    ];
    return (
        <>
            <div className="slider-product mt-5 mb-5 container ">
                <h2>Danh mục sản phẩm</h2>
                    <div className="row">
                {catalogProduct.map((item) =>
                        <div key={item.id} className="col-6 col-sm-4 col-md-3 col-lg-2 products-col ">
                            <div className="category-item">
                                <a href><img src={item.image} alt={item.title} /></a>
                            </div>
                            <p className="span-vip">{item.title}</p>
                        </div>
                )}
                    </div>
            </div>
        </>
    )
}
    
export default Products
