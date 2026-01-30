// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close nav when clicking a link (mobile)
  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// FAQ accordion
const faq = document.getElementById("faq");
if (faq) {
  faq.querySelectorAll(".faq__item").forEach((item) => {
    const btn = item.querySelector(".faq__q");
    const ans = item.querySelector(".faq__a");

    if (!btn || !ans) return;

    btn.addEventListener("click", () => {
      const isOpen = item.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(isOpen));
      ans.setAttribute("aria-hidden", String(!isOpen));
    });
  });
}

// Footer year
const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());
