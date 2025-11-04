import React from 'react'

const Banner = () => {
    return (
        <>
            <div className="banner">
                <div className="container">
                    <div id="carouselExampleInterval" className="carousel slide set-width rounded-3"
                        data-bs-ride="carousel">
                        <div className="carousel-inner h-100" style={{ borderRadius: 20 }}>
                            <div className="carousel-item active" data-bs-interval={4000}>
                                <img src="./assets/img/slider_1.webp" className="d-block w-100" alt />
                            </div>
                            <div className="carousel-item" data-bs-interval={4000}>
                                <img src="./assets/img/slider_1.webp" className="d-block w-100" alt />
                            </div>
                            <div className="carousel-item" data-bs-interval={4000}>
                                <img src="./assets/img/slider_1.webp" className="d-block w-100" alt />
                            </div>
                        </div>
                    </div>
                    <section className="section_two_banner mt-3">
                        <div className="container">
                            <div className="block-content mb-5">
                                <div className="row">
                                    <div className="col-xl-6 col-md-6 col-12 banner-left">
                                        <div className="thumb-image">
                                            <a className="image_hover" href="#" title="SeaFood">
                                                <img className="img-fluid"
                                                    src="//bizweb.dktcdn.net/100/533/545/themes/971699/assets/two_banner_image_1.jpg?1758000527031"
                                                    alt="SeaFood" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-6 col-12 banner-right">
                                        <div className="thumb-image">
                                            <a className="image_hover" href="#" title="SeaFood">
                                                <img className="img-fluid"
                                                    src="//bizweb.dktcdn.net/100/533/545/themes/971699/assets/two_banner_image_2.jpg?1758000527031"
                                                    alt="SeaFood" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Banner
