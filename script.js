document.addEventListener('DOMContentLoaded', function() {
  var loginBtn = document.getElementById('loginBtn');

  loginBtn.addEventListener('click', function() {
      // Get the username and password input values
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;


      if (username.trim() === '') {
          alert('Please enter your username');
          return; 
      }


      if (password.trim() === '') {
          alert('Please enter your password');
          return; 
      }
      var correctUsername = "mariel"; // Change this to your correct password
      if (username !== correctUsername) {
          alert('Incorrect username. Please try again.');
          return; 
      }

      // Validate the password (you can replace this with your actual validation logic)
      var correctPassword = "mjma"; // Change this to your correct password
      if (password !== correctPassword) {
          alert('Incorrect password. Please try again.');
          return; 
      }
      
      alert('Logging in with username: ' + username + ' and password: ' + password);
  });
});
