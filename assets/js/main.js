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
    const emptyCartContainer = document.querySelector('header nav [data-cart] [data-empty-cart]')
    const filledCartContainer = document.querySelector('header nav [data-cart] [data-filled-cart]')
    const cartList = document.querySelector('header nav [data-cart] [data-filled-cart] ul.products-in-cart')
    
    emptyCartContainer.classList.remove('d-flex')
    emptyCartContainer.classList.add('d-none')
    filledCartContainer.classList.remove('d-none')
    filledCartContainer.classList.add('d-flex')

    const newItem = document.createElement('li')
    newItem.className = 'item'

    const figure = document.createElement('figure')
    figure.className = 'img-item'

    const img = document.createElement('img')
    img.src = productMainImage
    img.alt = productName
    figure.appendChild(img)

    const itemTitle = document.createElement('span')
    itemTitle.className = 'item-title'

    let totalPrice = productCurrentPrice * productQuantity
    const itemText = document.createTextNode(productName + '<br>' + productCurrentPrice + ' ' + productQuantity + ' ' + totalPrice)
    itemTitle.appendChild(itemText)

    const deleteButton = document.createElement('button')
    deleteButton.className = 'item-delete'
    
    const deleteIcon = '<svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>';
    const parser = new DOMParser();
    const deleteIconDoc = parser.parseFromString(deleteIcon, 'image/svg+xml');
    const deleteIconButton = deleteIconDoc.documentElement;

    deleteButton.appendChild(deleteIconButton);

    newItem.appendChild(figure)
    newItem.appendChild(itemTitle)
    newItem.appendChild(deleteButton)

    filledCartContainer.appendChild(newItem)
})