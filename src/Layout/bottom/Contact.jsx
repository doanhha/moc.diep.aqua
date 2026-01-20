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
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="contact-info">
                            <h3 className="title-contact-info span-vip">Thông tin liên hệ</h3>
                            <p className="contact-info-item"><strong>Địa chỉ:</strong> Ngõ 300, P.Tây Tựu, Q.Bắc Từ Liêm, Hà Nội</p>
                            <p className="contact-info-item"><strong>Điện thoại:</strong> 0924.042.444</p>
                            <p className="contact-info-item"><strong>Email:</strong> hadoanh27@gmail.com</p>
                            <p className="contact-info-item"><strong>Giờ làm việc:</strong> Các ngày trong tuần từ 8:00 - 21:00</p>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Contact
