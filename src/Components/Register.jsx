import React from 'react'
import { Link } from 'react-router-dom'
import FooterBottom from '../Layout/bottom/FooterBottom'

const Register = () => {
    return (
        <>
            <nav aria-label="breadcrumb" className="py-1" style={{ backgroundColor: "rgb(235, 245, 255)" }}>
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a className="text-dark text-decoration-none" href="#">Trang chủ</a></li>
                        <li className="breadcrumb-item active span-vip" aria-current="page">Đăng ký</li>
                    </ol>
                </div>
            </nav>
            <div className="container my-4 flex-column align-items-center" style={{ display: 'flex' }}>
                <div className="form-login" style={{ width: '600px' }}>
                    <h3 className="span-vip mt-3" style={{ display: 'flex', justifyContent: 'center' }}>Đăng ký</h3>
                    <form className='log-form m-5'>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">User name</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">Vui lòng nhập tên người dùng</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text text-danger">Lưu ý: Chúng tôi sẽ không bao giờ chia sẻ email của bạn với bất kỳ ai khác.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Re-enter password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="form-register">Bạn đã có tài khoản? <Link to="/Login" style={{ textDecoration: 'none' }}>Đăng nhập</Link></div>
                        <div className="Forgot-password"><Link to="/ForgotPassword" style={{ textDecoration: 'none' }}>Quên mật khẩu?</Link></div>
                        <button type="submit" className="btn btn-primary mt-4">Đăng ký</button>
                    </form>
                </div>
            </div>
            <FooterBottom />

        </>
    )
}

export default Register
