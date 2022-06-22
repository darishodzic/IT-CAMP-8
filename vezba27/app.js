counterEl = document.getElementById("counter");

function countUp(value) {
  counter = Number(counterEl.innerText);
  counterEl.innerText = counter + value;
}

function countDown(value) {
  counter = Number(counterEl.innerText);
  counterEl.innerText = counter - value;
}

// counterEl.style.backgroundColor = "#333";
// counterEl.style.color = "red";
