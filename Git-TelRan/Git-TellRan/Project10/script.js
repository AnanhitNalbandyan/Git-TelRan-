/*
Как понять, что мъ кликнули на кнопку
Нужно повесить слущатель собътия
htmlElem.addEventListener() - метод, который позволяет повесить слушатель события на элемент
    elem.addEventListener() - принимает несколько параметров(аргументов):
       elem.addEventListener('eventType', 'eventHandler')
        elem.addEventListener('click', funktion)
    1. eventType - тип события - строка, содержащая название события 'click', 'submit', 'input'
        2. eventHandler - функция-обработчик события. callback - функция обратного вызова.
            функция обратного вызова - функция, вызов которой мы передаем в другую функцию/метод
            Данная функция получает параметром event object - объект события.
                В объекте события содержится вся информация о событии
            Для того, чтобы узнать информацию о событии, мы должны получить этот параметр в cb
            В объекте события есть свойство target - это элемент, который вызвал событие

        ФУНКЦИИ:
    1. Когда сами запускаем функцию - immediately invoke function - вызов происходит сразу
        fnName() - сразу вызвалась
    2. Когда мы передаем вызов другой функции/методу - вызов происходит не сразу
        .addEventListener('click', function() {})

    3. Когда у функции нет имени ее называют "анонимной функция"
        Используем внутри методов, когда передаем ее в качестве параметра
        Ей не нужно название, потому что она в других местах использовать не будет

    1. Находим элемент, на который хотим повесить слушатель события

    События:
    1. click
    2. input
    3. submit - событие отправки
    4. scroll

    elem.getAttribute('src')
    elem.setAttrubure('href', 'https://google.com')

    function fnName() {
        // тело функции - действия, которые должна выполнять функция
    }
    fnName()
*/
const greenBtn = document.querySelector(".green-btn")
greenBtn.addEventListener("click", function(event) {
    console.log("click")
    console.log(event)
    console.log(event.target)
    console.log(event.target.className)
})


//// Задача. При нажатии на кнопку red, отобразить в консоли ее id
const redBtn = document.querySelector("#red-btn")
redBtn.addEventListener("click", function(event) {
    console.log("click")
    console.log(event)
    console.log(event.target)
    console.log(event.target.id)
})

//const redBtn = document.querySelector("#red-btn")
redBtn.addEventListener("click", function(event) {
  event.target.innerText = "краснъй"
    //redBtn.innerText = "краснъй"
})


//
const redBtn1 = document.querySelector("#red-btn")
function changeText(event){
    event.target.innerText = "purpur"
}
redBtn1.addEventListener("click", changeText)


//
const greenBtn1 = document.querySelector('.green-btn')
const redBtn2 =document.querySelector('#red-btn')

greenBtn1.addEventListener('click', function(event){
    event.target.style.color = 'green'
})


redBtn2.addEventListener('click', function(event){
    event.target.style.color = 'red'
})


//

const redBtn3 = document.querySelector('#red-btn')
const greenBtn2 = document.querySelector('.green-btn')
function changeColor(event){
    event.target.style.color = 'yellow'
}
redBtn3.addEventListener('click', changeColor)
greenBtn2.addEventListener('click', changeColor)

/*
document.getElementById("myElement").style.cssText = `
  display: block; 
  position: absolute;
`;*/


//

const redBtn4 = document.querySelector('#red-btn')
const greenBtn3 = document.querySelector('.green-btn')
function changeColor(event){
    consol.log(event.target.innerText)
    event.target.style.color = event.target.innerText
}
redBtn4.addEventListener('click', changeColor)
greenBtn3.addEventListener('click', changeColor)










