import { useEffect, useMemo, useState } from "react";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { fetchProducts } from "../api/products"; // <- thêm cái này

const listFilter = [
  { id: 1, name: "Giá dưới 500.000" },
  { id: 2, name: "500.000 - 1.000.000" },
  { id: 3, name: "1.000.000 - 3.000.000" },
  { id: 4, name: "3.000.000 - 5.000.000" },
  { id: 5, name: "5.000.000 - 7.000.000" },
  { id: 6, name: "Trên 7.000.000" },
];

const listFilter2 = [
  { id: 1, name: "Tên A-Z" },
  { id: 2, name: "Tên Z-A" },
  { id: 3, name: "Giá Tăng Dần" },
  { id: 4, name: "Giá Giảm Dần" },
  { id: 5, name: "Mới Nhất" },
  { id: 6, name: "Cũ Nhất" },
];

export default function Mayloc() {
  const formatVND = (value) => Number(value || 0).toLocaleString("vi-VN") + "đ";

  // ✅ DATA TỪ DB
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  // ✅ FILTER/SORT GIỮ NGUYÊN
  const [filterPrice, setFilterPrice] = useState(null);
  const [sortOption, setSortOption] = useState(null);

  // ✅ FETCH DB: chỉ lấy sản phẩm category "may-loc"
  // (dựa theo dữ liệu của anh: categorySlug: "may-loc")
  useEffect(() => {
    let ignore = false;

    const run = async () => {
      try {
        setLoading(true);
        setErrorMsg("");

        const data = await fetchProducts({ categorySlug: "may-loc" });
        if (!ignore) setProducts(data);
      } catch (e) {
        if (!ignore) setErrorMsg(String(e.message || e));
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    run();
    return () => {
      ignore = true;
    };
  }, []);

  const getPriceRange = (id) => {
    switch (id) {
      case 1: return { min: 0, max: 500000 };
      case 2: return { min: 500000, max: 1000000 };
      case 3: return { min: 1000000, max: 3000000 };
      case 4: return { min: 3000000, max: 5000000 };
      case 5: return { min: 5000000, max: 7000000 };
      case 6: return { min: 7000000, max: Infinity };
      default: return null;
    }
  };

  const filterProducts = useMemo(() => {
    let data = [...products];

    // Lọc theo giá
    const range = getPriceRange(filterPrice);
    if (range) {
      data = data.filter(p => Number(p.price) >= range.min && Number(p.price) <= range.max);
    }

    // Sắp xếp
    switch (sortOption) {
      case 1: // Tên A-Z
        data.sort((a, b) => (a.name || "").localeCompare(b.name || "", "vi"));
        break;
      case 2: // Tên Z-A
        data.sort((a, b) => (b.name || "").localeCompare(a.name || "", "vi"));
        break;
      case 3: // Giá Tăng Dần
        data.sort((a, b) => Number(a.price) - Number(b.price));
        break;
      case 4: // Giá Giảm Dần
        data.sort((a, b) => Number(b.price) - Number(a.price));
        break;
      case 5: // Mới Nhất: dùng createdAt chuẩn hơn id
        data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case 6: // Cũ Nhất
        data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        break;
      default:
        break;
    }

    return data;
  }, [filterPrice, sortOption, products]);

  // Pagination giữ nguyên
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    setCurrentPage(1);
  }, [filterPrice, sortOption]);

  const totalPages = Math.ceil(filterProducts.length / itemsPerPage);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filterProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage, filterProducts]);

  // ✅ ICON: anh đang dùng icon cục bộ, giữ nguyên đường dẫn
  const iconCart = "/assets/img/shopping-cart-svgrepo-com.svg";
  const iconView = "/assets/img/eye-svgrepo-com.svg";

  return (
    <>
      <nav aria-label="breadcrumb" className="py-1" style={{ backgroundColor: "rgb(235, 245, 255)" }}>
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a className="text-dark text-decoration-none" href="#">Trang chủ</a></li>
            <li className="breadcrumb-item"><a className="text-dark text-decoration-none" href="#">Sản Phẩm</a></li>
            <li className="breadcrumb-item active span-vip" aria-current="page">Máy lọc, Vật Liệu Lọc</li>
          </ol>
        </div>
      </nav>

      <div className="container my-4">
        <h3 className="span-vip">Máy lọc, Vật Liệu Lọc</h3>

        <div className="list-filter">
          <span className="filter-title">Lọc theo khoảng giá </span>
          {listFilter.map(filter => (
            <button
              key={filter.id}
              className={"filter-item " + (filterPrice === filter.id ? "filter-item-active" : "")}
              onClick={() => setFilterPrice(filterPrice === filter.id ? null : filter.id)}
            >
              {filter.name}
            </button>
          ))}
        </div>

        <div className="list-filter">
          <span className="filter-title">Chọn theo tiêu chí</span>
          {listFilter2.map(filter => (
            <button
              key={filter.id}
              className={"filter-item " + (sortOption === filter.id ? "filter-item-active" : "")}
              onClick={() => setSortOption(sortOption === filter.id ? null : filter.id)}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Trạng thái tải/lỗi */}
        {loading && <div className="py-2">Đang tải sản phẩm...</div>}
        {errorMsg && <div className="py-2 text-danger">Lỗi: {errorMsg}</div>}

        {!loading && !errorMsg && (
          <>
            {filterProducts.length} sản phẩm

            <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
              {paginatedProducts.map((product) => {
                const img = product.images?.[0] || "/assets/img/pruduct-2.webp";
                return (
                  <div className="col set-width-product text-center" key={product._id}>
                    <div className="card">
                      <img src={img} className="card-img-top" alt={product.name} title={product.name} />
                      <div className="card-body p-0">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="price-products">{formatVND(product.price)}</p>
                      </div>

                      <div className="group-action">
                        <button className="btn-card-shop">
                          <img style={{ width: 30, height: 30 }} src={iconCart} alt="Add to cart" title="Thêm Giỏ Hàng" />
                        </button>

                        {/* ✅ xem chi tiết theo slug */}
                        <Link className="btn-view-product" to={`/product/${product.slug}`}>
                          <img style={{ width: 30, height: 30 }} src={iconView} alt="View product" title="Xem Thêm" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}

              {filterProducts.length === 0 && (
                <div className="col-12">
                  <p className="text-center">
                    Không tìm thấy sản phẩm phù hợp. <Link to="/"> Tất cả sản phẩm</Link>
                  </p>
                </div>
              )}
            </div>

            {totalPages > 1 && (
              <nav aria-label="Page navigation example" className="my-4">
                <ul className="pagination justify-content-center">
                  <li className={"page-item " + (currentPage === 1 ? "disabled" : "")}>
                    <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>«</button>
                  </li>

                  {Array.from({ length: totalPages }, (_, index) => (
                    <li key={index + 1} className={"page-item " + (currentPage === index + 1 ? "active" : "")}>
                      <button className="page-link" onClick={() => setCurrentPage(index + 1)}>{index + 1}</button>
                    </li>
                  ))}

                  <li className={"page-item " + (currentPage === totalPages ? "disabled" : "")}>
                    <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>»</button>
                  </li>
                </ul>
              </nav>
            )}
          </>
        )}
      </div>

      <Footer />
    </>
  );
}
