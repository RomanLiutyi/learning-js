var alphabet   = 'abcdefghijklmnopqrstuvwxyz'.split('');
var maxLenght  = alphabet.length-1;
do{
    var randCoins  = +prompt('Какое количество рандомных букв нужно создать ');
    var minLetter  = +prompt('Какое минимальное количество букв в слове должно быть ');
    var maxLetter  = +prompt('Какое максимальное количество букв в слове должно быть ');
    var test       = (randCoins > 0) && (minLetter > 0 )&& (maxLetter > 0);
} while (!test)
var randArr    = [];

function randLetter(){
    randLet = alphabet[Math.round(Math.random() * (maxLenght))];
}

for (var i = 0; i < randCoins; i++){
    var randLetterCoins = Math.round(Math.random() * (maxLetter - minLetter) + minLetter);
    var word            = '';
    for (var j = 0; j < randLetterCoins ; j++ ){
        randLetter();
        word = word + randLet;
        
    }
    randArr[i] = word;
}

function bubbleSort(a) {
    var swapped;
    do {
        swapped = false;
        for (var i = 0; i < a.length - 1; i++) {
            if (a[i].length > a[i + 1].length) {
                var temp = a[i];
                a[i]     = a[i + 1];
                a[i + 1] = temp;
                swapped  = true;
            }
        }
    } while (swapped);
}
bubbleSort(randArr);

var resultArr = [];

function sort(a){
    var k =0;
    for (var i = 0, k = 0; i < a.length; i++, k++){
        j = 1;
        for (i = 0; a[i].length === a[i+1].length; i++){
            j++;
            }resultArr[k] = randArr.splice(0, j);
        }
        resultArr[k] = randArr.splice(0, a.length);  
    }

sort(randArr);

var obj       = Object.assign({}, resultArr);
var resultObj = {};

for (const key in obj) {
    var element       = obj[key];
    var newKey        = element[0].length;
    resultObj[newKey] = element;
    console.log(obj[key].length + ' words with ' + obj[key][0].length + ' characters');
}
console.log(resultObj);