import React from 'react'

const Topbar = () => {
  return (
    <>
      <div className="top-bar">
            <div className="container">
                <div className="row g-0 text-white">
                    <div className="col-sm-6 col-md-6"><i className="ti-map-alt" /> Ngõ 300, P.Tây Tựu, Q.Bắc Từ Liêm,
                        Hà Nội
                    </div>
                    <div className="col-sm-6 col-md-6 account justify-content-end">
                        <div className="phone"><i className="ti-mobile" />0924.042.444</div>
                        <div className="separation" />
                        <div className="log-in">Đăng ký</div>
                        <div className="separation" />
                        <div className="phone">Đăng nhập</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Topbar
