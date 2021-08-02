let number_n = 99;
let intervalcheck = function (num_n) {
    if (num_n < 100) {
    return 'Liczba nie znajduje się w przedziale';
    }   else if (num_n > 200) {
        return 'Liczba nie znajduje się w przedziale';
    }   else {
        return 'Liczba znajduje się w przedziale';
        }
}
console.log(intervalcheck(number_n));
