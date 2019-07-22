userName ? console.log(`Hello, ${userName}.`) : console.log('Hello!');

var userQuestion = "Is Deportivo de la Coruna the best football (or soccer) team in the world?";

console.log(`Dear ${userName}, your question is : ` + userQuestion );

var randomNumber = Math.floor(Math.random() * 8);
var eightBall = "";

switch (randomNumber){
  case 0:
    eigthBall = 'Of course';
    break;
  case 1:
    eightBall = 'Be sure of it';
    break;
  case 2:
    eightBall = 'Never doubt it';
    break;
  case 3:
    eightBall = 'Right';
    break;
  case 4:
    eightBall = 'That\'s a unnecessary question, is always YES';
    break;
  case 5:
    eightBall = 'Affirmative';
    break;
  case 6:
    eightBall = 'Without fail';
    break;
  case 7:
    eightBall = 'Beyond a doubt';
    break;
}

console.log(`The eight ball answered: ${eightBall}`); 