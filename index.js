const toggleCheckbox = document.querySelector('.toggle-checkbox');
const body = document.querySelector('body');
const isDarkMode = localStorage.getItem('darkMode');

// Function to toggle dark mode
function toggleDarkMode() {
  if (toggleCheckbox.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'true');
  } else {
    body.classList.remove('dark-mode');
    localStorage.removeItem('darkMode');
  }
}

// Function to apply dark mode on page load
function applyDarkModePreference() {
  if (isDarkMode) {
    toggleCheckbox.checked = true;
    body.classList.add('dark-mode');
  }
}

// Event listener for toggle change
toggleCheckbox.addEventListener('change', toggleDarkMode);

// Apply dark mode preference on page load
applyDarkModePreference();
