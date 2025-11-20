import React from 'react'

const Menu = () => {
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
                                <li className="nav-item">
                                    <a className="nav-link hover-animation" href="#">Sản phẩm</a>
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
