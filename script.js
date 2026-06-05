let total = 0;

function addToCart(name, price) {
  let li = document.createElement("li");
  li.textContent = name + " - " + price + " MAD";

  document.getElementById("cart").appendChild(li);

  total += price;
  document.getElementById("total").textContent = total;

  showToast();
}

/* SEARCH */
function searchProducts() {
  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.getElementsByClassName("card");

  for (let card of cards) {
    card.style.display = card.textContent.toLowerCase().includes(input)
      ? "block"
      : "none";
  }
}

/* FILTER */
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

/* TOAST */
function showToast() {
  let toast = document.getElementById("toast");
  toast.style.display = "block";

  setTimeout(() => {
    toast.style.display = "none";
  }, 1500);
}
