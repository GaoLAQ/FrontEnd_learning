const express = require('express')
const router = new express.Router()
const User = require('../models/user')
const auth = require('../middleware/auth'); 

router.post('/users', async (req, res)=>{
  const user = new User(req.body); 
  try {
    await user.save()
    const token = await user.generateAuthToken()
    res.status(201).send({user, token})
  } catch(e) {
    res.status(400).send(e)
  }
  // user.save().then(()=>{
  //   res.status(201).send(user)
  // }).catch((error)=>{
  //   res.status(400).send(error)
  // })
}); 

// user login 
router.post('/users/login',async(req, res)=>{
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password); 
    const token = await user.generateAuthToken();
    res.send({user, token})
  } catch (e){
    res.status(400).send()
  }
})

router.post('/users/logout', auth, async(req,res)=>{
  try{
    req.user.tokens = req.user.tokens.filter((token)=>{
      return token.token !== req.token 
    })
    await req.user.save()
    res.send()
  } catch(e){
    res.send(500).send()
  }
})

router.get('/users/me', auth ,async (req,res)=>{
  res.send(req.user)
  // User.find({}).then((users)=>{
  //   res.send(users)
  // }).catch((e)=>{
  //   res.status(500).send("The service currently down")
  // })
})



// mongooose automatically convert the string to object string 
router.get('/users/:id', async (req, res)=>{
  const _id = req.params.id;
  try{
    const user = await User.findById(_id)
    if(!user){
      return res.status(404).send();
    }
    res.send(user)
  } catch(e){
    res.status(500).send(e)
  }

  // User.findById(_id).then((user)=>{
  //   if(!user){
  //     return res.status(404).send(); 
  //   }
  //   res.send(user)
  // }).catch((e)=>{
  //   res.status(500).send(e)
  // })
})

router.delete('/users/:id', async(req, res)=>{
  const _id = req.params.id; 
  try {
    const user = await User.findByIdAndDelete(_id)
    if(!user){
      return res.status(404).send(); 
    }
    res.status(200).send(user)
  } catch(e){
    res.status(500).send(e)
  }
})

router.patch('/users/:id', async (req, res)=>{
  const _id = req.params.id;
  const updates = Object.keys(req.body)
  const allowedUpdates = ['name', 'email', 'password', 'age']
  const isValidOperation = updates.every(item=>allowedUpdates.includes(item))
  if(!isValidOperation){
    return res.status(400).send({error:'Invalid updates!'})
  }
  try{
    const user = await User.findById(req.params.id)
    updates.forEach((update)=>{
      user[update] = req.body[update]
    })

    await user.save(); 
    // const user = await User.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true}); 
    if(!user){
      res.status(404).send(); 
    }
    res.status(200).send(user)
  } catch(e){
    res.status(500).send(e)
  }
})

module.exports = router 