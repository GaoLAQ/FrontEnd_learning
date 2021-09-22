const express = require('express'); 
require('./db/mongoose');
const userRouter =  require('./routers/user'); 
const taskRouter = require('./routers/task'); 


const app = express(); 
const port = process.env.PORT || 3000; 

// app.use((req, res, next )=>{
//   res.status(503).send('Site is cuyrrently down. Check back soon')
// })

//express.json() it will automatically convert json type to an object
app.use(express.json()); 
app.use(userRouter); 
app.use(taskRouter);

// Without middleware: new request => run route handler
// With middleware: new request => do something => run other handler

app.listen(port, ()=>{
  console.log('Server is up on port' + port)
})

// import JWT module 
const jwt = require('jsonwebtoken')

// const bcrypt = require('bcryptjs')

const myFunction = async()=>{
  // const password = 'Red12345!';
  // const hashedPassword = await bcrypt.hash(password, 8); 

  // console.log(password)
  // console.log(hashedPassword)

  // const isMatch = await bcrypt.compare('Red12345!', hashedPassword)
  // console.log(isMatch)
  //autherication token
  const token = jwt.sign({_id:'abc123'}, 'thisismynewcourse', {expiresIn:'7 days'});

  const data = jwt.verify(token,'thisismynewcourse')
  console.log(token)
  console.log(data)
}

myFunction()