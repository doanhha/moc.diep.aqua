import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../Components/Footer";

const API_BASE = "http://localhost/md_data_base/api";

const PRICE_PRESETS = [
    { id: "ALL", label: "Tất cả", min: null, max: null },
    { id: "0-500", label: "Dưới 500.000đ", min: 0, max: 500000 },
    { id: "500-1000", label: "500.000đ - 1.000.000đ", min: 500000, max: 1000000 },
    { id: "1000-2000", label: "1.000.000đ - 2.000.000đ", min: 1000000, max: 2000000 },
    { id: "2000+", label: "Trên 2.000.000đ", min: 2000000, max: null },
];

const SORT_OPTIONS = [
    { id: "newest", label: "Mới nhất" },
    { id: "price_asc", label: "Giá tăng dần" },
    { id: "price_desc", label: "Giá giảm dần" },
    { id: "name_asc", label: "Tên A-Z" },
    { id: "name_desc", label: "Tên Z-A" },
];

export default function CategoryPage() {
    const { slug } = useParams();

    const [itemsRaw, setItemsRaw] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMsg, setErrorMsg] = useState("");

    // filter/sort/pagination (client)
    const [priceId, setPriceId] = useState("ALL");
    const [sortId, setSortId] = useState("newest");
    const [page, setPage] = useState(1);
    const limit = 10;

    useEffect(() => {
        // đổi danh mục thì reset
        setPriceId("ALL");
        setSortId("newest");
        setPage(1);
    }, [slug]);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        setErrorMsg("");

        fetch(`${API_BASE}/products?categorySlug=${encodeURIComponent(slug)}`, {
            signal: controller.signal,
        })
            .then(async (res) => {
                if (!res.ok) {
                    const text = await res.text().catch(() => "");
                    throw new Error(`HTTP ${res.status}${text ? ` — ${text}` : ""}`);
                }
                return res.json();
            })
            .then((data) => {
                setItemsRaw(Array.isArray(data?.items) ? data.items : []);
            })
            .catch((err) => {
                if (err.name === "AbortError") return;
                setItemsRaw([]);
                setErrorMsg(err.message || "Có lỗi khi tải dữ liệu.");
            })
            .finally(() => setLoading(false));

        return () => controller.abort();
    }, [slug]);

    // Giá dùng để lọc/sort: ưu tiên sale_price nếu có, không thì dùng price
    const getEffectivePrice = (p) => {
        const price = Number(p?.price || 0);
        const sale = Number(p?.sale_price || 0);
        return sale > 0 && sale < price ? sale : price;
    };

    const selectedPrice = useMemo(
        () => PRICE_PRESETS.find((x) => x.id === priceId) || PRICE_PRESETS[0],
        [priceId]
    );

    const itemsView = useMemo(() => {
        let arr = [...itemsRaw];

        // filter price
        if (selectedPrice.min != null) {
            arr = arr.filter((p) => getEffectivePrice(p) >= selectedPrice.min);
        }
        if (selectedPrice.max != null) {
            arr = arr.filter((p) => getEffectivePrice(p) <= selectedPrice.max);
        }

        // sort
        switch (sortId) {
            case "price_asc":
                arr.sort((a, b) => getEffectivePrice(a) - getEffectivePrice(b));
                break;
            case "price_desc":
                arr.sort((a, b) => getEffectivePrice(b) - getEffectivePrice(a));
                break;
            case "name_asc":
                arr.sort((a, b) => String(a?.name || "").localeCompare(String(b?.name || ""), "vi"));
                break;
            case "name_desc":
                arr.sort((a, b) => String(b?.name || "").localeCompare(String(a?.name || ""), "vi"));
                break;
            case "newest":
            default:
                // nếu có createdAt thì dùng createdAt, không có thì dùng id
                arr.sort((a, b) => {
                    const ta = a?.createdAt ? new Date(a.createdAt).getTime() : Number(a?.id || 0);
                    const tb = b?.createdAt ? new Date(b.createdAt).getTime() : Number(b?.id || 0);
                    return tb - ta;
                });
                break;
        }

        return arr;
    }, [itemsRaw, selectedPrice.min, selectedPrice.max, sortId]);

    // reset page khi đổi filter/sort
    useEffect(() => {
        setPage(1);
    }, [priceId, sortId]);

    const total = itemsView.length;
    const totalPages = Math.max(1, Math.ceil(total / limit));
    const safePage = Math.min(page, totalPages);
    const start = (safePage - 1) * limit;
    const pageItems = itemsView.slice(start, start + limit);

    const title = pageItems?.[0]?.categoryName || itemsRaw?.[0]?.categoryName || slug;

    if (loading) return <div className="container py-4">Đang tải...</div>;

    return (
        <>

            <div className="container py-4">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-2 mb-3">
                    <h4 className="mb-0">Danh mục : {title}</h4>

                    <div className="d-flex gap-2">
                        <select className="form-select" value={priceId} onChange={(e) => setPriceId(e.target.value)}>
                            {PRICE_PRESETS.map((p) => (
                                <option key={p.id} value={p.id}>{p.label}</option>
                            ))}
                        </select>

                        <select className="form-select" value={sortId} onChange={(e) => setSortId(e.target.value)}>
                            {SORT_OPTIONS.map((s) => (
                                <option key={s.id} value={s.id}>{s.label}</option>
                            ))}
                        </select>
                    </div>
                </div>
                {total > 0 && (
                    <div className="mb-2 text-muted">
                        Hiển thị {start + 1} - {Math.min(start + limit, total)} trên {total} sản phẩm
                    </div>
                )}
                {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}

                <div className="row g-3">
                    {pageItems.map((p) => {
                        const price = Number(p.price || 0);
                        const sale = Number(p.sale_price || 0);
                        const hasSale = sale > 0 && sale < price;

                        return (
                            <div className="col-6 col-md-3" key={p.id ?? p.slug}>
                                <div className="card h-100 disply-flex align-items-center card-hover">
                                    <div className="card-body ">
                                        <Link to={`/san-pham/${p.slug}`} className="text-decoration-none">
                                            <div className="img_products">
                                                <Link to={`/product/${p.slug}`} className="text-decoration-none">
                                                    <img src={p.image} alt={p.name} className="img-fluid" loading="lazy" />
                                                </Link>
                                            </div>
                                            <div className="fw-semibold">{p.name}</div>
                                        </Link>

                                        <div className="text-danger">
                                            {hasSale ? (
                                                <>
                                                    <div className="price" style={{ fontStyle: "italic", fontSize: 14, textDecoration: "line-through" }}>
                                                        {price.toLocaleString("vi-VN")} đ
                                                    </div>
                                                    <div className="sale_price fw-semibold " style={{ color: "red !important" }}>
                                                        {sale.toLocaleString("vi-VN")} đ
                                                    </div>
                                                </>
                                            ) : (
                                                <div className="sale_price fw-semibold">
                                                    {price.toLocaleString("vi-VN")} đ
                                                </div>
                                            )}
                                        </div>

                                        <div className="text-muted" style={{ fontSize: 12 }}>
                                            {p.categoryName}
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        );
                    })}
                </div>

                {!total && !errorMsg && (
                    <div className="text-muted mt-3">Danh mục này chưa có sản phẩm.</div>
                )}

                {/* pagination client */}
                {/* pagination client */}
                {total > 0 && (
                    <div className="d-flex justify-content-center mt-4 mb-4">
                        <button
                            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                            disabled={safePage === 1}
                            className="btn btn-outline-secondary me-2"
                        >
                            «
                        </button>

                        {Array.from({ length: totalPages }, (_, index) => {
                            const pageNum = index + 1;
                            return (
                                <button
                                    key={pageNum}
                                    onClick={() => setPage(pageNum)}
                                    className={
                                        pageNum === safePage
                                            ? "btn btn-primary me-2"
                                            : "btn btn-outline-primary me-2"
                                    }
                                >
                                    {pageNum}
                                </button>
                            );
                        })}

                        <button
                            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={safePage === totalPages || totalPages === 0}
                            className="btn btn-outline-secondary"
                        >
                            »
                        </button>
                    </div>
                )}

            </div>
            <Footer />
        </>
    );
}
