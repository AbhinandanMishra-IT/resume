/* ================= STICKY HEADER ================= */
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 50);
});

/* ================= MOBILE MENU ================= */
const menu = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");

menu.addEventListener("click", () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
});

/* Close menu on scroll */
window.addEventListener("scroll", () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("active");
});

/* ================= SCROLL REVEAL (SAFE INIT) ================= */
if (typeof ScrollReveal !== "undefined") {
  const sr = ScrollReveal({
    distance: "50px",
    duration: 2200,
    easing: "cubic-bezier(.25,.8,.25,1)",
    reset: false
  });

  sr.reveal(".home-text", {
    delay: 300,
    origin: "left"
  });

  sr.reveal(".home-img", {
    delay: 300,
    origin: "right"
  });

  sr.reveal(
    ".sub-service, .about, .experience, .portfolio, .service, .cta, .contact",
    {
      delay: 200,
      origin: "bottom",
      interval: 120
    }
  );
}

/* ================= SMOOTH NAV SCROLL ================= */
document.querySelectorAll('.navlist a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;

    const offset = header.offsetHeight + 10;
    const top = target.offsetTop - offset;

    window.scrollTo({
      top,
      behavior: "smooth"
    });

    // Close mobile menu
    menu.classList.remove("bx-x");
    navlist.classList.remove("active");
  });
});

/* ================= SUBTLE MOUSE PARALLAX (DESKTOP ONLY) ================= */
const homeImg = document.querySelector(".home-img img");

if (homeImg && window.innerWidth > 1024) {
  document.addEventListener("mousemove", e => {
    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;

    homeImg.style.transform = `translate(${x}px, ${y}px)`;
  });
}

/* ================= FADE-IN ON LOAD ================= */
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

/* ================= PERFORMANCE: DISABLE ANIMATIONS ON LOW POWER ================= */
if (navigator.connection && navigator.connection.saveData) {
  document.documentElement.classList.add("reduce-motion");
}

/* ================= CONSOLE BRANDING ================= */
console.log(
  "%c🚀 Portfolio Loaded Successfully",
  "color:#22d3ee;font-size:16px;font-weight:bold"
);
console.log(
  "%cBuilt by Aditya Singh | Full Stack Developer",
  "color:#9ca3af;font-size:12px"
);
