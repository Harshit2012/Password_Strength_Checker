function checkPassword(){
    var password = document.getElementById("passwordInput").value;
    var strength = 0;
  
    if (password.length >= 8) {
      strength += 1;
    }
    if (/[A-Z]/.test(password)) {
      strength += 1;
    }
    if (/[a-z]/.test(password)) {
      strength += 1;
    }
    if (/\d/.test(password)) {
      strength += 1;
    }
    if (/[$&+,:;=?@#|'<>.^*()%!-]/.test(password)) {
      strength += 1;
    }
  
    var strengthText;
    if (strength == 0) {
      strengthText = "Please enter a password";
    } else if (strength <= 2) {
      strengthText = "Weak";
    } else if (strength <= 4) {
      strengthText = "Medium";
    } else {
      strengthText = "Strong";
    }
  
    var passwordStrengthDiv = document.getElementById("passwordStrength");
    passwordStrengthDiv.innerText = "Password Strength: " + strengthText;
    passwordStrengthDiv.classList.remove("alert-danger", "alert-warning", "alert-success");
    if (strength == 0) {
      passwordStrengthDiv.classList.add("alert-danger");
    } else if (strength <= 2) {
      passwordStrengthDiv.classList.add("alert-warning");
    } else {
      passwordStrengthDiv.classList.add("alert-success");
    }
}  