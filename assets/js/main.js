// Menú responsive y toast del formulario

document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.getElementById("nav-toggle");
  const mainNav = document.getElementById("main-nav");
  const contactForm = document.getElementById("contact-form");
  const toast = document.getElementById("toast");
  const toastClose = toast.querySelector(".toast__close");
  const yearSpan = document.getElementById("year");

  // Año dinámico en footer
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Toggle menú mobile
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      const isOpen = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Cerrar menú al hacer click en un enlace
    mainNav.addEventListener("click", function (event) {
      if (event.target.tagName.toLowerCase() === "a") {
        mainNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Toast helpers
  let toastTimeout;

  function showToast() {
    if (!toast) return;
    toast.classList.add("toast--visible");
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(hideToast, 4000);
  }

  function hideToast() {
    if (!toast) return;
    toast.classList.remove("toast--visible");
  }

  if (toastClose) {
    toastClose.addEventListener("click", hideToast);
  }

  // Manejo de formulario (sin enviar datos reales)
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Validación mínima nativa del navegador
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      contactForm.reset();
      showToast();
    });
  }
});
