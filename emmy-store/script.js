const products = [
  { id: 1, name: "Gold Watch", price: 120 },
  { id: 2, name: "Luxury Bag", price: 200 },
  { id: 3, name: "Premium Shoes", price: 150 },
  { id: 4, name: "Elegant Perfume", price: 90 }
];

let cart = [];

const productContainer = document.getElementById("products");

function displayProducts(items) {
  productContainer.innerHTML = "";

  items.forEach(p => {
    productContainer.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>$${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

displayProducts(products);

// SEARCH
document.getElementById("search").addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(value)
  );
  displayProducts(filtered);
});

// CART
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  document.getElementById("cart-count").innerText = cart.length;

  let total = 0;
  let html = "";

  cart.forEach(item => {
    total += item.price;
    html += `<p>${item.name} - $${item.price}</p>`;
  });

  document.getElementById("cart-items").innerHTML = html;
  document.getElementById("total").innerText = total;
}

// CART TOGGLE
function toggleCart() {
  document.getElementById("cart").classList.toggle("active");
}

// CHECKOUT
function checkout() {
  alert("Checkout successful (demo mode)");
}
