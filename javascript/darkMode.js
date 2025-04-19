/**
 * Dark Mode Handler
 * Manages dark mode functionality across the entire website
 */

document.addEventListener('DOMContentLoaded', function () {
    initDarkMode();
});

function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Check for saved dark mode preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Apply dark mode if saved preference exists
    if (isDarkMode) {
        body.classList.add('dark-mode');
        updateDarkModeIcon(true);
        updateAccordionStyles(true);
    }

    // Toggle dark mode on button click
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function () {
            body.classList.toggle('dark-mode');
            const isCurrentlyDark = body.classList.contains('dark-mode');
            
            // Save preference to localStorage
            localStorage.setItem('darkMode', isCurrentlyDark);
            
            // Update icon and accordion
            updateDarkModeIcon(isCurrentlyDark);
            updateAccordionStyles(isCurrentlyDark);
        });
    }
}

function updateDarkModeIcon(isDark) {
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (!darkModeToggle) return;
    
    if (isDark) {
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        darkModeToggle.setAttribute('aria-label', 'Switch to Light Mode');
    } else {
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        darkModeToggle.setAttribute('aria-label', 'Switch to Dark Mode');
    }
}

function updateAccordionStyles(isDark) {
    // Specifically target FAQ accordion elements
    const accordionItems = document.querySelectorAll('.accordion-item');
    const accordionButtons = document.querySelectorAll('.accordion-button');
    const accordionBodies = document.querySelectorAll('.accordion-body');
    
    if (isDark) {
        // Apply dark mode styles to accordion elements
        accordionItems.forEach(item => {
            item.style.backgroundColor = 'var(--card-dark)';
            item.style.borderColor = 'var(--border-dark)';
        });
        
        accordionButtons.forEach(button => {
            if (!button.classList.contains('collapsed')) {
                button.style.backgroundColor = 'var(--accent-color)';
                button.style.color = 'white';
            } else {
                button.style.backgroundColor = 'var(--card-dark)';
                button.style.color = 'var(--text-light)';
            }
        });
        
        accordionBodies.forEach(body => {
            body.style.backgroundColor = 'var(--card-dark)';
            body.style.color = 'var(--text-light)';
        });
    } else {
        // Reset styles for light mode
        accordionItems.forEach(item => {
            item.style.backgroundColor = '';
            item.style.borderColor = '';
        });
        
        accordionButtons.forEach(button => {
            button.style.backgroundColor = '';
            button.style.color = '';
        });
        
        accordionBodies.forEach(body => {
            body.style.backgroundColor = '';
            body.style.color = '';
        });
    }
}
