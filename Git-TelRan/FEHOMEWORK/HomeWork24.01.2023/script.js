
    /*1. Написать программу, которая запрашивает у пользователя два числа поочередно и выводит бОльшее из них.
    2. Написать программу, которая запрашивает у пользователя число и выводит "положительное" "отрицательно" "равно 0"
    3. Есть массив arr = [1, 4, 2, 6, 9]. Есть пустой массив squares = []. Нужно заполнить массив
        squares квардатами чисел из первого массива, используя методы push, unshift,shift, pop
        в итоге  squares = [1, 16, 4, 36, 81]
    4. Используя методы push, unshift,shift, pop удалить из массива movies "Властелин колец" и "Звездные войны"
        В итоге в массиве должно остаться ["Аватар", "Гарри Поттер"]*/

 //1. Написать программу, которая запрашивает у пользователя два числа поочередно и выводит бОльшее из них.
const innumber = +prompt("Input any number")
const innumber1 = +prompt("Input any number")
if (innumber > innumber1) {
    console.log(innumber)
} else {
    console.log(innumber1)
} 

//2. Написать программу, которая запрашивает у пользователя число и выводит "положительное" "отрицательно" "равно 0"

const innumber2 = +prompt("Input any number")

if (innumber2 > 0 ) {
    console.log("positive")
}else if(innumber2 < 0 ) {
    console.log("negotiv")
}  
else {
    console.log(0)
} 
/*3. Есть массив arr = [1, 4, 2, 6, 9]. Есть пустой массив squares = []. Нужно заполнить массив
squares квардатами чисел из первого массива, используя методы push, unshift,shift, pop
в итоге  squares = [1, 16, 4, 36, 81]*/

const arr = [] 
const numbers =[1, 4, 2, 6, 9]
const arr1 = Math.pow(numbers[0], 2)//const power = [1*1, 2*2, 6*6, 9*9]
arr.push(arr1, Math.power(numbers[1],2))
console.log(power) 
arr.unshift(power[4], power[3], power[2], power[1], power[0])
console.log(arr)



/*4. Используя методы push, unshift,shift, pop удалить из массива movies "Властелин колец" и "Звездные войны"
        В итоге в массиве должно остаться ["Аватар", "Гарри Поттер"]*/
const movies = ["Avatar", "Star Wars"]
console.log(movies)

movies.push("Harry Potter")
console.log(movies)

movies.unshift("Lord of the Rings")
console.log(movies)

movies.shift("Lord of the Rings")
console.log(movies)

movies.shift("Avatar")
console.log(movies)

movies.shift("Star Wars")
console.log(movies)

movies.unshift("Avatar")
console.log(movies)



