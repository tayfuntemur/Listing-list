// Ürünler dizisi
const products = [
  { name: "Laptop", price: 3000 },
  { name: "Telefon", price: 1500 },
  { name: "Tablet", price: 2000 },
  { name: "Kulaklık", price: 300 },
  { name: "Klavye", price: 100 }
];
// Ürünleri ekrana yazdır
function displayProducts(productList) {
  const productContainer = document.getElementById("product-list");
  productContainer.innerHTML = "";
  productList.forEach(product => {
    const listItem = document.createElement("li");
    listItem.textContent = `${product.name} - ${product.price} TL`;
    productContainer.appendChild(listItem);
  });
}
// mysort fonksiyonu
function mysort(arr, cmp) {
  return arr.sort(cmp);
}
// Ürünleri sıralama fonksiyonu
function sortProducts() {
  const sortBy = document.getElementById("sort-by").value;
  const sortedProducts = mysort(products, (a, b) => {
    if (sortBy === "price") return a.price - b.price;
    if (sortBy === "name") return a.name.localeCompare(b.name);
  });
  displayProducts(sortedProducts);
}
// İlk başta ürünleri görüntüle
displayProducts(products);
