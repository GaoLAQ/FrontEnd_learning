const express = require('express')
const app = express()
app.use(express.json())

let users = [] 
app.post('/candidates', (request, response )=>{
  let user = request.body
  if (!("skills" in user)){
    return response.status(400).send()
  }
  users.push(user)
  return response.status(200).json({})
})

app.get('/candidates/search', function(req, res) {
  let best = 0; 
  let result 
  let trg_skills = request.query.skills.split(",")
  if (trg_skills.length === 0) {
    return res.status(400).json()
  }  
  for(let user of users){
    let num_matches = user.skills.filter((skill)=>trg_skills.includes(skill)).length; 
    if (num_matches >= best ){
      best = num_matches 
      result = user 
    }
    if (best >0){
      res.status(200).json(result)
    } else {
      res.status(404).json()
    }
  }
})