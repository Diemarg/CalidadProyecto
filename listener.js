
console.log("Reached");

console.log(document.querySelector("#button"));
let button = document.getElementById("loginbtn");
console.log(button);

button.addEventListener("click", function(){
    let user = document.getElementById("inputID").nodeValue;
    let password = document.getElementById("inputPassword").nodeValue;

    console.log(password);
    console.log(user);
});