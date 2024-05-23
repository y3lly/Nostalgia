document.addEventListener('DOMContentLoaded', function() {
  var loginBtn = document.getElementById('loginBtn');

  loginBtn.addEventListener('click', function() {
      // Get the username and password input values
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;

      // Check if username is empty
      if (username.trim() === '') {
          alert('Please enter your username');
          return; // Exit function if username is empty
      }

      // Check if password is empty
      if (password.trim() === '') {
          alert('Please enter your password');
          return; // Exit function if password is empty
      }

      // Validate the password (you can replace this with your actual validation logic)
      var correctPassword = "mjma"; // Change this to your correct password
      if (password !== correctPassword) {
          alert('Incorrect password. Please try again.');
          return; // Exit function if password is incorrect
      }

      // Proceed with login process (e.g., send a request to your server)
      // For demonstration purposes, let's just display an alert
      alert('Logging in with username: ' + username + ' and password: ' + password);
  });
});
