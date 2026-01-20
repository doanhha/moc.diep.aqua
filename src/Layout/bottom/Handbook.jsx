import React from 'react'
import { Link } from 'react-router-dom'

const Handbook = () => {
    return (
        <>
            <div className="container">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                    </div>
                </div>
                <div className="block-blog">
                    <h4 className="span-vip mt-5 text-center">Cẩm nang ẩm thực</h4>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12 blog-title">
                            <div className="item-blog">
                                <div className="blog-thumb">
                                    <a href className="thumb"><img src="./assets/img/cn-1.webp" alt /></a>
                                </div>
                            </div>
                            <div className="blog-content">
                                <h3>Cách sơ chế tôm hùm Canada nhanh gọn chuẩn nhà hàng</h3>
                                <div className="time-post">
                                    <span className="date"><i className="ti-time"> 26/10/2025 </i></span>
                                </div>
                                <div className="article-content">
                                    <p className="text-content">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, labore.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 blog-title">
                            <div className="item-blog">
                                <div className="blog-thumb">
                                    <a href className="thumb"><img src="./assets/img/cn-1.webp" alt /></a>
                                </div>
                            </div>
                            <div className="blog-content">
                                <h3>Cách sơ chế tôm hùm Canada nhanh gọn chuẩn nhà hàng</h3>
                                <div className="time-post">
                                    <span className="date"><i className="ti-time"> 26/10/2025 </i></span>
                                </div>
                                <div className="article-content">
                                    <p className="text-content">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, labore.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 blog-title">
                            <div className="item-blog">
                                <div className="blog-thumb">
                                    <a href className="thumb"><img src="./assets/img/cn-1.webp" alt /></a>
                                </div>
                            </div>
                            <div className="blog-content">
                                <h3>Cách sơ chế tôm hùm Canada nhanh gọn chuẩn nhà hàng</h3>
                                <div className="time-post">
                                    <span className="date"><i className="ti-time"> 26/10/2025 </i></span>
                                </div>
                                <div className="article-content">
                                    <p className="text-content">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, labore.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 blog-title">
                            <div className="item-blog">
                                <div className="blog-thumb">
                                    <a href className="thumb"><img src="./assets/img/cn-1.webp" alt /></a>
                                </div>
                            </div>
                            <div className="blog-content">
                                <h3>Cách sơ chế tôm hùm Canada nhanh gọn chuẩn nhà hàng</h3>
                                <div className="time-post">
                                    <span className="date"><i className="ti-time"> 26/10/2025 </i></span>
                                </div>
                                <div className="article-content">
                                    <p className="text-content">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, labore.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 blog-title">
                            <div className="item-blog">
                                <div className="blog-thumb">
                                    <a href className="thumb"><img src="https://res.cloudinary.com/dnb1p68h9/image/upload/v1768773931/pruduct-2_qcpyn5.jpg" alt /></a>
                                </div>
                            </div>
                            <div className="blog-content">
                                <h3>Cách sơ chế tôm hùm Canada nhanh gọn chuẩn nhà hàng</h3>
                                <div className="time-post">
                                    <span className="date"><i className="ti-time"> 26/10/2025 </i></span>
                                </div>
                                <div className="article-content">
                                    <p className="text-content">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, labore.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 blog-title">
                            <div className="item-blog">
                                <div className="blog-thumb">
                                    <a href className="thumb"><img src="./assets/img/cn-1.webp" alt /></a>
                                </div>
                            </div>
                            <div className="blog-content">
                                <h3>Cách sơ chế tôm hùm Canada nhanh gọn chuẩn nhà hàng</h3>
                                <div className="time-post">
                                    <span className="date"><i className="ti-time"> 26/10/2025 </i></span>
                                </div>
                                <div className="article-content">
                                    <p className="text-content">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat, labore.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mrt-30 mt-4 mb-4">
                        <Link to="/HandbookAll" title="Xem tất cả" className="btn btn-view">Xem tất cả</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Handbook
