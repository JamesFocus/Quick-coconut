const products = [
  {
    name: "Coconut Juice — Single",
    quantity: 1,
    icon: 🥥,
    totalPrice: 45,
    description: "45 per unit."
  },
  {
    name: "Coconut Juice — Set of 3",
    quantity: 3,
    icon: 🥥🥥🥥,
    totalPrice: 120,
    description: "40 per unit."
  },
  {
    name: "Coconut Juice — Set of 6",
    quantity: 6,
    icon: 🥥🥥🥥🥥🥥🥥,
    totalPrice: 210,
    description: "35 per unit."
  },
  {
    name: "Coconut Juice — Set of 12",
    quantity: 12,
    icon: 🥥🥥🥥🥥🥥🥥🥥🥥🥥🥥🥥🥥,
    totalPrice: 360,
    description: "30 per unit."
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
