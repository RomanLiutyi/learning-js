// var i   = +prompt('input num', 1)
// do {
//     console.log('Iteration');
// } while ( --i > 0);

// var happy = true,
//     i = 0;

// do {
//     happy = confirm('Are you happy that number is ' + ++i + '?');
// } while (happy);


// var i = 0;
// do { i++;
// } while (confirm('Are you happy that number is ' + ++i + '?'));


// var i = 0;

// while (confirm('Are you happy that number is ' + ++i + '?'));

// *********** Угадай число от 0 до 10 *********
// var min     = 0;
// var max     = 1;
// var rand    = Math.random() * (min - max) + min;
// var rounted = Math.round(rand);
// // var answer  = +prompt('Угадай число от 0 до 5');


// do {
    
// } while (rounted !== answer);{
//     var answer  = +prompt('Угадай число от 0 до 5');
// }
// console.log('Win');



var guess,
    rand = Math.round(Math.random()*5),
    CZ   = 0;
do {
    guess = prompt('Guess a');
    CZ++ ;
    console.log( CZ );
    if ( guess===NaN) break;
} while ( guess!==null && guess===NaN && +guess !== rand);

console.log('Поздравляем', rand, '-загаданое число');
console.log('Вам потребовалось ', CZ ,' попыток');



// for ( var i = 0; i <5; i++);{
//     console.log(i);
// }
