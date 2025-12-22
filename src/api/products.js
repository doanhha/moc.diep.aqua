export async function fetchProducts({ categorySlug, q } = {}) {
  const params = new URLSearchParams();
  if (categorySlug) params.set("categorySlug", categorySlug);
  if (q) params.set("q", q);

  const url = `/api/products${params.toString() ? `?${params.toString()}` : ""}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export async function fetchProductBySlug(slug) {
  const res = await fetch(`/api/products/${slug}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}
