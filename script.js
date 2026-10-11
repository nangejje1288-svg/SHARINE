document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");

  navToggle?.addEventListener("click", () => {
    siteNav.classList.toggle("open");
    navToggle.classList.toggle("active");
  });

  document.querySelectorAll(".site-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      if (siteNav.classList.contains("open")) {
        siteNav.classList.remove("open");
        navToggle?.classList.remove("active");
      }
    });
  });

  const revealElements = document.querySelectorAll("[data-reveal]");
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
});
