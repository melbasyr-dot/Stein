function addToCart(product) {
  let li = document.createElement("li");
  li.textContent = product + " added";
  document.getElementById("cart").appendChild(li);
}
