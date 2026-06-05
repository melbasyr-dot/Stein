let total = 0;

function addToCart(product, price) {
  let li = document.createElement("li");

  li.textContent = product + " - " + price + " MAD ";

  let btn = document.createElement("button");
  btn.textContent = "Remove";
  btn.onclick = function() {
    total -= price;
    document.getElementById("total").textContent = total;
    li.remove();
  };

  li.appendChild(btn);
  document.getElementById("cart").appendChild(li);

  total += price;
  document.getElementById("total").textContent = total;
}
