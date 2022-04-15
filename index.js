const board = (() => {
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
    gameArray.gameboard = [[" "," "," "],[" "," "," "],[" "," "," "]]
    resetContainer()
    initiate()
    xCountRow = 0 
    xCountColumn = 0
    oCountRow = 0  
    oCountColumn = 0  
    xCountCross = 0
    oCountCross = 0
    
}

let checkWinner = () => {
    let xCountRow = 0 
    let oCountRow = 0
    let xCountColumn = 0
    let oCountColumn = 0
    let xCountCross = 0
    let oCountCross = 0
    for(let i = 0;i<3;i++){
        for(let j = 1;j<3;j++){
            if(gameArray.gameboard[i][j]===' '){
                continue
            }
            if(gameArray.gameboard[i][j]===gameArray.gameboard[i][j-1] && gameArray.gameboard[i][j] === "x" ){
            xCountRow++
            }else if(gameArray.gameboard[i][j]===gameArray.gameboard[i][j-1] && gameArray.gameboard[i][j] === "o"){
            oCountRow++
            }
        }
    }
    for(let i = 1;i<3;i++){
        for(let j = 0;j<3;j++){
            if(gameArray.gameboard[i][j]===' '){
                continue
        }
            if(gameArray.gameboard[i][j]===gameArray.gameboard[i-1][j] && gameArray.gameboard[i][j] === "x" ){
                xCountColumn++
            }else if(gameArray.gameboard[i][j]===gameArray.gameboard[i-1][j] && gameArray.gameboard[i][j] === "o"){
                oCountColumn++
            }
    }
}
    for(let i = 0;i<2;i++){
        if(gameArray.gameboard[i][i]===' '){
            continue
    }
        if(gameArray.gameboard[i][i]===gameArray.gameboard[i+1][i+1] && gameArray.gameboard[i][i] === "x" ){
            xCountCross++
        }else if(gameArray.gameboard[i][i]===gameArray.gameboard[i+1][i+1] && gameArray.gameboard[i][i] === "o"){
            oCountCross++
        }
}

        if(xCountRow === 2 || xCountColumn === 2 || xCountCross === 2){
            console.log("player1 Wins");
            gameArray.gameboard = [[" "," "," "],[" "," "," "],[" "," "," "]]
            resetContainer()
            initiate()
            xCountRow = 0 
            xCountColumn = 0
            oCountRow = 0  
            oCountColumn = 0   
            xCountCross = 0
            oCountCross = 0   
        }
        if(oCountRow === 2 || oCountColumn === 2 || oCountCross === 2){
            console.log("player2 Wins");
            gameArray.gameboard = [[" "," "," "],[" "," "," "],[" "," "," "]]
            resetContainer()
            initiate()
            xCountRow = 0 
            xCountColumn = 0
            oCountRow = 0  
            oCountColumn = 0
            xCountCross = 0
            oCountCross = 0 
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
                }else if(gameCount===1){
                    gameCount--
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











