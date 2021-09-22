// running mongoosedb
require('../src/db/mongoose'); 
const User = require('../src/models/user'); 
const Task = require('../src/models/task');

User.findByIdAndRemove('60f6f6999a063311e4ba7af3').then((user)=>{
  console.log(user)
  return User.countDocuments({completed: false})
}).then((result)=>{
  console.log(result)
}).catch((error)=>{
  console.log(error)
})

const deleteTaskAndCount = async (id)=>{
  const task = await Task.findByIdAndDelete(id); 
  const count = await Task.countDocuments(id); 
  return count
}

deleteTaskAndCount('60f6f6999a063311e4ba7af3').then((count)=>{
  console.log(count)
}).catch((e)=>{
  console.log(e)
})