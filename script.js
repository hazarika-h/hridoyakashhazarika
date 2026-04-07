// script.js

// Function to toggle theme
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
}

// Function to navigate to different pages
function navigateTo(page) {
    window.location.href = page;
}

// Event listeners
document.getElementById('themeToggle').addEventListener('click', toggleTheme);
document.getElementById('navButton').addEventListener('click', () => navigateTo('anotherPage.html'));