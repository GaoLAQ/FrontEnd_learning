const express = require('express')
const router = new express.Router()
const Task = require('../models/task')

router.get('/test',(req,res)=>{
  res.send('From other resource')
})

router.post('/tasks', async (req, res)=>{
  const task = new Task(req.body); 
  try{
    await task.save()
    res.status(201).send(task)
  } catch (e){
    res.status(400).send(e)
  }
  // task.save().then(()=>{
  //   res.status(201).send(task)
  // }).catch((error)=>{
  //   res.status(400).send(error)
  // })
}); 

router.get('/tasks', async (req, res)=>{
  try{
    const tasks = await Task.find({}); 
    res.status(200).send(tasks)
  } catch(e){
    res.status(500).send(e)
  }
  // Task.find({}).then((tasks)=>{
  //   res.status(200).send(tasks)
  // }).catch((e)=>{
  //   res.status(500).send()
  // })
})

router.get('/tasks/:id', async (req, res)=>{
  const _id = req.params.id;
  try {
    const task = await Task.findById(_id); 
    if(!task){
      return res.status(404).send(); 
    }
    res.status(200).send(task); 
  } catch (e){
    res.status(500).send(e)
  }
  // Task.findById(_id).then((task)=>{
  //   if(!task){
  //     return res.status(404).send(); 
  //   }
  //   res.status(200).send(task); 
  // }).catch((error)=>{
  //   res.status(500).send(error)
  // })
})

router.patch('/tasks/:id',async (req, res)=>{
  const _id = req.params.id; 
  const updates = Object.keys(req.body)
  const allowedUpdates = ['age','_id','name','__v','completed', 'description']; 
  const isValidOperation = updates.every(item => allowedUpdates.includes(item))
  if(!isValidOperation){
    return res.status(400).send({error:'Invalid updates!'})
  }
  try{
     const task = await Task.findById(_id)
     updates.forEach((item)=>{
       updates[item] = req.body[item]
     })
     await Task.save()
    // const task = await Task.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true})
    if(!task){
      return res.status(404).send(); 
    }
    res.status(200).send(task)
  } catch(e){
    res.status(500).send(e)
  }
})

router.delete('/tasks/:id', async(req, res)=>{
  const _id = req.params.id; 
  try {
    const task = await Task.findByIdAndDelete(_id)
    if(!task){
      return res.status(404).send(); 
    }
    res.status(200).send(task)
  } catch(e){
    res.status(500).send(e)
  }
})

module.exports = router