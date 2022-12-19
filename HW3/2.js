'use strict';

const userName = prompt('Введите ваше имя: '); 

nameHi(userName);
function nameHi(name) {
    console.log(`Привет, ${name}!`);
}