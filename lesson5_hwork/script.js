// var guess,
//     rand = Math.round(Math.random()*5),
//     i   = 0;
// do {
//     guess = prompt('Введите ваш ответ ');
//     i++ ;

//     if ( typeof(guess) === Object){
//         break;
//     }else if ( isNaN(guess)){
//         console.log('Вы ввели строку вместо числа');
//         break;
//     }else if ( +guess === rand) {
//         console.log('Поздравляем', rand, '-загаданое число');
//         console.log('Вам потребовалось ', i ,' попытки');
//     }
// } while ( guess!==null && +guess !== rand);


// **************************************************************************************************
// Запросить у пользователя значение, кратное которому будут выводиться числа - вывести их в консоль.

// var num = prompt("Введите значение, кратное которому будут выводиться числа");

// for (var i = 1 ; i <= 10; i++){
//     console.log(i*num);
// }

// ***************************
// var num = prompt("Введите значение, кратное которому будут выводиться числа"),
//     i   = 1;
// do {
//     console.log(i*num);
//     i++;
// } while (i <= 10);

// ***************************

// var num = prompt("Введите значение, кратное которому будут выводиться числа"),
//     i   = 1;

// while ( i <=10 ){
//     console.log(i*num);
//     i++;
// }


// **************************************************************************************************
// Запросить у пользователя значение, кратное которому будут выводиться числа - вывести их в консоль.
// (Усложняем) Кроме кратного запросить количество чисел, которые следует вывести

// var num      = prompt("Введите значение, кратное которому будут выводиться числа"),
//     multiple = prompt("Введите количество чисел, которые следует вывести");

// for (var i = 1 ; i <= multiple; i++){
//     console.log(i*num);
// }

// ***************************
// var num      = prompt("Введите значение, кратное которому будут выводиться числа"),
//     multiple = prompt("Введите количество чисел, которые следует вывести"),
//     i        = 1;
// do {
//     console.log(i*num);
//     i++;
// } while (i <= multiple);

// ***************************

// var num      = prompt("Введите значение, кратное которому будут выводиться числа"),
//     multiple = prompt("Введите количество чисел, которые следует вывести"),
//     i        = 1;

// while ( i <= multiple ){
//     console.log(i*num);
//     i++;
// }