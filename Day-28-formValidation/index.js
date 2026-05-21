function validateForm() 
{

  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  let city = document.getElementById("city");
  let gender = document.getElementsByName("gender");

  let isValid = true;     //no-error   isvalid=false  "color:red"

  // Regex patterns
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

  clearError();

  // NAME validation
  if (name.value === "")
     {
    setError(name, "nameError", "Name is required");       //name=""
    isValid = false;
  } 
  else 
  {
    setSuccess(name);     //setSuccess('ramya')
  }
// -----------------------------------------------------
  
  if (email.value === "") {
    setError(email, "emailError", "Email is required");
    isValid = false;     //red color show  green off
  } 

  //abc*gmail/com
  else if (!emailPattern.test(email.value)) {
    setError(email, "emailError", "Enter valid email (example@gmail.com)");
    isValid = false;
  } 
  else {
    setSuccess(email);   //red color remove green color add
  }
// -------------------------------------------------------------------------
  // PASSWORD strength checker
  if (password.value === "") {
    setError(password, "passwordError", "Password is required");
    isValid = false;
  }
  else if (!passwordPattern.test(password.value)) {
    setError(
      password,
      "passwordError",
      "Password must contain 8 chars, 1 uppercase, 1 lowercase, 1 number"
    );

    isValid = false;
  }
  else {
    setSuccess(password);
  }
// -----------------------------------------------------------------
  // GENDER validation
  let genderSelected = false;
  //gender.length=2
  //i<2   0,1

  for (let i = 0; i < gender.length; i++)
     {
    if (gender[i].checked) {
      genderSelected = true;
      break;
    }
  }

  if (!genderSelected) {
    document.getElementById("genderError").innerHTML = "Select gender";
    isValid = false;
  }
// ------------------------------------------------------------------
  // CITY validation
  if (city.value === "") {
    setError(city, "cityError", "Select city");
    isValid = false;
  } else {
    setSuccess(city);
  }

  return isValid;
}

/* ---------- Helper Functions ---------- */

function setError(element, errorId, message) {
  element.classList.add("error");
  element.classList.remove("success");
  document.getElementById(errorId).innerHTML = message;
}

function setSuccess(element) {
  element.classList.add("success");
  element.classList.remove("error");
}

function clearError()
{

      let inputs = document.querySelectorAll("input, select");     //inputs[meens,meena@gmail.com,123,female,bangalore] 

       for (let i = 0; i < inputs.length; i++)
         {
         inputs[i].classList.remove("error", "success");
        }

          let errors = document.querySelectorAll("span"); //[nameisreq,email,passrequ,slect city, select gender]
           for (let i = 0; i < errors.length; i++)
         {
         errors[i].innerHTML = " ";

        }

}
