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

var userName = prompt('Hello user. Can I call you something other than user? Please enter your preferred name: ');
    console.log('User\'s name is: ' + userName);

var playQuestion = prompt('Hello ' + userName + '! Would you like to play a guessing game about me?');
    console.log('User response to play question: ' + playQuestion);

if (playQuestion.toLowerCase() === 'yes' || playQuestion.toLowerCase() === 'y') {
    console.log('Correct');
    alert('That\'s great, you didn\'t really have a choice!');
} else {
    alert('That\'s too bad. We are going to play anyway!');
    console.log('Incorrect');
}

var livedOverSeas = prompt('Have I ever lived in another country?');

if (livedOverSeas.toLowerCase() === 'yes' || livedOverSeas.toLowerCase() === 'y') {
    alert('You are correct, I lived and worked in Tunis, Tunisia for 3 years.');
    console.log('Correct');
} else {
    alert('Incorrect, I lived and worked in Tunis, Tunisia for 3 years.');
    console.log('Incorrect');
}

var hotAir = prompt('Have I ever been a hot air balloon instructor?');

if (hotAir.toLowerCase() === 'no' || hotAir.toLowerCase() === 'n') {
    alert('You are correct, but it sounds like a great summer job!');
    console.log('Correct');
} else {
    alert('Sorry, I\'m not that cool.');
    console.log('Incorrect');
}

var liveSeattle = prompt('Do I currently live in Seattle?');

if (liveSeattle.toLowerCase() === 'no' || liveSeattle.toLowerCase() === 'n') {
    alert('You are correct, I live in Bellingham, but I did live in Seattle for 6 years.');
    console.log('Correct');
} else {
    alert('Incorrect, I lived in Seattle for 6 years. I now live in Bellingham.');
    console.log('Incorrect');
}

var rockSpot = prompt('Did my first job involve starring at rocks for 8 hours a day?');

if (rockSpot.toLowerCase() === 'yes' || rockSpot.toLowerCase() === 'y') {
    alert('Unfortunately, yes, you are correct. My first job involved watching large rocks be placed by an excavator and signalling to the operator if it was in the correct position. Very exciting!');
    console.log('Correct');
} else {
    alert('Incorrect, as boring as it was, that was my first job.');
    console.log('Incorrect');
}

alert('Thanks for playing ' + userName + '!');