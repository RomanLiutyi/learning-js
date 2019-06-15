function randomaizer(max, min){
    isNaN(min) ? min = 0 : min = min;
    return Math.round(Math.random() * (max - min) + min);
}
function infoObject(object){
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            var countElements = object[key].length;
            console.log(countElements + ' words with '+ key + ' characters')
        }
    }
}