var userAge = prompt('Введите ваш возраст');
var middleAge = 12;
var normalAge = 18;
// if (userAge <= 0){
//   console.log('Странный у вас возраст');
// }else if (userAge < middleAge) {
//     console.log('Для вас есть детский youtube канал');
// } else if (userAge < normalAge) {
//     console.log('Доступ запрещен');        
// } else if (userAge >= normalAge){
//     console.log('Доступ разрешен');
// } else {
//     console.log('Введите число');
// }

userAge <= 0 ? console.log('Странный у вас возраст') :
    (userAge < middleAge ? console.log('Для вас есть детский youtube канал') :
        (userAge < normalAge ? console.log('Доступ запрещен') : 
            (userAge >=normalAge ? console.log('Доступ разрешен') :
                console.log('Введите число'))));