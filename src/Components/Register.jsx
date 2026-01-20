import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FooterBottom from "../Layout/bottom/FooterBottom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");

    if (!username || !email || !password || !confirmPassword) {
      setMsg("Vui lòng nhập đầy đủ thông tin.");
      return;
    }
    if (password !== confirmPassword) {
      setMsg("Mật khẩu nhập lại không khớp.");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost/md_data_base/api/register.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password, confirmPassword }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setMsg(data?.message || `Lỗi đăng ký (HTTP ${res.status})`);
        return;
      }

      setMsg("Đăng ký thành công! Đang chuyển sang đăng nhập...");
      setTimeout(() => navigate("/Login"), 800);
    } catch (err) {
      setMsg("Không kết nối được server API. Kiểm tra XAMPP/đường dẫn API.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <nav aria-label="breadcrumb" className="py-1" style={{ backgroundColor: "rgb(235, 245, 255)" }}>
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a className="text-dark text-decoration-none" href="#">Trang chủ</a>
            </li>
            <li className="breadcrumb-item active span-vip" aria-current="page">Đăng ký</li>
          </ol>
        </div>
      </nav>

      <div className="container my-4 flex-column align-items-center" style={{ display: "flex" }}>
        <div className="form-login" style={{ width: "600px" }}>
          <h3 className="span-vip mt-3" style={{ display: "flex", justifyContent: "center" }}>Đăng ký</h3>

          <form className="log-form m-5" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">User name</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <div className="form-text">Vui lòng nhập tên người dùng</div>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="form-text text-danger">Lưu ý: Chúng tôi sẽ không bao giờ chia sẻ email của bạn.</div>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Re-enter password</label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            {msg && <div className="alert alert-info py-2">{msg}</div>}

            <div className="form-register">
              Bạn đã có tài khoản? <Link to="/Login" style={{ textDecoration: "none" }}>Đăng nhập</Link>
            </div>
            <div className="Forgot-password">
              <Link to="/ForgotPassword" style={{ textDecoration: "none" }}>Quên mật khẩu?</Link>
            </div>

            <button type="submit" className="btn btn-primary mt-4" disabled={loading}>
              {loading ? "Đang đăng ký..." : "Đăng ký"}
            </button>
          </form>
        </div>
      </div>

      <FooterBottom />
    </>
  );
};

export default Register;
