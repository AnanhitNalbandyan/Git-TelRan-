// ДЗ. В соотв-е теги (h5, img, p) подтянуть данные из объектов массива posts


const posts = [
    {
        title: "Столица Германии",
        descr: "Берлин - ....",
        img: "./1.jpg"
    },
    {
        title: "Столица Кыргызстана",
        descr: "Бишкек - ...",
        img: "./2.jpg"
    }
]

const titles = document.querySelectorAll("h5")
const descrTitles = document.querySelectorAll("p")
const imgs = document.querySelector("img")
for (let i = 0; i < posts.length; i++) {
    console.log(posts[i].title)
    console.log(titles[i])
    titles[i].innerText = posts[i]
    console.log(posts[i].descr)
    console.log(descrTitles[i])
    descrTitles[i].innerText = posts[i]
    console.log(posts[i].img)
    imgs[i].setAttribute = posts[i]
}
