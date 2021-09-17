let computerScore=0,userScore=0;
const gameRules={
  rock: {
  rock: 'draw',
  paper: 'lose',
  scissors: 'win',
  Lizard: 'win',
  spock: 'lose',
  },
  paper: {
  rock: 'win',
  paper: 'draw',
  scissors: 'lose',
  Lizard: 'lose' ,
  spock: 'win' ,
  },
  scissors: {
  rock: 'lose',
  paper: 'win',
  scissors: 'draw',
  Lizard: 'win',
  spock: 'lose',
  },
  Lizard:{
    rock:'lose',
    paper: 'win',
    scissors: 'lose',
    Lizard: 'draw',
    spock: 'win',
  },
  spock:{
    rock:'win',
    paper: 'lose',
    scissors: 'win',
    Lizard: 'lose',
    spock: 'draw',
  },
 };
 const randomChoice = function () {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.trunc(Math.random() * 3);
  return choices[randomNumber];
 };
 const displayScores= function(result){
   if(result === 'win'){
     userScore++;
     document.getElementById('user-score').innerText=userScore;
   }else if(result === 'lose'){
     computerScore++;
     document.getElementById('computer-score').innerText=computerScore;
   }
 }
 const restart=function(){
   userScore=0;
   document.getElementById('user-score').innerText=userScore;
   computerScore=0;
   document.getElementById('computer-score').innerText=computerScore;
   document.getElementById('user-Choice').innerText=`welcome `;
  document.getElementById('computer-Choice').innerText=`Back`;
  document.getElementById('result').innerText=`lets play`;
 }
 const gameChoice = function (userChoice) {
  let computerChoice = randomChoice()
  document.getElementById('user-Choice').innerText=`userchoose ${userChoice}`;
  document.getElementById('computer-Choice').innerText=`computerchoose ${computerChoice}`;
 const result= gameRules[userChoice][computerChoice];
 document.getElementById('result').innerText=`You ${result}`;
 displayScores(result)
};

  