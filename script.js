const prices = {
  chocolate: 5,
  strawberry: 4,
  vanilla: 3,
  blueberry: 6,
  lemon: 4,
};

let layers = [];

function addLayer(flavor) {
  if (layers.length >= 5) return;

  layers.push(flavor);
  renderCake();

  if (layers.length === 5) {
    showCandle();
    showPrice();
  }
}

function renderCake() {
  const cake = document.getElementById("cake");
  cake.innerHTML = "";

  layers.forEach((flavor, i) => {
    const layer = document.createElement("div");
    layer.className = `layer ${flavor}`;
    layer.style.bottom = `${i * 45}px`;
    layer.style.width = `${90 + (4 - i) * 15}px`;
    layer.style.left = `${(200 - parseInt(layer.style.width)) / 2}px`;
    cake.appendChild(layer);
  });
}

function showCandle() {
  const candle = document.createElement("div");
  candle.className = "candle";
  candle.style.bottom = `${layers.length * 45}px`;

  const flame = document.createElement("div");
  flame.className = "flame";
  candle.appendChild(flame);

  document.getElementById("cake").appendChild(candle);
}

function showPrice() {
  const priceDiv = document.getElementById("price");
  const total = layers.reduce((sum, layer) => sum + prices[layer], 0);

  let receipt = "<h3>🧾 Receipt</h3><ul>";
  layers.forEach((flavor) => {
    receipt += `<li>${capitalize(flavor)} - $${prices[flavor]}</li>`;
  });
  receipt += `</ul><strong>Total: $${total}</strong>`;
  priceDiv.innerHTML = receipt;
}

function resetCake() {
  layers = [];
  document.getElementById("cake").innerHTML = "";
  document.getElementById("price").innerHTML = "";
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
