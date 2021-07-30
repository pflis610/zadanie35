let number_n = 99;
let intervalcheck = function (number_n) {
if (number_n < 100) {
return 'Liczba nie znajduje się w przedziale';
}   else if (number_n > 200) {
    return 'Liczba nie znajduje się w przedziale';
}   else {
    return 'Liczba znajduje się w przedziale';
    }
}
console.log(intervalcheck(number_n));
