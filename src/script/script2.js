function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}

//  TYPING EFFECT
const textArray = ["Web Developer", "Frontend Developer", "Programmer"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
  const typing = document.getElementById("typing");

  if (!typing) return;

  if (isDeleting) {
    currentText = textArray[index].substring(0, charIndex--);
  } else {
    currentText = textArray[index].substring(0, charIndex++);
  }

  typing.textContent = currentText;

  if (!isDeleting && charIndex === textArray[index].length + 1) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % textArray.length;
    setTimeout(type, 300);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}

type();

// SCROLL REVEAL
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
// LOADER REMOVE

window.addEventListener("load", () => {
  document.getElementById("loader").classList.add("hide");
});
//  CURSOR MOVE
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});
