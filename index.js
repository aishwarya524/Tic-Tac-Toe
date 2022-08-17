let grids = document.getElementsByClassName('col-xs-4')
let currentTurnText = document.getElementById('current-turn-text') 
let currentPlayer = 1
const playerTicker = {
    1: 'x',
    2: 'o'
}

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const singleMove = (index) => {
    if(!grids[index].innerText){
        grids[index].innerText = currentPlayer === 1 ? playerTicker[1] : playerTicker[2]
        currentPlayer = currentPlayer === 1 ? 2 : 1
    currentTurnText.innerText = `Player ${currentPlayer}'s Turn`
    let winningPlayer = checkWinningStatus()
    if(winningPlayer){
        currentTurnText.innerText = `Player ${winningPlayer} won!`
        currentTurnText.style.background = 'rgb(36, 88, 88)'
    }
    }
}

const checkWinningStatus = () => {
    for(let i = 0; i < winningCombinations.length; i++){
        combination = winningCombinations[i]
      
        let value = grids[combination[0]].innerText
        if(combination.every(index => grids[index].innerText && grids[index].innerText === value)){
            addBorderStyle(combination)
            return value === 'x' ? 1 : 2
        }
    }
    return
}

const addBorderStyle = (indexArray) => {
    indexArray.forEach(index => {
        grids[index].style.cssText = 'background-color: rgb(99, 158, 158)'
    });
}
Foo
