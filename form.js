// Select input password

const passwordInput = document.getElementById("password");
const toggleBtn = document.getElementById("toggle-password");
const toggleIcon = document.getElementById("toggle-icon");

toggleBtn.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }
});

