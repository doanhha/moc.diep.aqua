import React from 'react'
import SearchLogo from '../Layout/Top/SearchLogo'
import Topbar from '../Layout/Top/Topbar'
import Menu from '../Layout/Top/Menu'
import Authorized from '../Layout/bottom/Authorized'
import FooterBottom from '../Layout/bottom/FooterBottom'
import { Link } from 'react-router-dom'

const Infomation = () => {
  return (
    <>
      <div className="bg-home">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 info-left">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link style={{ textDecoration: "none", color: "black" }}  to="/">Trang chủ</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Giới thiệu</li>
                </ol>
              </nav>
            </div>
          </div>
          <div className="row"> 
            <div className="col-12 col-md-8 info-left">
              <h2 className="title-handbook-all span-vip">Giới thiệu</h2>
              <p>
                Chào mừng bạn đến với <span className='span-vip font-weight-bold'><Link to="/">Mộc Diệp - Aquarium</Link></span>, nơi đam mê và sự tận tâm với thế giới thủy sinh hội tụ. Chúng tôi tự hào là một trong những cửa hàng hàng đầu tại Việt Nam chuyên cung cấp các sản phẩm và dịch vụ liên quan đến bể cá cảnh và thủy sinh.
              </p>
              <p>
                Tại Mộc Diệp - Aquarium, chúng tôi hiểu rằng mỗi bể cá không chỉ là một không gian trang trí mà còn là một hệ sinh thái phức tạp đòi hỏi sự chăm sóc và kiến thức chuyên sâu. Với đội ngũ nhân viên giàu kinh nghiệm và đam mê, chúng tôi cam kết mang đến cho khách hàng những sản phẩm chất lượng cao, từ các loại cá cảnh đa dạng, cây thủy sinh phong phú đến các thiết bị và phụ kiện hiện đại.
              </p>
              <p>
                Chúng tôi không chỉ cung cấp sản phẩm mà còn là người bạn đồng hành đáng tin cậy trong hành trình chăm sóc bể cá của bạn. Dịch vụ tư vấn chuyên nghiệp của chúng tôi sẽ giúp bạn lựa chọn những giải pháp phù hợp nhất với nhu cầu và điều kiện của bạn, từ việc thiết kế bể cá, lựa chọn loài cá và cây thủy sinh đến cách duy trì môi trường sống lý tưởng cho các sinh vật trong bể.
              </p>
              <p>
                Mộc Diệp - Aquarium không ngừng nỗ lực để mang đến trải nghiệm mua sắm tuyệt vời nhất cho khách hàng. Chúng tôi luôn cập nhật những xu hướng mới nhất trong lĩnh vực thủy sinh và cam kết mang đến giá trị tốt nhất với mức giá cạnh tranh.
              </p>
              <p>
                Cảm ơn bạn đã lựa chọn Mộc Diệp - Aquarium. Chúng tôi rất mong được phục vụ và đồng hành cùng bạn trong hành trình khám phá và tận hưởng vẻ đẹp của thế giới thủy sinh.
              </p>
            </div>
          </div>
        </div>
      </div>
    <Authorized />
    <FooterBottom />
    </>
  )
}

export default Infomation
