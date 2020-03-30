function validate()
{
   var pass = document.getElementById("passw").value;
   var passChk = document.getElementById("passChk").value;
   var n = pass.length;
   if(pass != passChk)
   {
     alert("Passwords do not match. ");
   }
   else if (n < 8)
   {
      alert("Passwords are not at least 8 characters long. ");
   }
   else{
     alert("Your password is valid! ");
   }
}
