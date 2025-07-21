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

// Show current time and welcome message
function updateTimeAndGreeting() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  
  const timeString = `${hours}:${minutes}:${seconds}`;
  document.getElementById('time').textContent = timeString;

  let greeting;
  if (hours < 12) {
    greeting = "Good Morning!";
  } else if (hours < 18) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening!";
  }
  
  document.getElementById('welcome').textContent = greeting;
}
updateTimeAndGreeting(); // Initial call to set time and greeting immediately
setInterval(updateTimeAndGreeting, 1000);
// Show toast notification
const toast = document.getElementById("toastBox");
const closeBtn = document.getElementById("croosX");

// Show toast automatically after page load
window.addEventListener("load", () => {
  setTimeout(() => {
    toast.classList.add("show");

    // Auto-hide after 3 seconds
    setTimeout(() => {
      toast.classList.remove("show");
    }, 8000);
  }, 1000); // Delay before showing (optional)
});

// Close manually with X
closeBtn.onclick = () => {
  toast.classList.remove("show");
};





