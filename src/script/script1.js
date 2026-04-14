function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}

// SKILL BAR ANIMATION
window.addEventListener("load", () => {
  document.querySelectorAll(".bar span").forEach((bar) => {
    let finalWidth = bar.style.width;

    bar.style.width = "0";

    setTimeout(() => {
      bar.style.width = finalWidth;
    }, 500);
  });
});

//  SCROLL REVEAL
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

//  LOADER
window.addEventListener("load", () => {
  document.getElementById("loader").classList.add("hide");
});
// CUSTOM CURSOR
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.clientY + "px";
  cursor.style.left = e.clientX + "px";
});
// TYPEWRITER EFFECT
const text = "Who am I?";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.querySelector(".typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  }
}
typeWriter();

//  COUNTER ANIMATION
let counterStarted = false;

function runCounter() {
  if (counterStarted) return;

  const section = document.querySelector(".about-stats");
  const top = section.getBoundingClientRect().top;
  const screen = window.innerHeight;

  if (top < screen - 100) {
    counterStarted = true;

    document.querySelectorAll(".counter").forEach((counter) => {
      const target = +counter.getAttribute("data-target");

      let count = 0;
      const speed = target / 100;

      const update = () => {
        if (count < target) {
          count += speed;
          counter.innerText = Math.ceil(count);
          setTimeout(update, 20);
        } else {
          counter.innerText = target + "+";
        }
      };

      update();
    });
  }
}

window.addEventListener("scroll", runCounter);
