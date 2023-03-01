
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
/*<ul class="vehicle">
    <li><option value=""><h5>Велосипед</h5>
        <span>40000</span>
     </li>
    <li><option value=""><h5>Самокат</h5>
        <span>15000</span>
    </li>
    <li><option value=""><h5>Лъжи</h5>
        <span>20000</span>
    </li>
    <li><option value=""><h5>Сноуборд</h5>
        <span>25000</span>
    </li>
 </ul>
 */
 const products = [
    {
        id: 1,
        name: "Велосипед",
        price: 40000
    },
    {
        id: 1,
        name: "Самокат",
        price: 15000
    },
    {
        id: 1,
        name: "Лъжи",
        price: 20000
    },
    {
        id: 1,
        name: "Сноуборд",
        price: 25000
    },
]

const main = document.querySelector('main')
products.forEach(function(post){
    main.innerHTML+=
    `
    <ul class="vehicle-${post.id}">
    <li><option value=""><h5 class="title">${post.name}</h5>
        <span>${post.price}</span>
     </li>
    </ul>
    `
})
