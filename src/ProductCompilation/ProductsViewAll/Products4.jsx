import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_BASE = "http://localhost/md_data_base/api";
const CATEGORY_SLUG = "may-sui-oxy-bom-may-suoi";

const formatVND = (value) => {
  const n = Number(value ?? 0);
  return new Intl.NumberFormat("vi-VN").format(n) + "đ";
};

const Products2 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // NEW: trạng thái đang thêm giỏ (để disable đúng sản phẩm đang bấm)
  const [addingId, setAddingId] = useState(null);

  useEffect(() => {
    let alive = true;

    (async () => {
      try {
        setLoading(true);

        const url = `${API_BASE}/products.php?categorySlug=${encodeURIComponent(
          CATEGORY_SLUG
        )}&limit=10`;

        const res = await fetch(url);
        const data = await res.json();

        if (!alive) return;

        const list = data?.items ?? [];
        setProducts(Array.isArray(list) ? list : []);
      } catch (e) {
        if (!alive) return;
        setProducts([]);
      } finally {
        if (!alive) return;
        setLoading(false);
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  // NEW: gọi API lưu DB
  const addToCart = async (productId, qty = 1) => {
    const res = await fetch(`${API_BASE}/cart_add.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // quan trọng để PHP session nhận ra
      body: JSON.stringify({ product_id: productId, qty }),
    });

    const data = await res.json();
    if (!res.ok || !data?.ok) {
      throw new Error(data?.message || `HTTP ${res.status}`);
    }

    // NEW: bắn event để Menu tự cập nhật badge
    window.dispatchEvent(
      new CustomEvent("cart:updated", { detail: { totalQty: data.totalQty } })
    );

    return data;
  };

  // NEW: handler cho nút bấm
  const handleAdd = async (item) => {
    const productId = item?.id; // anh đang dùng MySQL => id
    if (!productId) {
      window.alert("Thiếu ID sản phẩm, không thể thêm vào giỏ.");
      return;
    }

    try {
      setAddingId(productId);
      await addToCart(productId, 1);
      window.alert("Đã thêm vào giỏ hàng!");
    } catch (e) {
      window.alert(e?.message || "Thêm giỏ hàng thất bại.");
    } finally {
      setAddingId(null);
    }
  };

  return (
    <>
      <div className="container">
        <h1 style={{ fontSize: 25, textTransform: "uppercase" }} className="text-center mb-5">
          Máy Sủi Oxy, Bơm, Máy Sưởi
        </h1>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {loading && <div className="col-12 text-center">Đang tải sản phẩm...</div>}

          {!loading &&
            products.map((item) => (
              <div className="col set-width-product text-center" key={item.id}>
                <div className="card">
                  <img
                    src={item.image || "/assets/img/pruduct-2.webp"}
                    className="card-img-top"
                    alt={item.name}
                    title={item.name}
                    loading="lazy"
                  />

                  <div className="card-body p-0">
                    <h4 className="card-title">{item.name}</h4>
                    <p className="card-text">{item.origin ? `Xuất xứ: ${item.origin}` : ""}</p>
                    <p className="price-products">{formatVND(item.sale_price ?? item.price)}</p>
                  </div>

                  <div className="group-action">
                    <button
                      className="btn-card-shop"
                      type="button"
                      onClick={() => handleAdd(item)}
                      disabled={addingId === item.id}
                      title="Thêm vào giỏ hàng"
                    >
                      <img
                        src="https://res.cloudinary.com/dnb1p68h9/image/upload/shopping-cart-svgrepo-com_kcpyy9.png"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}

          {!loading && products.length === 0 && (
            <div className="col-12 text-center">Chưa có sản phẩm cho danh mục này.</div>
          )}
        </div>

        <div className="text-center mrt-30 mt-4 mb-4">
          <Link to={`/danh-muc/${CATEGORY_SLUG}`} title="Xem tất cả" className="btn btn-view">
            Xem tất cả
          </Link>
        </div>
      </div>
    </>
  );
};

export default Products2;
