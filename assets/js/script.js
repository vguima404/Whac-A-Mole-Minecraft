const state = {
  view: {
    squares: document.querySelectorAll(".square"),
    score: document.querySelector('#score'),
    timeLeft: document.querySelector('#time-left'),
    enemy: document.querySelector('.enemy'),
  },
  values: {
    timerId: null,
    interval: 1000,
    hitPosition: 0,
    result: 0,
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
  state.values.hitPosition = randomSquare.id;
  randomSquare.classList.add('enemy')
}

function addListenerHitBox(){
  state.view.squares.forEach((square) => {
    square.addEventListener('mousedown', () =>{
      if (square.id === state.values.hitPosition){
        state.values.result++
        state.view.score.textContent = state.values.result
        state.values.hitPosition = null
      }
    })
  })
}

function init(){
  moveEnemy();
  addListenerHitBox();
}

init();