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

let checkWinner = () => {
    let xCount = 0 
    let oCount = 0
    console.log(xCount)
    console.log(oCount)
    for(let i = 0;i<3;i++){
        for(let j = 1;j<3;j++){
            if(gameArray.gameboard[i][j]===' '){
                continue
            }
            if(gameArray.gameboard[i][j]===gameArray.gameboard[i][j-1] && gameArray.gameboard[i][j] === "x" ){
            xCount++
            }else if(gameArray.gameboard[i][j]===gameArray.gameboard[i][j-1] && gameArray.gameboard[i][j] === "o"){
            oCount++
            }else{
                oCount = 0
                xCount = 0
            }
        }
    }
    for(let i = 1;i<3;i++){
        for(let j = 0;j<3;j++){
            if(gameArray.gameboard[i][j]===' '){
                continue
        }
            if(gameArray.gameboard[i][j]===gameArray.gameboard[i-1][j] && gameArray.gameboard[i][j] === "x" ){
                xCount++
            }else if(gameArray.gameboard[i][j]===gameArray.gameboard[i-1][j] && gameArray.gameboard[i][j] === "o"){
                oCount++
            }
    }
}
        if(xCount===2){
            console.log("player1 Wins");
            gameArray.gameboard = [[" "," "," "],[" "," "," "],[" "," "," "]]
            resetContainer()
            initiate()
            xCount = 0 
            oCount = 0        
        }
        if(oCount===2){
            console.log("player2 Wins");
            gameArray.gameboard = [[" "," "," "],[" "," "," "],[" "," "," "]]
            resetContainer()
            initiate()
            xCount = 0 
            oCount = 0
        }
        console.log(xCount)
        console.log(oCount)
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
};

})();











