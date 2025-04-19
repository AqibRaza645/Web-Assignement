document.addEventListener('DOMContentLoaded', function() {
  const passwordInput = document.getElementById('password');
  const confirmPasswordInput = document.getElementById('confirmPassword');
  
  // Password requirement elements
  const lengthReq = document.getElementById('length-req');
  const uppercaseReq = document.getElementById('uppercase-req');
  const lowercaseReq = document.getElementById('lowercase-req');
  const numberReq = document.getElementById('number-req');
  const specialReq = document.getElementById('special-req');
  
  if (!passwordInput || !lengthReq) return; // Exit if we're not on the signup page
  
  // Function to update requirement status
  function updateRequirementStatus(element, isValid) {
    if (isValid) {
      element.classList.add('met');
      element.classList.remove('unmet');
      element.querySelector('i').className = 'fa fa-check-circle';
    } else {
      element.classList.add('unmet');
      element.classList.remove('met');
      element.querySelector('i').className = 'fa fa-circle';
    }
  }
  
  // Function to validate password
  function validatePassword(password) {
    // Check length
    updateRequirementStatus(lengthReq, password.length >= 8);
    
    // Check uppercase
    updateRequirementStatus(uppercaseReq, /[A-Z]/.test(password));
    
    // Check lowercase
    updateRequirementStatus(lowercaseReq, /[a-z]/.test(password));
    
    // Check number
    updateRequirementStatus(numberReq, /\d/.test(password));
    
    // Check special character
    updateRequirementStatus(specialReq, /[!@#$%^&*(),.?":{}|<>]/.test(password));
  }
  
  // Initial validation
  validatePassword(passwordInput.value);
  
  // Live validation as user types
  passwordInput.addEventListener('input', function() {
    validatePassword(this.value);
  });
  
  // Validate confirm password
  if (confirmPasswordInput) {
    confirmPasswordInput.addEventListener('input', function() {
      const password = passwordInput.value;
      const confirmPassword = this.value;
      
      if (password && confirmPassword) {
        if (password === confirmPassword) {
          this.style.borderColor = '#198754';
        } else {
          this.style.borderColor = '#dc3545';
        }
      }
    });
  }
});
