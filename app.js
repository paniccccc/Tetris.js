document.addEventListener('DOMContentLoaded',()=>{
const width = 20;
const grid= document.querySelector('.grid');
let squares= Array.from(document.querySelectorAll('.grid div'));
const Score= document.querySelector('#score');
const startbtn= document.querySelector('#start-btn');

//Tetrominoes

const lTetromino = [
    [1, width+1, width*2+1, 2],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [width, width*2, width*2+1, width*2+2]
  ]

  const zTetromino = [
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1],
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1]
  ]

  const tTetromino = [
    [1,width,width+1,width+2],
    [1,width+1,width+2,width*2+1],
    [width,width+1,width+2,width*2+1],
    [1,width,width+1,width*2+1]
  ]

  const oTetromino = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
  ]

  const iTetromino = [
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3],
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3]
  ]

const Tetrominoes=[lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];

let currentPos=9;
let currentRot=0;
let random= Math.floor(Math.random()*Tetrominoes.length);
let current = Tetrominoes[random][currentRot];
 

function draw(){
    current.forEach(index =>{
        squares[currentPos+index].classList.add('tetromino');
    })
}

function undraw(){
  current.forEach(index =>{
    squares[currentPos+index].classList.remove('tetromino');
  })
}

timerId= setInterval(moveDown, 1500);

function control(e){
 
  if(e.keyCode === 37) {
    moveLeft();
  } else if (e.keyCode === 38) {
    rotate();
  } else if (e.keyCode === 39) {
    moveRight();
  } else if (e.keyCode === 40) {
    moveDown();
  }
  
}

document.addEventListener('keyup', control)


function moveDown(){
  undraw();
  currentPos+= width;
  draw();
  freeze();
}

function moveRight(){
  undraw();
  const isRight = currentPos
}


function freeze(){

  if(current.some(index => squares[currentPos+index+width].classList.contains('taken'))){
    
    current.forEach(index => squares[currentPos+index].classList.add('taken'));
    random = Math.floor(Math.random()*Tetrominoes.length);
    current=Tetrominoes[random][currentRot];
    currentPos=4;
    draw();
  }
}

function moveLeft(){
  undraw();
  const isLeft = current.some(index => (currentPos+index)%width===0);

  if(!isLeft){ 
    currentPos-=1;
  }

  if(current.some(index=> squares[currentPos+index].classList.contains('taken'))){
    currentPos+=1;
  }

  draw();
}

function moveRight(){
  undraw()
  const isAtRightEdge= current.some(index=>(currentPos+index)%width===width-1)

  if(!isAtRightEdge) currentPos+=1

  if(current.some(index=>squares[currentPos+index].classList.contains('taken'))) {
    currentPos-=1
  }

  draw()
}

function rotate(){
  undraw()
  currentRot++

  if(currentRot===current.length){
    currentRot=0
  }

  current=Tetrominoes[random][currentRot]
  draw()
}




})