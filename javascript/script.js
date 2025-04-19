
// Navbar scroll effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 0';
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 1)';
    } else {
        navbar.style.padding = '15px 0';
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

//Dark mode js
document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check for saved dark mode preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Apply dark mode if saved preference exists
    if (isDarkMode) {
        body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    // Toggle dark mode on button click
    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');

        // Update icon based on current mode
        if (body.classList.contains('dark-mode')) {
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('darkMode', 'true');
        } else {
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('darkMode', 'false');
        }
    });
});

//collections dropdown menu slider on the naviagation bar

document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");
  const toggle = dropdown.querySelector(".dropdown-toggle");
  const menu = dropdown.querySelector(".dropdown-menu");

  let isOpen = false;

  toggle.addEventListener("click", function (e) {
    e.preventDefault();
    if (isOpen) {
      // Closing
      menu.classList.remove("showing");
      setTimeout(() => dropdown.classList.remove("show"), 300); // wait for animation
    } else {
      // Opening
      dropdown.classList.add("show");
      setTimeout(() => menu.classList.add("showing"), 10); // slight delay for smoothness
    }
    isOpen = !isOpen;
  });

  // Close when clicking outside
  window.addEventListener("click", function (e) {
    if (!dropdown.contains(e.target) && isOpen) {
      menu.classList.remove("showing");
      setTimeout(() => dropdown.classList.remove("show"), 300);
      isOpen = false;
    }
  });
});





