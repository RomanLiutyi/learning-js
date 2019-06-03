var floors  = +prompt('Input floors');
var arr     = [];
var i       = 0;
var n       = 1;
var text    = '*';
var space   = ' '
var sp      = ''
var ff      = '';

if (floors <= 0) {
    console.log('Введите число > 0');
}
while (floors >= 1){
    arr[i] = (floors+floors-1);
    floors--;
    i++;
}
i--;
while (i >= 0){
    ff = text.repeat(arr[i]);
    sp = space.repeat(i);
    console.log(sp,ff,sp);    
    i--;
    n++;
}
