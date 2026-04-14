function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}

//  TYPING EFFECT
const words = ["Student", "Frontend Developer", "Problem Solver"];
let i = 0;
let j = 0;
let isDeleting = false;

function type() {
  const currentWord = words[i];

  if (isDeleting) {
    j--;
  } else {
    j++;
  }

  document.getElementById("typing").textContent = currentWord.substring(0, j);

  if (!isDeleting && j === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();

function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);
