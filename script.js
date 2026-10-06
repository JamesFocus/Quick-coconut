const products = [
  {
    name: "Iced Latte",
    category: "drink",
    icon: "🥤",
    description: "Espresso, milk and ice.",
    price: "฿65"
  },
  {
    name: "Fresh Orange",
    category: "drink",
    icon: "🍊",
    description: "Freshly squeezed orange.",
    price: "฿55"
  },
  {
    name: "Chicken Sandwich",
    category: "food",
    icon: "🥪",
    description: "Toasted bread with chicken.",
    price: "฿89"
  },
  {
    name: "Fresh Salad",
    category: "food",
    icon: "🥗",
    description: "Crisp vegetables and dressing.",
    price: "฿79"
  },
  {
    name: "Americano",
    category: "cafe",
    icon: "☕",
    description: "Smooth espresso with water.",
    price: "฿55"
  },
  {
    name: "Croissant",
    category: "cafe",
    icon: "🥐",
    description: "Buttery, flaky and fresh.",
    price: "฿49"
  },
  {
    name: "Matcha Latte",
    category: "drink",
    icon: "🍵",
    description: "Creamy premium matcha.",
    price: "฿75"
  },
  {
    name: "Breakfast Set",
    category: "food",
    icon: "🍳",
    description: "Eggs, toast and fresh fruit.",
    price: "฿129"
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
