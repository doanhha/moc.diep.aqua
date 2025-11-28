import React from 'react'

const Authorized = () => {
  const salesAgent = [
    { id: 1, img: './assets/img/brand_image_1.webp', },
    { id: 2, img: './assets/img/brand_image_2.webp', },
    { id: 3, img: './assets/img/brand_image_3.webp', },
    { id: 4, img: './assets/img/brand_image_4.webp', },
    { id: 5, img: './assets/img/brand_image_5.webp', },
  ]
  return (
    <>
      <div className="container">
                <h2 className="span-vip text-center mt-5">Đại lý ủy quyền</h2>
                <div className="carousel carousel-slide">
                    <div className="group">
                        <div className="card card-img"><img src={salesAgent[0].img} alt /></div>
                        <div className="card card-img"><img src={salesAgent[1].img} alt /></div>
                        <div className="card card-img"><img src={salesAgent[2].img} alt /></div>
                        <div className="card card-img"><img src={salesAgent[3].img} alt /></div>
                        <div className="card card-img"><img src={salesAgent[4].img} alt /></div>
                    </div>
                    <div className="group">
                        <div className="card card-img"><img src={salesAgent[0].img} alt /></div>
                        <div className="card card-img"><img src={salesAgent[1].img} alt /></div>
                        <div className="card card-img"><img src={salesAgent[2].img} alt /></div>
                        <div className="card card-img"><img src={salesAgent[3].img} alt /></div>
                        <div className="card card-img"><img src={salesAgent[4].img} alt /></div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Authorized
