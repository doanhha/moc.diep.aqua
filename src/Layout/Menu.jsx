import React from 'react'

const Menu = () => {
    const listFindProducts = [
        { id: 1, name: "Tất Cả Sản Phẩm" },
        { id: 2, name: "Máy Lọc, Vật Liệu Lọc" },
        { id: 3, name: "Máy Sủi Oxy, Bơm, Máy Sưởi" },
        { id: 4, name: "Phân Nền, Cốt Nền Thủy Sinh" },
        { id: 5, name: "Đèn Thủy Sinh" },
        { id: 6, name: "Phụ Kiện Thủy Sinh Khác" },
        { id: 7, name: "Thức Ăn Cho Cá/Tép" },
        { id: 8, name: "Thuốc Chữa Bệnh Cho Cá/Tép" },
        { id: 9, name: "Cây Thủy Sinh" }
    ]
    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light border-top mb-2">
                    <div className="container-fluid p-0">
                        <a className="navbar-brand text-size span-vip text-uppercase font-weight-bold" href="#">Mộc Diệp - Aquarium</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active hover-animation" aria-current="page" href="#">Trang chủ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link hover-animation" href="#">Giới thiệu</a>
                                </li>

                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle hover-animation"
                                        href="#"
                                        id="navbarDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Sản phẩm
                                    </a>

                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        {listFindProducts.map(itemSoft => (
                                            <li key={itemSoft.id}>
                                                <a className="dropdown-item click-open-hover" href="#">{itemSoft.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link hover-animation" href="#">Liên hệ</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Menu
