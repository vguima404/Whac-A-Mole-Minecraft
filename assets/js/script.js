
const state = {
  view: {
    squares: document.querySelectorAll(".square"),
    score: document.querySelector('#score'),
    timeLeft: document.querySelector('#time-left'),
    enemy: document.querySelector('.enemy'),
    lifesView: document.querySelector('#lifes'),
    steve: document.getElementById('icon'),
  },
  values: {
    timerId: null,
    interval: 500,
    hitPosition: 0,
    result: 0,
    currentTime: 60,
    lifes: 3,
  },
}

function countDown(){
  state.values.currentTime--;
  state.view.timeLeft.textContent = state.values.currentTime;

  if (state.values.currentTime <= 0){
    alert(`Game Over! Sua pontuação foi: ${state.values.result}`)
    state.values.result = 0;
    state.values.currentTime = 60; 
  }
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
      if (square.id !== state.values.hitPosition){
        state.values.lifes--;
        state.view.lifesView.textContent = ("x") + state.values.lifes;

        if (state.values.lifes === 2){
          state.view.steve.src = "./assets/images/halfZombie.png"
        }
        else if(state.values.lifes === 1){
          state.view.steve.src = "./assets/images/zombieFace.png"
        }
        if (state.values.lifes <= 0){
          state.view.lifesView.textContent = ("x0");
          state.view.steve.src = "./assets/images/skeletonFace.png"
          setTimeout(() => {
          alert(`Game Over! Sua pontuação foi: ${state.values.result}`)
          
          state.view.steve.src = "./assets/images/steve.jpg"
          state.view.lifesView.textContent = ("x3");
          state.values.lifes = 3;
          state.values.result = 0;
          state.view.score.textContent = ('0')
          state.values.currentTime = 60; 
          }, 50)
          
        }
      }
      if (square.id === state.values.hitPosition){
        state.values.result++
        state.view.score.textContent = state.values.result;
        state.values.hitPosition = null;
      }
    })
  })
}

function init(){
  moveEnemy();
  addListenerHitBox();
  setInterval(countDown, 1000);
}

init();