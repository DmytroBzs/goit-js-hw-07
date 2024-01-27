const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.email.value;
  const password = form.elements.password.value;

  if (login.trim() === "" || password.trim() === "") {
    return alert("All form fields must be filled in");
  }

  console.log(`Email : ${login.trim()}, Password: ${password.trim()}`);
  form.reset();
}
