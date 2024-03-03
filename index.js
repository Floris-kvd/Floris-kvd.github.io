const toggleCheckbox = document.querySelector('.toggle-checkbox');
const body = document.querySelector('body');
const love_together_button = document.querySelector('#love-together-button')
const isDarkMode = localStorage.getItem('darkMode');

// Function to toggle dark mode
function toggleDarkMode() {
  if (toggleCheckbox.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'true');
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'false');
  }
}

// Function to apply dark mode on page load
function applyDarkModePreference() {
  if (isDarkMode == "true" || isDarkMode == null) {
    toggleCheckbox.checked = true;
    body.classList.add('dark-mode');
  }
}

// Event listener for love-together-button
love_together_button.addEventListener("click", function () {
  // Redirect to the test.html page
  window.location.href = "love-together.html";
});

// Event listener for toggle change
toggleCheckbox.addEventListener('change', toggleDarkMode);

// Apply dark mode preference on page load
applyDarkModePreference();
