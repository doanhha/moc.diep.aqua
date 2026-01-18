import React from "react";
import { Link, useNavigate } from "react-router-dom";
import FooterBottom from "../Layout/bottom/FooterBottom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Vui lòng nhập đầy đủ thông tin.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost/md_data_base/api/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email: email.trim(), password }),
      });

      const text = await res.text();
      let data;

      try {
        data = JSON.parse(text);
      } catch {
        throw new Error("API không trả JSON. 200 ký tự đầu: " + text.slice(0, 200));
      }

      if (!res.ok || !data?.ok) {
        throw new Error(data?.message || `HTTP ${res.status}`);
      }

      navigate("/", { replace: true });
    } catch (err) {
      setError(err?.message || String(err));
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
              <Link className="text-dark text-decoration-none" to="/">
                Trang chủ
              </Link>
            </li>
            <li className="breadcrumb-item active span-vip" aria-current="page">
              Đăng nhập
            </li>
          </ol>
        </div>
      </nav>

      <div className="container my-4 flex-column align-items-center" style={{ display: "flex" }}>
        <div className="form-login" style={{ width: "400px" }}>
          <h3 className="span-vip mt-3" style={{ display: "flex", justifyContent: "center" }}>
            Đăng nhập
          </h3>

          <form className="log-form m-5" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="loginEmail" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="loginEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                disabled={loading}
              />
              <div className="form-text">We'll never share your email with anyone else.</div>
            </div>

            <div className="mb-3">
              <label htmlFor="loginPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="loginPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                disabled={loading}
              />
            </div>

            {error && <div className="alert alert-danger py-2">{error}</div>}

            <div className="form-register">
              Bạn chưa có tài khoản?{" "}
              <Link to="/Register" style={{ textDecoration: "none" }}>
                Đăng ký
              </Link>
            </div>

            <div className="Forgot-password">
              <Link to="/ForgotPassword" style={{ textDecoration: "none" }}>
                Quên mật khẩu?
              </Link>
            </div>

            <button type="submit" className="btn btn-primary mt-4" disabled={loading}>
              {loading ? "Đang đăng nhập..." : "Đăng nhập"}
            </button>
          </form>
        </div>
      </div>

      <FooterBottom />
    </>
  );
};

export default Login;
