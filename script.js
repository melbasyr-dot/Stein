let total = 0;

/* 🛍️ PRODUCTS DATABASE */
const products = [
  {
    name: "T-shirt",
    price: 100,
    category: "clothes",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },
  {
    name: "Shoes",
    price: 350,
    category: "shoes",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },
  {
    name: "Headphones",
    price: 200,
    category: "tech",
    img: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5"
  },
  {
    name: "Watch",
    price: 180,
    category: "tech",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
  },
  {
    name: "Jacket",
    price: 250,
    category: "clothes",
    img: "https://images.unsplash.com/photo-1520975928316-9c7c2d0c1c42"
  },
  {
    name: "Backpack",
    price: 150,
    category: "clothes",
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  }
];

/* 🚀 LOAD PRODUCTS */
function loadProducts() {
  let container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach(p => {
    container.innerHTML += `
      <div class="card ${p.category}">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>${p.price} MAD</p>
        <button onclick="addToCart('${p.name}',${p.price})">
          Add to cart
        </button>
      </div>
    `;
  });
}

loadProducts();

/* 🛒 CART */
function addToCart(name, price) {
  let li = document.createElement("li");
  li.textContent = name + " - " + price + " MAD";

  document.getElementById("cart").appendChild(li);

  total += price;
  document.getElementById("total").textContent = total;

  showToast();
}

/* 🔍 SEARCH */
function searchProducts() {
  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.getElementsByClassName("card");

  for (let card of cards) {
    card.style.display = card.textContent.toLowerCase().includes(input)
      ? "block"
      : "none";
  }
}

/* 📦 FILTER */
function filterCategory(cat) {
  let cards = document.getElementsByClassName("card");

  for (let card of cards) {
    if (cat === "all") {
      card.style.display = "block";
    } else {
      card.style.display = card.classList.contains(cat)
        ? "block"
        : "none";
    }
  }
}

/* 💬 TOAST */
function showToast() {
  let toast = document.getElementById("toast");
  toast.style.display = "block";

  setTimeout(() => {
    toast.style.display = "none";
  }, 1500);
}
