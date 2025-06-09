// Show modal when clicking icon
document.getElementById('loginIcon').addEventListener('click', function () {
  document.getElementById('loginModal').style.display = 'block';
});

// Close modal
document.getElementById('closeModal').addEventListener('click', function () {
  document.getElementById('loginModal').style.display = 'none';
});

// Close modal if clicking outside the form
window.addEventListener('click', function (e) {
  const modal = document.getElementById('loginModal');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Handle login
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMsg = document.getElementById('error-msg');

  if (username === "admin" && password === "1234") {
    alert("Login successful!");
    document.getElementById('loginModal').style.display = 'none';
    // window.location.href = 'dashboard.html'; // Optional redirect
  } else {
    errorMsg.textContent = "Invalid username or password";
  }
});
