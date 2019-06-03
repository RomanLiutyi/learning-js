
do{
    var userAge = prompt('Введите ваш возраст');
    var test    = isNaN(userAge) || userAge === '' || userAge <= 0;
} while (test);
do{
    var userExperience = prompt('Количество лет опыты в данной области');
    var test           = isNaN(userExperience) || userExperience === '' || userExperience < 0;
}while (test);

userAge >= 30 && userExperience >= 3 ? 
    console.log('Поздравляем, Вы нам подходите )') :
    console.log('Извините, Вы нам не подходите (');

// if (userAge >= 30 && userExperience >=3){
//   console.log('Поздравляем, Вы нам подходите )');
// }else{
//   console.log('Извините, Вы нам не подходите (');
// }