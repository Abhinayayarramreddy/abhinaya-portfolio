// script.js

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Resume download button
document.getElementById("resume-download").addEventListener("click", () => {
  window.open("Abhinaya_Resume.pdf", "_blank");
});

// Form validation
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!email || !message) {
    e.preventDefault();
    alert("Please fill in all fields before submitting.");
  }
});
