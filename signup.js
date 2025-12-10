document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get values from signup form
  let email = document.getElementById("signupEmail").value;
  let password = document.getElementById("signupPassword").value;

  // Save to localStorage
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);

  // Redirect to your existing form page
  window.location.href = "index.html"; // rename to your form file if different
});
