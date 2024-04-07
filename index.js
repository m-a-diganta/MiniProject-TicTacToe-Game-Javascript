let allBox = document.querySelectorAll(".box");
let resetButton = document.querySelector(".resetButton");

let turnX = false;

const patterns = [[0,1,2], [0,3,6], [0,4,8], [1,4,7], [2,5,8], [2,4,6], [3,4,5], [6,7,8], ];

// console.log(allBox);
const check =()=>{
    for(let i of patterns){
        if(allBox[i[0]].innerText != "" && 
        allBox[i[1]].innerText != "" && 
        allBox[i[2]].innerText != ""){           
            if(allBox[i[0]].innerText === allBox[i[1]].innerText 
                && allBox[i[2]].innerText === allBox[i[0]].innerText ){
                    if(allBox[i[0]].innerText==="O"){
                        player = "Player 1";
                    }
                    else{
                        player="Player 2";
                    }
                    localStorage.setItem("winnerValue", player);
                    window.location.href = "winner.html";
            }
        }
    }
}

allBox.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turnX === true){
            box.innerText = "O";
        }
        else{
            box.innerText = "X";
        }
        turnX = !turnX;
        box.disabled = true;

        check();
    });
});

resetButton.addEventListener("click",()=>{   
    allBox.forEach((box) =>{
        box.innerText = "";
        box.disabled = false;
    });
});