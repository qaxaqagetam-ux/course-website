const yearEl = document.getElementById("year");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.checkValidity()) {
      formStatus.textContent = "Խնդրում ենք լրացնել բոլոր պարտադիր դաշտերը։";
      return;
    }

    const name = contactForm.name.value.trim();
    formStatus.textContent = `Շնորհակալություն, ${name || "ընկեր"}։ Մենք շուտով կկապվենք ձեզ հետ։`;
    contactForm.reset();
  });
}
