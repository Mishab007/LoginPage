function validateForm() {
  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Email validation regex pattern
  const usernameRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //email validation
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/; //password validation

  const isValidEmail = usernameRegex.test(username); //test is using for test email
  const isValidPassword = passwordRegex.test(password); //test is using for test password

  if (!isValidEmail || !isValidPassword) {
    return res.status(400).send("invalid email or password format");
  } // if fails show this message 
  else{ return true }

  // Allow form submission if all validations pass
}
