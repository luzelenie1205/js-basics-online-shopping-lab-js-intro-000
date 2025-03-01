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


function viewCart() {  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  } else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  } else {
    var myString = "In your cart, you have "
    for(var i = 0; i < cart.length - 1; i++) {
      myString = myString + `${cart[i].itemName} at $${cart[i].itemPrice}, `
    }
    return myString + `and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
  }
  // write your code here
}

function total() {
  let numbers = []
 let sum = 0

 for (var i = 0; i < cart.length; i++) {
   numbers.push(cart[i].itemPrice)
   sum += numbers[i]
 }
 return sum
  // write your code here
}

function removeFromCart(item) {

  const itemName = []

 for(var i = 0; i < cart.length; i++){
   itemName.push(cart[i].itemName)
   }

 const index = itemName.indexOf(item)

 if(index > -1){
    cart.splice(index, 1)
    return cart
 } else {
   return `That item is not in your cart.`
 }
}

function placeOrder(cardNumber) {

  if (cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you."
  } else {
    const total1 = total()
    cart = []
    return `Your total cost is $${total1}, which will be charged to the card ${cardNumber}.`
  }
  // write your code here
}
