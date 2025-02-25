// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Sticky Navbar Effect
window.addEventListener('scroll', function() {
  let navbar = document.querySelector('.navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Back to Top Button
let backToTop = document.createElement('button');
backToTop.innerText = '⬆';
backToTop.className = 'back-to-top';
document.body.appendChild(backToTop);

window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
      backToTop.style.display = 'block';
  } else {
      backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Typing Effect
const text = "Welcome to My Portfolio";
let index = 0;
function typeEffect() {
  if (index < text.length) {
      document.getElementById("typing-text").textContent += text.charAt(index);
      index++;
      setTimeout(typeEffect, 100);
  }
}
document.addEventListener("DOMContentLoaded", typeEffect);
