//входнъе даннъе
 const products = [
    {
        id: 1,
        name: "Велосипед",
        price: 40000
    },
    {
        id: 2,
        name: "Самокат",
        price: 15000
    },
    {
        id: 3,
        name: "Лъжи",
        price: 20000
    },
    {
        id: 4,
        name: "Сноуборд",
        price: 25000
    },
]
// html елементъ
const productsWrapper = document.querySelector('.products-wrapper')
const productForm = document.querySelector('.product-form')
const productName = document.querySelector('input[name="product-name"]')
const productPrice = document.querySelector('input[name="product-price"]')
function renderProducts(){
    productsWrapper.innerHTML = ''
    products.forEach(function(product, index){
        productsWrapper.innerHTML += `
        <div class="product" id="${index}">
                <p class="product-name">${(product.name)}</p>
                <p class="product-price">${(product.price)}</p>
                <button class="delete-btn">X</button>
            </div>
            `
    })
    onHover()
    deleteProduct()
}
renderProducts()
productForm.addEventListener('submit', function(event){
   event.preventDefault()
   //console.log(productName.ariaValueMax, productPrice.value)
   const newProduct = {
    name: productName.value,
    price: Number(productPrice.value)
   }
   console.log(newProduct)// === consol.log(event.target[0].value)
   products.push(newProduct)
   renderProducts()
   clearInputs()
 
})
function clearInputs(){
    productName.value = ''
    productPrice.value = ''
}
function onHover() {
    const productCards = document.querySelectorAll('.product')
    productCards.forEach(function(card) {
        card.addEventListener('mouseover', function() {
            const deleteBtn = card.querySelector('.delete-btn')
            deleteBtn.style.display = 'block'
        })
        card.addEventListener('mouseout', function() {
            const deleteBtn = card.querySelector('.delete-btn')
            deleteBtn.style.display = 'none'
        })
    })
}
onHover()
function deleteProduct() {
    const deleteBtns = document.querySelectorAll('.delete-btn')
    deleteBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // Найти в массиве элемент, на который мы нажали
            const id = btn.parentElement.id // index элемента под которым он хранится. 1
            products.splice(id, 1)
            //btn.parentElement.remove() // удаляем из HTML
           renderProducts()
        })
    })
}
