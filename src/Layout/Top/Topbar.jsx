import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";

const Topbar = () => {
  const navigate = useNavigate();
  const { user, setUser, API_BASE } = useAuth();

  const handleLogout = async () => {
    try {
      await fetch(`${API_BASE}/logout.php`, {
        method: "POST",
        credentials: "include",
      });
    } catch (e) {
    } finally {
      setUser(null);
      navigate("/");
    }
  };

  return (
    <>
      <div className="top-bar">
        <div className="container">
          <div className="row g-0 text-white">
            <div className="col-sm-6 col-md-6">
              <i className="ti-map-alt" /> Ngõ 300, P.Tây Tựu, Q.Bắc Từ Liêm, Hà Nội
            </div>

            <div className="col-sm-6 col-md-6 account justify-content-end">
              <div className="phone">
                <i className="ti-mobile" />
                0924.042.444
              </div>

              <div className="separation" />
              {user ? (
                <>
                  <div className="log-in" style={{ color: "white" }}>
                    Xin chào, <b>{user.username}</b>
                  </div>

                  <div className="separation" />

                  <div className="log-in">
                    <button
                      onClick={handleLogout}
                      style={{
                        background: "none",
                        border: "none",
                        color: "white",
                        padding: 0,
                        cursor: "pointer",
                      }}
                    >
                      Đăng xuất
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="log-in">
                    <Link to="/Register" style={{ textDecoration: "none", color: "white" }}>
                      Đăng ký
                    </Link>
                  </div>

                  <div className="separation" />

                  <div className="phone">
                    <Link to="/Login" style={{ textDecoration: "none", color: "white" }}>
                      Đăng nhập
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
