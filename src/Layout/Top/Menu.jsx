import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_BASE = "http://localhost/md_data_base/api";

const Menu = () => {
  const [cartQty, setCartQty] = useState(0);

  useEffect(() => {
    // 1) Load số lượng giỏ từ DB lúc vào web
    fetch(`${API_BASE}/cart_get.php`, { credentials: "include" })
      .then((r) => r.json())
      .then((d) => {
        if (d?.ok) setCartQty(Number(d.totalQty || 0));
      })
      .catch(() => {});

    // 2) Nghe event để cập nhật badge ngay khi "Add to cart"
    const onCartUpdated = (e) => {
      const next = Number(e?.detail?.totalQty ?? e?.detail ?? 0);
      if (!Number.isNaN(next)) setCartQty(next);
    };

    window.addEventListener("cart:updated", onCartUpdated);
    return () => window.removeEventListener("cart:updated", onCartUpdated);
  }, []);

  const listFindProducts = [
    { id: 2, name: "Máy Lọc, Vật Liệu Lọc", path: "/danh-muc/may-loc" },
    { id: 3, name: "Máy Sủi Oxy, Bơm, Máy Sưởi", path: "/danh-muc/may-sui-oxy-bom-may-suoi" },
    { id: 4, name: "Phân Nền, Cốt Nền Thủy Sinh", path: "/danh-muc/phan-nen-cot-nen-thuy-sinh" },
    { id: 5, name: "Đèn Thủy Sinh", path: "/danh-muc/den-thuy-sinh" },
    { id: 6, name: "Phụ Kiện Thủy Sinh Khác", path: "/danh-muc/phu-kien-thuy-sinh-khac" },
    { id: 7, name: "Thức Ăn Cho Cá/Tép", path: "/danh-muc/thuc-an-cho-ca-tep" },
    { id: 8, name: "Thuốc Chữa Bệnh Cho Cá/Tép", path: "/danh-muc/thuoc-chua-benh-cho-ca-tep" },
    { id: 9, name: "Cây Thủy Sinh", path: "/danh-muc/cay-thuy-sinh" },
  ];

  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light border-top mb-2">
          <div className="container-fluid p-0">
            <Link className="navbar-brand text-size span-vip text-uppercase font-weight-bold" to="/">
              Mộc Diệp - Aquarium
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active hover-animation" aria-current="page" to="/">
                    Trang chủ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link hover-animation" to="/Infomation">
                    Giới thiệu
                  </Link>
                </li>

                <li className="nav-item dropdown" style={{display: "flex"}}>
                  {/* nên dùng button thay vì <a to="#"> */}
                  <button
                    className="nav-link dropdown-toggle hover-animation btn btn-link p-0 "
                    id="navbarDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    type="button"
                    style={{ textDecoration: "none" }}
                  >
                    Sản phẩm
                  </button>

                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {listFindProducts.map((itemSoft) => (
                      <li key={itemSoft.id}>
                        <Link className="dropdown-item click-open-hover" to={itemSoft.path}>
                          {itemSoft.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="nav-item">
                  <Link className="nav-link hover-animation" to="/HandbookAll">
                    Cẩm nang ẩm thực
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link hover-animation" to="/Contact">
                    Liên hệ
                  </Link>
                </li>
              </ul>
            </div>

            {/* GIỎ HÀNG */}
            <div className="order">
              <Link to="/Cart" className="order-shop position-relative d-inline-block">
                <img
                  src="https://res.cloudinary.com/dnb1p68h9/image/upload/shopping-cart-svgrepo-com_kcpyy9.png"
                  alt="Giỏ hàng"
                />
                {cartQty > 0 && (
                  <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                    {cartQty}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Menu;
