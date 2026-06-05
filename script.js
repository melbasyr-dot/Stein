/* =========================
   PRO MARKET SCRIPT
========================= */

let total = 0;

/* 🧠 PRODUCTS DATABASE */
const products = [
  {name:"T-shirt", price:100, cat:"clothes", img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"},
  {name:"Shoes", price:350, cat:"shoes", img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"},
  {name:"Headphones", price:200, cat:"tech", img:"https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5"},
  {name:"Watch", price:180, cat:"tech", img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30"},
  {name:"Jacket", price:250, cat:"clothes", img:"https://images.unsplash.com/photo-1520975928316-9c7c2d0c1c42"},
  {name:"Backpack", price:150, cat:"clothes", img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e"},
];

/* =========================
   LOAD PRODUCTS
========================= */
function loadProducts(){
  let box = document.getElementById("products");
  box.innerHTML = "";

  products.forEach(p=>{
    box.innerHTML += `
      <div class="card ${p.cat}">
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

/* =========================
   CART SYSTEM
========================= */
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price){
  cart.push({name, price});
  saveCart();

  updateCart();
  showToast();
}

/* REMOVE ITEM */
function removeItem(index){
  cart.splice(index,1);
  saveCart();
  updateCart();
}

/* UPDATE CART UI */
function updateCart(){
  let list = document.getElementById("cart");
  list.innerHTML = "";

  total = 0;

  cart.forEach((item,index)=>{
    total += item.price;

    list.innerHTML += `
      <li>
        ${item.name} - ${item.price} MAD
        <button onclick="removeItem(${index})">X</button>
      </li>
    `;
  });

  document.getElementById("total").textContent = total;
}

/* SAVE CART */
function saveCart(){
  localStorage.setItem("cart", JSON.stringify(cart));
}

/* =========================
   SEARCH
========================= */
function searchProducts(){
  let val = document.getElementById("search").value.toLowerCase();
  let cards = document.getElementsByClassName("card");

  for(let c of cards){
    c.style.display = c.textContent.toLowerCase().includes(val)
      ? "block":"none";
  }
}

/* =========================
   FILTER CATEGORY
========================= */
function filterCategory(cat){
  let cards = document.getElementsByClassName("card");

  for(let c of cards){
    if(cat === "all"){
      c.style.display = "block";
    } else {
      c.style.display = c.classList.contains(cat)
        ? "block":"none";
    }
  }
}

/* =========================
   TOAST MESSAGE
========================= */
function showToast(){
  let toast = document.getElementById("toast");
  toast.style.display = "block";

  setTimeout(()=>{
    toast.style.display = "none";
  },1500);
}

/* =========================
   INIT
========================= */
loadProducts();
updateCart();
