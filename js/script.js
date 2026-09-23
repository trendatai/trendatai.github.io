const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("mobile-open");
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('mobile-open'));
});

const sections = [...document.querySelectorAll("main section[id]")];
const navItems = [...document.querySelectorAll(".nav-links a")];

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navItems.forEach(item => item.classList.toggle(
        "active", item.getAttribute("href") === `#${entry.target.id}`
      ));
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach(section => observer.observe(section));

document.getElementById("year").textContent = new Date().getFullYear();

/* Replace # below with your real Trendat AI YouTube channel URL. */
document.getElementById("youtubeLink").addEventListener("click", e => {
  if (e.currentTarget.getAttribute("href") === "#") {
    e.preventDefault();
    alert("أضف رابط قناة Trendat AI في ملف index.html داخل زر YouTube.");
  }
});
