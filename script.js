const openButton = document.getElementById("openInvite");
const cover = document.getElementById("cover");
const content = document.getElementById("content");

const revealElements = document.querySelectorAll(".reveal");

// Geri sayım tarihi
const eventDate = new Date("2026-05-30T19:30:00").getTime();

// Sayfa içi animasyon
function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      element.classList.add("active");
    }
  });
}

// Geri sayım fonksiyonu
function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) {
    return;
  }

  if (distance <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}

// Davetiyeyi açma
openButton.addEventListener("click", () => {
  cover.classList.add("fade-out");

  setTimeout(() => {
    cover.style.display = "none";
    content.classList.remove("hidden");
    revealOnScroll();
    updateCountdown();
  }, 700);
});

// İlk yüklenmede
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", () => {
  revealOnScroll();
  updateCountdown();
});

// Her saniye geri sayımı güncelle
setInterval(updateCountdown, 1000);