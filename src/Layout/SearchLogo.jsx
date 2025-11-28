import React from 'react'

const SearchLogo = () => {
    return (
        <>
            <div className="header-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-12 col-12 header-logo">
                            <img src="./assets/img/logo.png" alt className="logo" />
                        </div>
                        <div className="col-xl-4 col-lg-4 col-12 header-search">
                            <div className="search-header">
                                <div className="search-smart">
                                    <input type="text" placeholder="Search.." />
                                </div>
                                <button ><img src="./assets/img/search-logo.svg" alt="" /></button>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-12 header-control">
                            <div className="ul-control">
                                <div className="time-work control-item">
                                    <div className="icon">
                                        <img width={46} height={46}
                                            src="//bizweb.dktcdn.net/100/533/545/themes/971699/assets/time-work.png?1758000527031"
                                            alt="Lofi SeaFood" className="img-fluid" />
                                    </div>
                                    <div className="text">
                                        <span className="title">Thời gian làm việc</span>
                                        <span className="desc"><span className="span-vip">8h - 21h</span> (từ thứ 2 -
                                            Chủ
                                            Nhật)</span>
                                    </div>
                                    <div className="time-work control-item">
                                        <div className="icon">
                                            <img width={46} height={46}
                                                src="//bizweb.dktcdn.net/100/533/545/themes/971699/assets/free-ship.png?1758000527031"
                                                alt="Lofi SeaFood" className="img-fluid" />
                                        </div>
                                        <div className="text">
                                            <span className="title">Tốc độ nhanh chóng</span>
                                            <span className="desc"><img
                                                src="//bizweb.dktcdn.net/100/533/545/themes/971699/assets/free-ship-2h.png?1758000527031"
                                                alt="Lofi SeaFood" className="img-fluid" /></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchLogo
