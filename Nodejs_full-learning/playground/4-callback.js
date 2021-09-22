// setTimeout(()=>{
//    console.log('Two seconds are up')
// },2000)

// const names = ['Andrew','Jen','Jess'];
// const shortNames = names.filter(name=>name.length <=4)

// const geocode = (address, callback)=>{
//   const data ={
//     latitude:0,  
//     longitude: 0 
//   }
// }

const doWorkCallback = (callback) => {
  setTimeout(()=>{
    callback( undefined, 'This is my error!')
  }, 2000)
}

doWorkCallback((error, result)=>{
  if(error){
    return console.log(error)
  }
  console.log(result)
})