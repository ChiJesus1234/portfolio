// Test message to confirm JavaScript is working
console.log("JavaScript is connected 🚀");

// Highlight active navigation link
const links = document.querySelectorAll("nav a");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.style.textDecoration = "underline";
  }
});
