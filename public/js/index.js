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

var boxes = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];



for(let i=0;i<itemGrid.length;i++){

    

    itemGrid[i].addEventListener("click", (event) => {
        var clickedBtn = event.target.classList["1"];

        var found = boxes.includes(clickedBtn);
        var index = boxes.indexOf(clickedBtn);
        delete boxes[index];

        if(found){
            if(playerTurn === 1){


                pTitle.textContent = "Player X Turn";         
    
                document.querySelector("."+clickedBtn).innerHTML = "X";
                playerOne.push(clickedBtn);
    
                setTimeout(() => {
                    for (let key in combination) {
                        if (combination[key].every(value => playerOne.includes(value))) {
                            pTitle.textContent = "Player X Won!";
                            boxes = [];
                        }
                    }
    
                }, 200);
    
                playerTurn = 2;
                pTitle.textContent = "Player O Turn";
    
            } else{ 
    
                document.querySelector("."+clickedBtn).innerHTML = "O";
                document.querySelector("."+clickedBtn).style.color = "blue";
                playerTwo.push(clickedBtn);
    
                
    
                setTimeout(() => {
                    for (let key in combination) {
                        if (combination[key].every(value => playerTwo.includes(value))) {
                            
                            pTitle.textContent = "Player O Won!";
                            boxes = [];
                        }
                    }
    
                }, 200);
    
                playerTurn = 1;
                pTitle.textContent = "Player X Turn";
            }
        }
    
    })


    
}