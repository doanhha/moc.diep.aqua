import React from 'react'
import { Link } from 'react-router-dom';

const Menu = () => {
    const listFindProducts = [
        { id: 1, name: "Tất Cả Sản Phẩm", path: "/ProductsList" },
        { id: 2, name: "Máy Lọc, Vật Liệu Lọc", path: "/ProductsList" },
        { id: 3, name: "Máy Sủi Oxy, Bơm, Máy Sưởi", path: "/ProductsList" },
        { id: 4, name: "Phân Nền, Cốt Nền Thủy Sinh", path: "/ProductsList" },
        { id: 5, name: "Đèn Thủy Sinh", path: "/ProductsList" },
        { id: 6, name: "Phụ Kiện Thủy Sinh Khác", path: "/ProductsList" },
        { id: 7, name: "Thức Ăn Cho Cá/Tép", path: "/ProductsList" },
        { id: 8, name: "Thuốc Chữa Bệnh Cho Cá/Tép", path: "/ProductsList" },
        { id: 9, name: "Cây Thủy Sinh", path: "/ProductsList" }
    ]
    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light border-top mb-2">
                    <div className="container-fluid p-0">
                        <Link className="navbar-brand text-size span-vip text-uppercase font-weight-bold" to="/">Mộc Diệp - Aquarium</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active hover-animation" aria-current="page" to="/">Trang chủ</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link hover-animation" to="/Infomation">Giới thiệu</Link>
                                </li>

                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle hover-animation"
                                        to="#"
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
                                                <Link className="dropdown-item click-open-hover" to={itemSoft.path} >{itemSoft.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link hover-animation" to="/HandbookAll">Cẩm nang ẩm thực</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link hover-animation" to="/Contact">Liên hệ</Link>
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
