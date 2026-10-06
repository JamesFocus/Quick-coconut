const products = [
  {
    name: "Coconut Juice — Single",
    quantity: 1,
    icon: 🥥,
    totalPrice: 45,
    unitPrice: 45
  },
  {
    name: "Coconut Juice — Set of 3",
    quantity: 3,
    icon: 🥥🥥🥥,
    totalPrice: 120,
    unitPrice: 40
  },
  {
    name: "Coconut Juice — Set of 6",
    quantity: 6,
    icon: 🥥🥥🥥🥥🥥🥥,
    totalPrice: 210,
    unitPrice: 35
  },
  {
    name: "Coconut Juice — Set of 12",
    quantity: 12,
    icon: 🥥🥥🥥🥥🥥🥥🥥🥥🥥🥥🥥🥥,
    totalPrice: 360,
    unitPrice: 30
  }
];

const grid = document.getElementById("productGrid");
const filters = document.querySelectorAll(".filter");

function categoryName(category) {
  return category.charAt(0).toUpperCase() + category.slice(1);
}

function renderProducts(category = "all") {
  const visible = category === "all"
    ? products
    : products.filter(product => product.category === category);

  grid.innerHTML = visible.map(product => `
    <article class="product">
      <div class="product-visual" aria-hidden="true">${product.icon}</div>
      <div class="product-info">
        <span class="product-category">${categoryName(product.category)}</span>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <strong class="price">${product.price}</strong>
      </div>
    </article>
  `).join("");
}

filters.forEach(button => {
  button.addEventListener("click", () => {
    filters.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    renderProducts(button.dataset.category);
  });
});

renderProducts();
