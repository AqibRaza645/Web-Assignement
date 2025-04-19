document.addEventListener('DOMContentLoaded', function() {
  const signupForm = document.querySelector('.signup-form');
  
  if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
      // The original form validation is still running, this will only execute if validation passes
      // We'll add storing user data functionality
      
      // Gather form data
      const firstName = document.querySelector('input[placeholder="First Name"]').value;
      const lastName = document.querySelector('input[placeholder="Last Name"]').value;
      const email = document.querySelector('input[type="email"]').value;
      const phone = document.querySelector('input[type="tel"]').value;
      const password = document.getElementById('password').value;
      const newsletter = document.getElementById('newsletterCheck').checked;
      
      // Create user object
      const newUser = {
        firstName,
        lastName,
        email,
        phone,
        password,
        newsletter,
        dateJoined: new Date().toISOString()
      };
      
      // Register user
      const result = registerUser(newUser);
      
      if (!result.success) {
        // Prevent form submission if registration failed
        e.preventDefault();
        alert(result.message);
      } else {
        alert('Account created successfully! You can now log in.');
        // Redirect to login page
        window.location.href = 'login.html';
      }
    });
  }
});
