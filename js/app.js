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

var likesTheBoys = prompt('Do you like the Washington Huskies?');

if(likesTheBoys.toLowerCase() === 'yes' || likesTheBoys.toLowerCase() === 'y')){
    alert('Go Dawgs!');
} else {
    alert('Wrong answer!');
}