const main = document.querySelector('main')
console.log(main.innerText)
console.log(main.innerHTML)
//main.innerHTML = '<h2 class="title">Nwe Title</h2>'
main.innerHTML = main.innerHTML + '<h2>Hello</h2>'
main.innerHTML += '<h2>Hello</h2>'

//


for (let i = 0; i < 5; i++) {
    main.innerHTML += '<p>Hello World</p>'
    
}

//
for (let i = 0; i < 5; i++) {
    main.innerHTML += `<p class = "item- ${i +1}">Hello World</p>` 

}


const names0 = ['Arsen', 'Anna', 'Artem', 'Dmitry']
for (let i = 0; i < names0.length; i++) {
    main.innerHTML += `<p class = "item- ${i +1}">${names0[i]}</p>` 

}


// 
const names = ['Arsen', 'Anna', 'Artem', 'Dmitry']
names.forEach(function(name, index){
    main.innerHTML += `<p class = "item- ${index + 1}">${name}</p>` 
    
})



//
const posts = [
    {
        id: 1,
        title: "Мой первый пост",
        descr: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla quidem assumenda rem debitis animi facere."
    },
    {
        id: 2,
        title: "Мой второй пост",
        descr: "Второй пост о столицах стран всего мира"
    },
    {
        id: 3,
        title: "Мой третий пост",
        descr: "Достопримечательности крупных европеских городов"
    },
]