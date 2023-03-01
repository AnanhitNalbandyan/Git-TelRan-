// При нажатии на каждую картинку в блоке section, в .images-container
// отображать соответствующую картинку, т.е ту картинку, на которую
// кликнули, ту и надо отобразить в .images-container

/*
const srcImges = document.querySelectorAll("img")
const imagesContainer = document.querySelector(".images-container")
console.log(srcImges)
function changeImg(event){
    
    event.src = '.images'
}
//srcImges.addEventListener('click', changeImg)
imagesContainer.addEventListener('click', changeImg)

//Kira
const picture = document.querySelector ('.images')
let place = document.querySelector ('.images-container')

function change (event) {
    place.setAttribute('src', event.target.src )
}//
picture.addEventListener('click', change)

/*for(let i = 0; i < srcImges.length; i++) {
    console.log(srcImges)
   imagesContainer[i] = srcImges[i] //.setAttribute('src', event.src')
}  */
//srcImges.addEventListener('click', srcImges)


//for
const imagesSection = document.querySelector('.images')
const images = imagesSection.querySelectorAll('img') // NodeList [{img1}, {img2}]
const imagesContainer = document.querySelector('.images-container')

for(let i = 0; i < images.length; i++) {
    // console.log(images[i]) каждая картинка - html elem img
    images[i].addEventListener('click', function(event) {
        imagesContainer.setAttribute('src', event.target.src)
    })
}

//
// Переписать код выше, используя метод forEach()
// 1. Какое действие? На каждую картинку повесить слушатель клика. Картинки хранятся в images = [{}, {}]
// 2. Что делать по клику? По клику для imagesContainer задавать атрибут src, со значением полученным при клике на каждую картинку


/*
    <img> => {img}
    {img}.addEventListener
    images.addEventListener - не можем
    const images = [{<img>}, {<img>}, {<img>}]
    images[0].addEventListener
    images[1].addEventListener

    imagesContainer => {<img src="">}
    images.forEach(function(image) {
        image.addEventListener('click', function(event) {
            imagesContainer.setAttribute('src', event.target.src)
        })
    })

*/
images.forEach(function(eachimg){
    eachimg.addEventListener('click', function(event) {
        imagesContainer.setAttribute('src', event.target.src)
    })
})



//Зада`а увеличить

const numbers = [10, 20, 30, 40, 50]

// цикл for
for (let i = 0; i < numbers.length; i++) {
    console.log(i)
    console.log(numbers[i] * 10)   
}

//цикл foreach

numbers.forEach(function(eachnumber, eachindex){
    console.log(eachindex)
    console.log(eachnumber * 10)
})

 // Задача. Есть массив имен names=["Arsen", "Anna", "Aleksei", "Yurii"]. Нужно в консоли
// вывести каждое имя, которое будет записано в верхнем регистре, т.е все буквы сделать заглавными

    let names=["Arsen", "Anna", "Aleksei", "Yurii"]
    names.forEach(function(eachname){
        console.log(eachname.toUpperCase())
    })