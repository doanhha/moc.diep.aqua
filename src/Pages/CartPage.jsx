import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_BASE = "http://localhost/md_data_base/api";

const formatVND = (n) =>
  new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(Number(n) || 0);

export default function CartPage() {
  const [data, setData] = useState({ items: [], totalQty: 0, totalAmount: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [raw, setRaw] = useState(null);

  const [removingId, setRemovingId] = useState(null);

  const load = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(`${API_BASE}/cart_get.php`, {
        credentials: "include",
      });

      if (!res.ok) throw new Error(`HTTP ${res.status} (cart_get.php)`);

      const d = await res.json();
      setRaw(d);
      if (d?.ok) setData(d);
      else setData({ items: [], totalQty: 0, totalAmount: 0 });
    } catch (e) {
      setError(e?.message || "Không tải được giỏ hàng");
      setRaw({ error: e?.message || String(e) });
      setData({ items: [], totalQty: 0, totalAmount: 0 });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const removeItem = async (productId) => {
    const res = await fetch(`${API_BASE}/cart_remove.php`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ product_id: productId }),
    });

    const d = await res.json();
    if (!res.ok || !d?.ok) throw new Error(d?.message || `HTTP ${res.status}`);
    setData((prev) => {
      const nextItems = (prev.items || []).filter((x) => x.product_id !== productId);
      return {
        ...prev,
        items: nextItems,
        totalQty: d.totalQty ?? 0,
        totalAmount: d.totalAmount ?? 0,
      };
    });

    window.dispatchEvent(new CustomEvent("cart:updated", { detail: { totalQty: d.totalQty ?? 0 } }));

    return d;
  };

  const handleRemove = async (productId) => {
    try {
      setRemovingId(productId);
      await removeItem(productId);
    } catch (e) {
      window.alert(e?.message || "Huỷ sản phẩm thất bại");
    } finally {
      setRemovingId(null);
    }
  };

  return (
    <div className="container my-4">
      <h4>Giỏ hàng</h4>

      {loading && <div className="mt-3">Đang tải giỏ hàng...</div>}

      {!loading && error && <div className="mt-3 text-danger">Lỗi: {error}</div>}

      {!loading && !error && (!data.items || data.items.length === 0) && (
        <div className="mt-3">Giỏ hàng trống.</div>
      )}

      {!loading && !error && data.items?.length > 0 && (
        <>
          <div className="table-responsive mt-3">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th>Sản phẩm</th>
                  <th>Đơn giá</th>
                  <th>Số lượng</th>
                  <th>Thành tiền</th>
                  <th style={{ width: 120 }}>Huỷ</th>
                </tr>
              </thead>
              <tbody>
                {data.items.map((it) => (
                  <tr key={it.product_id}>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        {it.image ? (
                          <img
                            src={it.image}
                            alt={it.name || ""}
                            style={{ width: 64, height: 64, objectFit: "cover" }}
                          />
                        ) : null}
                        <div>
                          <div className="fw-semibold">{it.name}</div>
                          <div className="text-muted small">{it.slug}</div>
                        </div>
                      </div>
                    </td>

                    <td>{formatVND(it.unit_price)}</td>
                    <td>{it.quantity}</td>
                    <td>{formatVND(it.quantity * it.unit_price)}</td>

                    <td>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => handleRemove(it.product_id)}
                        disabled={removingId === it.product_id}
                      >
                        {removingId === it.product_id ? "Đang huỷ..." : "Huỷ"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="d-flex justify-content-end">
            <div className="border rounded p-3" style={{ minWidth: 320 }}>
              <div className="d-flex justify-content-between">
                <span>Tổng sản phẩm</span>
                <b>{data.totalQty}</b>
              </div>
              <div className="d-flex justify-content-between mt-2">
                <span>Tổng tiền</span>
                <b>{formatVND(data.totalAmount)}</b>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="mt-4">
        <button className="contact m-3">
          <Link to="/" style={{textDecoration: "none"}}>Tiếp tục mua hàng</Link>
        </button>
        <button className="contact m-3">
          <Link to="/Contact" style={{textDecoration: "none"}}>Liên hệ</Link>
        </button>
      </div>
      {/* <pre style={{ whiteSpace: "pre-wrap" }}>{JSON.stringify(raw, null, 2)}</pre> */}
    </div>
  );
}
