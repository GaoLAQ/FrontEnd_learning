const mongoose = require('mongoose'); 

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
  useNewUrlParser: true, 
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
})


// -----*** new User and save ***----- 
// const me = new User({
//   name: '    Mike    ', 
//   email:' MIKE@GMAIL.COM  ',
//   password:"1234Paassword"
// })

// me.save().then(()=>{
//   console.log(me)
// }).catch((error)=>{
//   console.log('Error!', error)
// })
// -----*** new User and save end ***----- 

// -----*** new Task and save ***----- 
// const Task = mongoose.model('task',{
//   name:{
//     type: String,
//     required: true
//   }, 
//   age:{
//     type: Number 
//   }, 
//   completed:{
//     type: Boolean, 
//     default: false
//   }, 
//   description:{
//     type: String,
//     required: true, 
//     trim: true
//   }
// })

// const Task1 = new Task(
//   {
//     name: 'Micheal', 
//     age:40, 
//     description:"   dpflpdklfpdl   "
//   }
// )

// Task1.save().then(()=>{
//   console.log(Task1)
// }).catch((error)=>{
//   console.log('Error!',error)
// })
// -----*** new Task and save End ***----- 