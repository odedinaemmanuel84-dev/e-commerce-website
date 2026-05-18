const products = [
  {
    id:1,
    name:"Luxury Watch",
    price:120,
    img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
  },

  {
    id:2,
    name:"Gold Necklace",
    price:80,
    img:"https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=800&q=80"
  },

  {
    id:3,
    name:"Designer Bag",
    price:150,
    img:"https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80"
  },

  {
    id:4,
    name:"Smartphone",
    price:300,
    img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80"
  },

  {
    id:5,
    name:"Sneakers",
    price:90,
    img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
  },

  {
    id:6,
    name:"Perfume",
    price:60,
    img:"https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=800&q=80"
  },

  {
    id:7,
    name:"Headphones",
    price:110,
    img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
  },

  {
    id:8,
    name:"Gaming Mouse",
    price:50,
    img:"https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80"
  },

  {
    id:9,
    name:"Laptop",
    price:700,
    img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
  },

  {
    id:10,
    name:"Smart TV",
    price:500,
    img:"https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80"
  }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const productList = document.getElementById("productList");

/* DISPLAY PRODUCTS */
function displayProducts(items = products) {

  productList.innerHTML = "";

  if(items.length === 0) {

    productList.innerHTML = `
      <div class="not-found">
        <h2>Product Not Found</h2>
        <p>Try searching for another product.</p>
      </div>
    `;

    return;
  }

  items.forEach(p => {

    productList.innerHTML += `
      <div class="product">

        <img src="${p.img}" alt="${p.name}" />

        <h4>${p.name}</h4>

        <p class="price">$${p.price}</p>

        <button class="add" onclick="addToCart(${p.id})">
          Add to Cart
        </button>

      </div>
    `;
  });
}

/* ADD TO CART */
function addToCart(id) {

  const item = products.find(p => p.id === id);

  cart.push(item);

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCart();

  alert("Added to cart!");
}

/* UPDATE CART */
function updateCart() {

  document.getElementById("cartCount").innerText = cart.length;

  const cartItems = document.getElementById("cartItems");

  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach(item => {

    total += item.price;

    cartItems.innerHTML += `
      <p>${item.name} - $${item.price}</p>
    `;
  });

  document.getElementById("total").innerText = total;
}

/* PAGE SWITCH */
function showPage(page) {

  document.getElementById("productList").style.display = "none";

  document.getElementById("cartPage").classList.add("hidden");

  document.getElementById("accountPage").classList.add("hidden");

  if(page === "home") {

    document.getElementById("productList").style.display = "grid";
  }

  if(page === "cart") {

    document.getElementById("cartPage").classList.remove("hidden");
  }

  if(page === "account") {

    document.getElementById("accountPage").classList.remove("hidden");
  }
}

/* SEARCH */
document.getElementById("search").addEventListener("input", (e) => {

  const value = e.target.value.toLowerCase();

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(value)
  );

  displayProducts(filtered);
});

/* INITIAL LOAD */
displayProducts();

updateCart();
