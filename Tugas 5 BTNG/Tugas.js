const body = document.body;
const themeBtn = document.getElementById("themeBtn");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const learnBtn = document.getElementById("learnBtn");
const heroText = document.getElementById("heroText");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  const darkMode = body.classList.contains("dark");
  themeBtn.textContent = darkMode ? "☀" : "☾";
  themeBtn.setAttribute(
    "aria-label",
    darkMode ? "Aktifkan tema terang" : "Aktifkan tema gelap"
  );
});

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuBtn.textContent = navLinks.classList.contains("active") ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuBtn.textContent = "☰";
  });
});

let expanded = false;

learnBtn.addEventListener("click", () => {
  expanded = !expanded;

  if (expanded) {
    heroText.textContent =
      "Saya sedang mengembangkan kemampuan di bidang Sistem Informasi, mulai dari pemrograman, basis data, hingga desain antarmuka. Saya percaya bahwa teknologi yang baik harus mudah digunakan dan memberikan solusi nyata.";
    learnBtn.textContent = "Tampilkan Lebih Singkat";
  } else {
    heroText.textContent =
      "Saya mahasiswa Sistem Informasi yang tertarik pada teknologi, desain web, dan pengembangan aplikasi sederhana.";
    learnBtn.textContent = "Learn More";
  }
});
