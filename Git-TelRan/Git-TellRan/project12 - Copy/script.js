

// Задача. Отобразить разметку, пример которой ниже, используя данные из массива posts
/*
    1. Находим main. querySelector()
    2. Перебираем массив. forEach.
    3. Для каждого элемента массива делаем действие main.innerHTML и передаем разметку, при этом
        в разметке в теге h5 будет свойство title, в img ссылка на картинку
        в p.descr свойство descr
*/

const posts = [
    {
        id: 1,
        img: "https://placekitten.com/640/360",
        title: "Мой первый пост",
        descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quidem assumenda rem debitis animi facere."
    },
    {
        id: 2,
        img: "https://placekitten.com/540/360",
        title: "Мой второй пост",
        descr: "Второй пост о столицах стран всего мира"
    },
    {
        id: 3,
        img: "https://placekitten.com/640/380",
        title: "Мой третий пост",
        descr: "Достопримечательности крупных европеских городов"
    },
]
/*<article class="item item-1">
<h5 class="title">Title</h5>
<img src="https://placekitten.com/640/360" alt="">
<p class="descr">Description</p>
</article>*/
const main = document.querySelector('main')
/*
posts.forEach(function(post){
    main.innerHTML+=
    `
    <article class = "item item- ${post.id}">
    <h5 class="title">${post.title}</h5>
    <img src="${post.img}">
    <p class="descr">${post.descr}</p>
    </article>
    `
})*/

for (let i = 0; i < posts.length; i++) {
    main.innerHTML += `<article class = "item item- ${i +1}">
    <h5 class="title">${posts[i].title}</h5>
    <img src="https://placekitten.com/640/360" alt=">
    <p class = "descr- ${i +1}">${posts[i]}</p>
    </article>
    ` 
}

/*

    ДЗ
    https://www.figma.com/file/c8FlmkTHbSRyPgCeLEGdBF/Untitled-(Copy)?node-id=1%3A2&t=hGooSJShadvJJX82-0

    Сверстать макет.
    Создать структуру данных
    products = [
        {
            id: 1,
            name: "Велосипед",
            price: 40000
        },
        {}
    ]
    Создайте 4 объекта в массиве, с name и price.
    Пройтись с помощью forEach по массиву products и возвратить разметку для каждого продукта.
        Отобразить карточки товаров из массива products
*/