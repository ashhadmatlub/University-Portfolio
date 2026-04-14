function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}

// Simple form validation
const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message && email.includes("@")) {
    successMsg.style.display = "block";
    errorMsg.style.display = "none";
    form.reset();

    setTimeout(() => {
      successMsg.style.display = "none";
    }, 3000);
  } else {
    successMsg.style.display = "none";
    errorMsg.style.display = "block";
  }
});

//  BUTTON RIPPLE EFFECT
document.querySelector("button").addEventListener("click", function (e) {
  const circle = document.createElement("span");
  circle.style.position = "absolute";
  circle.style.width = circle.style.height = "100px";
  circle.style.background = "rgba(255,255,255,0.3)";
  circle.style.borderRadius = "50%";
  circle.style.left = e.offsetX + "px";
  circle.style.top = e.offsetY + "px";
  circle.style.transform = "translate(-50%, -50%) scale(0)";
  circle.style.animation = "ripple 0.6s linear";

  this.appendChild(circle);

  setTimeout(() => circle.remove(), 600);
});
