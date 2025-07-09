const state = {
  view: {
    squares: document.querySelectorAll(".square"),
    score: document.querySelector('#score'),
    timeLeft: document.querySelector('#time-left'),
    enemy: document.querySelector('.enemy')
  },
  values: {
    timerId: null,
    interval: 1000,
  },
}

function moveEnemy () {
  state.values.timerId = setInterval(randomSquare, state.values.interval)
}

function randomSquare () {
  state.view.squares.forEach((square) => {
    square.classList.remove('enemy');
  });

  let randomNumber = Math.floor(Math.random() * 9);
  let randomSquare = state.view.squares[randomNumber];
  randomSquare.classList.add('enemy')
}


function init(){
  moveEnemy();
}

init();