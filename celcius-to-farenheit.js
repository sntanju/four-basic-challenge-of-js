function celciusToFarenheit(celcius){
    const farenheit = (celcius * 9/5) + 32;
    return farenheit;
}
const answer = celciusToFarenheit(36);
console.log('celcius to farenheit is: ', answer);