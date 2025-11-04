import React from 'react'

const Producttop = () => {
    return (
        <>
            <div className="swiper container featured-products mt-0">
                <div className="block-title">
                    <div className="head mt-4 ml-4">
                        <span className="icon">
                            <img src="//bizweb.dktcdn.net/100/533/545/themes/971699/assets/save-icon.png?1758000527031"
                                alt="Giờ vàng giảm giá!" className="img-flash-sale" />
                        </span>
                        <div className="heading-title span-vip">
                            <h2><a href="san-pham-ban-chay" title="Giờ vàng giảm giá!">Giờ vàng giảm giá!</a></h2>
                        </div>
                    </div>
                    <div className="timer">
                        <div className="time" data-countdown="countdown" data-date="2-13-2026-12-00-00" />
                    </div>
                </div>
                <div className="card-wrapper swiper mt-4">
                    <ul className="card-list swiper-wrapper pl-0">
                        <li className="card-item swiper-slide">
                            <a href="#" className="card-link">
                                <img src="./assets/img/product-1.webp" alt="Image" className="card-image" />
                                <h2 className="card-title">Lorem ipsum dolor sit amet.</h2>
                                <span className="span-vip">1.000.000đ</span>
                                <p>Còn hàng</p>
                                <p className="badge">Developer</p>
                                {/* <button class="card-button ti-arrow-right"></button> */}
                            </a>
                        </li>
                        {/* 2 */}
                        <li className="card-item swiper-slide">
                            <a href="#" className="card-link">
                                <img src="./assets/img/product-1.webp" alt="Image" className="card-image" />
                                <h2 className="card-title">Lorem ipsum dolor sit amet.</h2>
                                <span className="span-vip">1.000.000đ</span>
                                <p>Còn hàng</p>
                                <p className="badge">Developer</p>
                                {/* <button class="card-button ti-arrow-right"></button> */}
                            </a>
                        </li>
                        {/* 3 */}
                        <li className="card-item swiper-slide">
                            <a href="#" className="card-link">
                                <img src="./assets/img/product-1.webp" alt="Image" className="card-image" />
                                <h2 className="card-title">Lorem ipsum dolor sit amet.</h2>
                                <span className="span-vip">1.000.000đ</span>
                                <p>Còn hàng</p>
                                <p className="badge">Developer</p>
                                {/* <button class="card-button ti-arrow-right"></button> */}
                            </a>
                        </li>
                        {/* 4 */}
                        <li className="card-item swiper-slide">
                            <a href="#" className="card-link">
                                <img src="./assets/img/product-1.webp" alt="Image" className="card-image" />
                                <h2 className="card-title">Lorem ipsum dolor sit amet.</h2>
                                <span className="span-vip">1.000.000đ</span>
                                <p>Còn hàng</p>
                                <p className="badge">Developer</p>
                                {/* <button class="card-button ti-arrow-right"></button> */}
                            </a>
                        </li>
                        {/* 5 */}
                        <li className="card-item swiper-slide">
                            <a href="#" className="card-link">
                                <img src="./assets/img/product-1.webp" alt="Image" className="card-image" />
                                <h2 className="card-title">Lorem ipsum dolor sit amet.</h2>
                                <span className="span-vip">1.000.000đ</span>
                                <p>Còn hàng</p>
                                <p className="badge">Developer</p>
                                {/* <button class="card-button ti-arrow-right"></button> */}
                            </a>
                        </li>
                    </ul>
                    <div className="swiper-pagination" />
                    {/* If we need navigation buttons */}
                    <div className="swiper-slide-button swiper-button-prev" />
                    <div className="swiper-slide-button swiper-button-next" />
                </div>
            </div>
        </>
    )
}

export default Producttop
