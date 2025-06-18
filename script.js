const btn = document.getElementById("submit");
const textbox = document.getElementById("nameinput");
const header = document.getElementById("h1");

let name = "";

form.addEventListener("submit", function(event) {
     event.preventDefault();

      name = textbox.value;
      if(name){
header.textContent = "Welcome, " + name + "!";
      }

const blue = document.querySelectorAll("blueclass");
console.log(blue);
});
