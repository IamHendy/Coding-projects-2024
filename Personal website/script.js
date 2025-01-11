// Theme Toggle Functionality
// Theme Toggle Functionality
const themeToggleBtn = document.getElementById("theme-toggle");
const bodyElement = document.body;

themeToggleBtn.addEventListener("click", () => {
  if (bodyElement.classList.contains("dark-mode")) {
    bodyElement.classList.remove("dark-mode");
    bodyElement.classList.add("light-mode");
    themeToggleBtn.textContent = "🌙";
  } else {
    bodyElement.classList.remove("light-mode");
    bodyElement.classList.add("dark-mode");
    themeToggleBtn.textContent = "🌞";
  }
});

// Scroll-to-Top Button
const scrollToTopBtn = document.getElementById("scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
