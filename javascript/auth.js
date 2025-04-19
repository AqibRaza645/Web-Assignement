// This file contains authentication related functions

// Register a new user
function registerUser(userData) {
  // Validate input
  if (!userData.firstName || !userData.lastName || !userData.email || !userData.password) {
    return {
      success: false,
      message: 'All required fields must be filled'
    };
  }
  
  // Password validation
  const password = userData.password;
  if (password.length < 8 || 
      !/[A-Z]/.test(password) || 
      !/[a-z]/.test(password) || 
      !/\d/.test(password) || 
      !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return {
      success: false,
      message: 'Password does not meet all requirements'
    };
  }
  
  // Get existing users or initialize empty array
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  
  // Check if user already exists
  if (users.some(user => user.email === userData.email)) {
    return {
      success: false,
      message: 'A user with this email already exists'
    };
  }
  
  // Add user
  users.push(userData);
  
  // Save to localStorage
  localStorage.setItem('users', JSON.stringify(users));
  
  // For debugging (optional)
  console.log('User registered:', userData.email);
  console.log('All users:', users);
  
  return {
    success: true,
    message: 'User registered successfully'
  };
}

// Login a user
function loginUser(email, password) {
  // Validate input
  if (!email || !password) {
    return {
      success: false,
      message: 'Email and password are required'
    };
  }
  
  // Get users from localStorage
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  
  // For debugging (optional)
  console.log('Attempting login for:', email);
  console.log('Available users:', users);
  
  // Find user
  const user = users.find(user => user.email === email);
  
  // Check if user exists
  if (!user) {
    return {
      success: false,
      message: 'No account found with this email'
    };
  }
  
  // Check if password matches
  if (user.password !== password) {
    return {
      success: false,
      message: 'Invalid password'
    };
  }
  
  // Login successful
  return {
    success: true,
    message: 'Login successful',
    user: user
  };
}

// Store user session
function setUserSession(user, rememberMe) {
  // Store in localStorage (persistent) or sessionStorage (until browser closed)
  const storage = rememberMe ? localStorage : sessionStorage;
  
  // Create a copy without password for security
  const sessionUser = { ...user };
  delete sessionUser.password;
  
  // Save user data
  storage.setItem('currentUser', JSON.stringify(sessionUser));
}