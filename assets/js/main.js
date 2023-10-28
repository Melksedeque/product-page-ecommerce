const cartButton = document.querySelector('[data-add-to-cart]')

document.querySelectorAll('.quantity-input').forEach(function (element) {
    const input = element.querySelector('input')
    const minus = element.querySelector('.minus')
    const plus = element.querySelector('.plus')
  
    minus.addEventListener('click', () => {
        let value = parseFloat(input.value) || 0
        if (value > 1) {
            input.value = value - 1
        }
    })
  
    plus.addEventListener('click', () => {
        let value = parseFloat(input.value) || 0
        input.value = value + 1
    })
})

cartButton.addEventListener('click', () => {
    let productName = document.querySelector('.product-info h1[data-product-name]').textContent
    let productMainImage = document.querySelector('figure.main-image [data-main-image] img').getAttribute('src')
    let productCurrentPrice = document.querySelector('.product-info [data-price="current-price"]').innerHTML
    let productDiscount = document.querySelector('.product-info [data-price="discount"]').innerHTML
    let productOldPrice = document.querySelector('.product-info [data-price="old-price"]').innerHTML
    let productQuantity = document.querySelector('.product-info [data-product-quantity]').value
    
    const cartContainer = document.querySelector('header nav [data-cart]')

    console.log(productName)
    console.log(productMainImage)
    console.log(productCurrentPrice)
    console.log(productDiscount)
    console.log(productOldPrice)
    console.log(productQuantity)
})