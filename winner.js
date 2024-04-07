let winnerValue = localStorage.getItem("winnerValue");
let text = document.querySelector(".text");
text.innerText = winnerValue+" won The Game "

let newButton = document.querySelector(".newButton");
console.log(newButton);
newButton.addEventListener("click",()=>{
    window.location.href="index.html";
});