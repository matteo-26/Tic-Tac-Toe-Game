/* GAME */
var playerTurn = 1;
var playerOne = [];
var playerTwo = [];

var combination = {
    0: ["one", "two", "three"],
    1: ["one", "five", "nine"],
    2: ["one", "four", "seven"],

    3: ["two", "five", "eight"],
    
    4: ["three", "five", "seven"],
    5: ["three", "six", "nine"],

    6: ["four", "five", "six"],

    7: ["seven", "eight", "nine"]
}

const itemGrid = document.querySelectorAll(".item");
const pTitle = document.querySelector(".title p");



for(let i=0;i<itemGrid.length;i++){

    

    itemGrid[i].addEventListener("click", (event) => {
        var clickedBtn = event.target.classList["1"];

        if(playerTurn === 1){


            pTitle.textContent = "Player 1 Turn";         

            document.querySelector("."+clickedBtn).innerHTML = "X";
            playerOne.push(clickedBtn);

            setTimeout(() => {
                for (let key in combination) {
                    if (combination[key].every(value => playerOne.includes(value))) {
                        pTitle.textContent = "Player 1 Won!";
                    }
                }

            }, 200);

            playerTurn = 2;
            pTitle.textContent = "Player 2 Turn";

        } else{ 

            document.querySelector("."+clickedBtn).innerHTML = "O";
            document.querySelector("."+clickedBtn).style.color = "blue";
            playerTwo.push(clickedBtn);

            

            setTimeout(() => {
                for (let key in combination) {
                    if (combination[key].every(value => playerTwo.includes(value))) {
                        alert("Player 2 Won");
                        pTitle.textContent = "Player 2 Won!";
                    }
                }

            }, 200);

            playerTurn = 1;
            pTitle.textContent = "Player 1 Turn";
        }
    
    })


    
}