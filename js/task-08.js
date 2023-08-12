const form = document.querySelector(".login-form");

const onSubmit = (event) => {
  event.preventDefault();

  const email = form.elements.email.value;

  const password = form.elements.password.value;

  if (!email || !password) return alert("Please! Fill in all fields!");

  console.log({
    email,
    password,
  });

  form.reset();
};
form.addEventListener("submit", onSubmit);
