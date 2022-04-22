const board = (() => {
let winner = document.querySelector('.winner')
let gameCount = 0

let gameArray = {
gameboard:[[" "," "," "],[" "," "," "],[" "," "," "]] //Creates 2 dimensional array for a 3x3 matrix
};


let player = (string) => {//creates player ones movements
    return{string}
}

let pushArrayItems = (x,y,selection) =>{//pushes the players selection into the maxtrix
gameArray.gameboard[x].splice(y,1,selection)
console.table(gameArray.gameboard)
}

const player1 = player("x")
const player2 = player("o")

let gameFLow = () => {
    if(gameCount === 0){
        return player1.string
    }
    if(gameCount === 1){
        return player2.string
    }
}

function buttonReset(){
    document.querySelector("#playersTurn").textContent = `Current Player: x`
    gameCount = 0
    gameArray.gameboard = [[" "," "," "],[" "," "," "],[" "," "," "]]
    resetContainer()
    initiate()
    xCountRow = 0 
    xCountColumn = 0
    oCountRow = 0  
    oCountColumn = 0  
    xCountCrossOne = 0
    oCountCrossOne = 0
    xCountCrossTwo = 0
    oCountCrossTwo = 0
    
}

let checkWinner = () => {
    let xCountRow = 0 
    let oCountRow = 0
    let xCountColumn = 0
    let oCountColumn = 0
    let xCountCrossOne = 0
    let oCountCrossOne = 0
    let xCountCrossTwo = 0
    let oCountCrossTwo = 0
    for(let i = 0;i<3;i++){
        for(let j = 1;j<3;j++){
            if(gameArray.gameboard[i][j]===' '){
                continue
            }
            if(gameArray.gameboard[i][j]===gameArray.gameboard[i][j-1] && gameArray.gameboard[i][j] === "x" ){
            xCountRow++
            }

            if(gameArray.gameboard[i][j]===gameArray.gameboard[i][j-1] && gameArray.gameboard[i][j] === "o"){
            oCountRow++
            }
        }
        if(xCountRow!==2){
            xCountRow = 0
        }
        if(oCountRow!==2){
            oCountRow = 0
        }

    }

    for(let i = 0;i<3;i++){//Column
        for(let j = 1;j<3;j++){
            if(gameArray.gameboard[j][i]===' '){
                continue
        }
            if(gameArray.gameboard[j][i]===gameArray.gameboard[j-1][i] && gameArray.gameboard[j][i] === "x" ){
                xCountColumn++
            }else if(gameArray.gameboard[j][i]===gameArray.gameboard[j-1][i] && gameArray.gameboard[j][i] === "o"){
                oCountColumn++
            }
    }
    if(xCountColumn!==2){
        xCountColumn = 0
    }
    if(oCountColumn!==2){
        oCountColumn = 0
    }
}
    for(let i = 0;i<2;i++){//CrossOne
        if(gameArray.gameboard[i][i]===' '){
            continue
        }
        if(gameArray.gameboard[i][i]===gameArray.gameboard[i+1][i+1] && gameArray.gameboard[i][i] === "x" ){
            xCountCrossOne++
        }else if(gameArray.gameboard[i][i]===gameArray.gameboard[i+1][i+1] && gameArray.gameboard[i][i] === "o"){
            oCountCrossOne++
        }
}
let j = 0
    for(let i = 2;i>0;i--){//CrossTwo
        
        if(gameArray.gameboard[i][j]===' '){
            continue
        }
        if(gameArray.gameboard[i][j]===gameArray.gameboard[i-1][j+1] && gameArray.gameboard[i][j] === "x" ){
            console.log(xCountCrossTwo)
            xCountCrossTwo++
        }else if(gameArray.gameboard[i][j]===gameArray.gameboard[i-1][j+1] && gameArray.gameboard[i][j] === "o"){
            oCountCrossTwo++
        }
        j++
}

        if(xCountRow === 2 || xCountColumn === 2 || xCountCrossOne === 2 || xCountCrossTwo == 2){
            winner.textContent = ("Player: 1 Wins");
            gameArray.gameboard = [[" "," "," "],[" "," "," "],[" "," "," "]]
            resetContainer()
            initiate()
            xCountRow = 0 
            xCountColumn = 0
            oCountRow = 0  
            oCountColumn = 0   
            xCountCrossOne = 0
            oCountCrossOne = 0
            xCountCrossTwo = 0
            oCountCrossTwo = 0 
        }
        if(oCountRow === 2 || oCountColumn === 2 || oCountCrossOne === 2 || oCountCrossTwo == 2){
            winner.textContent = ("Player: 2 Wins");
            gameArray.gameboard = [[" "," "," "],[" "," "," "],[" "," "," "]]
            resetContainer()
            initiate()
            xCountRow = 0 
            xCountColumn = 0
            oCountRow = 0  
            oCountColumn = 0
            xCountCrossOne = 0
            oCountCrossOne = 0
            xCountCrossTwo = 0
            oCountCrossTwo = 0
        }
}

function resetContainer(){
    let container = document.querySelector(".container")
    while (container.firstChild) {
        container.removeChild(container.lastChild);
      }
}

const initiate = () => {//inistializes matrix 
    let count = 1;
    for(let i = 0;i<gameArray.gameboard.length;i++){
        let tableSelect = document.querySelector(".container");
        let createRow = document.createElement("tr");
        gameArray.gameboard[i].forEach((x,y) => {//creates the elements that are displayed on the html document 
            let createTD = document.createElement("td");
            createTD.setAttribute("id",`number${count}`);
            createTD.addEventListener('click',e=>{//adds an event listener to each element to return coordinated on matrix along with player selection
                
                if(gameArray.gameboard[i][y] === " "){
                pushArrayItems(i,y,gameFLow())
                e.target.textContent = gameFLow()
                if(gameCount===0){
                    gameCount++
                    document.querySelector("#playersTurn").textContent = `Current Player: ${gameFLow()}`
                }else if(gameCount===1){
                    gameCount--
                    document.querySelector("#playersTurn").textContent = `Current Player: ${gameFLow()}`
                }
                }
                checkWinner()
            })
            createRow.appendChild(createTD);
            count+=1;
        })
        tableSelect.appendChild(createRow);
    }
}

return {
    initiate,
    buttonReset
};

})();











