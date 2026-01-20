import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const API_BASE = "http://localhost/md_data_base/api";

const formatVND = (n) =>
  new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(Number(n) || 0);

export default function ProductDetail() {
  const { slug } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [adding, setAdding] = useState(false);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    let alive = true;

    (async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(`${API_BASE}/product_detail.php?slug=${encodeURIComponent(slug)}`, {
          credentials: "include",
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const d = await res.json();

        if (!alive) return;

        if (!d?.ok || !d?.item) {
          throw new Error(d?.message || "Không tìm thấy sản phẩm");
        }

        setItem(d.item);
      } catch (e) {
        if (!alive) return;
        setError(e?.message || "Không tải được chi tiết sản phẩm");
        setItem(null);
      } finally {
        if (!alive) return;
        setLoading(false);
      }
    })();

    return () => {
      alive = false;
    };
  }, [slug]);

  const addToCart = async () => {
    if (!item?.id) return;

    const q = Math.max(1, Number(qty) || 1);

    try {
      setAdding(true);

      const res = await fetch(`${API_BASE}/cart_add.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ product_id: item.id, qty: q }),
      });

      const d = await res.json();
      if (!res.ok || !d?.ok) throw new Error(d?.message || `HTTP ${res.status}`);

      // update badge Menu
      window.dispatchEvent(new CustomEvent("cart:updated", { detail: { totalQty: d.totalQty ?? 0 } }));

      window.alert("Đã thêm vào giỏ hàng!");
    } catch (e) {
      window.alert(e?.message || "Thêm giỏ hàng thất bại");
    } finally {
      setAdding(false);
    }
  };

  if (loading) return <div className="container my-4">Đang tải sản phẩm...</div>;
  if (error) return <div className="container my-4 text-danger">Lỗi: {error}</div>;
  if (!item) return <div className="container my-4">Không có dữ liệu sản phẩm.</div>;

  const priceShow = item.sale_price && Number(item.sale_price) > 0 ? Number(item.sale_price) : Number(item.price || 0);
  const hasSale = item.sale_price && Number(item.sale_price) > 0;

  return (
    <div className="container my-4">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/" className="text-decoration-none">Trang chủ</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {item.name}
          </li>
        </ol>
      </nav>

      <div className="row g-4">
        <div className="col-md-5">
          <div className="border rounded p-2">
            <img
              src={item.image || "/assets/img/pruduct-2.webp"}
              alt={item.name}
              className="img-fluid"
              style={{ width: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="col-md-7">
          <h2 className="mb-2">{item.name}</h2>

          {item.origin ? <div className="text-muted mb-2">Xuất xứ: {item.origin}</div> : null}

          <div className="mb-3">
            {hasSale ? (
              <>
                <div className="text-muted">
                  <span style={{ textDecoration: "line-through" }}>{formatVND(item.price)}</span>
                </div>
                <div style={{ fontSize: 22, fontWeight: 700 }}>{formatVND(priceShow)}</div>
              </>
            ) : (
              <div style={{ fontSize: 22, fontWeight: 700 }}>{formatVND(priceShow)}</div>
            )}
          </div>

          {item.stock != null ? (
            <div className="mb-3">
              Tồn kho: <b>{item.stock}</b>
            </div>
          ) : null}

          <div className="d-flex align-items-center gap-2 mb-3">
            <span>Số lượng:</span>
            <input
              type="number"
              className="form-control"
              style={{ width: 120 }}
              min={1}
              value={qty}
              onChange={(e) => setQty(e.target.value)}
            />
          </div>

          <div className="d-flex gap-2">
            <button className="btn btn-primary" onClick={addToCart} disabled={adding}>
              {adding ? "Đang thêm..." : "Thêm vào giỏ"}
            </button>
            <Link to="/Cart" className="btn btn-outline-secondary">
              Xem giỏ hàng
            </Link>
          </div>

          {/* mô tả */}
          {item.short_desc ? <p className="mt-4">{item.short_desc}</p> : null}

          {item.description ? (
            <div className="mt-3">
              <h5>Mô tả sản phẩm</h5>
              <div style={{ whiteSpace: "pre-wrap" }}>{item.description}</div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
