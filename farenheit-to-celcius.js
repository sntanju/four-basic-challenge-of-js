function farenheitToCelcius(farenheit){
    let celcius = (farenheit - 32) * 5/9;
    return celcius;
}
let answer = farenheitToCelcius(9);
console.log('farenheit to celcius is: ', answer);