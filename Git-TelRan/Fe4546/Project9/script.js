// обращаемся к body

 console.log(document.body)

// Изменить заголовок страницъ

document.title = "Dom of elements"

/*
    Когда мы хотим обратиться к определенному тегу в dom-дереве,
    нужно использовать метод querySelector. 
    querySelector - метод навигации(поиска) элемента в DOM
    Метод используется и вызывается на теге document чаще всего, но он
        может вызваться и на любом другом теге. 
    Позволяет найти любой элемент по селектору. 
    Селектор:
        1. .className
        2. #id
        3. tagName
        4. [attribute] [type="text"]
    Принимает параметр - селектор в виде строки
    
    querySelector() - возвращает только первый найденный элемент в DOM

    Метод querySelector вернет ошибку, если ничего не передать внутрь как параметр
     document.querySelector()
     document.querySelector() возвращает null, если такой тег не был найден

    Если хотим найти несколько элементов по определенному селектору, то используем метод
        querySelectorAll() - найти все элементы по селектору
        он возвращает NodeList - список узлов, это структура данных, которая хранит несколько DOM-элементов
        

    Есть устаревшие методы поиска в DOM.
        1. getElementById()
        2. getElementsByClass()
        3. getElementsByTagName()

     Метод - функция в объекте. 
     
        
     // console.log(document.querySelector('button'))
    // console.log(document.querySelector('h1'))
*/

/*
    const obj = {}
    const arr = [10, 20, 30, 40]
    console.log(arr[2]) // 30
*/

//селектор по тегу селектор в виде строки
console.log(document.querySelector("button"))

//const obj = {} возврощает первъй найденнъй елемент
const button = document.querySelector("button")
console.log(button)

// селектор по классу

const redButtonClass = document.querySelector(".red")
console.log(redButtonClass)

// селектор по id

const redButtonId = document.querySelector("#red")
console.log(redButtonId)

// Найти тег main

const main = document.querySelector("main")
console.log(main)

// можно так обратимся к переменной которая создана временно в JS
const innerButton = main.querySelector("button")
console.log(innerButton)

/*Комбинированные селекторы
querySelector('main .red') // находим элемент с классом .red внутри main
main .red */
const main1 = document.querySelector('main .red')
const innerButton1 = main1.querySelector('button')
console.log(main1)

//найти все теги по селектору button
const buttons = document.querySelectorAll("button")
console.log(buttons)

// найти тег по селектору массивного элемента
const buttons1 = document.querySelectorAll("button")
console.log(buttons1[1])

// получаем определенный элемент из nodeList
const greenButton = buttons[1]
console.log(greenButton)

// Задача. 
// В переменную titles - положить все заголовки
const titles = document.querySelectorAll("h2")
console.log(titles)
// В переменную descrSecond - положить все теги p из второго section
const descrSecond = document.querySelectorAll(".item-2 p")
console.log(descrSecond)

// В переменную firstDescr - положить тег с id first-descr 

const firstDescr = document.querySelectorAll("#first-descr")
console.log(firstDescr)

// В переменную sections - положить оба section
const sections = document.querySelectorAll(".item-2", ".item-2")
console.log(sections)
const sections1 = document.querySelectorAll("section")
console.log(sections1)

// Задачи. 
// В переменную links - положить все теги a
const links = document.querySelectorAll("a")
console.log(links)

// В переменную myLinks - положить все теги a с классом .my-link
const myLinks = document.querySelectorAll(".my-link")
console.log(myLinks)

// В переменную secondLink - положить тег с id second-link
const secondLink = document.querySelector("#second-link")
console.log(secondLink)


// Изменить текст внутри p с  #first-descr  на Привет
const firstDescr1 = document.querySelector("#first-descr")//получили текстовое содержимое тега
console.log(firstDescr1.innerText)
firstDescr1.innerText = "Hi!!"

// Задача. у элемента с id second-link изменить текстовое содержимое на "Ссылка"
const secondLink1 = document.querySelector("#second-link")//получили текстовое содержимое тега
secondLink1.innerText = "Ссылка"

//Во всеь тегах р поменять на "Привет Мир"
const descriptions = document.querySelectorAll("p")

/*
descriptions[0].innerText = "Привет Мир"
descriptions[1].innerText = "Привет Мир"
descriptions[2].innerText = "Привет Мир"
console.log()
*/

for (let i = 0; i < descriptions.length; i++) {
descriptions[i].innerText = "Привет Мир" 
}

//Поменять текст во всех тегах а на "Ссылка"

const myLinks1 = document.querySelectorAll("a")

for (let i = 0; i < myLinks1.length; i++) {
    myLinks1[i].innerText = "Ссылка" 
}

// Есть массив limks в котором хронятса список названий Ссылкок.Заполнить каждый из тегов a, соответсвующими
// по индексам ссылками из массива links. 
/*
    1. Отобразить все ссылки в консоли
    2. Отобразить все теги a в консоли
    3. Каждому тегу a добавить свой текст. Сначала пробежаться по массиву links
        и каждому элементу из массива htmlLinks добавить соотв-ю по индексу ссылку 
    
    В обоих циклах одинаковое количество итераций, следовательно можно объединить их в один цикл.
        После того, как объединили, можно выполнить измнение текста в тегах a
*/


// Есть массив texts ["Привет", "Привет, мир", "ПриветПривет"]
// Добавить строки из массива texts в соотв-е по индексу теги p

/* 
    NodeList = [
        {},
        {},
        {}
    ]
    NodeList to Array
    [...links, "hello"]
    Array.from(links)
    В цикле for
    .concat()
    .push()
*/
/*
    products = [
        {
            name: "Iphone 14"
        },
        {
             name: "Iphone 14"
        },
        {
             name: "Iphone 14"
        }
    ]
    .map() - метод массива
    .forEach() - метод применяется и для массива и для итерируемого списка
    for(let i = 0; i < products.length; i++) {
        console.log(<p>products[i].name</p>)
    }
*/

// ["Столица Германии", "Столица Кыргызстан"]
// Создаем теги h5
// Находим все эти заголовки. И к каждому из них назначаем текст из массив 
/*
    arr = [10, 20, 30, 40]
    console.log(arr[0])
    console.log(arr[1])
    console.log(arr[2])
    console.log(arr[3])
    const descriptions(NodeList) = [
        {
            innerText: "Hello"
        },
        {
            innerText: "Hello World"
        }
    ]
    descriptions[0].innerText = "Привет, Мир"
    innerText - свойство позволяет получать или изменять текстовое содержимое тега
    firstDescr = {
        innerText: "Hello"
    }
    firstDescr.innerText = "Привет"
    firstDescr = {
        innerText: "Привет"
    }
*/
// links.length = 4
// htmlLinks.length = 4

const links2 = ["Google", "Facebook", "Instagram", "Linkendin"]

for (let i = 0; i < links2.length; i++) {
    console.log(links2[i]);  
}
const htmlLinks2 =document.querySelectorAll("a")

for (let i = 0; i < htmlLinks2.length; i++) {
    console.log(htmlLinks2[i]);  
}

//
const links3 = ["Google", "Facebook", "Instagram", "Linkendin"]
const htmlLinks3 =document.querySelectorAll("a")
for (let i = 0; i < links3.length; i++) {
    console.log(links3[i])
    console.log(htmlLinks3[i])
    htmlLinks3[i].innerText = links3[i]  
}
/* 
    console.log(links[0]) // первый элемент из массива links
    console.log(htmlLinks[0]) // первый элемент из массива htmlLinks
    console.log(links[1]) // второй элемент из массива links
    console.log(htmlLinks[1]) // второй элемент из массива htmlLinks
/* 
    htmlLinks[0] // первый тег <a></a> 
    links[0] // первый текст для первого тега a "Google"
    htmlLinks[0].innerText = links[0]
    htmlLinks[1].innerText = links[1]
    htmlLinks[2].innerText = links[2]
// console.log(links[0])
// console.log(htmlLinks[0])
// console.log(links[1])
// console.log(htmlLinks[1])
        i = 0, i < links.length, links.length = 4
    1. i = 0, 0 < 4 - true, console.log(links[0], htmlLinks[0]), i++
    2. i = 1, 1 < 4 - true, console.log(links[1], htmlLinks[1]), i++
    3. i = 2, 2 < 4 - true, console.log(links[2], htmlLinks[2]), i++
    4. i = 3, 3 < 4 - true, console.log(links[3], htmlLinks[3]), i++
    5. вышли из цикла
*/
/*
    1. i = 0, 0 < 4 - true, i++
            <a href="" class="my-link">LINK</a> --> <a href="" class="my-link">Google</a>
                    
            htmlLinks[0].innerText = links[0].name
            htmlLinks[0].innerText = Google
            htmlLinks[0].setAttribute('href', links[0].link)
            htmlLinks[0].setAttribute('href', https://google.com)
            <a href="https://google.com" class="my-link">Google</a>
    2. i = 1, 1 < 4 - true, 
            <a href="" class="my-link">LINK</a> --> <a href="" class="my-link">Google</a>
                    
            htmlLinks[1].innerText = links[1].name
            htmlLinks[1].innerText = Google
            htmlLinks[1].setAttribute('href', links[1].link)
            htmlLinks[1].setAttribute('href', https://google.com)
            
            <a href="https://google.com" class="my-link">Google</a>
*/



// for(let i = 0; i < htmlLinks.length; i++) {
//     console.log(htmlLinks[i]) 
// }

/*
    let arrayOfObj = [
        {
            name: "Iphone 14"
        }
    ]
*/
/*
//// Есть массив texts ["Привет", "Привет, мир", "ПриветПривет"]
// Добавить строки из массива texts в соотв-е по индексу теги p

const texsts= ["Привет", "Привет, мир", "ПриветПривет"]
const htmldescr =document.querySelectorAll("p")
for (let i = 0; i < texsts.length; i++) {
    console.log(texsts[i])
    console.log(htmldescr[i])
    htmldescr[i].innerText = texsts[i]  
}


//*/
/*
    getAttribute('href') - метод, который позволяет получить значение атрибута
         с переданным в названии параметром
    
    setAttribute('href', 'google.com') - метод, который позволяет задать значение атрибута
        с переданным в названии параметром
        <img src="img1.jpg" alt="">
        img - название тега
        src - название атрибута
        img1.jpg - значение атрибута
    const img = document.querySelector('#img')*/

const img = document.querySelector("#img")
console.log(img.getAttribute("src"))
img.setAttribute("src", "img2.jpg")



//
// Задача. Каждому тегу a задать название ссылки из свойства name, и значение атрибута href взять из
// свойства link.
/*
    {
        name: "Google",
        link: "https://google.com"
    }
    -> <a href="https://google.com" class="my-link">Google</a>
*/
const links4 = [
    {
        name: "Google",
        link: "https://google.com"
    },
    {
        name: "Facebook",
        link: "https://facebook.com"
    },
    {
        name: "Instagram",
        link: "https://instagram.com"
    },
    {
        name: "Linkedin",
        link: "https://linkedin.com"
    },
]

const htmlhref =document.querySelectorAll("a")
for (let i = 0; i < links4.length; i++) {
    //console.log(links4[i].name, links4[i].link)
    //console.log(htmlhref[i])
    htmlhref[i].innerText = links4[i].name
    htmlhref[i].setAttribute("href", links4[i].link)  
}

/*
    1. i = 0, 0 < 4 - true, i++
            <a href="" class="my-link">LINK</a> --> <a href="" class="my-link">Google</a>
                    
            htmlLinks[0].innerText = links[0].name
            htmlLinks[0].innerText = Google
            htmlLinks[0].setAttribute('href', links[0].link)
            htmlLinks[0].setAttribute('href', https://google.com)
            <a href="https://google.com" class="my-link">Google</a>
    2. i = 1, 1 < 4 - true, 
            <a href="" class="my-link">LINK</a> --> <a href="" class="my-link">Google</a>
                    
            htmlLinks[1].innerText = links[1].name
            htmlLinks[1].innerText = Google
            htmlLinks[1].setAttribute('href', links[1].link)
            htmlLinks[1].setAttribute('href', https://google.com)
            
            <a href="https://google.com" class="my-link">Google</a>
*/

// У первого тега a будет название ссылки из свойства name 1го элемента массива links
// <a>Google</a>
// У первого тега a должно быть в атрибуте href значение свойства link 1го элемнта массива links
// <a href="https://google.com">Google</a>

// 
// Задача. Для каждого тега img, в атрибуте src добавить ./img1.jpg
const img1 = document.querySelectorAll("img")
for (let i = 0; i < img1.length; i++) {
img1[i].setAttribute("src", "./img1.jpg")
}


// У первого тега a будет название ссылки из свойства name 1го элемента массива links
// <a>Google</a>
// У первого тега a должно быть в атрибуте href значение свойства link 1го элемнта массива links
// <a href="https://google.com">Google</a>

// Задача. Каждому тегу a задать название ссылки из свойства name, и значение атрибута href взять из
// свойства link.
/*
    {
        name: "Google",
        link: "https://google.com"
    }
    -> <a href="https://google.com" class="my-link">Google</a>
*/

/*
    getAttribute('href') - метод, который позволяет получить значение атрибута
         с переданным в названии параметром
    
    setAttribute('href', 'google.com') - метод, который позволяет задать значение атрибута
        с переданным в названии параметром
        <img src="img1.jpg" alt="">
        img - название тега
        src - название атрибута
        img1.jpg - значение атрибута
    const img = document.querySelector('#img')
    // console.log(img.getAttribute('src')) получили ./img1.jpg
    img.setAttribute('src', './img2.jpg')
*/

// 
/*
    querySelectorAll('img')
    const images = [<img>,<img>...]
    images[i].setAttribute('src', './img1.jpg')
*/


















