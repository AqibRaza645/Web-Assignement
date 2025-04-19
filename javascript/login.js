document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.querySelector('.login-form');
  
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const email = document.querySelector('input[type="email"]').value;
      const password = document.querySelector('input[type="password"]').value;
      const rememberMe = document.getElementById('rememberMe').checked;
      
      // Attempt login
      const result = loginUser(email, password);
      
      if (!result.success) {
        // Show error message
        alert(result.message);
        return;
      }
      
      // Set user session
      setUserSession(result.user, rememberMe);
      
      // Show success message
      alert(`Welcome back, ${result.user.firstName}!`);
      
      // Redirect to home page
      window.location.href = "index.html";
    });
  }
});
