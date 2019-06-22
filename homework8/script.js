var arr = [1, 2, 3, 4, -5, 6, -6];

var everyPos = arr.every(function(el){
    return el < 0;
})
console.log(everyPos);

function every(arr) {
    var flag = true;
    for (var index = 0; index < arr.length; index++) {
        if(arr[index] < 0){
            flag = false;
            break;
        }
        
    }
    return flag;
};
console.log(every(arr));

var hasNeg = arr.some(function(el){
    return el < 0;
})
console.log(hasNeg);

function some(arr) {
    var hasNegFlag = false;
    for (var index = 0; index < arr.length; index++) {
        if(arr[index] < 0){
            hasNegFlag = true;
            break;
        }
        
    }
    return hasNegFlag;
};
console.log(some(arr));

var sumArr = arr.reduce(function(el, sum){
    return sum +=el;
});
console.log(sumArr);

function reduce(arr) {
    var sumArr = 0;
    for (var index = 0; index < arr.length; index++) {
        sumArr += arr[index];
        
    }
    return sumArr;
};
console.log(reduce(arr));