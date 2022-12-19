'use strict';

const degrees = Number.parseFloat(prompt('Введите значение градусов по Цельсию: '));

function convertToFahrenheit(degrees){
    const fahrenheit =  9 / 5 * degrees + 32;
    return fahrenheit.toFixed(1);
}
alert(`${degrees} \u{2103} = ${convertToFahrenheit(degrees)} \u{2109}`);