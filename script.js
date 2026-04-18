const openButton = document.getElementById("openInvite");
const cover = document.getElementById("cover");
const content = document.getElementById("content");

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      element.classList.add("active");
    }
  });
}

openButton.addEventListener("click", () => {
  cover.classList.add("fade-out");

  setTimeout(() => {
    cover.style.display = "none";
    content.classList.remove("hidden");
    revealOnScroll();
  }, 700);
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);