const players = [];

for (let i = 1; i <= 2; i++) {
  const name = prompt(`Enter name for Player ${i}`);
  if (name === null) {
    players.push({ name: `Player ${i}`, symbol: i === 1 ? 'X' : 'O' });
  } else {
    players.push({ name: name, symbol: i === 1 ? 'X' : 'O' });
  }
}
  
document.getElementById('p1-name').textContent = players[0].name;
document.getElementById('p2-name').textContent = players[1].name;
  
const squares = document.querySelectorAll('.square');
  
let currentPlayerIndex = 0;

function checkForWinner() {
  const winningCombinations = [    
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (squares[a].textContent !== '' && squares[a].textContent === squares[b].textContent && squares[a].textContent === squares[c].textContent) {
      return squares[a].textContent;
    }
  }

  return null;
}

squares.forEach((square) => {
  square.addEventListener('click', () => {
    if (square.textContent === '') {
      const currentPlayer = players[currentPlayerIndex];
      square.textContent = currentPlayer.symbol;
      square.classList.add(currentPlayer.symbol);
      const winner = checkForWinner();
      if (winner) {
        alert(`${currentPlayer.name} wins!`);
      }
      currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    }
  });
});