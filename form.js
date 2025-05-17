document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const sex = document.querySelector("input[name='sex']:checked");
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const contact = document.getElementById("contact").value.trim();
  const reason = document.getElementById("reason").value.trim();

  let valid = true;

  function showError(id, message) {
    document.getElementById(id).textContent = message;
    valid = false;
  }

  // Clear previous errors
  ["firstNameError", "lastNameError", "sexError", "emailError", "passwordError", "reasonError"].forEach(id => document.getElementById(id).textContent = "");

  if (!firstName) showError("firstNameError", "First name is required.");
  if (!lastName) showError("lastNameError", "Last name is required.");
  if (!sex) showError("sexError", "Please select your sex.");
  if (!email) showError("emailError", "Email is required.");
  if (!password) showError("passwordError", "Password is required.");
  if (!reason) showError("reasonError", "Please tell us why you're supporting.");

  if (valid) {
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("sex", sex.value);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    localStorage.setItem("contact", contact);
    localStorage.setItem("reason", reason);


    window.location.href = "proj_profile_senarillos.html"; 
  }
});