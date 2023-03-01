// 1 написать цикл, который выводит в консоль числа от 0 до 9

for (let i = 0; i < 10; i++) {
    console.log(i);
}
/*
let vs var vs const 

1) const - нельзя переопределять 
   let - можно

2) начиная с ES6 let const (не надо использовать var)


3) области видимости

var - функциональная область видимости 
let - блочная область видимости 


let a;
if (1 === 1){
    a = 12;
}

console.log(a);

более точное формирование пространства имен (можно использовать одноименные переменные в разных блоках)

4) всплытие 

console.log(b);
var b = 12;
console.log(b);

5) многократное объявление

let a = 12;
let a = 12;*/

const numbers = [12, 4, 32, 5, 32];
numbers.forEach(function(elem){console.log(elem)});
// написать цикл, который выводит только положительныечисла
const numbers1 = [12, 4, -32, 5, -37, -32, 5, 23];
for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i]> 0) {
        console.log(numbers1[i]);  
    }    
}
// доработать цикл таким образом, чтобы все отрицательные 
// числа заменялись на положительные (-32 -> 32)

const numbers2 = [12, 4, -32, 5, -37, -32, 5, 23];
for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i]< 0) {
        //numbers2[i] = -numbers2[i]; 
        numbers2[i] *= -1; 
    }  
    console.log(numbers2); 
}
// написать цикл, который выводит все четные числа
const numbers3 = [12, 4, 5, -37, -32, 5, 23];
for (let i = 0; i < numbers1.length; i++) {
    if (numbers3[i] % 2 === 0) {
        console.log(numbers3[i]);  
    }    
}