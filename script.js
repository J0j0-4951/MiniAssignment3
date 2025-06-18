const btn = document.getElementById("Submit!");
const textbox = document.getElementById("nameinput");
const header = document.getElementById("h1");

let name = "";

btn.addEventListener("Submit!", () =>{
     event.preventDefault();

      name = textbox.value;
header.textContent = "Welcome, " + name + "!";

const blue = document.querySelectorAll("blueclass");
console.log(blue);
});
