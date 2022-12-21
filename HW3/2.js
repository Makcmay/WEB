'use strict';

const userName = prompt('Введите ваше имя: '); 

nameHi(userName);
function nameHi(name) {
    console.log(`Привет, ${name}!`);
}


// // 'use strict';
// function getName(){
//     const userName = prompt('Введите ваше имя: ');
//     while (true){
//         if (userName == /^[0-9A-ZА-ЯЁ]+$/i.test(userName)) {
//             return userName;
//         }
//         alert('Некорректный ввод')
//         userName = prompt('Введите ваше имя: ');   
//     }
// }

// // const userName = prompt('Введите ваше имя: '); 
// // const isAlphaNumeric = userName => /^[0-9A-ZА-ЯЁ]+$/i.test(str)

// function nameHi(name) {
//     console.log(`Привет, ${name}!`);
// }

// // const nameU = getName();
// nameHi(nameU);

