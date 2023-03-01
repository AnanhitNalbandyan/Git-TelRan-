// однострочный комментарий
/*
    многострочный
    комментарий
*/
/*
    JS - не типизированный язык программирования
    TS - типизированный JS
    JSX - объединение JS и HTML. JS - только то, что относится к выводу данных
*/
/*
 Методы взаимодействия с браузером

console.log("Hello World")// отобразить переданную строку в консоли
alert("Hello Anait") // отображает сообщение для пользователя и ждет нажатия на "ОК" // для вывода данных
console.log("Hello Gagik") // отобразить переданную строку в консоли // для вывода данных
prompt("What is your name")*/

/*
    переменная - способ хранения данных, хранилище данных. 
    в переменной можно хранить все что угодно, например имя пользователя, продукты и т.д. 
    Есть несколько способов создать переменную в JS
    1. var - устаревшее. Область видимости - глобальная(функциональная). ЗАБЫТЬ!!!
    2. let - обычная переменная. Блочная область видимости
    3. const - константная переменная. Переменную созданную с помощью const нельзя переопределить
    const не может быть переопределена. если положили какое-то значение, то другое уже положить не можем
    Правила именования переменных:
    а) использование латиницы и транслитерацию (familiya, cena - не валидные)
    б) не может начинаться с цифры (но в любом другом месте использоват цифру можно) 
        name, name1 - валидные(правильный) и разные переменные
    в) лучше использовать осмысленное название
        Если переменная хранить имя, то это name, userName, myName
        Если стоимость товара, то price, productPrice.
    г) чувствительность к регистру; userName и UserName - две разные переменные
    д) не можем использовать тире(-)
    С заглавной буквы переменные не начинаются. 
        Есть константные переменные, которые известны до начала выполнения кода,
        н-р число ПИ - const PI - 3.14; ссылка на API - const URL  
    Есть несколько способов наименования переменных, которые состоят из словосочетания
    1. userNameSurname - camelCase. первая буква первого слова маленькая, остальные первые буквы слов Заглавные
    2. user_name - snake_case - все маленькие, но между словами есть нижний слэш(_)
    3. kebab-case - product-name
*/


/*let myName = prompt("What is your name");// // prompt всегда возвращает строку. 10 -> "10" //отображает вспывающее окно с переданной строкой и полем ввода. prompt для ввода данных
console.log(myName);
myName = 10;
console.log(myName);*/

/* Assigment to constant variable
const myName = prompt("What is your name?");
console.log(myName);
myName = 10;
console.log(myName);*/

    /* Assignment to constant variable.
        const myName = prompt("Как вас зовут")
        console.log(myName)
        myName = 10
        console.log(myName)
    */


/*  
    Типы данных JS
    1. string - строка - "Hello World", "256"
    2. number - число - 256, 10, 10.5, 10.35263  [-2^64;2^64]  
*/

/*
    Математические операторы
    1. + 
    2. - 
    3. *
    4. /
    5. % - остаток от деления
*/


 // Входные данные
const a = 10;
const b = 20;

 // Мат. операции 
const sum = a + b;
const minus = a - b;
const mult = a * b;
const divide = a / b;

// Вывод данных
console.log("Sum: ", sum, "Minus: ", minus, "Mult: ", mult, "Divide: ", divide);
console.log("Sum: ", sum);
console.log(minus);
console.log(mult);
console.log(divide);


//% - остаток от деления 
const k = 40;
const l = 5;
const rest = k % l; // 40/5 = 8 - остаток 0  // 40 / 6 = 6 4/6
console.log("Rest: ", rest);

const e = 40;
const f = 6;
const rest1 = e % f;
console.log("Rest:", rest1);

/* + как оператор конкатенации
    конкатенация - склеивание строк
*/

const firstName = "Anahit";
const surName = "Nalbandyan";
const fullName = firstName + " " + surName;
console.log(fullName);
console.log(firstName + " " + surName);
const r = 12;
const g = 13;
const x = 14;
//console.log("r: ", r, "g: ", g, "b: ", x);
const result = 'rgb(${r}, ${g}, ${x})'


let myOldYaer = prompt("How old are you?")
myBirthYear = 2023 - myOldYaer;
console.log(myBirthYear);

let anyNumber = prompt("Input any number?")
squerNumber = anyNumber * anyNumber;
console.log(squerNumber);

let anyNumber1 = prompt("Input any 2 number?")
let anyNumber2 = prompt("Input any 2 number?")
squerNumber1 = anyNumber1 * anyNumber2;
console.log(squerNumber1);

/*
    условный оператор (условное ветвление)
    if(условие) {
        делаем что-то
    }
    if(условие) {
        делаем что-то
    } else {
        делаем что-то
    }
    if(условие) {
        делаем что-то
    } else if(условие) {
    }
    else {
        делаем что-то
    }
*/

// Если градусов больше чем 15, то в консоли вывести "Наденьте футболку, на улице жарко"
// иначе, вывести в консоли "наденьте кофту, на улице прохладно"
// если градусов == 15, то "выбирайте сами"
// = - оператор присваивания
// "15" == 15 - true
// "15" === 15 - false

const degree = "15"

if (degree > 15) {
    console.log("наденьте футболку на улице жарко")
} else if(degree == 15) {
    console.log("въбирайте сами")
} 
else {
    console.log("наденьте кофту на улице прохладно")
} 
/* 
    15 > 15 - неверное 
    > - больше
    < -  меньше
    >= - больше или равно
    <= - меньше или равно
    == - сравнение
    === - строгое сравнение(с учетом типа данных) // использовать по умолчанию
    != - отрицание без учета типа данных (не равно?)
    !== - отрицание с учетом типа данных (не равно с учетом типа данных?)
    && - И - булевое И (верно, когда обе части до && и после && true)
    || - ИЛИ - булевое ИЛИ (верно, когда хотя бы одна из частей между || true)
*/
/* 
    prompt("Ввести число") - всегда возвращает тип данных string(строка)
    +prompt("Введите число") - в этом случае вернется тип данных number 
    ДЗ. 
    1. Добавить пробел между строками name и surname
    2. Есть переменные r = 12, g = 13, b = 14. Используя конкатенацию вывести строку "rgb({12}, {13}, 14)"
    3. Попросить у пользователя ввести его возраст(годы) и в консоли вывести год его рождения(валидный для 2023)
    4. Попросить ввести число и в консоли вывести квадрат этого числа
    5. Попросить пользователя ввести два числа (поочередно - 2x prompt), а в консоли вывести их произведение(*)
*/

const anyNumber3 = +prompt("Input any number?")

if (anyNumber3 > 100) {
    console.log(anyNumber3)
} else if(anyNumber3 === 100) {
    console.log("ваше число равно и не биольше ста")
} 
else {
    console.log("ваше число меньше ста")
} 

// const greeting = "hello"  
/* 
    ctrl + / - закомментировать строку или выделенную область 
*/
const num1 = "7"
const num2 = "10"
const num3 = 9

const concat = num1 + num2 //"710"
const mult1 = num1 * num2 //70
const divide1 = num1 / num2//0.7
const concat1 = Number(num1) + num3 //16
const concat2 = num1 + num3 //79
const min = num1 - num2 //-3

console.log(concat)
console.log(mult1)
console.log(divide1)
console.log(concat1)
console.log(concat2)
console.log(min)

/* свойство строк*/ 

/* 
    Сравнение строк
    string.length - свойство длина строки - количество симоволв в строке  
    string.includes() - метод, проверяющий существует ли подстрока в строке. (содержит ли подстрока строку) 
    1. Сравниваем первые символы строк
    2. Если первый символ первой строки больше/меньше, чем первый символ второй, то это
        значит, что первая строка больше/меньше второй. На этом сравнение окончено
    3. Если первые символы равны, то идем дальше и сравниваем подобным образом уже следующие символы строк
    4. Если символы в строках закончились одновременно, то значит, что строки равны
*/

const str1 = "Hello"
const str2 = "Anahit"
const str3 = "hello"
const str4 = "Hellp"

console.log ("Armen" > "Arsen")//false s > m
console.log(str3 > "h") //true
console.log(str1 > str4) //false H=H, e=e, ll=ll, o < p
console.log(str1===str2) //false
console.log(str1 ===str3)//false

console.log(str1.length === str3.length)//tru
console.log(str1.includes("ll"))//true
console.log(str1.includes("a"))//false

console.log(str1 > str2)//посимвольное сравнение
console.log("Н" > "А") // true Н дальше по алфавиту

const price = +prompt("Input any number?")


// задача Есть переменная price. Если price > 1000, то в консоли выводим "скидка 10%"
// если price > 1500, то в консоли выводим "скидка 15%"
// иначе выводим "Скидки нет"

// I способ
if (price >= 1500) {
    console.log("скидка 15%")
} else if(price >= 1000) {
    console.log("скидка 10%")
} 
else {
    console.log("Скидoк нет")
} 

// II способ
const price1 = +prompt("Input any number?")

if (price1 > 1000 && price1 < 1500) {
    console.log("скидка 10%")
} else if(price1 > 1500) {
    console.log("скидка 15%")
} 
else {
    console.log("Скидoк нет")
} 
/* Массивы и циклы 
    массив - это структура данных или коллекция элементов, которая упорядочена 
        и элементы имеют индексы от 0 до N
    .length - свойство длины массива - это количество элементов в нем
    .push() - метод, который позволяет добавить значение в конец массив 
    .pop() - метод, который позволяет удалить значение с конца массив
    .unshift() - метод, который добавляет в начало массив
    .shift() - метод, который удаляет значение с начала массива
*/
const arr = []//пустой массив, 
const numbers =[1, 2, 3, 4, 5] // длина 5. индексы [0, 1, 2, 3, 4]
const names = ["Anahit", "Gagik", "Samvel"] // длина 3. индексы [0, 1, 2]

// В консоли отобразить число 3 из массива numbers

console.log(numbers[2]) //3
console.log(names[0])// "Anait"

const smth = ["Anahit", 1 ["Samvel", 10]] //многомерный массив
console.log(smth[2][0])    //["Samvel",10]
console.log(numbers.length)//5

const movies = ["Avatar", "Star war"]
// movies = [] // noooo
// movies[0] = "Avatar2" // yes
console.log(movies)
movies.push("Harry Potter")
console.log(movies)

movies.unshift("Lord of the Rings")
console.log(movies)
// Math.pow(10, 2) // 10^2 = 100

    const arrs = [1, 4, 2, 6, 9]
    const squares = []
    const square1 = Math.pow(arrs[0], 2)
    squares.push(square1, Math.pow(arrs[1], 2))



/*Цикл - повторяющиая последовательность действий
    for(условие) {
        тело цикла
    } 
    Пока условие верно, то выполяется код в теле цикла
    - выполнить операцию несколько раз автоматически, вместо того, чтобы делать ее вручную
    - заполнить массив квадратами чисел из другого массива
    - рендерим(отображаем) несколько html карточек (div)

    for(инициализация; условие; завершающая цикл операция) {
        тело цикла
    }
    for(let i = 0; i < N; i++) {
        тело 
    }
    1. Инициализация - начальное значение счетчика
    2. Условие - условие по которому будут выполняться действия. Пока верно действия выполняются,
        как только оно становится ложным, тело не выполняется
    3. Завершающая операция - действие, которое выполняется после выполнения тела цикла
    4. Тело - алгоритм действий
*/ 

// Отобразить в консоли "Hello" 5 раз
for(let i = 0; i < 5; i++) {
    console.log(i)
    console.log("hello")
}
/*
    1. i = 0, i < 5(0 < 5) - true, console.log("hello"); i++, i = 1
    2. i = 1, i < 5(1 < 5) - true, console.log("hello"); i++, i = 2
    3. i = 2, i < 5(2 < 5) - true, console.log("hello"); i++, i = 3
    4. i = 3, i < 5(3 < 5) - true, console.log("hello"); i++, i = 4
    5. i = 4, i < 5(4 < 5) - true, console.log("hello"); i++, i = 5
    6. i = 5, i < 5(5 < 5) - false,(выйти из цикла) действие console.log("hello") не делаем, потому что условие false 
*/


// Задача. Вывести числа от 0 до 10 в консоли с помощью цикла for
for(let i = 0; i < 11; i++) {
    console.log(i)
    
}

// Задача. Попросить пользователя ввести число 3 раза
for(let i = 0; i < 3; i++) {
    prompt("Input any number")
}


// Вывести каждый элемент массива в консоли
const numbersf = [2, 4, 6, 8, 10, 12]
/*console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[2])
console.log(numbers[4])
console.log(numbers[5])*/

for(let i = 0; i < numbersf.length; i++) {
    console.log(numbersf[i])
    
}

/*
numbers.length = 6
    1. i = 0, i < numbers.length (0 < 6) - true, console.log(numbers[0]); i++, i = 1,
    2. i = 1, i < numbers.length (1 < 6) - true, console.log(numbers[1]); i++, i = 2,
    3. i = 2, i < numbers.length (2 < 6) - true, console.log(numbers[2]); i++, i = 3,
    4. i = 3, i < numbers.length (3 < 6) - true, console.log(numbers[3]); i++, i = 4,
    5. i = 4, i < numbers.length (4 < 6) - true, console.log(numbers[4]); i++, i = 5,
    6. i = 5, i < numbers.length (5 < 6) - true, console.log(numbers[5]); i++, i = 6,
    7. i = 6, i < numbers.length (6 < 6) - false, выходим из цикла
/ Вывести каждый элемент массива в консоли*/


//positive numbers
// Задача. Есть массив numbers. Вывести в консоль только положительные числа из этого массива

const numbersp = [0, -100, 632, 0.5, -0.7, -100, 500]
for(let i = 0; i < numbersp.length; i++) {
    if (numbersp[i] > 0 ) {
        console.log(numbersp[i])
    }  
}
/*numbers.length = 7
1. i = 0, 0 < 7 - true, numbers[0] > 0, 0 > 0 -false, не выполняю console.log(), i++
2. i = 1, 1 < 7 - true, numbers[1] > 0, -100 > 0 - false, не выполняю console.log(), i++
3. i = 2, 2 < 7 - true, numbers[2] > 0, 632 > 0 -true, console.log(632), i++
...
7. i = 6, 6 < 7 -true, numbers[6] > 0, 500 > 0 - true, console.log(500), i++
8. i = 7, 7 < 7 - false, выход из цикла
*/

// Есть массив numbers. Вывести только четные числа из этого массива
//even numbers
const numberse = [7, 16, 32, 51, 100, 121, 40]
for(let i = 0; i < numberse.length; i++) {
    if (numberse[i] % 2 === 0 ) {
        console.log(numberse[i])
    }  
}
/*num % 2 === 0 - четное
num % 2 === 1 - нечетное
14 % 2 === 0 - true? - четное
15 % 2 === 1 - true? - нечетное*/




//sum of numbers

const numberss = [-100, 0, 43, -20, 150, 70, 15, 1.5]
let sum1 = 0
for(let i = 0; i < numberss.length; i++) {
    sum1 = sum1 + numberss[i]
   
}
console.log(sum1)


//sum of positive numbers
const numberssh = [-100, 0, 43, -20, 150, 70, 15, 1.5]
let sum2 = 0

for(let i = 0; i < numberssh.length; i++) {
    if (numberssh[i] > 0 ) {
        sum2 = sum2 + numberssh[i]
      
    }
}
console.log(sum2)
/*
    numbers.length = 8
    sum = 0
    1. i = 0, 0 < 8 - true, sum = sum + numbers[0], sum = 0 + (-100), sum = -100, i++
    2. i = 1, 1 < 8 - true, sum = sum + numbers[1], sum = -100 + 0, sum = -100, i++
    3. i = 2, 2 < 8 - true, sum = sum + numbers[2], sum = -100 + 43, sum = -57, i++
    4. i = 3, 3 < 8 - true, sum = sum + numbers[3], sum = -57 + (-20), sum = -77, i++
    5. i = 4, 4 < 8 - true, sum = sum + numbers[4], sum = -77 + 150, sum = 73, i++
    6. i = 5, 5 < 8 - true, sum = sum + numbers[5], sum = 73 + 70, sum = 143, i++
    7. i = 6, 6 < 8 - true, sum = sum + numbers[6], sum = 143 + 15, sum = 158, i++
    8. i = 7, 7 < 8 - true, sum = sum + numbers[7], sum = 158 + 1.5, sum = 159.5, i++
    9. i = 8, 8 < 8 - false, выходим из цикла
*/

/* 25.01.2023
    ДЗ. 
    1. // Есть массив numbers. Нужно найти сумму нечетных элементов.
        const numbers = [-100, 0, 43, -20, 150, 70, 15, 1.5]
    2. Есть массив numbers. Нужно найти сумму четных и сумму нечетных элементов.
        В консоли вывести разницу между ними (вычесть меньшее из большего)
        const numbers = [-100, 0, 43, -20, 150, 70, 15, 1.5]
*/

/*
/* 
    Объект - тип данных, который позволяет хранить свойства какого-либо предмета или всего, что вас окружает.
        Объект - совокупонсть свойств. 
    Каждое свойство имеет название(ключ) и значение

    Массив - это частный случай объекта, ключами которого являются индексы, т.е числа от 0 до N
    const arr1 = [
        // key : value
        // 0 : "Сандалии"
        "Сандалли"
    ]
    Массив объектов:
    const shoes = [
        {name: "Сандалии", price: 1504}, 
        {name: "Ботинки", price: 3900}, 
    ]
    shoes[0].price // 1504 
    shoes[1].price // 3900
*/
 cost arr1 = [
    //key : value
    // ключ : значение
 ]
 */

 const arr2 = [] // пустой массив
const obj = {} // пустой объект
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
        sex : "masculinum"
    },
    sizes : ["21","22", "23",  ]
}
console.log(shoe.price) //
console.log(shoe["name"])
console.log(shoe)

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

/*string.length - свойство длина строки - количество симоволв в строке  
    string.includes() - метод, проверяющий существует ли подстрока в строке. (содержит ли подстрока строку)*/
/* 
    prompt("Ввести число") - всегда возвращает тип данных string(строка)
    +prompt("Введите число") - в этом случае вернется тип данных number 
    ДЗ. 
    1. Добавить пробел между строками name и surname
    2. Есть переменные r = 12, g = 13, b = 14. Используя конкатенацию вывести строку "rgb({12}, {13}, 14)"
    3. Попросить у пользователя ввести его возраст(годы) и в консоли вывести год его рождения(валидный для 2023)
    4. Попросить ввести число и в консоли вывести квадрат этого числа
    5. Попросить пользователя ввести два числа (поочередно - 2x prompt), а в консоли вывести их произведение(*)
*/


/* Assigment to constant variable
const myName = prompt("What is your name?");
console.log(myName);
myName = 10;
console.log(myName);*/

/*string.length - свойство длина строки - количество симоволв в строке  
    string.includes() - метод, проверяющий существует ли подстрока в строке. (содержит ли подстрока строку)*/

    /*1. Написать программу, которая запрашивает у пользователя два числа поочередно и выводит бОльшее из них.
    2. Написать программу, которая запрашивает у пользователя число и выводит "положительное" "отрицательно" "равно 0"
    3. Есть массив arr = [1, 4, 2, 6, 9]. Есть пустой массив squares = []. Нужно заполнить массив
        squares квардатами чисел из первого массива, используя методы push, unshift,shift, pop
        в итоге  squares = [1, 16, 4, 36, 81]
    4. Используя методы push, unshift,shift, pop удалить из массива movies "Властелин колец" и "Звездные войны"
        В итоге в массиве должно остаться ["Аватар", "Гарри Поттер"]*/