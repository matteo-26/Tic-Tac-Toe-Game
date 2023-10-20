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

    if(playerTurn === 1){
        pTitle.textContent = "Player 1 Turn";
    } else {
        pTitle.textContent = "Player 2 Turn";
    }

    itemGrid[i].addEventListener("click", (event) => {
        var clickedBtn = event.target.classList["1"];

        if(playerTurn === 1){

         

            document.querySelector("."+clickedBtn).innerHTML = "X";
            playerOne.push(clickedBtn);

            for (let key in combination) {
                if (combination[key].every(value => playerOne.includes(value))) {
                    alert("Player 1 Won");
                }
            }

            playerTurn = 2;

        } else{


            document.querySelector("."+clickedBtn).innerHTML = "O";
            document.querySelector("."+clickedBtn).style.color = "blue";
            playerTwo.push(clickedBtn);

            

            for (let key in combination) {
                if (combination[key].every(value => playerTwo.includes(value))) {
                    alert("Player 2 Won");
                }
            }

            playerTurn = 1;
        }
    
    })
}