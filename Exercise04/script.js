function myFunction(){
let p = document.getElementById("P")
let borderRed = document.getElementById("redBdr").value
let borderGreen = document.getElementById("greenBdr").value
let borderBlue = document.getElementById("blueBdr").value
let borderWidth = document.getElementById("widthBdr").value
let backRed = document.getElementById("redBck").value
let backGreen = document.getElementById("greenBck").value
let backBlue = document.getElementById("blueBck").value

if(validN(borderBlue) && validN(borderGreen) && validN(borderRed))
{
    p.style.borderColor = "rgb(" + borderRed + ", " + borderGreen + ", " + borderBlue + ")";
}
else
{
 alert("Invalid number entered. Values between 0-255")
} 
    p.style.borderWidth = borderWidth + "px"

if(validN(backBlue) && validN(backGreen) && validN(backRed))
{
    p.style.backgroundColor = "rgb(" + backRed + ", " + backGreen + ", " + backBlue + ")";
}
else
{
 alert("Invalid number entered. Values between 0-255")
} 

}

function validN(N){
  return(0 <= N && N <= 255);
}