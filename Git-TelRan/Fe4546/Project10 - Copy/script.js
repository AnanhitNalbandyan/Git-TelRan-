

/*
    console.log(event) {
        ...
        target: {
            ...
            (...) - раскрыть остальные свойства
            style : {
                backroundColor
            }
        }
    }
        1. Найти все кнопки. querySelectorAll('')
        2. Повесить слушатель на каждую кнопку. addEventListener() + forEach
        3. Передать в addEventListener функцию, которая будет
         а) считывать название нажатой кнопки <button class="btn">Green</button> --> Green; innerText
         б) задать цвет body текстом из пункта а. document.body.style.backgroundColor = text из пунтка A
        
*/
const allBtn = document.querySelectorAll('.btn')
const btnImg = document.querySelector('.btn-img')
 allBtn.forEach(function(eachbtn){
    eachbtn.addEventListener('click', function(event) {
        document.body.style.bacgroundColor = event.target.innerHTML
    })
})


// ДЗ. 1. При нажатии на кнопку img, менять фон body на картинку, которую нужно заранее подготовить
//          На этапе получения текста, проверить, если в тексте есть img, то делаем одно
//          иначе делаем document.body.style.backgroundColor = event.target.innerText

// 2. На этапе получения текста, проверить, если(есть класс random-btn) в тексте(классе) есть random,
// то менять цвет body на случайный.  Math.random() - случайное число. rgba(Math.random())
/*
btnImg.forEach(function(eachimg){
    eachimg.addEventListener('click', function(event){
        //document.body.style.name = event.target.
    })
}) */
 allBtn.forEach(function(eachbtn){
    eachbtn.addEventListener('click', function(event) {
        console.log(event)
        document.body.style.bacgroundColor = event.target.innerText
    })
})