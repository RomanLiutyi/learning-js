var alphabet  = 'abcdefghijklmnopqrstuvwxyz';
var resultWords = {}; 

do{
    var randCoins  = +prompt('Какое количество рандомных слов нужно создать ' , 20);
    var minLetter  = +prompt('Какое минимальное количество букв в слове должно быть ', 2);
    var maxLetter  = +prompt('Какое максимальное количество букв в слове должно быть ', 10);
    var test       = (randCoins > 0) && (minLetter > 0 )&& (maxLetter > 0);
} while (!test)

for (var index = randCoins; index > 0; index--) {
    var newWord = '';
    for (var letterIteration = randomaizer(maxLetter, minLetter); letterIteration > 0; letterIteration--) {
        newWord += alphabet[randomaizer(alphabet.length - 1)];
    }(!resultWords[newWord.length]) ? resultWords[newWord.length] = [newWord] : resultWords[newWord.length].push(newWord);     
}
infoObject(resultWords);
console.log(resultWords);