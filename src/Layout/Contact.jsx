import React from 'react'

const Contact = () => {
  return (
    <>
      <div style={{ backgroundColor: "#EBF5FF" }} className="bg-home">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8 info-left">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a style={{ textDecoration: "none", color: "black", }} href="#">Trang chủ</a></li>
                                    <li style={{ cursor: 'pointer' }} className="breadcrumb-item active span-vip" aria-current="page">Chia sẻ kiến thức</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                
                <div className="row">
                    <div className="col-12">
                        <h2 className="title-handbook-all span-vip">Liên hệ</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p>Hiện tại trang liên hệ đang được xây dựng. Vui lòng quay lại sau nhé!</p>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Contact
