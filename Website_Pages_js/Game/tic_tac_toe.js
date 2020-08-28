document.addEventListener('DOMContentLoaded', () =>{
  const squares = document.querySelectorAll('.grid div')
  const playerDisplay = document.querySelector("#player")
  const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6]
  ];

  let xIndex = [];
  let oIndex = [];

  let currentPlayer = "Player X";

  // Adds an event listener to each square in the grid.
  squares.forEach(square =>{square.addEventListener('click', clickOutcome);
  square.classList.add("vacant");
});
  // Sets each square in grid to vacant spot.
  // for(var i = 0; i < 9; i++){
  //   squares.classList.add("vacant");
  // }

  function clickOutcome(e){
    const squareArray = Array.from(squares);
    const index = squareArray.indexOf(e.target);
    vacantSquare(index, currentPlayer);
  }

  // Function: Checks if square on grid is vacant. If vacant, establish whether X or O
  // claimed that square.

  function vacantSquare(index, player){
    if(squares[index].classList.contains("vacant")){
      squares[index].classList.remove("vacant");
      squares[index].classList.add("occupied");
      if(player === "Player X"){
        squares[index].classList.add("playerX");
        xIndex.push(index);
        xIndex.sort(function(a,b){return a-b});
        if(winCondition(currentPlayer, xIndex) === false){
          if(oIndex.length + xIndex.length === 9){
            document.getElementById("player").innerHTML = "Tie";
            document.getElementById("restartButton").style.visibility = "visible";
            document.getElementById("restartButton").innerHTML = "Restart Game?";
          }else{
            currentPlayer = "Player O";
            document.getElementById("player").innerHTML = currentPlayer;
          }
        }else{
          for(var i = 0; i < 9; i++){
            if(squares[i].classList.contains("vacant")){
              squares[i].classList.remove("vacant");
              document.getElementById("restartButton").style.visibility = "visible";
            }}
            document.getElementById("restartButton").style.visibility = "visible";
            document.getElementById("restartButton").innerHTML = "Restart Game?";
          }
      }else if(player === "Player O"){
        squares[index].classList.add("playerO");
        oIndex.push(index);
        oIndex.sort(function(a,b){return a-b});
        if(winCondition(currentPlayer, oIndex) === false){
          if(oIndex.length + xIndex.length === 9){
            document.getElementById("player").innerHTML = "Tie";
            document.getElementById("restartButton").style.visibility = "visible";
            document.getElementById("restartButton").innerHTML = "Restart Game?";
          }else{
            currentPlayer = "Player X";
            document.getElementById("player").innerHTML = currentPlayer;
          }
        }else{
          for(var i = 0; i < 9; i++){
            if(squares[i].classList.contains("vacant")){
              squares[i].classList.remove("vacant");
            }}
            document.getElementById("restartButton").style.visibility = "visible";
            document.getElementById("restartButton").innerHTML = "Restart Game?";
          }}}}

  // Function: Checks if the current player has won.

  function winCondition(player, indexArray){
    for(var i = 0; i < winningCombinations.length; i++){
      let dummyArray = [...winningCombinations[i]];
      for(var b = 0; b < winningCombinations[i].length; b++){
        for(var c = 0; c < indexArray.length; c++){
          if(winningCombinations[i][b] === indexArray[c]){
            dummyArray.splice(0,1);
          }}}
      if(dummyArray.length === 0){
        if(player === "Player X"){
          document.getElementById("player").innerHTML = "X Wins";
          return(true);
        }else if(player === "Player O"){
          document.getElementById("player").innerHTML = "O Wins";
          return(true);
        }}}
    return(false);}

})
