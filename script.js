// script.js

// Toggle sidebar open/closed
const toggleBtn = document.getElementById('toggle-btn');
const sidebar = document.querySelector('.sidebar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('closed');
});

// Stop/play video at reservation section
const video = document.getElementById('bg-video');
const reservationSec = document.querySelector('.section-reservation');
const stopOffset = reservationSec.offsetTop;

window.addEventListener('scroll', () => {
  if (window.scrollY >= stopOffset) {
    video.pause();
  } else {
    video.play();
  }
});

// Close sidebar on link click
document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.add('closed');
  });
});
