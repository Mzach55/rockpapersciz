let playervic = 0;
let botvic = 0;

const playrock = (_) => game('rock');
const playpaper = (_) => game('paper');
const playscissors = (_) => game('scizzors');

const btnrock = document.querySelector('.rock');
btnrock.addEventListener('click', playrock);

const btnpaper = document.querySelector('.paper');
btnpaper.addEventListener('click', playpaper);

const btnscizz = document.querySelector('.scizzors');
btnscizz.addEventListener('click', playscissors);

const pointcounter = document.createElement('h1');
pointcounter.setAttribute('style', 'display: flex; justify-content: center;');

document.body.appendChild(pointcounter);

function getComputerChoice() {
  // create an array with rock, paper, scizzors contained within it

  const choices = ['rock', 'paper', 'scizzors'];

  // select one of those indexes randomly

  let option = choices[Math.floor(Math.random() * choices.length)];

  return option;

  // return the choosen value
}

function playRound(playerTurn, computerTurn) {
  // create system to determine which choice beats what
  // return a string that declares a winner
  // if playerTurn == computerTurn, game is a tie

  // console.log('please work!')

  if (playerTurn == 'rock' && computerTurn == 'scizzors') {
    //    console.log('The player won')
    return (playervic += 1);
  } else if (playerTurn == 'paper' && computerTurn == 'rock') {
    // console.log('The player won')
    return (playervic += 1);
  } else if (playerTurn == 'scizzors' && computerTurn == 'paper') {
    // console.log('The player won')
    return (playervic += 1);
  } else if (computerTurn == 'paper' && playerTurn == 'rock') {
    // console.log('The computer won')
    return (botvic += 1);
  } else if (computerTurn == 'rock' && playerTurn == 'scizzors') {
    // console.log('The computer won')
    return (botvic += 1);
  } else if (computerTurn == 'scizzors' && playerTurn == 'paper') {
    // console.log('The computer won')
    return (botvic += 1);
  } else {
    // console.log('The round is a tie.')
  }
}

function game(player) {
  let playerTurn = player;
  let computerTurn = getComputerChoice();
  playRound(playerTurn, computerTurn);
  killStuff();

  console.log(playervic);
  console.log(botvic);
  console.log(playerTurn);
  console.log(computerTurn);

  if (playervic == 3) {
    const playerwin = document.createElement('h1');
    playerwin.textContent = 'The player was victorious! Death to the machines!';
    document.body.appendChild(playerwin);
  } else if (botvic == 3) {
    const botwin = document.createElement('h1');
    botwin.textContent = 'The computer prevails! Death to all humans!';
    document.body.appendChild(botwin);
  }

  pointcounter.textContent = `Player; ${playervic} | Computer; ${botvic}`;
}

function killStuff() {
  if (botvic == 3 || playervic == 3) {
    const btnrock = document.querySelector('.rock');
    const btnpaper = document.querySelector('.paper');
    const btnscizz = document.querySelector('.scizzors');
    btnrock.removeEventListener('click', playrock);
    btnpaper.removeEventListener('click', playpaper);
    btnscizz.removeEventListener('click', playscissors);
  }
}

