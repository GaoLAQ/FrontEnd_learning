// Object porperty shorhand 

const nameCall = 'Andrew'; 
const userAge = 27; 

const user ={
  nameCall, 
  userAge, 
  location:"Philadelphia"
}

// Object destructuring 
const product = {
  label:'Red notebook',
  price: 3, 
  stock: 201, 
  saleProduct: undefined,
  rating: 4.2
}

// const label = product.label
// const stock = product.stock 

// const {label: newLabel, price} = product 
// must have object original 
// const {label:productLabel, price, rating =5} = product

// console.log(label)
// console.log(productLabel)
// console.log(price)

const transaction = (type, {label, stock})=>{
  console.log(type, label, stock)
}


transaction('order', product)