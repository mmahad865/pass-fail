function validateForm() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let password = document.getElementById("password").value;
  let passwordError = document.getElementById("passwordError");

  let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (!password.match(passwordRegex)) {
    passwordError.textContent = "Password must be atleast 8 characters or more and contain at least one uppercase letter, one lowercase letter, and one digit.";
    return false;
  } else {
    passwordError.textContent = "";
  }

  let firstNameValid = firstName.trim().length > 0;
  let lastNameValid = lastName.trim().length > 0;
  let passwordValid = password.match(passwordRegex);

  if (firstNameValid && lastNameValid && passwordValid) {
    alert("Well done");
    document.getElementById("password").value = ""; 
  }

  return false; 
}

// Add an event listener to the password field to clear the error message on input
let passwordField = document.getElementById("password");
passwordField.addEventListener("input", function() {
  let passwordError = document.getElementById("passwordError");
  passwordError.textContent = "";
});
