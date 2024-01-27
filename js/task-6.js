function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById("controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");

function createBoxes() {
  const amount = input.value;
  if (amount >= 1 && amount <= 100) {
    const boxes = Array.from({ length: amount }, (el, index) => {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.width = `${30 + index * 10}px`;
      box.style.height = `${30 + index * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      return box;
    });
    boxesContainer.append(...boxes);
    input.value = "";
  } else {
    alert("Please enter a number between 1 and 100.");
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);
