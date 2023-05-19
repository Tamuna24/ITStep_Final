document.getElementById("logInForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let storedUser = localStorage.getItem(username);

  if (storedUser) {
    let user = JSON.parse(storedUser);

    if (password === user.password) {
      alert("Login successful!");
    } else {
      alert("Invalid password!");
    }
  } else {
    alert("User not found!");
  }
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
});
  