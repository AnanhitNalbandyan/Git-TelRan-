
 /*ДЗ. 0. Наполнить массив products подобными объектами, с разными значениями
    
 1. Есть массив объектов products. Вывести название и цену каждого товара в консоли со
    скидкой 10%
    2. Есть массив объектов products. Из этого массива добавить в новый пустой массив только те
        продукты:
            а)цена которых больше 88000; const moreThanPrice = [] нужно заполнить данный массив
            б) категория который "phone"; const categoryPhone = []
    3. Создать функцию, которая получает два числа в параметры и выводит в консоль бОльшее из них
        max(10, 20) // 20
        max(100, 5) // 100
    4. Написать функцию, которая запрашивает число у пользователя и отображает "ЧЕТ", если число четное
        и "НЕЧЕТ", если нечетное
    5. Написать функцию, которая получает два числа и возводит первое число в степень второго
        power(10, 2) // 100
        power(12, 2) // 144
        power(2, 5) // 32
*/




//0. Наполнить массив products подобными объектами, с разными значениями

const products = [
    {
        id: 01,
        name: "Iphone 15",
        price: 155600,
        category: "mobile",
        color: "red"
    },
    {
        id: 02,
        name: "Iphone 14",
        price: 108900,
        category: "phone",
        color: "white"
    },
    {
        id: 03,
        name: "Iphone 13",
        price: 90230,
        category: "mobile",
        color: "black"
    },
    {
        id: 04,
        name: "Iphone 12",
        price: 80440,
        category:"phone",
        color: "black"
    },
]
console.log(products)

//1. Есть массив объектов products. Вывести название и цену каждого товара в консоли со
//скидкой 10%


for (let i = 0; i < products.length; i++) {
   let  sale = products[i].price * 10 / 100;
    console.log(products[i].name, sale) 
}

/*2. Есть массив объектов products. Из этого массива добавить в новый пустой массив только те
        продукты:
            а)цена которых больше 88000; const moreThanPrice = [] нужно заполнить данный массив
            б) категория который "phone"; const categoryPhone = [] */


//а)цена которых больше 88000; const moreThanPrice = [] нужно заполнить данный массив

const moreThanPrice = [] 
for (let i = 0; i < products.length; i++) {
    if (products[i].price > 88000) {
        moreThanPrice.push (products[i].name, products[i].price)  
    }
    console.log(moreThanPrice)
}

//б) категория который "phone"; const categoryPhone = [] 
 
const categoryPhone = []
for (let i = 0; i < products.length; i++) {
    if (products[i].category === "phone") {
        categoryPhone.push (products[i].name, products[i].price)  
    }
    console.log(categoryPhone)
}

/*3. Создать функцию, которая получает два числа в параметры и выводит в консоль бОльшее из них
        max(10, 20) // 20
        max(100, 5) // 100*/

let myFunction = {
    a: 10,
    b: 20,
}
if (10 > 20) {
    console.log(myFunction.a)  
} else{
    console.log(myFunction.b)
}

/*4. Написать функцию, которая запрашивает число у пользователя и отображает "ЧЕТ", если число четное
        и "НЕЧЕТ", если нечетное*/


 let anyNumber = {
    number: +prompt("Input any number")
}
if (anyNumber % 2 === 1) {
    console.log("The number is odd")  
} else{
    console.log("The number is even")
}
/*5. Написать функцию, которая получает два числа и возводит первое число в степень второго
        power(10, 2) // 100
        power(12, 2) // 144
        power(2, 5) // 32*/


function pow(a, n) {
    return a ** n;
  }
  
  console.log(pow(10, 2));
  console.log(pow(12, 2));
  console.log(pow(2, 5));
