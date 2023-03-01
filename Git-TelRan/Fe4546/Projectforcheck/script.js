/*const numbersp = [0, -100, 632, 0.5, -0.7, -100, 500]
for(let i = 0; i < numbersp.length; i++) {
    if (numbersp[i] > 0 ) {
        console.log(numbersp[i])
    }  
}

const numbersh = [7, 16, 32, 51, 100, 121, 40]
for(let i = 0; i < numbersh.length; i++) {
    if (numbersh[i] % 2 === 0 ) {
        console.log(numbersh[i])
    }  
}*/

/*
const numberss = [-100, 0, 43, -20, 150, 70, 15, 1.5]
let sum1 = 0
for(let i = 0; i < numberss.length; i++) {
    sum1 = sum1 + numberss[i]
   
}
console.log(sum1)


const numberssh = [-100, 0, 43, -20, 150, 70, 15, 1.5]
let sum2 = 0

for(let i = 0; i < numberssh.length; i++) {
    if (numberssh[i] > 0 ) {
        sum2 = sum2 + numberssh[i]
      
    }
}
console.log(sum2)

const shoe = {
    //key : value
    // ключ : значение
    name: "sandals",
    price:1504,
    sostav: "termoplast",
    id : 58404409,
    color: "blue",
    category: "shoe",
    additinal: {
        country : "China",
        sex : "masculinum" },
    sizes : ["21","22", "23",  ]
}
console.log(shoe.price) //
console.log(shoe["name"])
console.log(shoe)*/
/* 25.01.2023
    ДЗ. 
    1. // Есть массив numbers. Нужно найти сумму нечетных элементов.
        const numbers = [-100, 0, 43, -20, 150, 70, 15, 1.5]
    2. Есть массив numbers. Нужно найти сумму четных и сумму нечетных элементов.
        В консоли вывести разницу между ними (вычесть меньшее из большего)
        const numbers = [-100, 0, 43, -20, 150, 70, 15, 1.5]
*/

// Sum odd numbers
const numberos = [-100, 0, 43, -20, 150, 70, 15, 1.5]
let sum = 0

for(let i = 0; i < numberos.length; i++) {
    if (numberos[i] % 2 === 1) {
        sum = sum + numberos[i]
      
    }
}
console.log(sum)

// Sum of od and event numbers
const numberose = [-100, 0, 43, -20, 150, 70, 15, 1.5]
let sum1 = 0
let sum2 = 0

for(let i = 0; i < numberos.length; i++) {
    if (numberose[i] % 2 === 1) {
        sum1 = sum1 + numberose[i]
  
    }
}

for(let i = 0; i < numberos.length; i++) {
    if (numberose[i] % 2 === 0) {
        sum2 = sum2 + numberose[i]
  
    }
}

if (sum1 > sum2) {
sum1 = sum1 - sum2
console.log(sum1)
} else{
    sum2 = sum2 - sum1
}
console.log(sum2)


/*
        ДЗ. 25.01.2023
        1. Создать объект, у которого будет название, цена и цвет. Вывести его в консоль
        2. Создать объект user, у которого будет email, password, login, age.
            Вывести в консоль год рождения пользователя, используя свойтсво age из объекта user
        3. Есть массив prices. Нужно найти общую цену всех товаров внутри массива объектов prices
            и вывести в консоли
            const prices = [
                {
                    name: "Iphone 14",
                    price : 100000
                },
                {
                    name: "Iphone 13",
                    price : 80000
                },
                {
                    name : "Iphone 12",
                    price: 70000
                }
            ]
       */     
 //1. Создать объект, у которого будет название, цена и цвет. Вывести его в консоль
const iphon14 = {
    name: "Iphone 14",
    price:100000,   
}
const iphon13 = {
    name: "Iphone 13",
    price : 80000,   
}

const iphon12 = {
    name : "Iphone 12",
    price: 70000,   
}
console.log(iphon14.name)
console.log(iphon14.price)
console.log(iphon13.name)
console.log(iphon13.price)
console.log(iphon12.name)
console.log(iphon12.price)


//2. Создать объект user, у которого будет email, password, login, age.

const user = {
    email: "ivan@gmail.com",
    password:"100000", 
    login: "ivan- privet",
    age:96,  
}

console.log(user.email)
console.log(user.password)
console.log(user.login)
console.log(user.age)

/*3. Есть массив prices. Нужно найти общую цену всех товаров внутри массива объектов prices
            и вывести в консоли*/
            const goods = {
            shuse: "sandals",
            bage: "LuiVitone",
            id : 58404409,
            color: "blue",
            category: "shoe",
            additinal: {
                country : "China",
                sex : "masculinum" },
            price : ["21","22", "23",  ]
        }