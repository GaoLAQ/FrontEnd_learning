const express = require('express'); 
const path = require('path')
// console.log(__dirname) // point to source folder path C:\Users\Haoxiang\Nodejs_full-learning\web-server\src
// console.log(__filename) // point to current file path C:\Users\Haoxiang\Nodejs_full-learning\web-server\src\app.js
const app = express();
const port = process.env.PORT || 3000; 

const hbs = require('hbs');
const forecast = require('./utlis/forecast'); 
const geocode = require('./utlis/geocode');

// Define paths for Express config 
const publicPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

// views is default setting
// Set up handlerbars engine and views location 
app.set('views', viewsPath)
app.set('view engine', 'hbs')
hbs.registerPartials(partialsPath)

// Get method to send res data 
app.get('',(req, res)=>{
  res.render('index',{
    title:"Weather App",
    name:"Andrew Mead" 
  })
})

app.get('/about', (req,res)=>{
  res.render('about',{
    title:"About me", 
    name:"Andrew Mead"
  })
})

app.get('/help', (req,res)=>{
  res.render('help',{
    title:"No need help", 
    name:"Andrew Mead dalabengba"
  })
})
// Setup static directory to serve
app.use(express.static(publicPath)) //it will overcome and overwrite the file 
// use express.static => URL correct verions: localhost:3000//about.html not localhost:3000//about
// static can access all the files in this folder as indicated by this folder path 

const mainPipe = app.get('/weather',(req, res)=>{
  if(!req.query.address){
    return res.send({
      error:'Need address provided'
    })
  } else {
    // if I use locations = locations.push it will return lenght of array
    geocode(req.query.address, ({latitude, longitude, location}={},error)=>{
      if(error){
        return res.send({error})
      }
      forecast(latitude, longitude, (error, forecastData)=>{
        if(error){
          return res.send({error})
        }
        res.send({
          forecast: forecastData, 
          location, 
          address:req.query.address
        })
      })
    }); 
  }
})

// app.com 
// app.com/help 
// app.com/about 
// * must put at the back 

app.get('/help/*',(req, res)=>{
  res.render('404',{
    title:'404',
    name:'Andrew Mead', 
    errorMessage:'Page not found'
  })
})

app.get('*',(req, res)=>{
  res.render('404',{
    title: "404", 
    name:"", 
    errorMessage:"This is error message"
  })
})


// start sever up
// if we use heroku  
app.listen(port,()=>{
  console.log('Server is up on port ' + port)
})

module.exports = mainPipe;