const container = document.querySelector('.container');
const input = document.getElementById('input');

input.addEventListener('change', toggleDarkMode);

function toggleDarkMode() {
  container.classList.toggle('light');
  container.classList.toggle('dark');
}