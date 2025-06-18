const btn = document.getElementById("submit");
const textbox = document.getElementById("nameinput");
const header = document.getElementById("h1");

let name = "";

btn.addEventListener("submit", () =>{
     event.preventDefault();

      name = textbox.value;
header.textContent = "Welcome, " + name + "!";

const blue = document.querySelectorAll("blueclass");
console.log(blue);
});
