let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');



let products = [
    {
        id: 1,
        name: 'Aegis Legend V2',
        image: '2.JPG',
        price: 2500
    },
    {
        id: 2,
        name: 'Relx Pods V2',
        image: '3.WEBP',
        price: 1200
    },
    {
        id: 3,
        name: 'Smok Scar Mini',
        image: '4.JPEG',
        price: 2000
    },
    {
        id: 4,
        name: 'Alladin Pro Disposable',
        image: '5.JPG',
        price: 500
    },
    {
        id: 5,
        name: 'Abar Artery Disposable',
        image: '6.WEBP',
        price: 500
    },
    {
        id: 6,
        name: 'iJoy Shogun Univ',
        image: '8.JPG',
        price: 1800
    },
	{
        id: 7,
        name: 'Vaporesso XROS 3',
        image: '9.JPG',
        price: 1500
    },
	{
        id: 8,
        name: 'Innoki Endura T22 Pro',
        image: '10.WEBP',
        price: 1200
    },
	{
        id: 9,
        name: 'Aegis X',
        image: '12.JPG',
        price: 3000
    },
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})