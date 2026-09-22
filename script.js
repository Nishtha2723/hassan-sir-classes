const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

document.getElementById("admissionForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const course = document.getElementById("course").value;
  const message = document.getElementById("message").value.trim();

  const text =
    `Hello Hassan Sir Classes,%0A%0A` +
    `I would like to enquire about admission.%0A%0A` +
    `Student Name: ${encodeURIComponent(name)}%0A` +
    `Phone: ${encodeURIComponent(phone)}%0A` +
    `Class/Course: ${encodeURIComponent(course)}%0A` +
    `Message: ${encodeURIComponent(message || "No additional message")}`;

  window.open(`https://wa.me/919664207344?text=${text}`, "_blank");
});
