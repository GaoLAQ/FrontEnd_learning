const doWorkPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      // resolve([7,4,1])
      // resolve and reject cannot together, if we call reject and resolve together, it will run only one
      reject('Things went wrong')
      resolve([2,3,1])
    }, 2000)
}); 

doWorkPromise.then((result)=>{
  console.log('Success!', result)
}).catch((error)=>{
  console.log('Error!', error)
})