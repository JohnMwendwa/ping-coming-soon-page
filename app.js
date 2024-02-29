const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const errorMessage = document.querySelector(".error__message");
const button = document.querySelector("form button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  if (!isValidEmail(email)) {
    errorMessage.style.display = "block";
    errorMessage.textContent = "Please provide a valid email address";
    emailInput.style.outline = "1px solid red";
  } else {
    errorMessage.style.display = "none";
    emailInput.style.outline = "1px solid var(--pale-blue)";
    button.textContent = "Submitted!";
    button.style.backgroundColor = "hsla(223, 87%, 63%,.8)";
    button.style.cursor = "not-allowed";
    button.setAttribute("disabled", true);

    // Reset the form after 5 seconds
    setTimeout(() => {
      form.reset();
      button.textContent = "Submit";
      button.style.backgroundColor = "hsl(223, 87%, 63%)";
      button.style.cursor = "pointer";
      button.removeAttribute("disabled");
    }, 5000);
  }
});
