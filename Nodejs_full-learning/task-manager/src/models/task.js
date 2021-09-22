const mongoose = require('mongoose'); 
const validator = require('validator');
const Task = mongoose.model('task',{
  name:{
    type: String,
    required: true
  }, 
  age:{
    type: Number 
  }, 
  completed:{
    type: Boolean, 
    default: false
  }, 
  description:{
    type: String,
    required: true, 
    trim: true
  },
})

module.exports = Task