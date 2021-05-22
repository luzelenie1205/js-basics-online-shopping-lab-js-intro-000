var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item){
  let min = 1
  let max = 100
  let random = Math.floor(Math.random() * (max - min)) + min

   var itemHash = {
     itemName: item,
     itemPrice: random
   }

   cart.push(itemHash)
   return `${cart[cart.length - 1].itemName} has been added to your cart.`
}


//we need cart to increase and push items together
 // write your code here


function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
