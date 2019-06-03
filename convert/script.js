var currency     = 'USD EURO UAH',
    currencyIn   = '', 
    currencyOut  = '';
var coins        = NaN,
    coinsConvert = 0;
var usdUah       = 26.35,
    usdEuro      = 0.9,
    euroUah      = 29.34;
var testIn       = false,
    testOut      = false;

do{
    currencyIn = prompt('Выберите валюту, из которой хотите конвертировать', currency);
    currencyIn = currencyIn.toUpperCase();
    testIn =  ( (currencyIn === 'USD') || (currencyIn === 'EURO') || (currencyIn === 'UAH'));
} while ( !testIn );
do{
    coins = +prompt('Введите количество валюты');  
    coins = coins.toFixed(2);
} while ( isNaN(coins));
do{
    currencyOut = prompt('Выберите валюту, в которую хотите конвертировать', currency);
        currencyOut = currencyOut.toUpperCase();
    testOut =  ( (currencyOut === 'USD') || (currencyOut === 'EURO') || (currencyOut === 'UAH'));
} while ( !testOut );

if (currencyIn === currencyOut){
    console.log(coins + currencyIn,'=',coins + currencyOut + ' как ни страно =)');
    }else if (currencyIn === 'USD'){
        if (currencyOut === 'UAH'){
            coinsConvert = coins * usdUah;
            console.log(coins + currencyIn,'=',coinsConvert.toFixed(2) + currencyOut);
        }else {
            coinsConvert = coins * usdEuro;
            console.log(coins + currencyIn,'=',coinsConvert.toFixed(2) + currencyOut);
        }
    }else if (currencyIn === 'EURO'){
        if (currencyOut === 'UAH'){
            coinsConvert = coins * euroUah;
            console.log(coins + currencyIn,'=',coinsConvert.toFixed(2) + currencyOut);
        }else {
            coinsConvert = coins / usdEuro;
            console.log(coins + currencyIn,'=',coinsConvert.toFixed(2) + currencyOut);
        }
    }else {
        if (currencyOut === 'USD'){
            coinsConvert = coins / usdUah;
            console.log(coins + currencyIn,'=',coinsConvert.toFixed(2) + currencyOut);
        }else {
            coinsConvert = coins / euroUah;
            console.log(coins + currencyIn,'=',coinsConvert.toFixed(2) + currencyOut);
        }
    }