const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");
textInput.addEventListener("input", (event) => {
  const inputValue = event.target.value.trim();
  textOutput.textContent = inputValue === "" ? "Anonymous" : inputValue;
});
