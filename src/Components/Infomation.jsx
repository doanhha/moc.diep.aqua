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
              <h3>Giới thiệu về công ty TNHH Thương Mại Dịch Vụ Doanh Hà</h3>
              <p>Công ty TNHH Thương Mại Dịch Vụ Doanh Hà được thành lập vào ngày 10 tháng 10 năm 2010, chuyên kinh doanh các sản phẩm điện tử tiêu dùng như điện thoại di động, máy tính bảng, laptop và các phụ kiện công nghệ khác. Với hơn 10 năm kinh nghiệm trong ngành, chúng tôi tự hào là một trong những nhà cung cấp hàng đầu tại Việt Nam.</p>
              <p>Chúng tôi cam kết mang đến cho khách hàng những sản phẩm chất lượng cao, dịch vụ chăm sóc khách hàng tận tâm và giá cả cạnh tranh nhất trên thị trường. Đội ngũ nhân viên của chúng tôi luôn sẵn sàng hỗ trợ và tư vấn để giúp khách hàng lựa chọn được sản phẩm phù hợp nhất với nhu cầu của mình.</p>
              <p>Trong suốt quá trình hoạt động, Công ty TNHH Thương Mại Dịch Vụ Doanh Hà đã xây dựng được mạng lưới đối tác rộng khắp và nhận được sự tin tưởng từ hàng ngàn khách hàng trên toàn quốc. Chúng tôi không ngừng nỗ lực để cải thiện chất lượng sản phẩm và dịch vụ, nhằm đáp ứng tốt nhất nhu cầu ngày càng cao của khách hàng.</p>
              <p>Chúng tôi xin chân thành cảm ơn sự ủng hộ và tin tưởng của quý khách hàng trong suốt thời gian qua. Hy vọng sẽ tiếp tục được đồng hành cùng quý khách trong những chặng đường phát triển sắp tới.</p>
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
