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

// Define messageElement in the global scope
const messageElement = document.createElement("div");

function showMessage(message) {
  messageElement.textContent = message;
  document.body.appendChild(messageElement);
}

function createBoxes(amount) {
  destroyBoxes();
  if (messageElement.parentNode) {
    messageElement.parentNode.removeChild(messageElement);
  }
  const numBoxes = parseInt(amount.trim(), 10);

  if (isNaN(numBoxes) || numBoxes < 1 || numBoxes > 100) {
    showMessage("Please enter a number between 1 and 100.");
    return;
  }

  const boxes = Array.from({ length: numBoxes }, (_, index) => {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${30 + index * 10}px`;
    box.style.height = `${30 + index * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    return box;
  });

  boxesContainer.append(...boxes);
  input.value = "";
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

createButton.addEventListener("click", () => {
  createBoxes(input.value);
});

destroyButton.addEventListener("click", destroyBoxes);

// const controls = document.getElementById("controls");
// const input = controls.querySelector("input");
// const createButton = controls.querySelector("[data-create]");
// const destroyButton = controls.querySelector("[data-destroy]");
// const boxesContainer = document.getElementById("boxes");

// function showMessage(message) {
//   const messageElement = document.createElement("div");
//   messageElement.textContent = message;
//   document.body.appendChild(messageElement);
// }
// function createBoxes(amount) {
//   destroyBoxes();
//   if (amount >= 1 && amount <= 100) {
//     const boxes = Array.from({ length: amount }, (_, index) => {
//       const box = document.createElement("div");
//       box.classList.add("box");
//       box.style.width = `${30 + index * 10}px`;
//       box.style.height = `${30 + index * 10}px`;
//       box.style.backgroundColor = getRandomHexColor();
//       return box;
//     });
//     boxesContainer.append(...boxes);
//     input.value = "";
//   } else {
//     showMessage("Please enter a number between 1 and 100.");
//   }
// }

// function destroyBoxes() {
//   boxesContainer.innerHTML = "";
// }

// createButton.addEventListener("click", createBoxes);
// destroyButton.addEventListener("click", destroyBoxes);
