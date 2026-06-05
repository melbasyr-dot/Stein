let total = 0;

function addToCart(name, price) {
  let li = document.createElement("li");
  li.textContent = name + " - " + price + " MAD ";

  let btn = document.createElement("button");
  btn.textContent = "Remove";

  btn.onclick = function () {
    total -= price;
    document.getElementById("total").textContent = total;
    li.remove();
  };

  li.appendChild(btn);
  document.getElementById("cart").appendChild(li);

  total += price;
  document.getElementById("total").textContent = total;
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
