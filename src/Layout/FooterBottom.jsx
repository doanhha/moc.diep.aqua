import React from 'react'

const FooterBottom = () => {
    return (
        <>
            <div id="Footer">
                <div className="top-footer">
                    <div className="container">
                        <nav className="navbar navbar-light ">
                            <div className="container-fluid p-0">
                                <a className="navbar-brand"><img src="./assets/img/logo-1.svg" alt /></a>
                                <form className="d-flex">
                                    <input className="form-control me-2 search-pruducts" type="search" placeholder="Search"
                                        aria-label="Search" />
                                    <button className="btn btn-outline-success btn-search" type="submit"><i
                                        className="ti-search" /></button>
                                </form>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="mid-footer mb-3 pb-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-3 col-md-12 col-12 col-footer">
                                <h4 className="title-menu text-white ">Thông tin công ty <span
                                    className="Collapsible__Plus" />
                                </h4>
                                <div className="hidden-mobile">
                                    <ul className="list-menu">
                                        <li><a title="Trang chủ"><i className="ti-map" />
                                            Ngõ 300, P.Tây Tựu, Q.Bắc Từ Liêm, Hà Nội</a></li>
                                        <li><a title="Giới thiệu"><i className="ti-email" />
                                            doanhha880@gmail.com
                                        </a></li>
                                        <li><a title="Sản phẩm"><i className="ti-headphone" />
                                            0924.042.444
                                        </a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-3 col-md-12 col-12 col-footer">
                                <h4 className="title-menu text-white ">
                                    Về chúng tôi
                                    <span className="Collapsible__Plus" />
                                </h4>
                                <div className="hidden-mobile">
                                    <ul className="list-menu">
                                        <li><a title="Trang chủ">Trang chủ</a></li>
                                        <li><a title="Giới thiệu">Giới thiệu</a></li>
                                        <li><a title="Sản phẩm">Sản phẩm</a></li>
                                        <li><a title="Cẩm nang ẩm thực">Cẩm nang ẩm thực</a></li>
                                        <li><a title="Liên hệ">Liên hệ</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-3 col-md-12 col-12 col-footer">
                                <h4 className="title-menu text-white ">Chính sách của chúng tôi
                                    <span className="Collapsible__Plus" />
                                </h4>
                                <div className="hidden-mobile">
                                    <ul className="list-menu">
                                        <li><a title="Trang chủ">Chính sách đổi trả</a></li>
                                        <li><a title="Giới thiệu">Chính sách mua hàng</a></li>
                                        <li><a title="Sản phẩm">Chính sách giao hàng</a></li>
                                        <li><a title="Cẩm nang ẩm thực">Hướng dẫn mua hàng</a></li>
                                        <li><a title="Liên hệ">Bảo mật thông tin cá nhân</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="container">
                <div className='copyright pb-4'> <p>© Bản quyền thuộc về <b>Mộc Diệp Aqua</b> | Cung cấp bởi <a href="">Doha</a></p> </div>
                </div>
            </div>
        </>
    )
}

export default FooterBottom
