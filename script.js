const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const currentValue = document.getElementById("value");

let value = 0;

increment.addEventListener("click", () => {
  value = value + 1;
  currentValue.innerText = value;
});

decrement.addEventListener("click", function () {
  if (value > 0) {
    value = value - 1;
    currentValue.innerText = value;
  }
});
