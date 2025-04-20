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

//custom form validation (password constraints and error msg generation) code:

// Form validation for signup page - Password validation only
document.addEventListener('DOMContentLoaded', function() {
  // Get the form and password input elements
  const signupForm = document.querySelector('.signup-form');
  const passwordInput = document.querySelector('input[type="password"]:not([placeholder="Confirm Password"])');
  const confirmPasswordInput = document.querySelector('input[placeholder="Confirm Password"]');
  
  // Create error message elements
  function createErrorMessage(input, message) {
      // Remove any existing error message
      const existingError = input.parentElement.querySelector('.error-message');
      if (existingError) {
          existingError.remove();
      }
      
      // Create new error message
      const errorDiv = document.createElement('div');
      errorDiv.className = 'error-message';
      errorDiv.style.color = '#dc3545';
      errorDiv.style.fontSize = '0.875rem';
      errorDiv.style.marginTop = '-1rem';
      errorDiv.style.marginBottom = '1rem';
      
      // Create icon element
      const iconSpan = document.createElement('span');
      iconSpan.innerHTML = '<i class="fa fa-exclamation-circle" style="color: #dc3545; margin-right: 5px;"></i>';
      
      // Create message text
      const messageText = document.createTextNode(message);
      
      // Append icon and message to the error div
      errorDiv.appendChild(iconSpan);
      errorDiv.appendChild(messageText);
      
      // Insert error message after the input
      input.parentElement.insertBefore(errorDiv, input.nextSibling);
      
      // Highlight the input field
      input.style.borderColor = '#dc3545';
  }
  
  // Remove error message
  function removeErrorMessage(input) {
      const errorMessage = input.parentElement.querySelector('.error-message');
      if (errorMessage) {
          errorMessage.remove();
          input.style.borderColor = '';
      }
  }
  
  // Password validation
  passwordInput.addEventListener('blur', function() {
      const password = this.value.trim();
      if (password) {
          const minLength = 8;
          const hasNumber = /\d/.test(password);
          const hasUppercase = /[A-Z]/.test(password);
          const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
          
          if (password.length < minLength) {
              createErrorMessage(this, 'Password must be at least ' + minLength + ' characters long.');
          } else if (!hasNumber) {
              createErrorMessage(this, 'Password must contain at least one number.');
          } else if (!hasUppercase) {
              createErrorMessage(this, 'Password must contain at least one uppercase letter.');
          } else if (!hasSpecialChar) {
              createErrorMessage(this, 'Password must contain at least one special character.');
          } else {
              removeErrorMessage(this);
          }
      }
  });
  
  // Confirm password validation
  confirmPasswordInput.addEventListener('blur', function() {
      const password = passwordInput.value.trim();
      const confirmPassword = this.value.trim();
      
      if (confirmPassword && password !== confirmPassword) {
          createErrorMessage(this, 'Passwords do not match.');
      } else {
          removeErrorMessage(this);
      }
  });
  
  // Form submission validation for passwords only
  signupForm.addEventListener('submit', function(event) {
      let isValid = true;
      
      // Validate password
      const password = passwordInput.value.trim();
      const minLength = 8;
      const hasNumber = /\d/.test(password);
      const hasUppercase = /[A-Z]/.test(password);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
      
      if (password.length < minLength) {
          createErrorMessage(passwordInput, 'Password must be at least ' + minLength + ' characters long.');
          isValid = false;
      } else if (!hasNumber) {
          createErrorMessage(passwordInput, 'Password must contain at least one number.');
          isValid = false;
      } else if (!hasUppercase) {
          createErrorMessage(passwordInput, 'Password must contain at least one uppercase letter.');
          isValid = false;
      } else if (!hasSpecialChar) {
          createErrorMessage(passwordInput, 'Password must contain at least one special character.');
          isValid = false;
      }
      
      // Validate confirm password
      const confirmPassword = confirmPasswordInput.value.trim();
      if (password !== confirmPassword) {
          createErrorMessage(confirmPasswordInput, 'Passwords do not match.');
          isValid = false;
      }
      
      // Prevent form submission if validation fails
      if (!isValid) {
          event.preventDefault();
      }
  });
});



