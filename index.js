const board = (() => {
let gameArray = {
gameboard:[[" "," "," "],[" "," "," "],[" "," "," "]] //Creates 2 dimensional array for a 3x3 matrix
};

let player = () => {//creates player ones movements
    let player1 = "x"
    return player1
}

let pushArrayItems = (x,y,selection) =>{//pushes the players selection into the maxtrix
gameArray.gameboard[x].splice(y,1,selection)
console.table(gameArray.gameboard)
}

const initiate = () => {//inistializes matrix 
    let count = 1;
    for(let i = 0;i<gameArray.gameboard.length;i++){
        let tableSelect = document.querySelector(".container");
        let createRow = document.createElement("tr");
        gameArray.gameboard[i].forEach((x,y) => {//creates the elements that are displayed on the html document 
            let createTD = document.createElement("td");
            createTD.setAttribute("id",`number${count}`);
            createTD.addEventListener('click',e=>{//adds an exvent listener to each element to return coordinated on matrix along with player selection
                e.target.textContent = player()
                pushArrayItems(i,y,player())
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











