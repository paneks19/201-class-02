'use strict';
// alert('I am alive');

// if(a condition is met){
//     then do something
// } else {
//     do something else
// }

// if(condition){
//     do something
// }

// var likesTheBoys = 'yes';

// if(likesTheBoys === 'yes' || likesTheBoys === 'Yes'){
//     console.log('I like that show too!');
// }

// if(likesTheBoys.toLowerCase() === 'yes' || likesTheBoys.toLocaleUpperCase() == 'Y') {
//     console.log('I like that show too.');
// } else {
//     console.log('You should watch it.');
// }

// var likesTheBoys = prompt('Do you like the Washington Huskies?');

// if(likesTheBoys.toLowerCase() === 'yes' || likesTheBoys.toLowerCase() === 'y')){
//     alert('Go Dawgs!');
// } else {
//     alert('Wrong answer!');
// }

//prompt user for name

var scoreCount = 0;

var userName = prompt('Hello user. Can I call you something other than user? Please enter your preferred name: ');
// console.log('User\'s name is: ' + userName);

// ask about playing a game

var playQuestion = prompt('Hello ' + userName + '! Would you like to play a guessing game about me?');
// console.log('User response to play question: ' + playQuestion);

// error check for user input, return response

if (playQuestion.toLowerCase() === 'yes' || playQuestion.toLowerCase() === 'y') {
// console.log('Correct');
  alert('That\'s great, you didn\'t really have a choice!');
  scoreCount++;
} else {
  alert('That\'s too bad. We are going to play anyway!');
// console.log('Incorrect');
}

// prompt for lived overseas question

var livedOverSeas = prompt('Have I ever lived in another country?');

// error check for user input, return response

if (livedOverSeas.toLowerCase() === 'yes' || livedOverSeas.toLowerCase() === 'y') {
  alert('You are correct, I lived and worked in Tunis, Tunisia for 3 years.');
  scoreCount++;
// console.log('Correct');
} else {
  alert('Incorrect, I lived and worked in Tunis, Tunisia for 3 years.');
// console.log('Incorrect');
}

// prompt for hot air balloon question

var hotAir = prompt('Have I ever been a hot air balloon instructor?');

// error check for user input, return response

if (hotAir.toLowerCase() === 'no' || hotAir.toLowerCase() === 'n') {
  alert('You are correct, but it sounds like a great summer job!');
  scoreCount++;
// console.log('Correct');
} else {
  alert('Sorry, I\'m not that cool.');
// console.log('Incorrect');
}

// prompt for seattle question

var liveSeattle = prompt('Do I currently live in Seattle?');

// error check for user input, return response

if (liveSeattle.toLowerCase() === 'no' || liveSeattle.toLowerCase() === 'n') {
  alert('You are correct, I live in Bellingham, but I did live in Seattle for 6 years.');
  scoreCount++;
// console.log('Correct');
} else {
  alert('Incorrect, I lived in Seattle for 6 years. I now live in Bellingham.');
// console.log('Incorrect');
}

// prompt for rock spotting question

var rockSpot = prompt('Did my first job involve starring at rocks for 8 hours a day?');

// error check for user input, return response

if (rockSpot.toLowerCase() === 'yes' || rockSpot.toLowerCase() === 'y') {
  alert('Unfortunately, yes, you are correct. My first job involved watching large rocks be placed by an excavator and signalling to the operator if it was in the correct position. Very exciting!');
  scoreCount++;
// console.log('Correct');
} else {
  alert('Incorrect, as boring as it was, that was my first job.');
// console.log('Incorrect');
}

//guessing game, user needs to guess number of countries I've visited

var userGuessCountries = prompt('How many countries have I visited (so far) in my life? Hint: There are currently 195 countries in the world and I live in one of them, so pick a number between 0 and 196.');

var guessCount = 0;
var guessRemain = 4;
var correct = '27';

for (var i=0; i<3; i++){
  if(userGuessCountries === correct){
    guessCount++;
    alert('You are correct, I have visited 27 countries. It took you ' + guessCount + ' tries.');
    scoreCount++;
    break;
  } else if (userGuessCountries < correct) {
    guessCount++;
    userGuessCountries = prompt('Nope, try higher. ' + (guessRemain - guessCount) + ' Guesses remain!');
  } else if (userGuessCountries > correct) {
    guessCount++;
    userGuessCountries = prompt('Nope, try lower. ' + (guessRemain-guessCount) + ' Guesses remain!');
  } else {
    guessCount++;
    userGuessCountries = prompt('Invalid entry, please enter a number between 0 and 196. That cost you a guess!' + (guessRemain-guessCount) + ' Guesses remain!');
  }
}

if (i===3 && userGuessCountries !== correct) {
  alert('Sorry, you did not guess the correct number of countries and did not earn a point. I have visited 27 countries.');
}








// thank player

alert('Thanks for playing ' + userName + '! You got ' + scoreCount + ' questions correct out of 7. Heads up, you need a 90% to pass this class, with only 7 questions you need to get them all correct!');
